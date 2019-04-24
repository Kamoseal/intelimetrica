//extracting div from html
const restaurants = document.getElementById('restaurants');

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
    //painting data in console
    //console.log(dataRestaurant);

    //creating template
    let template = ``
    //tour array to extract information and assign name
    dataRestaurant.forEach(arrayRestaurants => {
    console.log(arrayRestaurants);
        const idRestaurant = arrayRestaurants.id;
        const rating = arrayRestaurants.rating;
        const name = arrayRestaurants.name;
        const site = arrayRestaurants.contact.site;
        const email = arrayRestaurants.contact.email;
        const phone = arrayRestaurants.contact.phone;
        const street = arrayRestaurants.address.street;
        const city = arrayRestaurants.address.city;
        const state = arrayRestaurants.address.state;
        const lat = arrayRestaurants.address.location.lat;
        const ing = arrayRestaurants.address.location.ing;

        //assign HTML code to the template with values ​​extracted from the data
        template +=
        `<ul>
            <li>${name}</li>
            <li>${rating}</li>
            <li>${street, city, state}</li>
            <li>${phone}</li>
            <li>${site}</li>
            <li>${email}</li>
        </ul>`;
            //painting information in HTML
            restaurants.innerHTML = template;
    });
    //accommodating the information by rating
    const ratingFilterCero = dataRestaurant.filter(function (dataRestaurant) {
        return dataRestaurant.rating === 0;
    });
    const ratingFilterOne = dataRestaurant.filter(function (dataRestaurant) {
        return dataRestaurant.rating === 1;
    });
    const ratingFilterTwo = dataRestaurant.filter(function (dataRestaurant) {
        return dataRestaurant.rating === 2;
    });
    const ratingFilterThree = dataRestaurant.filter(function (dataRestaurant) {
        return dataRestaurant.rating === 3;
    });
    const ratingFilterFour = dataRestaurant.filter(function (dataRestaurant) {
        return dataRestaurant.rating === 4;
    });
// console.log(ratingFilter);
 
//arrayRestaurants.orderByString('name');
         }
