import Head from 'next/head';
import Image from 'next/image'
import Navbar from '../components/navbar';
import bgimage2 from '../public/images/Background.jpg'
import bgimage from '../public/images/Background2.jpg'
import bgimage3 from '../public/images/Background3.png'
import logo from '../public/images/pokeball.png'
import styles from '../styles/Home.module.css';
import { Press_Start_2P } from 'next/font/google';
import { Roboto } from 'next/font/google'
import localFont from 'next/font/local';

const gametype = Press_Start_2P({ subsets: ['latin'], weight: '400' })
const roboto = Roboto({ subsets: ['latin'], weight: '400' })
const poketype = localFont({
  src: [
    {
      path: '../fonts/pokemon/Pokemon Solid.ttf',
      weight: '400', // Regular weight
      style: 'normal', // Normal style
    },
    // Add more font variations if needed
  ]
});

export default function Home() {
  return (
    <div className={[styles.container, roboto.className].join(" ")}>
      <Head>
        <title>Pokemon Trainer Club</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>

      <div className={styles.page} style={{backgroundImage: `url(${bgimage.src})`}}>
        <h2 className={[styles.title, poketype.className].join(" ")}> UW Pokémon <br></br>Trainer Club </h2>
      </div>

      <div id="about" className={styles.pagealt}>
        <div style={{width: "60%", paddingInline: "10%"}}>
          <h1 className={[styles.heading, gametype.className].join(" ")}> Welcome to The Pokemon Trainer Club</h1>
          <p className={styles.infotext1}>The Pokémon Trainer Club at the University of Washington is dedicated to providing and promoting a fun, open community for all Pokémon fans, new and old! We have weekly meetups on Wednesdays from 5:00-6:30pm at the HUB where we have planned activities that can include viewings, tournaments, trivia games, art & crafts and much more!</p>
        </div>
        <div style={{width: "40%"}}><img src={logo.src} className={styles.logo}/></div>
      </div>

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
