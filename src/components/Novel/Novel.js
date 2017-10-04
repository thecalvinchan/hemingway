import React from 'react';
import { connect } from 'react-redux';
import { filterTypes } from './constants';

import Chapter from '../Chapter/Chapter'
import { changeFilterAction } from './actions';
import { getNovelChaptersVisible } from './selectors';
import './style.css';

const mapStateToProps = (store, ownProps) => {
  // TODO: create Novels container component
  return {
    chapters: getNovelChaptersVisible(store, ownProps)
  }
}

const Novel = ( { chapters, changeFilterAction } ) => {
  const onClickFilter = (filterType) => {
    return (e) => {
      e.preventDefault();
      return changeFilterAction(filterType)
    }
  }
  return (
    <section className="novel">
      <nav>
        <a href="#" onClick={ onClickFilter(filterTypes.FILTER_TYPE_ALL) }>all</a>
        <a href="#" onClick={ onClickFilter(filterTypes.FILTER_TYPE_EDUCATION) }>education</a>
        <a href="#" onClick={ onClickFilter(filterTypes.FILTER_TYPE_WORK) }>work</a>
      </nav>
      {chapters.map((chapter) => (
        <Chapter 
          chapter={chapter}
        />
      ))}
    </section>
  );
};

export default connect(
  mapStateToProps, 
  {
    changeFilterAction
  }
)(Novel);
