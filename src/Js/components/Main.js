import { useState } from 'react';
import Accordion from './Accordion';

const Main = () => {
  const header = 'FAQ';
  const [active, setActive] = useState(2);

  return (
    <main>
      <h1>{header} </h1>
      <Accordion key='id' active={active} setActive={setActive} />
    </main>
  );
};

export default Main;
