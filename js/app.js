//extracting div from html
const restaurants = document.getElementById('restaurants');
//const ceroStars = document.getElementById('ceroStars');
const ceroStars = document.getElementById('ceroStars');
const oneStars = document.getElementById('oneStars');
const twoStars = document.getElementById('twoStars');
const threeStars = document.getElementById('threeStars');
const fourStars = document.getElementById('fourStars');
const stars = document.getElementById('stars');

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
    //console.log(arrayRestaurants);
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
    let ratingFilterCero = dataRestaurant.filter((dataRestaurant)=> dataRestaurant.rating === 0);
    let templateCeroStars = ``
    ratingFilterCero.forEach(arrayCeroStars => {
        const id = arrayCeroStars.id;
        const rating = arrayCeroStars.rating;
        const name = arrayCeroStars.name;
        const site = arrayCeroStars.contact.site;
        const email = arrayCeroStars.contact.email;
        const phone = arrayCeroStars.contact.phone;
        const street = arrayCeroStars.address.street;
        const city = arrayCeroStars.address.city;
        const state = arrayCeroStars.address.state;
        const lat = arrayCeroStars.address.location.lat;
        const ing = arrayCeroStars.address.location.ing; 
        console.log(id);
        templateCeroStars +=
        `<ul>
            <li>${name}</li>
            <li>${rating}</li>
            <li>${street, city, state}</li>
            <li>${phone}</li>
            <li>${site}</li>
            <li>${email}</li>
        </ul>`;

        ceroStars.addEventListener("click",function(e) {
            e.preventDefault();
            stars.innerHTML = templateCeroStars;  
        })     
    });
    const ratingFilterOne = dataRestaurant.filter((dataRestaurant)=> dataRestaurant.rating === 1);
    let templateOneStars = ``
    ratingFilterOne.forEach(arrayOneStars => {
        const id = arrayOneStars.id;
        const rating = arrayOneStars.rating;
        const name = arrayOneStars.name;
        const site = arrayOneStars.contact.site;
        const email = arrayOneStars.contact.email;
        const phone = arrayOneStars.contact.phone;
        const street = arrayOneStars.address.street;
        const city = arrayOneStars.address.city;
        const state = arrayOneStars.address.state;
        const lat = arrayOneStars.address.location.lat;
        const ing = arrayOneStars.address.location.ing; 
        console.log(id);
        templateOneStars +=
        `<ul>
            <li>${name}</li>
            <li>${rating}</li>
            <li>${street, city, state}</li>
            <li>${phone}</li>
            <li>${site}</li>
            <li>${email}</li>
        </ul>`;

        oneStars.addEventListener("click",function(e) {
            e.preventDefault();
            stars.innerHTML = templateOneStars;  
        })     
    });
    const ratingFilterTwo = dataRestaurant.filter((dataRestaurant)=> dataRestaurant.rating === 2);
    let templateTwoStars = ``
    ratingFilterTwo.forEach(arrayTwoStars => {
        const id = arrayTwoStars.id;
        const rating = arrayTwoStars.rating;
        const name = arrayTwoStars.name;
        const site = arrayTwoStars.contact.site;
        const email = arrayTwoStars.contact.email;
        const phone = arrayTwoStars.contact.phone;
        const street = arrayTwoStars.address.street;
        const city = arrayTwoStars.address.city;
        const state = arrayTwoStars.address.state;
        const lat = arrayTwoStars.address.location.lat;
        const ing = arrayTwoStars.address.location.ing; 
        console.log(id);
        templateTwoStars +=
        `<ul>
            <li>${name}</li>
            <li>${rating}</li>
            <li>${street, city, state}</li>
            <li>${phone}</li>
            <li>${site}</li>
            <li>${email}</li>
        </ul>`;

        twoStars.addEventListener("click",function(e) {
            e.preventDefault();
            stars.innerHTML = templateTwoStars;  
        })     
    });
    const ratingFilterThree = dataRestaurant.filter((dataRestaurant)=> dataRestaurant.rating === 3);
    let templateThreeStars = ``
    ratingFilterThree.forEach(arrayThreeStars => {
        const id = arrayThreeStars.id;
        const rating = arrayThreeStars.rating;
        const name = arrayThreeStars.name;
        const site = arrayThreeStars.contact.site;
        const email = arrayThreeStars.contact.email;
        const phone = arrayThreeStars.contact.phone;
        const street = arrayThreeStars.address.street;
        const city = arrayThreeStars.address.city;
        const state = arrayThreeStars.address.state;
        const lat = arrayThreeStars.address.location.lat;
        const ing = arrayThreeStars.address.location.ing; 
        console.log(id);
        templateThreeStars +=
        `<ul>
            <li>${name}</li>
            <li>${rating}</li>
            <li>${street, city, state}</li>
            <li>${phone}</li>
            <li>${site}</li>
            <li>${email}</li>
        </ul>`;

        threeStars.addEventListener("click",function(e) {
            e.preventDefault();
            stars.innerHTML = templateThreeStars;  
        })     
    });
    const ratingFilterFour = dataRestaurant.filter((dataRestaurant)=> dataRestaurant.rating === 4);
    let templateFourStars = ``
    ratingFilterFour.forEach(arrayFourStars => {
        const id = arrayFourStars.id;
        const rating = arrayFourStars.rating;
        const name = arrayFourStars.name;
        const site = arrayFourStars.contact.site;
        const email = arrayFourStars.contact.email;
        const phone = arrayFourStars.contact.phone;
        const street = arrayFourStars.address.street;
        const city = arrayFourStars.address.city;
        const state = arrayFourStars.address.state;
        const lat = arrayFourStars.address.location.lat;
        const ing = arrayFourStars.address.location.ing; 
        console.log(id);
        templateFourStars +=
        `<ul>
            <li>${name}</li>
            <li>${rating}</li>
            <li>${street, city, state}</li>
            <li>${phone}</li>
            <li>${site}</li>
            <li>${email}</li>
        </ul>`;

        fourStars.addEventListener("click",function(e) {
            e.preventDefault();
            stars.innerHTML = templateFourStars;  
        })     
    });
    
    

   //ceroStars.addEventListener("click",function(e) {
       // e.preventDefault();
          
        
       // console.log(rating);
        
        
   // })
    
    
    

    //accommodating the information by alphabetically
    //escalar con Map
    let listRestaurant = [];
    dataRestaurant.forEach(restaurantName => {
        const restaurant = restaurantName.name;
        listRestaurant.push(restaurant); 
    });
        listRestaurant.sort();
        //console.log(listRestaurant);

        
       
     

   
    























         }
