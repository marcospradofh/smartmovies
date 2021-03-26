import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Grid, Details } from './pages';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Grid} />
        <Route path="/:type/details/:id" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}
