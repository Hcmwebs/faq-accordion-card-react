import { IconContext } from 'react-icons';
import Header from './Js/components/Header';

import Main from './Js/components/Main';
import Attribution from './Js/components/Attribution';

function App() {
  return (
    <IconContext.Provider
      value={{ color: '	hsl(14, 88%, 65%)', size: '1.2rem' }}
    >
      <div className='container'>
        <Header />
        <Main />
        <Attribution />

      </div>
    </IconContext.Provider>
  );
}

export default App;
