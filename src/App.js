import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import BookDetailsPage from './pages/BookDetailsPage';
import Header from './components/Header';
import EditDetails from './pages/EditDetails';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
      <>
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/books" element={<BookDetailsPage />} />
            <Route path="/editdetails/:id" element={<EditDetails />}/>
          </Routes>
          <ToastContainer />
        </Router>
      </>
  );
}

export default App;
