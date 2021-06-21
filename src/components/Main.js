import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Landing from './LandingPage/Landing';
import Instructions from './InstructionPage/Instructions';
import Upload from './UploadPage/Upload';
import EditorPage from './EditorPage/EditorPage';
import Output from './OutputPage/Output';
import Exit from './ExitPage/Exit';

function Main() {
  return (
      <Router>
        <Switch>
          <Route path="/edit">
            <EditorPage />
          </Route>
          <Route path="/instructions">
            <Instructions />
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
          <Route path="/out">
            <Output />
          </Route>
          <Route path="/done">
            <Exit />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
    </Router>
  );
}

export default Main;
