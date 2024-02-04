if('serviceWorker' in navigator){
  navigator.serviceWorker.register('service-worker.js',{scope:'/'})
    .then((registration) => {
      console.log('Register Success:', registration);
    })
    .catch((error) => {
      console.log('Register Failed:', error);
    });
} else { 
  console.log('Service Workers are not supported');
}



let titleField = document.getElementById('title')
let artistField = document.getElementById('artist')
let titleContainer = document.getElementById('title-container')
let addButton = document.getElementById('add-button')
let errorDisplay = document.getElementById('error')
let titleFieldValue = ''
let artistFieldValue = ''

titleField.addEventListener('input',function(){
    titleFieldValue = titleField.value
})

artistField.addEventListener('input',function(){
    artistFieldValue = artistField.value
})

addButton.addEventListener('click', function () {
    if(titleFieldValue.trim() === '' && artistFieldValue.trim() === ''){
      errorDisplay.style.display = "block"
      errorDisplay.innerHTML = "Input Title & Artist Name"
      console.log(titleFieldValue)
    }
    else if (titleFieldValue.trim() === '') {
      errorDisplay.style.display = "block"
      errorDisplay.innerHTML = "Input Title Name!"
    } else if (artistFieldValue.trim() === ''){
      errorDisplay.style.display = "block"
      errorDisplay.innerHTML = "Input Artist Name!"
    } else {
      errorDisplay.style.display = "none"
      let newPara1 = document.createElement('p');
      let newPara2 = document.createElement('p');
      let divider = document.createElement('hr');
      newPara1.classList.add('bold');
      newPara1.innerHTML = titleFieldValue;
      titleContainer.appendChild(newPara1);
      newPara2.innerHTML = artistFieldValue;
      titleContainer.appendChild(newPara2);
      titleContainer.appendChild(divider);
    }
  });
