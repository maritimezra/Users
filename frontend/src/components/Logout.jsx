import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          await axios.post('http://127.0.0.1:8000/api/accounts/logout/', null, {
            headers: {
              Authorization: `Token ${token}`,
            },
          });
        } catch (err) {
          console.error('Failed to logout', err);
        }
      }
      localStorage.removeItem('token');
      navigate('/login');
    };

    logoutUser();
  }, [navigate]);

  return null;
};

export default Logout;
