import Head from 'next/head';
import Image from 'next/image'
import Navbar from '../components/navbar';
import bgimage3 from '../public/images/Background3.png'
import styles from '../styles/Home.module.css';
import { Roboto } from 'next/font/google'


const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export default function Contact() {
  return (
    <div className={[styles.container, roboto.className].join(" ")}>
      <Head>
        <title>Pokemon Trainer Club</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>

      <div id="contact" className={styles.page} >
        <div className={styles.backgroundbright} style={{backgroundImage: `url(${bgimage3.src})`}}>
          <div className={styles.contactcontainer}> 
            <p className={styles.heading2} >Contact Us: </p>
            <p className={styles.heading3}>UwPokemon@gmail.com</p>

          </div>
        </div>
      </div>
      
    </div>
  );
}
