import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Heading from './Headings';
import Templates from './ProjectTempltes';

function App() {
  return (
    

    
    <><div className="App">

      <header className="App-header">
        <Navbar />
        <img src={logo} className="App-logo" alt="logo" />
        <Heading />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>

      </header>

    </div><div className='App'>
        <Templates />
      </div></>
  );
}

export default App;
