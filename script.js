// Load and display events
document.addEventListener('DOMContentLoaded', () => {
    fetch('events.json')
        .then(response => response.json())
        .then(data => {
            const eventList = document.getElementById('event-list');
            data.events.forEach(event => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<strong>${event.name}</strong> - ${event.date}`;
                eventList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error loading events:', error));
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});