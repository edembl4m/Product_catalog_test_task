const observer = lozad('.catalog__card-img', {
    loaded: function(el) {
        el.classList.add('loaded'); // Добавьте класс, если изображение загружено
    }
});
observer.observe();