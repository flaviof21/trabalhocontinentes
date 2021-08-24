import { Box, Container } from '@material-ui/core'

import '../styles/Footer.scss'

export function Footer () {
  return (
    <Box id="footer">
      <Container>
        <Box textAlign="center" padding="50px">
          Feira Cultural do Colégio Penha de França
          <br />
          Conteúdo: os 5 Continentes
        </Box>
      </Container>
    </Box>
  ) 
}