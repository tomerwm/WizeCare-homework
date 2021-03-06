import React from "react";
import CamView from "./components/CamView/CamView";
import { BrowserRouter as Router,Route} from 'react-router-dom'
import { Switch } from "react-router"
import { LandingPage } from "./Page/LandingPage";
import { Navbar } from "./components/CamView/pageComponents/Navbar";
import {Footer} from "./components/CamView/pageComponents/Footer";
import './styles/index.css';

//context
import {ContextSockProvider} from './context/context-socetio'

function App() {
	return (
    <ContextSockProvider>
    <Router>
		<div>
      <Navbar/>
      <Switch>
        <Route exact path='/'>
            <LandingPage />
        </Route>
        <Route path='/livestream'>
            <CamView />
        </Route>
      </Switch>
      <Footer/>
		</div>
    </Router>
    </ContextSockProvider>
	);
}

export default App;
