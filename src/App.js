import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route } from 'react-router-dom';



const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className="app_wraper">
        <Header />
        <Navbar />
        <div className="app_wrapper_content">
          <Route path='/dialogs' 
                 render={ () => <Dialogs 
                        dialogsPage={props.state.dialogsPage} 
                        dispatch={props.dispatch} /> } />

          <Route path='/profile' 
                 render={ () => <Profile 
                        profilePage={props.state.profilePage} 
                        dispatch={props.dispatch} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
