import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';


export default function Navbar() {
    return (
        <nav>
            <div className="mt-8 mb-8 mr-8">
                <ul className={`flex justify-evenly text-3xl ${styles.color}`}>
                <li>
                <Image src="/agile-logo.png" alt="company logo" width={275} height={250}/>
                </li>
                    <li className="p-6 pt-15">
                        <Link className={`${styles.navbarLink} hover:font-[myFirstFontBold] hover:text-persian-orange transition duration-400 ease-in-out`} href="/">Home</Link>
                    </li>
                    <li className="p-6 pt-15">
                        <Link className={`${styles.navbarLink} hover:font-[myFirstFontBold] hover:text-persian-orange transition duration-400 ease-in-out`} href="/Services">Services</Link>
                    </li>
                    <li className="p-6 pt-15">
                        <Link className={`${styles.navbarLink} hover:font-[myFirstFontBold] hover:text-persian-orange transition duration-400 ease-in-out`} href="/About">About</Link>
                    </li>
                    <li className="p-6 pt-15">
                        <Link className={`${styles.navbarLink} hover:font-[myFirstFontBold] hover:text-persian-orange transition duration-400 ease-in-out`} href="/Portfolio">Portfolio</Link>
                    </li>
                    <li className="p-6 pt-15 font-[myFirstFontBold] bold-action-text">
                        <Link className="navbar-link hover:font-[myFirstFontBold] bold-action-text hover:text-persian-orange transition duration-700 ease-in-out" href="/Contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

