import axios from 'axios';


const instance = axios.create({
  baseURL: 'http://your-azuracast-site.example.com/api/nowplaying/koska_radio', 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add any default interceptors or configurations here if needed

export default instance;
