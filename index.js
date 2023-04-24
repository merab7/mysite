import { links } from "/data.js";
// Get the menu bar element and the dropdown menu element
const menuBar = document.getElementById('menubar');
const dropdownMenu = document.getElementById('dropdownmenu');

// Get all the n1-post elements and linkbtn elements
const posts = document.querySelectorAll('.n1-post');
const linkbtns= document.querySelectorAll('.linkbtn');
const buttons= document.querySelectorAll('.golink');
const viewmore=document.getElementById('viewmore');
const homebtns=document.querySelectorAll('.home');
const projectsnavbar=document.querySelectorAll('.projectsinnavbar');  
const logos=document.querySelectorAll('.logotext')
const abouts=document.querySelectorAll('.about')
const fcb=document.getElementById('fcbtn')
const insta=document.getElementById('instbtn')
const gmail=document.getElementById('gmailbtn')
const download=document.getElementById('download')

// Initialize a flag to keep track of whether the menu has been clicked or not
let isClicked = false;

// Add a click event listener to the menu bar element
menuBar.addEventListener('click', function() {
  // If the menu has not been clicked yet, show the dropdown menu
  if (!isClicked) {
    dropdownMenu.style.display = 'flex';
  } 
  // If the menu has been clicked already, hide the dropdown menu
  else {
    dropdownMenu.style.display = 'none';
  }
  // Invert the value of isClicked to toggle the menu state
  isClicked = !isClicked;
});

// Add a click event listener to the document
document.addEventListener('click', function(e) {
  const target = e.target;
  // If the target of the click event is not the menu bar or the dropdown menu, hide the dropdown menu
  if (target !== menuBar && target !== dropdownMenu) {
    dropdownMenu.style.display = 'none';
    isClicked = false;
  }
});

// Hide all link buttons initially
linkbtns.forEach(function(linkbtn) {
  linkbtn.style.display = 'none';
});

// For each post, add a click event listener
posts.forEach(function(post) {
  post.addEventListener('click', function() {
    // Find the link button inside the clicked post
    const linkbtn = post.querySelector('.linkbtn');
    // Toggle the link button's display between 'none' and 'flex'
    linkbtn.style.display = (linkbtn.style.display === 'none') ? 'flex' : 'none';
  });
});

// For each button, add a click event listener
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the id of the button
    const id = button.getAttribute('id');
    // Get the link associated with the id from the links object
    const link = links[id];
    // Redirect the user to the link
    window.location.href = link;
  });
});




logos.forEach(function(logo){

  logo.addEventListener('click', function(){
  
    window.location.href = "index.html";
  
  })
  
  })

// Add a click event listener to each home button
homebtns.forEach(function(homebtn) {
  homebtn.addEventListener('click', function() {
    // Redirect the user to the home page
    window.location.href = "index.html";
  });
});


  projectsnavbar.forEach(function(projectbtn){

    projectbtn.addEventListener('click', function(){
    
      window.location.href = "project.html";
    
    });
    
    });

    abouts.forEach(function(about){

      about.addEventListener('click',function(){
    
        window.location.href = "aboutme.html";
    
      })
    
    
    })
    

viewmore.addEventListener('click', function(){
  window.location.href = "project.html";
})





fcb.addEventListener('click',function(){

  window.location.href = "https://www.facebook.com/merabi.todua/";

})

insta.addEventListener('click',function(){

  window.location.href = "https://www.instagram.com/merab_todua0/";

})


gmail.addEventListener('click', function(){

  window.location.href = "https://mail.google.com/mail/?authuser=2&ogbl";

})

download.addEventListener('click',function(){

  window.location.href='https://drive.google.com/file/d/1jBgrzKa9gn0vzke2stdVbVmD9j5QU6_X/view?usp=sharing'

})