import { Box } from '@material-ui/core'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Header } from '../components/Header';
import Error404 from '../assets/404.png'
import '../styles/NotFoundPage.scss'

export function NotFoundPage () {
  useEffect(() => {
    document.title = 'Continentes - Erro'
  }, [])

  return (
    <Box>
      <Header />
      <Box className="notfound">
        <img src={Error404} alt="Página não encontrada!"  />
        <p style={{textAlign:"center"}}>
          <Link to="/" style={{ textDecoration: 'none' }}>Ir para o inicio</Link>
        </p>
      </Box>
    </Box>
  )
}