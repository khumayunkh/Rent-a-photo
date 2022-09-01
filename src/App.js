import './App.css';
import Contact from './components/Contact/Contact';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Information from './components/Information/Information';
import Models from './components/Models/Models';
import Title from './components/Title/Title';

function App() {
  return (
    <>
    <Header/>
    <Title/>
    <Content/>
    <Models/>
    <Information/>
    <Footer/>
    <Contact/>
    </>
  );
}

export default App;
