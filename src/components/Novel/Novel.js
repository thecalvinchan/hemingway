import React from 'react';
import { connect } from 'react-redux';
import { filterTypes } from './constants';

import Chapter from '../Chapter/Chapter'
import { changeFilterAction } from './actions';
import './novel.css';

const mapStateToProps = (store) => {
  // TODO: create Novels container component
  return {
    filter: store.filter,
    novel: store.novels[0]
  }
}

const Novel = ( { filter, novel, changeFilterAction } ) => {
  const { chapters } = novel;
  const visibleChapters = chapters.filter((chapter) => {
    if (filter === filterTypes.FILTER_TYPE_ALL) {
      return true;
    }
    return chapter.type === filter;
  });
  return (
    <section className="novel">
      <nav>
        <a href="#" onClick={() => {changeFilterAction(filterTypes.FILTER_TYPE_ALL)}}>all</a>
        <a href="#" onClick={() => {changeFilterAction(filterTypes.FILTER_TYPE_EDUCATION)}}>education</a>
        <a href="#" onClick={() => {changeFilterAction(filterTypes.FILTER_TYPE_WORK)}}>work</a>
      </nav>
      {visibleChapters.map((chapter) => (
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
