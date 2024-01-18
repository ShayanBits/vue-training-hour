import axios from "axios"
var min_weight = '5';

export const cats = () => axios.get('https://api.api-ninjas.com/v1/cats', {
  params: {
    min_weight
  },
  headers: {
    'X-Api-Key': 'y2MeoOzGjd4v62ihrAnrnQ==0zkx6uJ4q77W7h6H'
  }
})
.then(function (response) {
  console.log(response.data);
  return response.data
})
.catch(function (error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.error('Error:', error.response.status, error.response.data);
  } else if (error.request) {
    // The request was made but no response was received
    console.error('Request failed:', error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error('Error:', error.message);
  }
});
