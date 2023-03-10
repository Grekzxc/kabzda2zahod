import React from 'react';
import './App.css';
import { Accordion } from './components/Accordion';
import { Rating } from './components/Rating';

function App() {
  return (
    <div>
      <PageTitle title={'This is app component'} />
      <Rating value={3} />
      <Accordion title={'menu'} />
      <Accordion title={'MENU'} />
      <Rating value={4} />
    </div>
  );
}

type PageTitleType = {
  title: string
}

const PageTitle = (props: PageTitleType) => {
  return (
    <h1>
      {props.title}
    </h1>
  )
}

export default App;
