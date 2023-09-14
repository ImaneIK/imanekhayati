import '../styles/globals.css'
import Home from '../components/Home';
import Footer from '../components/Footer';
import Projects from '@/components/Projects';

export default function Root() {
  return (
    <div>
      <Home/>
      <Projects/>
      <Footer/>
    </div>
    
  );
}
