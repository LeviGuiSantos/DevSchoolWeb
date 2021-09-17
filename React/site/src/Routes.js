import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Alunos from './Pages/Alunos';
import Error from './Pages/Error';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Alunos} />
                <Route path="*" component={Error} />
            </Switch>
        </BrowserRouter>
    );
};