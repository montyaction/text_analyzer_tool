import React, { ChangeEvent } from 'react';
import './App.scss';
import BottomResultBar from './components/BottomResultBox';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ResultBar from './components/ResultBox';
import TextArea from './components/TextArea';
import Pronouns from './data/pronouns';


const App = () => {
  const [text, setText] = React.useState('');

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };
  
  const words = text.trim().split(/\s+/);

  // Example pronoun data
  const pronounCount = words.filter((word) =>
    Pronouns.includes(word.toLowerCase())
  ).length;

  // Calculation for average reading time and longest word
  const wordsPerMinute = 275;
  const averageReadingTime = Math.ceil(words.length / wordsPerMinute);

  const longestWord = words.reduce((longest, currentWord) =>
    currentWord.length > longest.length ? currentWord : longest
  );

  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBar
            wordCount={text.split(/\s+/).filter(Boolean).length}
            charCount={text.length}
            sentenceCount={text.split(/[.!?]+/).filter(Boolean).length}
            paragraphCount={text.split(/\n\s*\n/).filter(Boolean).length}
            pronounCount={pronounCount}
          />
          <TextArea value={text} onChange={handleTextChange} />
          <BottomResultBar averageReadingTime={averageReadingTime} longestWord={longestWord} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
