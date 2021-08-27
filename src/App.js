import logo from './logo.svg';
import './App.css';


//import components
import SideNav from './components/sideNav';
import Home from './components/home';
import Footer from './components/footer';
import Main from './components/main';


function App() {
  return (
    <div className="App">
      <SideNav />
      <Home />
      <Footer />
      <Main />
    </div>
  );
}

export default App;
