const videoYtbLazy = document.getElementById('videoYtbLazy');

videoYtbLazy.addEventListener('click', SVGAnimatedvideoYtbLazy);
function snippetvideoYtbLazyPlay(evt) {
    evt.currentTarget.removeEventListener('click', snippetvideoYtbLazyPlay);


    evt.currentTarget.innerHTML = '<iframe src="https://www.youtube.com/embed/${evt.currentTarget.dataset.id}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> '
}