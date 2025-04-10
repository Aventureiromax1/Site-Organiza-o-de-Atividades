function toggleAside() {
    const aside = document.querySelector('aside');
    if (aside.style.display === 'none' || !aside.style.display) {
        aside.style.display = 'block';
    } else {
        aside.style.display = 'none';
    }
}