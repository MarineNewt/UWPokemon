import Head from 'next/head';
import Image from 'next/image'
import Navbar from '../components/navbar';
import bgimage2 from '../public/images/Background.jpg'

import styles from '../styles/Home.module.css';
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: '400' })


export default function Meetings() {
  return (
    <div className={[styles.container, roboto.className].join(" ")}>
      <Head>
        <title>Pokemon Trainer Club</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>

      <div id="meetings" className={styles.page} style={{backgroundImage: `url(${bgimage2.src})`}}>
        <div>
          
          <div className={styles.eventcontainer}>
            <div style={{paddingInline: "3vw"}}>
              <h1 className={styles.heading2}> Meetings </h1>
              <div style={{width: "30vw"}} className={styles.heading3}>
              <br></br>
                <p>Wednesdays 5:00pm - 7:00pm</p>
                <br></br>
                <p>1/29 Debate Night - Madrona 311</p>
                <br></br>
                <p>2/5 TCG Night - Savery 260</p>
                <br></br>
                <p>2/12 Movie Night - Savery 260</p>
                <br></br>
                <p>2/19 Pokemon Club x WGA Smash Collab - HUB Games</p>
                <br></br>
                <p>2/26 Pokemon Club x Game Dev Club Collab - More 221</p>
              </div>
            </div>
            <div style={{paddingInline: "3vw"}}>
              <h1 className={styles.heading2}> Events </h1>
              <div style={{width: "30vw"}} className={styles.heading3}>
              <br></br>
                <p>2/27, 5:00pm - 7:00pm: Pokemon Club x Anime Discovery Project - Miller 301</p>
                <br></br>
                <p>2/28, 5:00pm - 7:00pm: Pokemon Club x Anime Nation - HUB Games Pool Hall</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
