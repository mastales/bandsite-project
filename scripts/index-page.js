//from event listener "onclick" invoke a function to create post
const createComment = () => {

    //Get the post text 
    let userCommentText = document.querySelector('.data-comment-text').value;
    console.log(userCommentText);

    let userCommentName = document.querySelector('.data-comment-name').value;
    console.log(userCommentName);

    //create a new post component
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
        return day + "/" + (month + 1) + "/" + year;
    }

    let commentDivBtm = document.createElement("div");
    commentDivBtm.classList.add('comment__div--bottom');

    let commentDvd = document.createElement("hr");
    commentDvd.classList.add('divider');

    let commentText = document.createElement("p");
    commentText.classList.add('comment__text');
    commentText.innerHTML = userCommentText;
    
    //append new post component to the post container
    commentCard.appendChild(commentDivLeft);
    commentCard.appendChild(commentDivRight);
    
    commentDivLeft.appendChild(commentImg);

    commentDivRight.appendChild(commentDivMid);
    commentDivRight.appendChild(commentDivBtm);

    commentDivMid.appendChild(commentCardName);
    commentDivMid.appendChild(commentCardDate);

    commentDivBtm.appendChild(commentText);

    commentCard.appendChild(commentDvd);

    document.querySelector(".comment").appendChild(commentCard);
}

const commentButton = document.querySelector(".info__button");
commentButton.addEventListener("click", createComment);

