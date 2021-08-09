import React, { useEffect } from 'react'
import Typing from 'react-typing-animation'
import { Box } from '@material-ui/core'
import { Link }  from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'

import styles from '../styles/Cursor.scss'
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
          <div className="firstPage">
            <Typing hideCursor={false} className={styles.cursor} >
              <h2 id="title">Continente Asiático</h2>
            </Typing>
            <hr />
            <p>Paragraph</p>
          </div>
        </section>
        <section>
          <div className="descriptions">
            <Box display="flex" flexDirection="row-reverse" >
              <Box className="content" data-aos="fade-right" data-anime="right">
                <span className="text-content"> loren asd d asd asd as d asd s das das dad sad ds asd... <Link to="/asia/#Asia">Read More</Link> <p>Text author: Flávio Farias</p></span>
                <Box className="img-content"><img src={imgAsia2} alt="Imagem da asia" /></Box>
              </Box>
            </Box>
          </div>
        </section>
      </main>
      <footer>

      </footer>
      <script type="text/javascript">
        const target = document.querySelectorAll('[data-anime]')
      </script>
    </>
  );
}