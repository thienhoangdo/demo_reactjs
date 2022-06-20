import React, { useState,useEffect } from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom
import store from './app/store';
import Layout from './Layout';
import {BrowserRouter,Routes,Route,useLocation } from "react-router-dom";
import SideBar from './components/SideBar';
import { Provider } from 'react-redux';
import TableRender from './components/TableRender';

import './index.css'

// Tạo component App
function App() {
    
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <SideBar />
                    <Routes>
                        <Route path="/*" element={<Layout />}  />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>
    )
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById('root'))





