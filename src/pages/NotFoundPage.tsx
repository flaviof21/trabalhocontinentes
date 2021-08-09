import { Box } from '@material-ui/core'
import { Link } from 'react-router-dom'

import { Header } from '../components/Header';
import Error404 from '../assets/404.png'
import '../styles/NotFoundPage.scss'

export function NotFoundPage () {
  return (
    <>
      <Header />
      <Box className="notfound">
        <img src={Error404} alt="Página não encontrada!"  />
        <p style={{textAlign:"center"}}>
          <Link to="/" style={{ textDecoration: 'none' }}>Ir para o inicio</Link>
        </p>
      </Box>
    </>
  )
}