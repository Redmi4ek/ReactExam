import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Weather from './components/screen/Weather/Weather.tsx';
import Home from './components/screen/Home/Home';
import './index.css'
// import Header from './components/header/header.jsx';
import Layout from './components/layout/Layout';
import store from './redux/store'
import { Provider } from 'react-redux'
// import Login from './components/screen/Home/Login/login.jsx';
import Calculator from './components/Calculator/Calculator.tsx';
import Game from './components/Game/Game.jsx';
import ColorPicker from './ColorPicker/ColorPicker.jsx';
import ColorDisplay from './ColorPicker/ColorDisplay.jsx';
import ColorHistory from './ColorPicker/ColorHistory.jsx';

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/weather" element={<Weather />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/game" element={<Game />} />
              <Route path="/color-picker" element={
              <>
                <ColorPicker />
                <ColorDisplay />
                <ColorHistory />
              </>
              } />
            </Routes>
          </Layout>
        </Router>
      </Provider>
    </React.StrictMode>,
document.getElementById('root'));

