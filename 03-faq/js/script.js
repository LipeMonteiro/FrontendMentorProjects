let iconPlus = document.querySelectorAll('.icon-plus')
let iconMinus = document.querySelectorAll('.icon-minus')
let containerItem = document.querySelectorAll('.container__item')

//Percorre o array com os ícones
iconPlus.forEach((icon, index) => {
    //Evento de click no ícone
    icon.addEventListener('click', function(){ 
        //Acessando o item pai a ser mostrado com o index do ícone
        let item = containerItem[index]
        //Adicionando a classe show no item pai
        item.classList.add('show')
    })
})

iconMinus.forEach((icon, index) => {
    icon.addEventListener('click', function(){
        item = containerItem[index]
        item.classList.remove('show')
    })
})