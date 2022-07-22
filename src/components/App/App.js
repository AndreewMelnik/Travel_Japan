import Intro from '../Intro/Intro';
import Header from '../Header/Header';
import Benefits from '../Benefits/Benefits';
import './App.css';
import GetInspired from '../GetInspired/GetInspired';

function App() {
  return (
    <div className="app">
      <Intro/>
      <Header/>
      <Benefits/>
      <GetInspired/>
     
    </div>
   
  );
}

export default App;
