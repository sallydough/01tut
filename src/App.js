
import Header from './Header'
import Content from './Content';
import Footer from './Footer';

function App() {

  // declare all of your functions here
  const handleNameChange = () => {
    const names = ["Sally", "Kevin", "Myles"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }
  
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    
    </div>
  );
}

export default App;
