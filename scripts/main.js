var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/testimage1.png') {
        myImage.setAttribute ('src', 'images/testimage2.png');
 } else {
     myImage.setAttribute ('src', 'images/testimage1.png')
}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Counseling psychology is great, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Counseling psychology is great, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

