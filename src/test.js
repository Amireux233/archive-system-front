import Axios from 'axios';

const request = Axios.create({
  baseURL: '/api',
});

async function asp() {
  let response = await request.post('login/login', {
    account: '17738729134',
    password: 'anko1220',
  });
  console.log(response.data);
  const csrf = response.data.token;
  response = await request({
    url: 'login/info',
    method: 'get',
    headers: {
      'X-CSRFToken': csrf,
    },
  });
  console.log(response);
}

asp();
