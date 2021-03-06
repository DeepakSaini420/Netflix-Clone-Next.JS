import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../components/banner/Banner'
import NavBar from '../components/nav/Navbar'
import Card from '../components/card/card'
import SectionCards from '../components/card/sectionCard'
import getVideos  from '../lib/videos'

export async function getServerSideProps(){
  const disneyVideos = await getVideos('disney trailers');
  const productivity = await getVideos('productivity')
  const popular = await getVideos('popular');
  const music = await getVideos('pubjabi music 2022');

  return {
    props: { disneyVideos,productivity,popular,music }
  }
}

export default function Home({disneyVideos,productivity,popular,music}) { 
  
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar username="deepak@deepdevs.com" />
      <Banner title="Avengers Endgame" subTitle="Avengers Assemble" imgURL="/static/cropped-1920-1080-1003220.png" />

      <div className={styles.sectionWrapper}>
        <SectionCards title={"Disney"} size={"small"} videos={disneyVideos}/>
        <SectionCards title={"Productivity"} size={'large'} videos={productivity}/>
        <SectionCards title={"Popular"} size={"medium"} videos={popular}/>
        <SectionCards title={"Music"} size={"small"} videos={music}/>
      </div>
    </div>
  )
}
