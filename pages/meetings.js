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
                <p>Wednesdays 5:00pm - 6:30pm at the HUB for Casual Meetings.</p>
                <br></br>
                <p>Tuesdays 5:00pm - 7:00pm at Suzzalo for Competitive Meetings & Tournaments.</p>
              </div>
            </div>
            <div style={{paddingInline: "3vw"}}>
              <h1 className={styles.heading2}> Events </h1>
              <div style={{width: "30vw"}} className={styles.heading3}>
              <br></br>
                <p>10/26 Movie Night</p>
                <br></br>
                <p>10/27 TCG Night</p>
                <br></br>
                <p>11/7 Pokemon Unite intro</p>
                <br></br>
                <p>11/8 Trivia Night</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
