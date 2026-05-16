let light = document.querySelector('.light');
let dark = document.querySelector('.dark');

light.classList.add('active');

dark.addEventListener('click', () => {
    document.body.classList.add('dark-mode');
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    light.classList.remove('active');
    dark.classList.add('active');
})

light.addEventListener('click', () => {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
    light.classList.add('active');
    dark.classList.remove('active');
})