//Name URL
const requesURL = 'https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json';
//creating object
const request = new XMLHttpRequest();
//application with open method
request.open('GET', requesURL);
//programming the responseType to JSON
request.responseType = 'json';
//it becomes second plane to JS by the send method
request.send();
//waiting for the response to restart from the server to handle it
request.onload = function() {
    const dataRestaurant = request.response;
    console.log(dataRestaurant);
  }
