import React, { useEffect } from 'react'
import { Header } from '../components/Header'
import Typing from 'react-typing-animation'
import { Box } from '@material-ui/core'
import { Link }  from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'

import '../styles/Home.scss'
import imgAsia2 from '../assets/Asia2.jpg'
import { Footer } from '../components/Footer'

export function Home() {
  useEffect(() => {
    Aos.init({ duration: 150000 })
    document.title = 'Continentes - Início'
  }, [])
  return (
    <Box>
      <Header />
      <main>
        <section id="home">
          <Box display="inline-block" justifyContent="center" className="firstPage">
            <Typing hideCursor={false} className="title">
              <h2>Continentes</h2>
            </Typing>
            <hr />
            <p>Feira cultural do colégio Penha de França 9ºAno</p>
          </Box>
        </section>
        <section>
          <div className="descriptions">
            <Box position="" display="flex" flexDirection="row-reverse">
              <Box position="relative" display="flex" flexDirection="row" className="content" data-aos="fade-up" data-anime="up">
                <span className="text-content"> <h3>loren asd d asd asd as d asd s das das dad sad ds asd...</h3> <Link to="/asia/#Asia">Leia aqui</Link> <p>Text author: Flávio Farias</p></span>
                <Box className="img-content"><img src={imgAsia2} alt="Imagem da asia" /></Box>
              </Box>
            </Box>
            <Box display="flex" flexDirection="row" >
              <Box display="flex" flexDirection="row-reverse" className="content" data-aos="fade-up" data-anime="up">
                <span className="text-content"> <h3>loren asd d asd asd as d asd s das das dad sad ds asd...</h3> <Link to="/asia/#Asia">Leia aqui</Link> <p>Text author: Flávio Farias</p></span>
                <Box className="img-content left" ><img src={imgAsia2} alt="Imagem da asia" /></Box>
              </Box>
            </Box>
            <Box display="flex" flexDirection="row-reverse" >
              <Box display="flex" flexDirection="row" className="content" data-aos="fade-up"  data-anime="up">
                <span className="text-content"> <h3>loren asd d asd asd as d asd s das das dad sad ds asd...</h3> <Link to="/asia/#Asia">Leia aqui</Link> <p>Text author: Flávio Farias</p></span>
                <Box className="img-content"><img src={imgAsia2} alt="Imagem da asia" /></Box>
              </Box>
            </Box>
            <Box display="flex" flexDirection="row" >
              <Box display="flex" flexDirection="row-reverse" className="content" data-aos="fade-up" data-anime="up">
                <span className="text-content"> <h3>loren asd d asd asd as d asd s das das dad sad ds asd...</h3> <Link to="/asia/#Asia">Leia aqui</Link> <p>Text author: Flávio Farias</p></span>
                <Box className="img-content left" ><img src={imgAsia2} alt="Imagem da asia" /></Box>
              </Box>
            </Box>
          </div>
        </section>
      </main>
      <Footer />
    </Box>
  );
}