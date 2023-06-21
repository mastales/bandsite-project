// create array of information here
showsArr = [
    {
        date: "Mon Sept 06 2021" ,
        venue: "Ronald Lane",
        location: "San Francisco, CA",
        button: "Buy Tickets"
    },
    {
        date: "Tue Sept 21 2021" ,
        venue: "Pier 3 East",
        location: "San Francisco, CA",
        button: "Buy Tickets"
    },
    {
        date: "Fri Oct 15 2021" ,
        venue: "View Lounge",
        location: "San Francisco, CA",
        button: "Buy Tickets"
    },
    {
        date: "Sat Nov 06 2021" ,
        venue: "Hyatt Agency",
        location: "San Francisco, CA",
        button: "Buy Tickets"
    },
    {
        date: "Fri Nov 26 2021" ,
        venue: "Moscow Center",
        location: "San Francisco, CA",
        button: "Buy Tickets"
    },
    {
        date: "Wed Dec 15 2021" ,
        venue: "Press Club",
        location: "San Francisco, CA",
        button: "Buy Tickets"
    },
];

console.table(showsArr);

//create function for displaying events on page
displayShows = () => {
    const showsContainer = document.querySelector(".shows"); 

    showsArr.forEach(show => {
        let showsCard = document.createElement("div");
        showsCard.classList.add('shows__card');

        let showsTitle = document.createElement("h3");
        showsTitle.classList.add('shows__card-title');
        showsTitle.innerHTML = "Date"

        let showsTextBold = document.createElement("h4");
        showsTextBold.classList.add('shows__card-text');
        showsTextBold.textContent = show.date

        let showsVenue = document.createElement("h3");
        showsVenue.classList.add('shows__card-title');
        showsVenue.innerHTML = "Venue";

        let showsVenueInfo = document.createElement("h4");
        showsVenueInfo.classList.add('shows__card-text');
        showsVenueInfo.textContent = show.venue;

        let showsLocation = document.createElement("h3");
        showsLocation.classList.add('shows__card-title');
        showsLocation.innerHTML = "Location";

        let showsLocationInfo = document.createElement("h4");
        showsLocationInfo.classList.add('shows__card-text');
        showsLocationInfo.textContent = show.location;

        let showsBuyButton = document.createElement("button");
        showsBuyButton.classList.add('shows__button');
        showsBuyButton.textContent = show.button;

        let showsDvd = document.createElement("hr");
        showsDvd.classList.add('divider');
    
         //append dynamically rendered elements
        showsCard.appendChild(showsTitle);
        showsCard.appendChild(showsTextBold);
        showsCard.appendChild(showsVenue);
        showsCard.appendChild(showsVenueInfo);
        showsCard.appendChild(showsLocation);
        showsCard.appendChild(showsLocationInfo);
        showsCard.appendChild(showsBuyButton)
        showsCard.appendChild(showsDvd);

        document.querySelector(".shows").append(showsCard);
        });
};

displayShows();

    