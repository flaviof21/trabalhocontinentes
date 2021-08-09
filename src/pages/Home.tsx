import React, { useEffect } from 'react'
import Typing from 'react-typing-animation'
import { Box } from '@material-ui/core'
import { Link }  from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'

import '../styles/Home.scss'
import { Header } from '../components/Header'
import imgAsia2 from '../assets/Asia2.jpg'

export function Home() {
  useEffect(() => {
    Aos.init({ duration: 300 })
  }, [])
  return (
    <>
      <Header />
      <main>
        <section id="home">
          <Box display="inline-block" justifyContent="center" className="firstPage">
            <Typing hideCursor={false} className="title">
              <h2>Continente Asiático</h2>
            </Typing>
            <hr />
            <p>Bla bla bla bla bla com mais bla e com acréscimo de blas ou sejá bla bla bla bla bla bla bla</p>
          </Box>
        </section>
        <section>
          <div className="descriptions">
            <Box display="flex" flexDirection="row-reverse" >
              <Box display="flex" flexDirection="row" className="content" data-aos="fade-right" data-anime="right">
                <span className="text-content"> <h3>loren asd d asd asd as d asd s das das dad sad ds asd...</h3> <Link to="/asia/#Asia">Leia aqui</Link> <p>Text author: Flávio Farias</p></span>
                <Box className="img-content"><img src={imgAsia2} alt="Imagem da asia" /></Box>
              </Box>
            </Box>
            <Box display="flex" flexDirection="row" >
              <Box display="flex" flexDirection="row-reverse" className="content" data-aos="fade-left" data-anime="left">
                <span className="text-content"> <h3>loren asd d asd asd as d asd s das das dad sad ds asd...</h3> <Link to="/asia/#Asia">Leia aqui</Link> <p>Text author: Flávio Farias</p></span>
                <Box className="img-content left" ><img src={imgAsia2} alt="Imagem da asia" /></Box>
              </Box>
            </Box>
            <Box display="flex" flexDirection="row-reverse" >
              <Box display="flex" flexDirection="row" className="content" data-aos="fade-right" data-anime="right">
                <span className="text-content"> <h3>loren asd d asd asd as d asd s das das dad sad ds asd...</h3> <Link to="/asia/#Asia">Leia aqui</Link> <p>Text author: Flávio Farias</p></span>
                <Box className="img-content"><img src={imgAsia2} alt="Imagem da asia" /></Box>
              </Box>
            </Box>
            <Box display="flex" flexDirection="row" >
              <Box display="flex" flexDirection="row-reverse" className="content" data-aos="fade-left" data-anime="left">
                <span className="text-content"> <h3>loren asd d asd asd as d asd s das das dad sad ds asd...</h3> <Link to="/asia/#Asia">Leia aqui</Link> <p>Text author: Flávio Farias</p></span>
                <Box className="img-content left" ><img src={imgAsia2} alt="Imagem da asia" /></Box>
              </Box>
            </Box>
          </div>
        </section>
      </main>
      <footer>

      </footer>
    </>
  );
}