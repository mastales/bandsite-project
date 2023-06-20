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

const submission = document.querySelector(".info__info");
submission.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = e.target.commentName.value;
    const date = e.target.commentDate.value;
    const comment = e.target.comment.value;
    console.log(e.target.commentName.value);

    //error message can go here
    const errorMessage = document.querySelector(".form__error");
    console.log(e.target);

    if (!comment || !name) {
        console.log("rejected");
        errorMessage.classList.add("info__error--incomplete");
    }
    else {
        console.log("submitted");
        commentsList.innerText = "";
        const newCommentObject = {
            name: name,
            comment: comment,
            date: date,
        }; 
        e.target.comment.value = "";
        e.target.commentName.value = "";
        e.target.commentDate.value = "";

        commentsArr.unshift(newCommentObject);
        console.log(newCommentObject);
        displayComment(commentsArr);
    }
    
});



//from event listener "onclick" invoke a function to create post
const createComment = () => {

    //Get the post text 
    let userCommentText = document.querySelector('.data-comment-text').value;
    console.log(userCommentText);

    let userCommentName = document.querySelector('.data-comment-name').value;
    console.log(userCommentName);

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
    commentCardDate.innerHTML = userDate();
    
    function userDate() {
        const d = new Date("June 27, 2023 01:15:00");
        let month = d.getMonth();
        let day = d.getDate();
        let year = d.getFullYear();
        return (month + 1) + "/" + day + "/" + year;
    }

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
    document.querySelector(".comment").appendChild(commentCard);
}

const commentButton = document.querySelector(".info__button");
commentButton.addEventListener("click", createComment);

