import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chapter from './Chapter'
import './Novel.css';

const mapStateToProps = (store) => {
  // TODO: create Novels container component
  return {
    filter: store.filter,
    novel: store.novels[0]
  }
}

const Novel = ( { filter, novel } ) => {
  const { chapters } = novel;
  const visibleChapters = chapters.filter((chapter) => {
    if (filter === 'all') {
      return true;
    }
    return chapter.type === filter;
  });
  return (<section className="novel">
    {visibleChapters.map((chapter) => (
      <Chapter 
        chapter={chapter}
      />
    ))}
  </section>);
};

export default connect(mapStateToProps)(Novel);
