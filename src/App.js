import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import Novel from './components/Novel'
import './App.css';

class App extends Component {

  initialStore = {
    filter: 'all',
    novels: [
      {
        chapters: [
          {
            title: 'UCLA',
            date: '2016',
            content: 'B.S. Computer Science',
            type: 'education'
          },
          {
            title: 'Skillshare',
            date: '2016',
            content: 'Software Engineer',
            type: 'work'
          }
        ]
      }
    ]
  };

  store=createStore(
    () => this.initialStore,
    this.initialStore
  );

  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Calvin Chan</h1>
          <p>
            Creative Technologist
          </p>
        </header>
        <Provider store={this.store}>
          <Novel/>
        </Provider>
      </div>
    );
  }
}

export default App;
