import Link from 'next/link';

const DesktopNav = () => {
    const $btnclassName = "flex justify-center space-around items-center p-2 m-2 h-10 hover:underline rounded-md";

    return (
        <nav className={`flex flex-row-reverse md:flex-row flex-grow w-full z-10 justify-evenly
        fixed bottom-0 left-0 right-0 md:top-0 border-black border-y-4
        p-2 max-h-20
        `}>
            <Link className={$btnclassName} href="#about-me">
                About
            </Link>
            <Link className={$btnclassName} href="#blogs">
                Blog
            </Link>
            <Link className={$btnclassName} href="#resources">
                Resources
            </Link>
            <Link className={$btnclassName} href="#contact">
                Contact
            </Link>
        </nav>
    )
}

export default DesktopNav;