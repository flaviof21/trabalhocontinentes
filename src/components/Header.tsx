import '../styles/Header.scss'

export function Header() {
  return (
    <div>
    <header>
      <div className="container">
        <div className="logo">
          <a href="/"><img src="" alt="LOGO" /></a>
        </div>
        <div className="itens">
          <button id="btn-mobile">Menu</button>
          <ul id="menu">
            <li><a href="/asia">Detalhes</a></li>
            <li><a href="/participantes">Participantes</a></li>
          </ul>
        </div>  
      </div>
      
    </header>
  </div>
  )
}