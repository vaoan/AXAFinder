export default {
  enviroment: process.env.NODE_ENV,
  back_end: process.env.REACT_APP_BACKEND_HOST || 'http://localhost:3000/',
  site_name: process.env.REACT_APP_SITE_NAME || 'AXA Finder',
}
