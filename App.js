
import './App.css';
import Navbar from './Navbar';
import Card from './Card';
import Data from './Data.js';

function App() {
  const cards = Data.map(item =>{
    return (
      <Card
          key={item.id}
          item = {item}
      />
    ) 
    
  })
  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
