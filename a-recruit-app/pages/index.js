import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import ReactPlayer from 'react-player'
import AnimatedCustomButton from '../components/animated_button'
import Footer from '../components/footer/footer'
import Header from '../components/header/home_header'

export default function Home() {
  return (
    <>
      <Head>
        <title>A recruit | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="Home">


        <section className={"HomeImageBackground scroll"}>
          <div className="blure  orientationV">
            
            <Header/>

            <div className="center textZone">
              Consectetur fugiat in excepteur velit amet qui labore. Elit eu in incididunt dolor consequat amet elit dolor dolore reprehenderit et anim. Do proident voluptate do aliquip occaecat reprehenderit ipsum minim elit. Proident sit tempor cupidatat Lorem.
            </div>

            <div className="linkZone orientationH spaceBetween">
              <AnimatedCustomButton
                text="JE CHERCHE UN TALENT"
                link="/interface/recruteur"
              />
              <AnimatedCustomButton
                text="JE CHERCHE UN EMPLOIE"
                link="/interface/candidat"
              />
            </div> 

            <div className="arrow"></div>

          </div>     
        </section>

        <section className="scroll page2">

          <div className="titre2XL">
            QUI SOMMES NOUS ?
          </div>

          <ReactPlayer
            url="https://www.youtube.com/watch?v=WlLZfGuY6Oc" 
            className="video"
          />

          
        </section>

        <section className="scroll orientationV spaceBetween page2">

          <div className="avisZone center">
              Duis non ipsum ad veniam Lorem sit cillum quis elit dolore in non irure. Ipsum ad reprehenderit non laboris ipsum quis incididunt incididunt excepteur quis minim. Culpa officia nostrud minim ea et Lorem eiusmod eiusmod labore laboris.

          </div>

          <Footer/>

        </section>


      </main>

     

     
    </>
  )
}