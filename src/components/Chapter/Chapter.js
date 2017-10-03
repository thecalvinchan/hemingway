import React from 'react';
import './style.css';

const Chapter = ({ chapter }) => {
  const { title, date, content } = chapter;
  return (
    <article className="chapter">
      <header className="chapter-header">
        <h2>{ title }</h2>
        <h3>{ date }</h3>
      </header>
      <p className="chapter-content">{ content }</p>
    </article>
  )
};

export default Chapter;
