import  { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Details } from './pages/Details';

import { Home } from './pages/Home';
import { Participant } from './pages/Participant';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/participant" exact component={Participant} />
        <Route path="/detalhes" exact component={Details} />
      </Switch>
    </BrowserRouter>
  )
}

export { App };
