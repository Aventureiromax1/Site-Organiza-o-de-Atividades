function toggleAside() {
    const aside = document.querySelector('aside');
    if (aside.style.display === 'none' || !aside.style.display) {
        aside.style.display = 'block';
        aside.style.maxWidth = '10rem';
        aside.style.backgroundColor = '#f0f0f0';
    } else {
        aside.style.display = 'none';
    }
}