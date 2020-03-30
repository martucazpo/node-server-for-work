
const shapeDiv = document.getElementById('shapeDiv');
const btn = document.getElementById('btn');


btn.addEventListener('click', function(){
    if(shapeDiv.className === 'round'){
        shapeDiv.classList.remove('round');
        shapeDiv.setAttribute('class', 'square');
    } else if(shapeDiv.className === 'square') {
        shapeDiv.classList.remove('square')
        shapeDiv.setAttribute('class', 'round');
    } else {
        console.log('there was a problem...')
    }
});