import { Box, Container } from '@material-ui/core'

import '../styles/Header.scss'

export function Header() {
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
                  <li><a href="/detalhes">Detalhes</a></li>
                  <li><a href="/participantes">Participantes</a></li>
                </ul>
              </div>
            </div>
          </Container>

        
      </Box>
    </div>
  )
}