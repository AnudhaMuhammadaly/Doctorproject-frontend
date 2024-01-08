
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllDoc from './Components/AllDoc';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ViewDoc from './Components/ViewDoc';


function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <section>
        <Routes>
          <Route path='/' element={<AllDoc />} />
          <Route path='/view/:id' element={<ViewDoc />} />
        </Routes>
      </section>


      <footer>
        <Footer />
      </footer>

    </div>
  );
}

export default App;
