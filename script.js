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
    if (titleFieldValue.trim() === '' || artistFieldValue.trim() === '') {
      // Log "Pritul" to the console when titleFieldValue is empty
      errorDisplay.style.display = "block"
    } else {
      // Create new elements and append them to the titleContainer
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

