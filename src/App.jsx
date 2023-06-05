import './App.css';
import About from './components/About';
import Coin from './components/Coin';
import Info from './components/Info';
import Links from './components/Links';
import Mainbody from './components/Mainbody';
import Memes from './components/Memes';

function App() {
  return (
    <div className="App">
      <div><Mainbody /></div>
      <div id="about"><Info /></div>
      <div id="info"><About /></div>
      <div id="coin"><Coin /></div>
      <div id="memes"><Memes /></div>
      <div id="links"><Links /></div>
    </div>
  );
}

export default App;
