"use client";
import { useRef, useEffect, useState } from "react";
import { UIState, useUIStore } from "@/app/store/ui-store";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import PaperPlane from "../PaperPlane";
import Stars from "../Stars";
import { ContactButton } from "./ContactButton";
import { useForm } from "react-hook-form";
import FadeInDirectionalWrapper from "../Wrappers/FadeInDirectionalWrapper";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export const ContactDrawer = () => {
  const isOpen = useUIStore((state: UIState) => state.isContactDrawerOpen);
  const closeDrawer = useUIStore((state: UIState) => state.closeContactDrawer);
  const [showContent, setShowContent] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showThankYou, setShowThankYou] = useState(true);
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isOpen) {
      setIsVisible(true);
      timeout = setTimeout(() => setShowContent(true), 600);
    } else {
      setShowContent(false);
      timeout = setTimeout(() => setIsVisible(false), 200);

      if (showThankYou) {
        setShowThankYou(false);
      }

      if (status === "sent") {
        setStatus("idle");
      }
    }

    return () => clearTimeout(timeout);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
    >
      <ContactDrawerContent
        isVisible={isVisible}
        showContent={showContent}
        setShowContent={setShowContent}
        closeDrawer={closeDrawer}
        showThankYou={showThankYou}
        setShowThankYou={setShowThankYou}
        status={status}
        setStatus={setStatus}
        submittedName={submittedName}
        setSubmittedName={setSubmittedName}
      />
    </GoogleReCaptchaProvider>
  );
};

const capitalizeFirstLetter = (name: string): string =>
  name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

const getFirstName = (fullName: string): string | null => {
  if (!fullName) return null;

  const titles = new Set([
    "mr",
    "mrs",
    "ms",
    "miss",
    "dr",
    "prof",
    "sir",
    "madam",
    "sr",
    "jr",
  ]);

  const words = fullName.trim().toLowerCase().split(/\s+/);

  for (const word of words) {
    // Strip punctuation
    const cleaned = word.replace(/[^\p{L}]/gu, "");

    if (
      cleaned.length >= 2 &&
      cleaned.length <= 20 &&
      /^[a-zA-Z\u00C0-\u017F]+$/.test(cleaned) && // letters only (including accents)
      !titles.has(cleaned)
    ) {
      return capitalizeFirstLetter(cleaned);
    }
  }

  return null;
};

// ----------------------
// Internal Content Component
// ----------------------

const ContactDrawerContent = ({
  isVisible,
  showContent,
  setShowContent,
  status,
  setStatus,
  closeDrawer,
  showThankYou,
  setShowThankYou,
  submittedName,
  setSubmittedName,
}: {
  status: "idle" | "loading" | "sent";
  setStatus: React.Dispatch<React.SetStateAction<"idle" | "loading" | "sent">>;
  isVisible: boolean;
  showContent: boolean;
  setShowContent: React.Dispatch<React.SetStateAction<boolean>>;
  closeDrawer: () => void;
  showThankYou: boolean;
  setShowThankYou: React.Dispatch<React.SetStateAction<boolean>>;
  submittedName: string | null;
  setSubmittedName: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const triggerBubblyEffect = () => {
    const btn = buttonRef.current;
    if (!btn) return;
    btn.classList.remove("animate");
    void btn.offsetWidth;
    btn.classList.add("animate");
    setTimeout(() => btn.classList.remove("animate"), 700);
  };

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<ContactFormData>();

  const hasErrors = Object.keys(errors).length > 0;
  const { executeRecaptcha } = useGoogleReCaptcha();

  // Drawer animation variants
  const drawerVariants: Variants = {
    initial: { y: "100%" },
    animate: {
      y: "50%",
      transition: {
        delay: 0.3,
        ease: "easeInOut",
        type: "spring",
        stiffness: 210,
        damping: 50,
      },
    },
    exit: {
      y: "100%",
      transition: {
        delay: 0.8,
        ease: "easeInOut",
        type: "spring",
        stiffness: 210,
        damping: 50,
      },
    },
  };

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");

    if (!executeRecaptcha) {
      console.warn("Execute recaptcha not yet available");
      setStatus("idle");
      return;
    }

    try {
      const token = await executeRecaptcha("contact_form");
      console.log("reCAPTCHA token:", token);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, token }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("sent");
      setSubmittedName(data.name); // Save the full name

      setTimeout(() => {
        triggerBubblyEffect();
        setTimeout(() => {
          setShowContent(false);
          setTimeout(() => {
            setShowThankYou(true);
            reset();
          }, 600);
        }, 700);
      }, 600);
    } catch (error) {
      console.error(error);
      setStatus("idle");
      setError("root", {
        type: "manual",
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div>
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/10 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeDrawer}
              transition={{ delay: 0.3 }}
            />

            {/* Drawer */}

            <motion.div
              className="fixed right-0 bottom-0 left-0 z-50 h-[110vh] w-screen bg-[#171717]"
              variants={drawerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="absolute top-2 left-0 w-screen">
                <svg
                  className="wave block w-screen"
                  viewBox="0 0 1200 100"
                  preserveAspectRatio="none"
                >
                  <path d="M0,50 L1200,50 V100 H0 Z" fill="#171717" />
                </svg>
                <svg
                  className="wave left-[100%] block w-screen"
                  viewBox="0 0 1200 100"
                  preserveAspectRatio="none"
                >
                  <path d="M0,50 L1200,50 V100 H0 Z" fill="#171717" />
                </svg>
              </div>
              <AnimatePresence mode="wait">
                {showContent && !showThankYou ? (
                  <motion.div key="form" className="h-full">
                    {/* Content Area */}
                    <div
                      className={`landscape-mobile-height iphone-se-fix overflow-y-auto px-4 pb-10 md:h-auto`}
                    >
                      <div className="flex justify-center md:justify-evenly md:flex-row">
                        <FadeInDirectionalWrapper direction="left">
                          {/* Contact Info */}
                          <div className="mt-7 ml-18 hidden md:block">
                            <h1 className="fredoka mb-4 tracking-wider text-[#FDFDFB] md:text-7xl lg:text-8xl">
                              Contact
                            </h1>
                            <div className="flex items-center gap-4 pt-1 pl-4">
                              <div className="h-[.2rem] w-22 rounded-md bg-[#e9905a] lg:w-56" />
                              <h1 className="fredoka tracking-wider text-[#FDFDFB] md:text-7xl lg:text-8xl">
                                Us
                              </h1>
                            </div>
                            <p className="pt-3 pb-6 pl-2 font-[myFirstFont] text-[#FDFDFB] md:w-[16rem] md:text-sm md:leading-7 lg:w-[18rem] lg:text-base lg:leading-8">
                              We’re happy to answer your questions, hear your
                              ideas, or just chat about your next project.
                            </p>
                            <div className="fredoka pl-6 text-sm tracking-widest text-[#88807B] md:pb-1 lg:pb-3">
                              +909-900-000
                            </div>
                            <div className="fredoka pl-6 text-sm tracking-widest text-[#88807B]">
                              agile_blanche@gmail.com
                            </div>
                          </div>
                        </FadeInDirectionalWrapper>
                        {/* Contact Form */}

                        <FadeInDirectionalWrapper direction="right">
                          <div className="landscape-mobile-height mt-1 w-90 sm:w-100 md:mt-7 md:w-80 lg:mr-10 lg:h-auto lg:w-110">
                            <h1 className="fredoka mb-4 block text-center text-2xl tracking-wider text-[#FDFDFB] sm:text-4xl md:hidden">
                              Contact Us
                            </h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                              {/* Name */}
                              <InputField
                                id="name"
                                label="Your Name"
                                register={register("name", {
                                  required: {
                                    value: true,
                                    message: "Name is required",
                                  },
                                })}
                                error={errors.name}
                                type="text"
                                inputClassName="border-gray-600" // darker gray
                                labelClassName="text-gray-600 font-[myFirstFont]"
                              />

                              <InputField
                                id="email"
                                label="Email Address"
                                register={register("email", {
                                  required: {
                                    value: true,
                                    message: "Email is required",
                                  },
                                  pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Enter a valid email address",
                                  },
                                })}
                                error={errors.email}
                                type="email"
                                inputClassName="border-gray-500" // medium gray
                                labelClassName="text-gray-500 font-[myFirstFont]"
                              />

                              {/* Message */}
                              <TextareaField
                                id="message"
                                label="Your Message..."
                                register={register("message", {
                                  required: {
                                    value: true,
                                    message: "Message is required",
                                  },
                                })}
                                error={errors.message}
                              />
                              <p className="mt-6 text-center text-xs text-[#88807B]">
                                This site is protected by reCAPTCHA and the
                                Google{" "}
                                <a
                                  href="https://policies.google.com/privacy"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="underline transition duration-500 hover:text-[#e9905a]"
                                >
                                  Privacy Policy
                                </a>{" "}
                                and{" "}
                                <a
                                  href="https://policies.google.com/terms"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="underline transition duration-500 hover:text-[#e9905a]"
                                >
                                  Terms of Service
                                </a>{" "}
                                apply.
                              </p>
                              <div className="mt-7">
                                <ContactButton
                                  status={status}
                                  setStatus={setStatus}
                                  buttonRef={buttonRef}
                                />
                              </div>
                              {errors.root?.message && (
                                <p className="mt-5 text-center text-sm text-[#DB4437]">
                                  {errors.root.message}
                                </p>
                              )}
                            </form>

                            {/* Socials */}
                            <div
                              className={`invisible mt-8 flex justify-end gap-25 transition-opacity duration-500 lg:visible ${hasErrors ? "pointer-events-none opacity-0" : "opacity-100"}`}
                            >
                              {[
                                FaFacebook,
                                FaTwitter,
                                FaLinkedin,
                                FaGithub,
                              ].map((Icon, idx) => (
                                <a
                                  key={idx}
                                  href="#"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Icon className="text-xl text-[#88807B] transition duration-600 hover:text-[#e9905a]" />
                                </a>
                              ))}
                            </div>
                          </div>
                        </FadeInDirectionalWrapper>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="thanks"
                    className="flex h-full w-screen justify-center"
                  >
                    <div className="relative flex w-full max-w-6xl justify-center">
                      <AnimatePresence mode="wait">
                        {showThankYou && (
                          <motion.div
                            key="thanks"
                            className="landscape-mobile-height iphone-se-fix flex w-full max-w-6xl flex-col items-center gap-10 overflow-y-auto md:flex-row md:items-start md:justify-center md:gap-16"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                          >
                            {/* SVG: Paper Plane */}
                            <div className="top-[-1rem] z-10 block flex overflow-visible md:absolute md:left-[4rem] md:rotate-350">
                              <PaperPlane className="w-25 sm:w-30 md:w-35 md:pt-38 lg:w-37" />
                            </div>

                            {/* Message */}
                            <div className="landscape-mobile-height z-50 flex flex-1 flex-col items-center text-center">
                              <h2 className="fredoka mb-3 text-3xl font-semibold tracking-wide text-white sm:mt-3 sm:text-4xl sm:leading-4 md:mt-15 md:mb-4 md:leading-5 lg:mt-10 lg:mb-6 lg:text-5xl lg:leading-6">
                                <span className="text-[#88807B]">Thanks</span>
                                {" for reaching out"}
                                {submittedName &&
                                  getFirstName(submittedName) && (
                                    <>
                                      ,{" "}
                                      <span className="text-[#8faf9e]">
                                        {getFirstName(submittedName)}
                                      </span>
                                    </>
                                  )}
                                {!submittedName && "!"}
                                {submittedName && "!"}
                              </h2>

                              <p className="fredoka mt-2 max-w-md text-xs leading-8 text-gray-300 sm:mx-0 sm:mb-0 sm:mb-2 sm:max-w-md sm:text-sm md:mt-3 md:mb-3 lg:mt-4 lg:mb-4 lg:max-w-lg lg:text-base lg:leading-9">
                                We’ve received your message and will be in touch
                                shortly. In the mean time, make sure to connect
                                with us on our socials below.
                              </p>
                              <div className="my-4 flex gap-15 sm:gap-20 md:gap-23 lg:gap-30">
                                {[
                                  FaFacebook,
                                  FaTwitter,
                                  FaLinkedin,
                                  FaGithub,
                                ].map((Icon, idx) => (
                                  <a
                                    key={idx}
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <Icon className="text-2xl text-[#88807B] transition duration-600 hover:text-[#e9905a] sm:text-2xl md:text-3xl lg:text-4xl" />
                                  </a>
                                ))}
                              </div>
                              <p className="mb-5 text-center font-[myFirstFont] text-xs text-gray-300 sm:mt-3 md:mt-6">
                                Care to say more?—{" "}
                                <a
                                  onClick={() => {
                                    setShowThankYou(false);
                                    setSubmittedName(null); // Reset the name for the next round
                                    setTimeout(() => {
                                      setShowContent(true);
                                      reset();
                                      setStatus("idle");
                                    }, 300);
                                  }}
                                  className="cursor-pointer font-[myFirstFont] text-xs text-gray-300 underline transition duration-600 hover:text-[#e9905a]"
                                >
                                  Send us another message
                                </a>{" "}
                                or just{" "}
                                <a
                                  onClick={closeDrawer}
                                  className="cursor-pointer font-[myFirstFont] text-xs text-gray-300 underline transition duration-600 hover:text-[#8faf9e]"
                                >
                                  continue browsing
                                </a>
                                .
                              </p>
                              <div>
                                <p className="fredoka mb-2 text-sm text-white lg:text-base">
                                  Sincerely,
                                </p>
                                <p className="fredoka text-sm text-white lg:text-base">
                                  The Agile-Blanche Team
                                </p>
                              </div>
                            </div>
                            {/* Stars */}
                            <div className="invisible absolute top-[8rem] right-[7rem] flex h-auto overflow-visible md:visible">
                              <Stars className="star-glow md:h-20 md:w-20 lg:h-20 lg:w-20" />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

// ----------------------
// Field Components
// ----------------------

const InputField = ({
  id,
  label,
  register,
  error,
  type,
  inputClassName = "",
  labelClassName = "",
}: {
  id: string;
  label: string;
  register: any;
  error: any;
  type: string;
  inputClassName?: string;
  labelClassName?: string;
}) => (
  <div className="relative mt-6 w-full">
    <input
      {...register}
      id={id}
      type={type}
      className={`peer w-full border-b border-b-2 bg-transparent py-1 text-lg text-white transition duration-400 outline-none focus:border-[#c7936d] ${inputClassName}`}
      placeholder=" "
    />
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out ${error ? "mt-1 max-h-12" : "mt-0 max-h-0"}`}
    >
      <p
        className={`text-sm text-[#DB4437] transition-opacity duration-500 ease-in-out ${error ? "opacity-100" : "opacity-0"}`}
      >
        {error?.message}
      </p>
    </div>
    <label
      htmlFor={id}
      className={`float-labels absolute -top-5 left-0 max-w-[calc(100%-18px)] cursor-text truncate text-sm peer-placeholder-shown:top-0 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-[#c7936d] ${labelClassName}`}
    >
      {label}
    </label>
  </div>
);

const TextareaField = ({
  id,
  label,
  register,
  error,
}: {
  id: string;
  label: string;
  register: any;
  error: any;
}) => (
  <div className="relative mt-6 w-full">
    <textarea
      {...register}
      id={id}
      className="peer w-full border-b border-b-2 border-gray-400 bg-transparent py-1 text-lg text-white transition duration-400 outline-none focus:border-[#c7936d]"
      placeholder=" "
    />
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out ${error ? "mt-1 max-h-10 opacity-100" : "mt-0 max-h-0 opacity-0"}`}
    >
      <p className="text-sm text-[#DB4437]">{error?.message}</p>
    </div>

    <label
      htmlFor={id}
      className="float-labels absolute -top-5 left-0 max-w-[calc(100%-18px)] cursor-text truncate font-[myFirstFont] text-sm text-gray-400 peer-placeholder-shown:top-0 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-[#c7936d]"
    >
      {label}
    </label>
  </div>
);
