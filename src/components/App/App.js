import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import './App.css';

function App() {
  return (
    <div className="app">
      <Intro/>
      <div className="app-wrapper">
      <Header/>
    </div>
    </div>
  );
}

export default App;
