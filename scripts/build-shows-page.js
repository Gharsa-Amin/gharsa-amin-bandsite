let cardInfo= [
{
    Date: 'Mon Sept 09 2024',
    Venue: 'Ronald Lane', 
    Location: 'San Francisco, CA',  
},

{
    Date: 'Tue Sept 17 2024', 
    Venue: 'Pier 3 East',
    Location: 'San Francisco, CA', 
},
{
    Date: 'Sat Oct 12 2024',
    Venue: 'View Lounge', 
    Location: 'San Francisco, CA',  
},
{
    Date: 'Sat Nov 16 2024', 
    Venue: 'Hyatt Agency', 
    Location: 'San Francisco, CA',   
},
{
    Date: 'Fri Nov 29 2024',
    Venue: 'Moscow Center', 
    Location: 'San Francisco, CA',  
},
{
    Date: 'Wed Dec 18 2024',
    Venue: 'Press Club',
    Location: 'San Francisco, CA',  
},

]; 

const mainShow = document.querySelector (".shows-section"); 
const showHeader = document.createElement('h1'); 
showHeader.classList.add ('show-section__header'); 
showHeader.innerHTML = "Shows"; 
mainShow.appendChild(showHeader); 



function createShowCard(showCardInfo) {
    const cardEl = document.createElement('article');
    cardEl.classList.add('ShowCardInfo'); 

    //Date 
    const cardDate = document.createElement('div');
    cardDate.classList.add('show-section__date'); 

    const dateTitle = document.createElement('h3')
    dateTitle.classList.add ('show-section__date--title')
    dateTitle.innerText = "Date"; 
    const dateContent = document.createElement('p'); 

    dateContent.classList.add ('show-section__date--content'); 
    dateContent.innerHTML = showCardInfo.Date; 
    cardDate.appendChild(dateTitle); 
    cardDate.appendChild(dateContent); 

// Venue 
    const cardVenue = document.createElement('div');
    cardVenue.classList.add('show-section__venue'); 

    const venueTitle = document.createElement('h3')
    venueTitle.classList.add ('show-section__venue--title'); 
    venueTitle.innerHTML = "Venue"; 

    const venueContent = document.createElement('p'); 
    venueContent.classList.add ('show-section__venue--content'); 
    venueContent.innerHTML = showCardInfo.Venue; 
    cardVenue.appendChild(venueTitle); 
    cardVenue.appendChild(venueContent); 

// Location 
    const cardLocation = document.createElement('div'); 
    cardLocation.classList.add('show-section__location');
    
    const locationTitle = document.createElement('h3'); 
    locationTitle.classList.add ('show-section__location--title'); 
    locationTitle.innerHTML = "Location"; 

    const locationContent = document.createElement('div'); 
    locationContent.classList.add ('show-section__location--content'); 
    locationContent.innerHTML = showCardInfo.Location; 

    cardLocation.appendChild(locationTitle); 
    cardLocation.appendChild(locationContent); 

    cardEl.appendChild(cardDate); 
    cardEl.appendChild(cardVenue);
    cardEl.appendChild(cardLocation); 

    mainShow.appendChild(cardEl); 
}

cardInfo.forEach(showCardInfo => {
    createShowCard(showCardInfo);
});



