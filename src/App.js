import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Novel from './components/Novel/Novel';
import { filterTypes } from './components/Novel/constants';
import { filterReducer, entitiesReducer } from './components/Novel/reducers';
import './app.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {

  initialStore = {
    filter: filterTypes.FILTER_TYPE_ALL,
    entities: {
      novels: {
        data: {
          1: {
            id: 1,
            title: 'main'
          }
        },
        ids: [1]
      },
      chapters: {
        data: {
          1: {
            id: 1,
            novelId: 1,
            title: 'UCLA',
            date: '2016-03-01',
            content: 'B.S. Computer Science',
            type: 'education'
          },
          2: {
            id: 2,
            novelId: 1,
            title: 'Skillshare',
            date: '2016-05-01',
            content: 'Software Engineer',
            type: 'work'
          },
          3: {
            id: 3,
            novelId: 1,
            title: 'MongoDB',
            date: '2015-06-01',
            content: 'DB Kernel Engineer Intern',
            type: 'work'
          },
          4: {
            id: 4,
            novelId: 1,
            title: 'Skillshare',
            date: '2014-05-01',
            content: 'Product Engineer Intern',
            type: 'work'
          },
          5: {
            id: 5,
            novelId: 1,
            title: 'Yahoo',
            date: '2013-06-01',
            content: 'Front-End Engineer Intern',
            type: 'work'
          },
          6: {
            id: 6,
            novelId: 1,
            title: 'Demand Media',
            date: '2013-03-01',
            content: 'Mobile Web Engineer Intern',
            type: 'work'
          }
        },
        ids: [1,2,3,4,5,6]
      }
    }
  };

  store = createStore(
    combineReducers({
      entities: entitiesReducer,
      filter: filterReducer
    }),
    this.initialStore
  );

  render() {
    return (
      <div>
        <div className="app">
          <header className="app-header">
            <h1>Calvin Chan</h1>
            <p>Creative Technologist</p>
          </header>
          <nav className="app-nav">
            <a href="/blog"><i className="fa fa-pencil"></i></a>
            <a href="https://www.facebook.com/calvin.chan.h"><i className="fa fa-facebook"></i></a>
            <a href="https://www.twitter.com/_calvinc"><i className="fa fa-twitter"></i></a>
            <a href="https://github.com/thecalvinchan"><i className="fa fa-github-alt"></i></a>
            <a href="https://www.linkedin.com/in/thecalvinchan"><i className="fa fa-linkedin"></i></a>
            <a href="emailto:calvin.chan.h@gmail.com"><i className="fa fa-envelope"></i></a>
          </nav>
        </div>
        <Provider store={this.store}>
          <Novel id={1}/>
        </Provider>
      </div>
    );
  }
}

export default App;
