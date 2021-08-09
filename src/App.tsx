import  { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from './pages/Home';
import { Participant } from './pages/Participant';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/participant" exact component={Participant} />
      </Switch>
    </BrowserRouter>
  )
}

export { App };
