import axios from 'axios';
// ngrok helps us avoid cors issues
export default axios.create({
  baseURL:'https://5d97-100-38-122-115.ngrok-free.app',
  headers: {"ngrok-skip-browser-warning": "true"}
});

// the server code has the headers class thats being imported to the headesr above