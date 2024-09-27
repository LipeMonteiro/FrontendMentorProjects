let cQuestion = document.querySelectorAll('.container__question')
let item = document.querySelectorAll('.container__item')


cQuestion.forEach(element => {
    element.addEventListener('click', function(){
        item.forEach(q => {
            q.classList.toggle('show')
        })
    })
});