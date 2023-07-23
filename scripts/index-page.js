let commentContainer = document.querySelector('.comment');
//create  function here (load comments)

function loadComments () {
  axios.get('https://project-1-api.herokuapp.com/comments?api_key=14b3921c-334f-4538-9077-206ad4e84fea')
  .then(response => {
    const responseData = response.data
    console.log(responseData)
    responseData.forEach(comment => {
      let commentCard = document.createElement("div");
      commentCard.classList.add('comment__card');
  
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
      let dateMs = comment.timestamp;
      let date = new Date(dateMs);
      commentCardDate.innerHTML = date.toDateString();
  
      //timestamp is being added
      //I need to capture data from timestamp and convert to 
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
  
      commentContainer.appendChild(commentDvd);
      commentContainer.appendChild(commentCard);
    });
  })
  .catch(function (error) {
    console.log(error)
  });
}
loadComments()


//HANDLE FORM SUBMISSION
const formSubmission = () => {

  //Get the post text 
  let userCommentText = document.querySelector('.data-comment-text').value;
  console.log(userCommentText);

  let userCommentName = document.querySelector('.data-comment-name').value;
  console.log(userCommentName);

  let currentDate = getCurrentDate();

  const formError = document.querySelectorAll('.data-comment');

  if (!userCommentName || !userCommentText) {
    console.log("rejected");
    formError.forEach(field => {
      field.classList.add('info__name-form--error');
    });
  } else {
    console.log("submitted");
    // Prepare the comment data
    const commentData = {
      commenterName: userCommentName,
      userComment: userCommentText
    };
    // Pass the comment data to postComment
    postComment(commentData);
  }

  //Creates visual components of the comment DISPLAY
  let commentCard = document.createElement("div");
  commentCard.classList.add('comment__card');

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

  //append to comment parent
  document.querySelector(".comment").prepend(commentCard);
  document.querySelector(".comment").prepend(commentDvd);

  clearAllInputs();
  //To fix scope issues for postComments() these are returned as an object
  return {
    userCommentText: userCommentText,
    userCommentName: userCommentName
  };
}


//Functions HOLDING AREA 
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
commentButton.addEventListener("click", function (e) {
  e.preventDefault();
  const commentData = formSubmission();
  postComment(commentData);
});

function fetchComments () {
  axios.get('https://project-1-api.herokuapp.com/comments?api_key=14b3921c-334f-4538-9077-206ad4e84fea')
    .then(response => {
    const responseData = response.data
    console.log(responseData)
    })
    .catch(function (error) {
    console.log(error)
  });
}

function postComment(commentData) {
  axios.post('https://project-1-api.herokuapp.com/comments?api_key=14b3921c-334f-4538-9077-206ad4e84fea', {
    commenterName: commentData.userCommentText,
    userComment: commentData.userCommentName,
  })
  .then(function (response) {
    fetchComments();
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}


