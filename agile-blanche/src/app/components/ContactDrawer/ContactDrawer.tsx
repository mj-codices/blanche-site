"use client";
import { useRef, useEffect, useState } from "react";
import { useUIStore } from "@/app/store/ui-store";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import PaperPlane from "@/app/assets/paper-plane.svg";
import { ContactButton } from "./ContactButton";
import { useForm } from "react-hook-form";
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
  const isOpen = useUIStore((state) => state.isContactDrawerOpen);
  const closeDrawer = useUIStore((state) => state.closeContactDrawer);
  const [showContent, setShowContent] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showThankYou, setShowThankYou] = useState(true);
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");

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
      />
    </GoogleReCaptchaProvider>
  );
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
}: {
  status: "idle" | "loading" | "sent";
  setStatus: React.Dispatch<React.SetStateAction<"idle" | "loading" | "sent">>;
  isVisible: boolean;
  showContent: boolean;
  setShowContent: React.Dispatch<React.SetStateAction<boolean>>;
  closeDrawer: () => void;
  showThankYou: boolean;
  setShowThankYou: React.Dispatch<React.SetStateAction<boolean>>;
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
              initial={{ y: "100%" }}
              animate={{ y: "50%" }}
              exit={{ y: "100%" }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 30,
                delay: 0.3,
              }}
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
                {!showThankYou ? (
                  <motion.div key="form">
                    {/* Content Area */}
                    <div
                      className={`transition-opacity duration-500 ease-in-out ${showContent && !showThankYou ? "opacity-100" : "opacity-0"}`}
                    >
                      <div className="flex justify-evenly">
                        {/* Contact Info */}
                        <div className="mt-11 ml-18">
                          <h1 className="fredoka mb-4 text-8xl tracking-wider text-[#FDFDFB]">
                            Contact
                          </h1>
                          <div className="flex items-center gap-4 pt-1 pl-4">
                            <div className="h-[.2rem] w-22 rounded-md bg-[#e9905a] lg:w-56" />
                            <h1 className="fredoka text-8xl tracking-wider text-[#FDFDFB]">
                              Us
                            </h1>
                          </div>
                          <p className="w-[18rem] pt-3 pb-6 pl-2 font-[myFirstFont] text-base leading-8 text-[#FDFDFB]">
                            We’re happy to answer your questions, hear your
                            ideas, or just chat about your next project.
                          </p>
                          <div className="fredoka pb-3 pl-6 text-sm tracking-widest text-[#88807B]">
                            +909-900-000
                          </div>
                          <div className="fredoka pl-6 text-sm tracking-widest text-[#88807B]">
                            agile_blanche@gmail.com
                          </div>
                        </div>

                        {/* Contact Form */}
                        <div className="mt-7 mr-10 w-110">
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
                              This site is protected by reCAPTCHA and the Google{" "}
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
                            className={`mt-8 flex justify-end gap-25 transition-opacity duration-500 ${hasErrors ? "pointer-events-none opacity-0" : "opacity-100"}`}
                          >
                            {[FaFacebook, FaTwitter, FaLinkedin, FaGithub].map(
                              (Icon, idx) => (
                                <a
                                  key={idx}
                                  href="#"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Icon className="text-xl text-[#88807B] transition duration-600 hover:text-[#e9905a]" />
                                </a>
                              ),
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="thanks" className="w-screen">
                    <div className="">
                      {showThankYou && (
                        <motion.div
                          key="thanks"
                          className="flex h-full w-full items-center justify-center px-10"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                          {/* Left: SVG Illustration */}
                          <div className="flex flex-1 justify-center">
                            <PaperPlane className="h-auto w-64 md:w-80" />
                          </div>

                          {/* Right: Message */}
                          <div className="flex flex-1 flex-col items-center justify-center text-center">
                            <h2 className="fredoka text-4xl font-semibold text-white">
                              Thanks for reaching out!
                            </h2>
                            <p className="mt-4 max-w-lg font-[myFirstFontBold] text-base text-gray-300">
                              We’ve received your message and will be in touch
                              shortly. In the mean time, make sure to connect
                              with us on our socials below.
                            </p>
                            <div className="flex gap-30">
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
                            <p className="mt-6 text-center text-sm text-gray-600">
                              Have more to say? Feel free to{" "}
                              <a
                                onClick={() => {
                                  setShowThankYou(false); // fade out thank-you
                                  setTimeout(() => {
                                    setShowContent(true); // fade in form
                                    reset(); // clear fields
                                    setStatus("idle"); // reset button state!
                                  }, 300); // Adjust this delay to match your fade duration
                                }}
                                className="cursor-pointer underline transition hover:text-[#e9905a]"
                              >
                                send another message
                              </a>
                              or just{" "}
                              <a
                                onClick={closeDrawer}
                                className="cursor-pointer underline hover:text-white"
                              >
                                return back to browsing
                              </a>
                              .
                            </p>
                            <div>
                              <p className="fredoka text-white">Sincerely,</p>
                              <p className="fredoka text-white">
                                The Agile-Blanche Team
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
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
