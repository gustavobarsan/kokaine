const cron = require('node-cron');
const axios = require('axios');
console.log("Cron")
cron.schedule('*/30 * * * *', () => {
  axios.get('https://easywash-backend.herokuapp.com/')
  .then(res => console.log(res.data))
});