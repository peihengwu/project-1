// DEPENDENCIES (DOM Elements)


// DATA / STATE / GLOBAL VARIABLES
fetch('https://apimeme.com/?ref=apilist.fun')
  .then(response => response.json())
  .then(data => {
    // Do something with the retrieved data
    console.log(data);
  })
  .catch(error => console.error(error));

  const getCatBtn = document.querySelector('#get-cat-btn');
  const getMemeBtn = document.querySelector('#get-meme-btn');
  const imageContainer = document.querySelector('#image-container');
  
  getCatBtn.addEventListener('click', () => {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(response => response.json())
      .then(data => {
        const catImage = data[0].url;
        const imgElement = document.createElement('img');
        imgElement.src = catImage;
        imageContainer.appendChild(imgElement);
      })
      .catch(error => console.error(error));
  });
  
  getMemeBtn.addEventListener('click', () => {
    fetch('https://apilist.fun/api/api-meme')
      .then(response => response.json())
      .then(data => {
        const memeImage = data.image;
        const imgElement = document.createElement('img');
        imgElement.src = memeImage;
        imageContainer.appendChild(imgElement);
      })
      .catch(error => console.error(error));
  });
  



// FUNCTIONS
function getApi() {
var requesturl = "https://apimeme.com/?ref=apilist.fun"

}
// USER INTERACTIONS
// INITIALIZATION

 $.ajax({
  url: meme ,
  method:'Get'
}). then (function (response) {
console.log(response);
})
