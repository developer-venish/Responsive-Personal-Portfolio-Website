let sections = document.querySelectorAl1('section');
let navlinks = document.querySelectorAl1('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.queryselector('header nav a[href*=' + id + ']').classList.add('active');

            });
        }
    });
}