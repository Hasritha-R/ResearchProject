import axios from 'axios';

// Backend base URL — change port here if needed
const apiBaseUrl = process.env.REACT_APP_API_URL || 'http://localhost:9099';

const apiClient = axios.create({
  baseURL: `${apiBaseUrl}/api`,
  withCredentials: true,
});

// Attach token to every request if available
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('journal_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle unauthorized errors (401)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('journal_token');
      localStorage.removeItem('journal_refresh');
      localStorage.removeItem('journal_user');
    }
    return Promise.reject(error);
  }
);

export default apiClient;
