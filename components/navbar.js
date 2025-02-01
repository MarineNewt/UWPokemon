import Link from 'next/link';
import Navcss from "../styles/Navbar.module.css"

export default function Navbar({}) {
    return <><nav className={Navcss.Navbar}>
      <Link href="/" className={Navcss.none}>Home</Link>
      <Link href="/about" className={Navcss.none}>About</Link>
      <Link href="/meetings" className={Navcss.none}>Events</Link>
      <Link href="/contacts" className={Navcss.none}>Contact</Link>
    </nav>
    </>
}