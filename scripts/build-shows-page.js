const showAPi = new BandSiteApi("2886777c-3308-49eb-af29-c97d7b690a3e"); 

const mainShow = document.querySelector(".shows-section");

function formatDate(dateString) {
    const options = {
        weekday: 'short', 
        month: 'short', 
        day: '2-digit', 
        year: 'numeric' 
    };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
}

const showHeader = document.createElement('h1');  // 2nd step: creating the class type 
showHeader.classList.add ('show-section__header'); // 3rd: Naming the actual class and adding it within your step 2 (like <section class ="Learning-Javascript")
showHeader.textContent = "Shows";  //step four: embedding the content of the class within the class by using textContent. 
mainShow.appendChild(showHeader); 

const topRow = document.createElement('article'); // this class will only be used in desktop and tablet layouts. 
topRow.classList.add('show-section__top-row');
const dateTop = document.createElement('p');
dateTop.textContent = "DATE"; 
const VenueTop = document.createElement('p')
VenueTop.textContent = "VENUE"; 
const locationTop = document.createElement('p'); 
locationTop.textContent = "LOCATION";

mainShow.appendChild(topRow);    //step 5: appending the children to its direct parent. 
topRow.appendChild(dateTop); 
topRow.appendChild(VenueTop); 
topRow.appendChild(locationTop); 


function createShowCard(showData) {
    const cardEl = document.createElement('article');
    cardEl.classList.add('ShowCardInfo');

    // Date
    const cardDate = document.createElement('div');
    cardDate.classList.add('show-section__date');

    const dateTitle = document.createElement('h3');
    dateTitle.classList.add('show-section__date--title');
    dateTitle.textContent = "DATE";
    const dateContent = document.createElement('p');
    dateContent.classList.add('show-section__date--content');
    dateContent.textContent = formatDate(showData.date);
    cardDate.appendChild(dateTitle);
    cardDate.appendChild(dateContent);

    // Venue
    const cardVenue = document.createElement('div');
    cardVenue.classList.add('show-section__venue');

    const venueTitle = document.createElement('h3');
    venueTitle.classList.add('show-section__venue--title');
    venueTitle.textContent = "VENUE";

    const venueContent = document.createElement('p');
    venueContent.classList.add('show-section__venue--content');
    venueContent.textContent = showData.place;
    cardVenue.appendChild(venueTitle);
    cardVenue.appendChild(venueContent);

    // Location
    const cardLocation = document.createElement('div');
    cardLocation.classList.add('show-section__location');

    const locationTitle = document.createElement('h3');
    locationTitle.classList.add('show-section__location--title');
    locationTitle.textContent = "LOCATION";

    const locationContent = document.createElement('p');
    locationContent.classList.add('show-section__location--content');
    locationContent.textContent = showData.location;
    cardLocation.appendChild(locationTitle);
    cardLocation.appendChild(locationContent);

    // Button
    const cardButton = document.createElement('a');
    cardButton.classList.add('show-section__button');
    cardButton.textContent = "BUY TICKETS";

    cardEl.appendChild(cardDate);
    cardEl.appendChild(cardVenue);
    cardEl.appendChild(cardLocation);
    cardEl.appendChild(cardButton);


    mainShow.appendChild(cardEl);


    cardEl.addEventListener('click', function() {
        const selectedCard = document.querySelector('.ShowCardInfo.selected');
        if (selectedCard) {
            selectedCard.classList.remove('selected');
        }
        cardEl.classList.add('selected');
    });
}


async function loadShows() {
    try {
        const shows = await showAPi.getShows();  
        if (shows && shows.length > 0) {
    
            shows.forEach(show => {
                createShowCard(show);  
            });
        } else {
            mainShow.innerHTML = "<p>No shows available.</p>";  
        }
    } catch (error) {
        console.error("Error loading shows:", error);
        mainShow.innerHTML = "<p>Error loading shows. Please try again later.</p>";
    }
}


document.addEventListener("DOMContentLoaded", () => {
    loadShows();  
});







// async function createShowCard(showCardInfo) {
//     const cardInfo = await showAPi.getShows(); 
//     const mainShow = document.querySelector (".shows-section"); 
//     if (!document.querySelector('.show-section__header')) {
//         const showHeader = document.createElement('h1');
//         showHeader.classList.add('show-section__header');
//         showHeader.textContent = "Shows";
//         mainShow.appendChild(showHeader);
//     }
//     if (!document.querySelector('.show-section__top-row')) {
//         const topRow = document.createElement('article');
//         topRow.classList.add('show-section__top-row');

//         const dateTop = document.createElement('p');
//         dateTop.textContent = "DATE";
//         const venueTop = document.createElement('p');
//         venueTop.textContent = "VENUE";
//         const locationTop = document.createElement('p');
//         locationTop.textContent = "LOCATION";

//         topRow.appendChild(dateTop);
//         topRow.appendChild(venueTop);
//         topRow.appendChild(locationTop);
//         mainShow.appendChild(topRow);
//     }
//     cardInfo.forEach(showCard => {
//         const cardEl = document.createElement('article');
//         cardEl.classList.add('ShowCardInfo');

//         // Create Date Section
//         const cardDate = document.createElement('div');
//         cardDate.classList.add('show-section__date');
//         const dateTitle = document.createElement('h3');
//         dateTitle.classList.add('show-section__date--title');
//         dateTitle.textContent = "DATE";
//         const dateContent = document.createElement('p');
//         dateContent.classList.add('show-section__date--content');
//         dateContent.textContent = showCard.Date;
//         cardDate.appendChild(dateTitle);
//         cardDate.appendChild(dateContent);

//         // Create Venue Section
//         const cardVenue = document.createElement('div');
//         cardVenue.classList.add('show-section__venue');
//         const venueTitle = document.createElement('h3');
//         venueTitle.classList.add('show-section__venue--title');
//         venueTitle.textContent = "VENUE";
//         const venueContent = document.createElement('p');
//         venueContent.classList.add('show-section__venue--content');
//         venueContent.textContent = showCard.Venue;
//         cardVenue.appendChild(venueTitle);
//         cardVenue.appendChild(venueContent);

//         // Create Location Section
//         const cardLocation = document.createElement('div');
//         cardLocation.classList.add('show-section__location');
//         const locationTitle = document.createElement('h3');
//         locationTitle.classList.add('show-section__location--title');
//         locationTitle.textContent = "LOCATION";
//         const locationContent = document.createElement('div');
//         locationContent.classList.add('show-section__location--content');
//         locationContent.textContent = showCard.Location;
//         cardLocation.appendChild(locationTitle);
//         cardLocation.appendChild(locationContent);

//         // Create Button Section
//         const cardButton = document.createElement('a');
//         cardButton.classList.add('show-section__button');
//         cardButton.textContent = "BUY TICKETS";
//         cardButton.href = "#";
//         cardEl.appendChild(cardDate);
//         cardEl.appendChild(cardVenue);
//         cardEl.appendChild(cardLocation);
//         cardEl.appendChild(cardButton);

//         // Append the card to the main section
//         mainShow.appendChild(cardEl);

//         // Event listener for selecting a card
//         cardEl.addEventListener('click', function () {
//             const selectedCard = document.querySelector('.ShowCardInfo.selected');
//             if (selectedCard) {
//                 selectedCard.classList.remove('selected');
//             }
//             cardEl.classList.add('selected');
//         });
//     });
// }

// createShowCard();








// const mainShow = document.querySelector (".shows-section"); // 1st: calling the class in html 
// const showHeader = document.createElement('h1');  // 2nd step: creating the class type 
// showHeader.classList.add ('show-section__header'); // 3rd: Naming the actual class and adding it within your step 2 (like <section class ="Learning-Javascript")
// showHeader.textContent = "Shows";  //step four: embedding the content of the class within the class by using textContent. 
// mainShow.appendChild(showHeader); 

// const topRow = document.createElement('article'); // this class will only be used in desktop and tablet layouts. 
// topRow.classList.add('show-section__top-row');
// const dateTop = document.createElement('p');
// dateTop.textContent = "DATE"; 
// const VenueTop = document.createElement('p')
// VenueTop.textContent = "VENUE"; 
// const locationTop = document.createElement('p'); 
// locationTop.textContent = "LOCATION";

// mainShow.appendChild(topRow);    //step 5: appending the children to its direct parent. 
// topRow.appendChild(dateTop); 
// topRow.appendChild(VenueTop); 
// topRow.appendChild(locationTop); 


// function createShowCard(showCardInfo) {  //creating a function and creating elements within the function, and using the Foreach to retrieve all the values from the indexes within the object.
//     const cardEl = document.createElement('article');
//     cardEl.classList.add('ShowCardInfo'); 

//     //Date 
//     const cardDate = document.createElement('div'); // created a section for date, venue and location and to be repeated across all three sections. 
//     cardDate.classList.add('show-section__date'); 

//     const dateTitle = document.createElement('h3')
//     dateTitle.classList.add ('show-section__date--title')
//     dateTitle.textContent = "DATE"; 
//     const dateContent = document.createElement('p'); 

//     dateContent.classList.add ('show-section__date--content'); 
//     dateContent.textContent = showCardInfo.Date; 
//     cardDate.appendChild(dateTitle); 
//     cardDate.appendChild(dateContent); 

// // Venue 
//     const cardVenue = document.createElement('div');
//     cardVenue.classList.add('show-section__venue'); 

//     const venueTitle = document.createElement('h3')
//     venueTitle.classList.add ('show-section__venue--title'); 
//     venueTitle.textContent = "VENUE"; 

//     const venueContent = document.createElement('p'); 
//     venueContent.classList.add ('show-section__venue--content'); 
//     venueContent.textContent = showCardInfo.Venue; 
//     cardVenue.appendChild(venueTitle); 
//     cardVenue.appendChild(venueContent); 

// // Location 
//     const cardLocation = document.createElement('div'); 
//     cardLocation.classList.add('show-section__location');
    
//     const locationTitle = document.createElement('h3'); 
//     locationTitle.classList.add ('show-section__location--title'); 
//     locationTitle.textContent = "LOCATION"; 

//     const locationContent = document.createElement('div'); 
//     locationContent.classList.add ('show-section__location--content'); 
//     locationContent.textContent = showCardInfo.Location; 

//     cardLocation.appendChild(locationTitle); 
//     cardLocation.appendChild(locationContent); 

// //Button 
// const cardButton = document.createElement('a'); 
// cardButton.classList.add('show-section__button'); 
// cardButton.textContent = "BUY TICKETS"; 
// cardButton.href = "#";


//     cardEl.appendChild(cardDate); 
//     cardEl.appendChild(cardVenue);
//     cardEl.appendChild(cardLocation); 
//     cardEl.appendChild(cardButton); 


//     mainShow.appendChild(cardEl); 
//     cardEl.addEventListener('click', function() {
//         const selectedCard = document.querySelector('.ShowCardInfo.selected');
//         if (selectedCard) {
//             selectedCard.classList.remove('selected');
//         }
//         cardEl.classList.add('selected');
//     });

// }


// cardInfo.forEach(showCardInfo => { 
//     createShowCard(showCardInfo);
// });




// let cardInfo= [
//     {
//         Date: 'Mon Sept 09 2024',
//         Venue: 'Ronald Lane', 
//         Location: 'San Francisco, CA',  
//     },
    
//     {
//         Date: 'Tue Sept 17 2024', 
//         Venue: 'Pier 3 East',
//         Location: 'San Francisco, CA', 
//     },
//     {
//         Date: 'Sat Oct 12 2024',
//         Venue: 'View Lounge', 
//         Location: 'San Francisco, CA',  
//     },
//     {
//         Date: 'Sat Nov 16 2024', 
//         Venue: 'Hyatt Agency', 
//         Location: 'San Francisco, CA',   
//     },
//     {
//         Date: 'Fri Nov 29 2024',
//         Venue: 'Moscow Center', 
//         Location: 'San Francisco, CA',  
//     },
//     {
//         Date: 'Wed Dec 18 2024',
//         Venue: 'Press Club',
//         Location: 'San Francisco, CA',  
//     },
    
//     ]; 