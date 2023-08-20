import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.scss';
import Login from "pages/Login"
import Table from "pages/Table"
import ProtectedRoute from "./pages/ProtectedRoute";
import {Provider} from 'react-redux';
import {store,persistor} from 'store/store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<Login/>}/>
                            <Route path="/table" element={<ProtectedRoute>
                                <Table/>
                            </ProtectedRoute>}/>
                        </Routes>
                    </div>
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
