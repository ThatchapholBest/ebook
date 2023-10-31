import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import './index.css';
import BookList from './components/BookList/BookList';
import BookDetails from './components/BookDetails/BookDetails';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element = {<BookList />}></Route>
      <Route path = "/book-details/:index" element = {<BookDetails />}/>
    </Routes>
  </BrowserRouter>
);