import '/styles/globals.css'
import Home from '../components/Home';
import Footer from '../components/Footer';
import Projects from '@/components/Projects';
import Circles from '@/components/Circles';

export default function Root() {
  return (
    <div>
      {/* <Circles/> */}
      <Home/>
      <Projects/>
      <Footer/>
    </div>
    
  );
}
