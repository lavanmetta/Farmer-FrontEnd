import React from 'react'
import { BrowserRouter,Switch, Route} from 'react-router-dom'
import Form from './components/Form'




function App() {
  return (
    <div className="form-container">
        <BrowserRouter>
            <Switch>
                <Route exact path = '/' component={Form}/>
            </Switch>

        </BrowserRouter>
        
    </div>
  );
}

export default App;


