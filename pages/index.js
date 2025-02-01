import Head from 'next/head';
import Image from 'next/image'
import Navbar from '../components/navbar';
import bgimage from '../public/images/Background2.jpg'
import logo from '../public/images/pokeball.png'
import styles from '../styles/Home.module.css';
import { Roboto } from 'next/font/google'
import localFont from 'next/font/local';

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

      <div id="index" className={styles.page} style={{backgroundImage: `url(${bgimage.src})`}}>
        <h2 className={[styles.title, poketype.className].join(" ")}> UW Pokémon <br></br>Trainer Club </h2>
      </div>


    </div>
  );
}
