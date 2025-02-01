import Head from 'next/head';
import Image from 'next/image'
import Navbar from '../components/navbar';
import logo from '../public/images/pokeball.png'
import styles from '../styles/Home.module.css';
import { Press_Start_2P } from 'next/font/google';
import { Roboto } from 'next/font/google'

const gametype = Press_Start_2P({ subsets: ['latin'], weight: '400' })
const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export default function Contacts() {
  return (
    <div className={[styles.container, roboto.className].join(" ")}>
      <Head>
        <title>Pokemon Trainer Club</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>

      <div id="contacts" className={[styles.pagealt, gametype.className].join(" ")} style={{backgroundColor: `rgb(140, 193, 125)`}} >
        
        <div>
          <h1 className={styles.heading_}> Join us on Discord for the most up-to-date info: </h1>
          <div className={styles.socialblockcontainer}>
            <a href="https://discord.gg/PHgz2hWk8C" target="_blank" rel="noopener noreferrer" className={styles.socialblock2}> <img src={logo.src} className={styles.exampleimage}/> Discord </a>
          </div>
          <h1 className={styles.heading_}> Also see us on Instagram: </h1>
          <div className={styles.socialblockcontainer}>
            <a href="https://www.instagram.com/uwpkmn/" target="_blank" rel="noopener noreferrer" className={styles.socialblock}> <img src={logo.src} className={styles.exampleimage}/> Instagram </a>
          </div>
          <h1 className={styles.heading_}> Other contact information: </h1>
          <div className={styles.socialblockcontainer}>
            <a className={styles.emailblock}> <img src={logo.src} className={styles.exampleimage}/> Club Email: pkmntrainerclub@uw.edu </a>
            <a className={styles.emailblock2}> <img src={logo.src} className={styles.exampleimage}/> Officer Email: dbzfan@uw.edu </a>
          </div>
        </div>
      </div>

    </div>
  );
}
