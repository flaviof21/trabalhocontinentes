import { Box, Container } from '@material-ui/core'

import 'preventdefault'

import '../styles/Header.scss'

export function HeaderDetails() {
  const menuItems = document.querySelectorAll('#menu a[href^="#"]');

  menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
  })

  function getScrollTopByHref(element: any) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
  }

  function scrollToIdOnClick(event: any) {
    event.preventDefault()
    const to = getScrollTopByHref(event.target);
    scrollToPosition(to);
  }
  function scrollToPosition(to: number) {
    window.scroll({
      top: to,
      behavior: "smooth"
    })
  }

  return (
    <div>
      <Box position="fixed" zIndex="tooltip" id="header">
        <Container>
          <div className="container">
            <div className="logo">
              <a href="/"><img src="" alt="LOGO" /></a>
            </div>
            <div className="items">
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