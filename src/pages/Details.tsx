import { Box, Container } from '@material-ui/core'
import { useEffect } from 'react'

import { Footer } from '../components/Footer'
import { HeaderDetails } from '../components/HeaderDetails'

import '../styles/Details.scss'

export function Details() {
  useEffect(() => {
    document.title = 'Continentes - Detalhes'
  }, [])
  return (
    <Box> 
      {/*Header*/}
      <HeaderDetails />
      {/*Main*/}
      <Container id="page-details">
        <Box id="asia">
          <Box textAlign="center" paddingTop="5rem" className="titles">
            <h1><a href="#asia">Asia</a></h1>
          </Box>
          <Box className="descriptions" paddingTop="1.5rem">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper eleifend vulputate. Proin eu quam non risus condimentum hendrerit. Proin pulvinar, eros at viverra vulputate, massa ex ullamcorper nisl, quis dapibus dui justo nec augue. Etiam nisl ligula, ornare nec nulla egestas, convallis aliquam dui. In at risus scelerisque, sagittis est eu, molestie risus. Sed varius purus nec nisi ornare, nec dapibus leo pharetra. Mauris at tellus sed urna suscipit tempor eget a tortor. Nam bibendum magna eget lorem accumsan cursus quis a velit. Ut et enim in felis tincidunt iaculis. Etiam tincidunt felis ante, ac hendrerit enim faucibus auctor. Sed cursus mauris sapien, vitae ullamcorper neque lacinia nec.</span>
          </Box>
        </Box>
        <Box id="america">
          <Box textAlign="center" paddingTop="5rem" className="titles">
            <h1><a href="#ameria">America</a></h1>
          </Box>
          <Box className="descriptions" paddingTop="1.5rem">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper eleifend vulputate. Proin eu quam non risus condimentum hendrerit. Proin pulvinar, eros at viverra vulputate, massa ex ullamcorper nisl, quis dapibus dui justo nec augue. Etiam nisl ligula, ornare nec nulla egestas, convallis aliquam dui. In at risus scelerisque, sagittis est eu, molestie risus. Sed varius purus nec nisi ornare, nec dapibus leo pharetra. Mauris at tellus sed urna suscipit tempor eget a tortor. Nam bibendum magna eget lorem accumsan cursus quis a velit. Ut et enim in felis tincidunt iaculis. Etiam tincidunt felis ante, ac hendrerit enim faucibus auctor. Sed cursus mauris sapien, vitae ullamcorper neque lacinia nec.</span>
          </Box>
        </Box>
        <Box id="europa">
          <Box textAlign="center" paddingTop="5rem" className="titles">
            <h1><a href="#europa">Europa</a></h1>
          </Box>
          <Box className="descriptions" paddingTop="1.5rem">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper eleifend vulputate. Proin eu quam non risus condimentum hendrerit. Proin pulvinar, eros at viverra vulputate, massa ex ullamcorper nisl, quis dapibus dui justo nec augue. Etiam nisl ligula, ornare nec nulla egestas, convallis aliquam dui. In at risus scelerisque, sagittis est eu, molestie risus. Sed varius purus nec nisi ornare, nec dapibus leo pharetra. Mauris at tellus sed urna suscipit tempor eget a tortor. Nam bibendum magna eget lorem accumsan cursus quis a velit. Ut et enim in felis tincidunt iaculis. Etiam tincidunt felis ante, ac hendrerit enim faucibus auctor. Sed cursus mauris sapien, vitae ullamcorper neque lacinia nec.</span>
          </Box>
        </Box>
        <Box id="africa">
          <Box textAlign="center" paddingTop="5rem" className="titles">
            <h1><a href="#africa">Africa</a></h1>
          </Box>
          <Box className="descriptions" paddingTop="1.5rem">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper eleifend vulputate. Proin eu quam non risus condimentum hendrerit. Proin pulvinar, eros at viverra vulputate, massa ex ullamcorper nisl, quis dapibus dui justo nec augue. Etiam nisl ligula, ornare nec nulla egestas, convallis aliquam dui. In at risus scelerisque, sagittis est eu, molestie risus. Sed varius purus nec nisi ornare, nec dapibus leo pharetra. Mauris at tellus sed urna suscipit tempor eget a tortor. Nam bibendum magna eget lorem accumsan cursus quis a velit. Ut et enim in felis tincidunt iaculis. Etiam tincidunt felis ante, ac hendrerit enim faucibus auctor. Sed cursus mauris sapien, vitae ullamcorper neque lacinia nec.</span>
          </Box>
        </Box>
        <Box id="australia">
          <Box textAlign="center" paddingTop="5rem" className="titles">
            <h1><a href="#Australia">Australia</a></h1>
          </Box>
          <Box className="descriptions" paddingTop="1.5rem">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper eleifend vulputate. Proin eu quam non risus condimentum hendrerit. Proin pulvinar, eros at viverra vulputate, massa ex ullamcorper nisl, quis dapibus dui justo nec augue. Etiam nisl ligula, ornare nec nulla egestas, convallis aliquam dui. In at risus scelerisque, sagittis est eu, molestie risus. Sed varius purus nec nisi ornare, nec dapibus leo pharetra. Mauris at tellus sed urna suscipit tempor eget a tortor. Nam bibendum magna eget lorem accumsan cursus quis a velit. Ut et enim in felis tincidunt iaculis. Etiam tincidunt felis ante, ac hendrerit enim faucibus auctor. Sed cursus mauris sapien, vitae ullamcorper neque lacinia nec.</span>
          </Box>
        </Box>
      </Container>

      {/*Footer*/}
      <Footer />
    </Box>
  )
}