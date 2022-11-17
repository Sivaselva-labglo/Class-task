import React from "react";

export default function Apitoken() {
    var axios = require("axios").default;

var options = {
  method: 'POST',
  url: 'https://mocki.io/v1/e30fadd3-b1fe-4c06-8882-1b5ef9a8ddd7',
  headers: {'content-type': 'application/x-www-form-urlencoded'},
  data: new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: 'YOUR_CLIENT_ID',
    client_secret: 'YOUR_CLIENT_SECRET',
    audience: 'YOUR_API_IDENTIFIER'
  })
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error('raguApi ',error);
});
}