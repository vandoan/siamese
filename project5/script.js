function setup() {
  var textInput; 
  textInput = document.getElementById('username'); 
  textInput.focus(); 
}

window.addEventListener('load', setup, false); 
  // when page loads, call setup ()