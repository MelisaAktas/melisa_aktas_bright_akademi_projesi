import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import { AppContext } from './Contexts/AppContext';
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import TrainersPage from './Pages/TrainersPage/TrainersPage';
import TrainingsPage from './Pages/TrainingsPage/TrainingsPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import Footer from './Components/Footer';



function App() {
  return (
    <>
      <AppContext.Provider>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/trainings' element={<TrainingsPage />} />
            <Route path='/trainers' element={<TrainersPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>

          <Footer />

        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
