import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Novel from './components/Novel/Novel';
import { filterTypes } from './components/Novel/constants';
import './app.css';

class App extends Component {

  initialStore = {
    filter: filterTypes.FILTER_TYPE_ALL,
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

  static filterReducer = (state = filterTypes.FILTER_TYPE_ALL, action) => {
    switch (action.type) {
      case 'CHANGE_FILTER':
        return action.filterType
      default:
        return state;
    }
  }

  static novelsReducer = (state = []) => (state) 

  store=createStore(
    combineReducers({
      novels: App.novelsReducer,
      filter: App.filterReducer
    }),
    this.initialStore
  );

  render() {
    return (
      <div className="App">
        <header>
          <h1>Calvin Chan</h1>
          <p>Creative Technologist</p>
        </header>
        <Provider store={this.store}>
          <Novel/>
        </Provider>
      </div>
    );
  }
}

export default App;
