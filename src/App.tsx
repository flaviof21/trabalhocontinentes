import  { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Details } from './pages/Details'
import { Home } from './pages/Home'
import { NotFoundPage } from './pages/NotFoundPage'
import { Autores } from './pages/Autores'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/autores" exact component={Autores} />
        <Route path="/detalhes" exact component={Details} />
        <Route path="*" exact component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  )
}

export { App }
