const observer = lozad('.lozad', {
    loaded: function(el) {
        el.classList.add('loaded');
    }
});
observer.observe();