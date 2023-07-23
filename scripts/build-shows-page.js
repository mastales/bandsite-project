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
function displayShows() {
    axios
        .get('https://project-1-api.herokuapp.com/showdates?api_key=14b3921c-334f-4538-9077-206ad4e84fea')
        .then(response => {
        const responseData = response.data
        console.log(responseData)
        responseData.forEach(show => {
            //Shows Card and List (Parents)
            let showsCard = document.createElement("div");
            showsCard.classList.add('shows__card');

            let showsList = document.createElement("div");
            showsList.classList.add('shows__card-list')

            //Containers for title & list elements (Children)
            let showsDateCtn = document.createElement("div");
            showsDateCtn.classList.add('shows__card-date--ctn');

            let showsVenueCtn = document.createElement("div");
            showsVenueCtn.classList.add('shows__card-venue--ctn');

            let showsLocCtn = document.createElement("div");
            showsLocCtn.classList.add('shows__card-location--ctn');

            let showsBtnCtn = document.createElement("div");
            showsBtnCtn.classList.add('shows__card-button--ctn');

            // Create the table titles elements
            let showsHeader = document.createElement("div");
            showsHeader.classList.add('shows__card-header');
        
            let showsTbTitleDate = document.createElement("h3");
            showsTbTitleDate.classList.add('shows__card-title--tb');
            showsTbTitleDate.innerHTML = "Date";
    
            let showsTbTitleVenue = document.createElement("h3");
            showsTbTitleVenue.classList.add('shows__card-title--tb');
            showsTbTitleVenue.innerHTML = "Venue";
    
            let showsTbTitleLoc = document.createElement("h3");
            showsTbTitleLoc.classList.add('shows__card-title--tb');
            showsTbTitleLoc.innerHTML = "Location";
    
            let showsTbBlank = document.createElement("h3");
            showsTbBlank.classList.add('shows__card-title--tb');

            //Venue, Date, Location
            let showsVenue = document.createElement("h3");
            showsVenue.classList.add('shows__card-title');
            showsVenue.classList.add('shows__card-title--hide');
            showsVenue.innerHTML = "Venue";

            let showsVenueInfo = document.createElement("h4");
            showsVenueInfo.classList.add('shows__card-text');
            showsVenueInfo.textContent = show.place;

            let showsLocation = document.createElement("h3");
            showsLocation.classList.add('shows__card-title');
            showsLocation.classList.add('shows__card-title--hide');
            showsLocation.innerHTML = "Location";

            let showsLocationInfo = document.createElement("h4");
            showsLocationInfo.classList.add('shows__card-text');
            showsLocationInfo.textContent = show.location;

            let showsDate = document.createElement("h3");
            showsDate.classList.add('shows__card-title');
            showsDate.classList.add('shows__card-title--hide');
            showsDate.innerHTML = "Date"

            let showsDateInfo = document.createElement("h4");
            showsDateInfo.classList.add('shows__card-text');
            let dateMs = show.date;
            let date = new Date(dateMs);
            showsDateInfo.textContent = date.toDateString();

            //Button
            let showsBuyButton = document.createElement("button");
            showsBuyButton.classList.add('shows__button');
            showsBuyButton.textContent = 'Buy Tickets';

            //Divider
            let showsDvd = document.createElement("hr");
            showsDvd.classList.add('divider');
        
            //append elements together

            //append to showsCard
            showsCard.appendChild(showsList);

            //append to showsList
            showsList.appendChild(showsDateCtn);
            showsList.appendChild(showsVenueCtn);
            showsList.appendChild(showsLocCtn);
            showsList.appendChild(showsBtnCtn);

            //append to date container
            showsDateCtn.appendChild(showsDate);
            showsDateCtn.appendChild(showsDateInfo);

            //append to venue container
            showsVenueCtn.appendChild(showsVenue);
            showsVenueCtn.appendChild(showsVenueInfo);

            //append to location container
            showsLocCtn.appendChild(showsLocation);
            showsLocCtn.appendChild(showsLocationInfo);

            //append to button container
            showsBtnCtn.appendChild(showsBuyButton);
            // Append table titles to showsContainer
            // showsContainer.appendChild(showsHeader);
            showsHeader.appendChild(showsTbTitleDate);
            showsHeader.appendChild(showsTbTitleVenue);
            showsHeader.appendChild(showsTbTitleLoc);
            showsHeader.appendChild(showsTbBlank);
        
            document.querySelector(".shows").append(showsCard);
            document.querySelector(".shows").append(showsDvd);
            });
        })
        .catch(function (error) {
        console.log(error)
        });
  }
displayShows();

    