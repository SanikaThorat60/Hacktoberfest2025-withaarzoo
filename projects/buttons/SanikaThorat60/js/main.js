const button = document.getElementById('orderBtn');

button.addEventListener('click', () => {
    
    button.style.transform = 'scale(0.95)';

    button.style.textShadow = '0 0 20px #ff6b6b, 0 0 35px #57d2df';

    setTimeout(() => {
        button.style.transform = 'scale(1)';
        button.style.textShadow = '0 0 5px #57d2df, 0 0 10px #ff6b6b';
    }, 200);
});
