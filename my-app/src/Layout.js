import React, { useState,useEffect } from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom
import Form from './components/Form';
import Login from './components/Login';
import TableRender from './components/TableRender';
import {BrowserRouter,Routes,Route,useLocation } from "react-router-dom";

function Layout(props){
    let location = useLocation();

    useEffect(() => {
        console.log(location);
    },[location]);
    
        
        return(
            <Routes>
                <Route path="/table" element={<TableRender />} />
                <Route path="/reports" element={<Login />} />
                <Route path="/products" element={<Form />} />
                <Route path="/customer-detail" exact element={<Form />} />
            </Routes>
        );
    

}

export default Layout