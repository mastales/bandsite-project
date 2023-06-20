//Comments Array to be Display on page load
commentsArr = [
    {
        name: "Connor Walton",
        date: "02/17/2022",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    },
    {
        name: "Emile Beach",
        date: "01/19/2022",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
        name: "Miles Acosta",
        date: "12/20/2022",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
];

const addCommentToArray = (name, date, comment) => {
    commentsArr.push({
      name: name,
      date: date,
      comment: comment
    });
  };

  const displayComments = () => {
    const commentContainer = document.querySelector(".comment");
  
    commentsArr.forEach(comment => {
      let commentCard = document.createElement("div");
      commentCard.classList.add('comment_card');
  
      let commentDivLeft = document.createElement("div");
      commentDivLeft.classList.add('comment__div--left');
  
      let commentImg = document.createElement("img");
      commentImg.classList.add('comment__card-img');
      commentImg.src = "./assets/images/comment_placeholder_img.png";
  
      let commentDivRight = document.createElement("div");
      commentDivRight.classList.add('comment__div--right');
  
      let commentDivMid = document.createElement("div");
      commentDivMid.classList.add('comment__div--middle');
  
      let commentCardName = document.createElement("h3");
      commentCardName.classList.add('comment__card-name');
      commentCardName.innerHTML = comment.name;
  
      let commentCardDate = document.createElement("h4");
      commentCardDate.classList.add('comment__card-date');
      commentCardDate.innerHTML = comment.date;
  
      let commentDivBtm = document.createElement("div");
      commentDivBtm.classList.add('comment__div--bottom');
  
      let commentDvd = document.createElement("hr");
      commentDvd.classList.add('divider');
  
      let commentText = document.createElement("p");
      commentText.classList.add('comment__text');
      commentText.innerHTML = comment.comment;
  
      commentCard.appendChild(commentDivLeft);
      commentCard.appendChild(commentDivRight);
      
      commentDivLeft.appendChild(commentImg);
  
      commentDivRight.appendChild(commentDivMid);
      commentDivRight.appendChild(commentDivBtm);
  
      commentDivMid.appendChild(commentCardName);
      commentDivMid.appendChild(commentCardDate);
  
      commentDivBtm.appendChild(commentText);
  
      commentCard.appendChild(commentDvd);
  
      commentContainer.appendChild(commentCard);
    });
  };
  //function to display comments on page load
  displayComments();

//HANDLE FORM SUBMISSION
const formSubmission = () => {

    //Get the post text 
    let userCommentText = document.querySelector('.data-comment-text').value;
    console.log(userCommentText);

    let userCommentName = document.querySelector('.data-comment-name').value;
    console.log(userCommentName);

    let currentDate = getCurrentDate();

    //ERROR SCRIPTING
    /**
     * The issue here is that it is applying the error styling regardless of rules
     * It also continues to post to the array despite being an error
     */
    const formError = document.querySelectorAll('.data-comment');
    formError.forEach(field => field.classList.add('info__name-form--error'));

    if (!userCommentName || !userCommentText) {
        console.log("rejected");
        formError.forEach(field => {
            field.classList.add('info__name-form--error');
        });
    } else {
        console.log("submitted");
        addCommentToArray(userCommentName, currentDate, userCommentText);
    }

    //Creates visual components of the comment DISPLAY
    let commentCard = document.createElement("div");
    commentCard.classList.add('comment_card');

    let commentDivLeft = document.createElement("div");
    commentDivLeft.classList.add('comment__div--left');

    let commentImg = document.createElement("img");
    commentImg.classList.add('comment__card-img');
    commentImg.src="./assets/images/comment_placeholder_img.png";

    let commentDivRight = document.createElement("div");
    commentDivRight.classList.add('comment__div--right');

    let commentDivMid = document.createElement("div");
    commentDivMid.classList.add('comment__div--middle');

    let commentCardName = document.createElement("h3");
    commentCardName.classList.add('comment__card-name');
    commentCardName.innerHTML = userCommentName;

    //Code to create date and add it to the comment
    let commentCardDate = document.createElement("h4");
    commentCardDate.classList.add('comment__card-date');
    commentCardDate.innerHTML = getCurrentDate();

    let commentDivBtm = document.createElement("div");
    commentDivBtm.classList.add('comment__div--bottom');

    let commentDvd = document.createElement("hr");
    commentDvd.classList.add('divider');

    let commentText = document.createElement("p");
    commentText.classList.add('comment__text');
    commentText.innerHTML = userCommentText;
    
    //append new post component to the post container
    //append to commentCard
    commentCard.appendChild(commentDivLeft);
    commentCard.appendChild(commentDivRight);
    
    //append to divLeft
    commentDivLeft.appendChild(commentImg);

    //append to divRight
    commentDivRight.appendChild(commentDivMid);
    commentDivRight.appendChild(commentDivBtm);

    //append to divMid
    commentDivMid.appendChild(commentCardName);
    commentDivMid.appendChild(commentCardDate);

    //append to divBottom
    commentDivBtm.appendChild(commentText);

    //append divider to bottom of comment card
    commentCard.appendChild(commentDvd);

    //append to comment parent
    document.querySelector(".comment").prepend(commentCard);
    
    clearAllInputs();
}

//CODE HOLDING AREA 
function getCurrentDate() {
    const currentDate = new Date();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();
    let year = currentDate.getFullYear();
    return month + "/" + day + "/" + year;
  }
  
function clearAllInputs(event) {
    const allInputs = document.querySelectorAll('input');
    allInputs.forEach(singleInput => singleInput.value = '');
  }
 
const commentButton = document.querySelector(".info__button");
commentButton.addEventListener("click", function(e){
    e.preventDefault();
    formSubmission();
});


