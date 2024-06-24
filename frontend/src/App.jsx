import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path='/' element={<Navigate to="/login" />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
        </Router>
        
    );   
}

export default App;