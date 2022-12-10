// Mega Menu
let otherLinks = document.querySelector(".other-links");
let megaMenu = document.querySelector(".mega-menu");

 //Show or Hide mega-menu when ckicking on the other links in navbar
otherLinks.onclick = () => {
 document.body.onclick = (e) => {
  if (e.target.className == "other-links") { //If click was on the other links in navbar
   megaMenu.classList.toggle("mega-clicked");
   otherLinks.classList.toggle("clicked");
  } else { //If click was on the rest of body
   megaMenu.classList.remove("mega-clicked");
   otherLinks.classList.remove("clicked");
  }
 };
};


//Progress bars in skills section
let skillsSection = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".the-progress span");
let percentage = document.querySelector(".skill h3 span");

window.onscroll = () => {
 if (scrollY >= skillsSection.offsetTop - 200) {
  spans.forEach((s) => {
   s.style.width = s.dataset.width;
  });
 }
 //This belong to stats counter
 if (window.scrollY >= section.offsetTop - 300) {
  if (!started) {
   numbers.forEach((num) => startCount(num));
  }
  started = true;
 }
};


//Event Time Counter
let days = document.querySelector(".events .unit span:first-child");
let hrs = document.querySelector(".events .unit:nth-child(2) span:first-child");
let mins = document.querySelector(
 ".events .unit:nth-child(3) span:first-child"
);
let secs = document.querySelector(".events .unit:last-child span:first-child");

let EventDate = new Date(2023, 12, 31, 23, 59, 59).getTime();

let counter = setInterval(() => {
 // Get Date Now
 let dateNow = new Date().getTime();
 let dateDiff = EventDate - dateNow;

 // Get Time Units
 let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
 let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
 let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

 days.innerHTML = days < 10 ? `0${days}` : days;
 hrs.innerHTML = hours < 10 ? `0${hours}` : hours;
 mins.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
 secs.innerHTML = seconds < 10 ? `0${seconds}` : seconds;

 if (dateDiff < 0) {
  clearInterval(counter);
 }
}, 1000);


//Filter Videos in Top Videos section
let lists = document.querySelectorAll(".videos .list ul li");
let img = document.querySelector(".videos .preview img");

lists.forEach((li) => {
 li.onclick = () => {
  lists.forEach((e) => {
   //Remove active class from all lis
   e.classList.remove("active-vid-li");
   //Reset color of span
   e.children[0].style.color = getComputedStyle(
    document.documentElement
   ).getPropertyValue("--main-text-color");
  });

  //Add active class
  li.classList.add("active-vid-li");
  //Get main-color variable to Add It on the span
  li.children[0].style.color = getComputedStyle(
   document.documentElement
  ).getPropertyValue("--main-color");
  
  //Change the image according to li that clicked
  switch (li.dataset.imgNumber) {
   case "1":
    img.src = "imgs/video-preview.jpg";
    break;
   case "2":
    img.src = "imgs/video-preview-2.jpg";
    break;
   case "3":
    img.src = "imgs/video-preview-3.png";
    break;
   case "4":
    img.src = "imgs/video-preview-4.jpg";
    break;
   case "5":
    img.src = "imgs/video-preview-5.png";
    break;
   case "6":
    img.src = "imgs/video-preview-6.jpeg";
    break;
   case "7":
    img.src = "imgs/video-preview-7.jpeg";
    break;

   default:
    console.log("Something went wrong!");
    break;
  }
 };
});


//Stats Stats counter
let numbers = document.querySelectorAll(".stats .box .number");
let section = document.querySelector(".stats");
let started = false;

//this function called by onscroll function in skill bar code in the top
function startCount(el) {
 let goal = el.dataset.goal;
 let count = setInterval(() => {
  el.textContent++;
  if (el.textContent == goal) {
   clearInterval(count);
  }
 }, 2000 / goal);
}
