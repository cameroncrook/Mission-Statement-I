const themeSelector = document.querySelector('#theme-picker');
themeSelector.addEventListener('change', () => {
    if (themeSelector.value == 'Dark') {
        document.body.classList.add('dark');
        document.querySelector('.logo').src = 'byui-logo_white.png';
    } else {
        document.body.classList.remove('dark');
        document.querySelector('.logo').src = 'byui-logo_blue.webp';
    }
})