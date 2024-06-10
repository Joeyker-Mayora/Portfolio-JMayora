import './App.css';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Info from './components/Info/Info';
import Proyects from './components/Proyects/Proyects';
import ScrollUp from './components/ScrollUp/ScrollUp';
import Skills from './components/Skills/Skills';
import Testimonials from './components/Testimonials/Testimonials';





function App() {
  return (
    <>
      <Header/>
      
      <main className='name'>
        <Home/>
        <Info/>
        <Skills/>
        <Proyects/>
        <Testimonials/>
        <Contact/>
      </main>

      <Footer/>
      <ScrollUp/>
    </>
  );
}

export default App;
