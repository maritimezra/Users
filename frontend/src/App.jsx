import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import Logout from './components/Logout';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    {/* <Route path='/' element={<Home />} /> */}
                    <Route path="/" element={<PrivateRoute element={Home} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </div>
        </Router>
        
    );   
}

export default App;