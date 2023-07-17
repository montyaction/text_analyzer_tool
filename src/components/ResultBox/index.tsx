import React from 'react';
import './index.scss';

type ResultBoxProps = {
  wordCount: number;
  charCount: number;
  sentenceCount: number;
  paragraphCount: number;
  pronounCount: number;
};

const ResultBar: React.FC<ResultBoxProps> = ({ wordCount, charCount, sentenceCount, paragraphCount, pronounCount }) => {
  const resultBar = [
    {
      title: 'Words',
      value: wordCount,
    },
    {
      title: 'Characters',
      value: charCount,
    },
    {
      title: 'Sentences',
      value: sentenceCount,
    },
    {
      title: 'Paragraphs ',
      value: paragraphCount,
    },
    {
      title: 'Pronouns',
      value: pronounCount,
    },
  ]

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  );
}

export default ResultBar
