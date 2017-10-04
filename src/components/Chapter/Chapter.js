import React from 'react';
import moment from 'moment';

import './style.css';

const Chapter = ({ chapter }) => {
  const { title, date, content } = chapter;
  return (
    <article className="chapter">
      <header className="chapter-header">
        <h2>{ title }</h2>
        <h3>{ moment(date).format('MMMM YYYY') }</h3>
      </header>
      <p className="chapter-content">{ content }</p>
    </article>
  )
};

export default Chapter;
