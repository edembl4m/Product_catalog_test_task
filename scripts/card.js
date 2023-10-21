let cards = document.querySelectorAll('.catalog__card');
let bottom = document.querySelectorAll('.catalog__card-bottom');


for(let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('mouseover', function() {
        this.classList.add('test');
        bottom[i].classList.add('dop');
    });
    cards[i].addEventListener('mouseout', function(){
        this.classList.remove('test');
        bottom[i].classList.remove('dop');
    });
}