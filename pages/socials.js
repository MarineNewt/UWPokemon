import Head from 'next/head';
import Image from 'next/image'
import Navbar from '../components/navbar';
import logo from '../public/images/pokeball.png'
import styles from '../styles/Home.module.css';
import { Press_Start_2P } from 'next/font/google';
import { Roboto } from 'next/font/google'

const gametype = Press_Start_2P({ subsets: ['latin'], weight: '400' })
const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export default function Socials() {
  return (
    <div className={[styles.container, roboto.className].join(" ")}>
      <Head>
        <title>Pokemon Trainer Club</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>

      <div id="socials" className={[styles.pagealt, gametype.className].join(" ")} style={{backgroundColor: `rgb(140, 193, 125)`}} >
        
        <div>
          <h1 className={styles.heading}> Join us on: </h1>
          <div className={styles.socialblockcontainer}>
            <a href="https://discord.gg/PHgz2hWk8C" target="_blank" rel="noopener noreferrer" className={styles.socialblock}> <img src={logo.src} className={styles.exampleimage}/> Discord </a>
            <a href="https://www.instagram.com/uwpkmn/" target="_blank" rel="noopener noreferrer" className={styles.socialblock}> <img src={logo.src} className={styles.exampleimage}/> Instagram </a>
            <a href="https://www.tiktok.com/@uw_pokemon_club" target="_blank" rel="noopener noreferrer" className={styles.socialblock}> <img src={logo.src} className={styles.exampleimage}/> Tiktok </a>
            <a href="https://x.com/uwpkmn" target="_blank" rel="noopener noreferrer" className={styles.socialblock}> <img src={logo.src} className={styles.exampleimage}/>  X </a>
          </div>
        </div>
      </div>

    </div>
  );
}
