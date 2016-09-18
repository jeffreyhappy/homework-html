import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookAppBar from './modules/BookAppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BookList from './modules/BookList.js'
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <BookAppBar />
          <BookList />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
