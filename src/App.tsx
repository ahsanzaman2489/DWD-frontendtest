import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.scss';
import Login from "pages/Login"
import Home from "pages/Home"
import ProtectedRoute from "./pages/ProtectedRoute";
import {Provider} from 'react-redux';
import {store, persistor} from 'store/store';
import {PersistGate} from 'redux-persist/integration/react';
import SignUp from "./pages/SignUp";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {NavBar} from "./components/NavBar";
import {TableProvider} from "./components/context/tableContext";


function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <div className="container">
                        <NavBar/>
                        <Routes>
                            <Route path="/" element={<Login/>}/>
                            <Route path="/signup" element={<SignUp/>}/>
                            <Route path="/home" element={
                                <ProtectedRoute>
                                    <TableProvider>
                                        <Home/>
                                    </TableProvider>
                                </ProtectedRoute>}

                            />
                        </Routes>
                        <ToastContainer/>
                    </div>
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
