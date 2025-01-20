import Head from 'next/head';
import Image from 'next/image'
import Navbar from '../components/navbar';
import logo from '../public/images/pokeball.png'
import styles from '../styles/Home.module.css';
import { Press_Start_2P } from 'next/font/google';
import { Roboto } from 'next/font/google'
const gametype = Press_Start_2P({ subsets: ['latin'], weight: '400' })
const roboto = Roboto({ subsets: ['latin'], weight: '400' })


export default function About() {
  return (
    <div className={[styles.container, roboto.className].join(" ")}>
      <Head>
        <title>Pokemon Trainer Club</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>

      <div id="about" className={styles.pagealt}>
        <div style={{width: "60%", paddingInline: "10%"}}>
          <h1 className={[styles.heading, gametype.className].join(" ")}> Welcome to The Pokemon Trainer Club</h1>
          <p className={styles.infotext1}>The Pokémon Trainer Club at the University of Washington is dedicated to providing and promoting a fun, open community for all Pokémon fans, new and old! We have weekly meetups on Wednesdays from 5:00-6:30pm at the HUB where we have planned activities that can include viewings, tournaments, trivia games, art & crafts and much more!</p>
        </div>
        <div style={{width: "40%"}}><img src={logo.src} className={styles.logo}/></div>
      </div>

    </div>
  );
}
