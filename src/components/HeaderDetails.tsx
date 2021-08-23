import { Box, Container } from '@material-ui/core'

import '../styles/Header.scss'

export function HeaderDetails () {
  return (
    <div>
      <Box position="fixed" zIndex="tooltip" id="header">
        <Container>
          <div className="container">
            <div className="logo">
              <a href="/"><img src="" alt="LOGO" /></a>
            </div>
            <div className="itens">
              <button id="btn-mobile">Menu</button>
              <ul id="menu">
                <li><a href="#asia">Asia</a></li>
                <li><a href="#america">America</a></li>
                <li><a href="#europa">Europa</a></li>
                <li><a href="#africa">Africa</a></li>
                <li><a href="#australia">Australia</a></li>
                <li><a href="/participantes">Participantes</a></li>
              </ul>
            </div>
          </div>
        </Container>
      </Box>
    </div>
  )
}