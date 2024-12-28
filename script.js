document.addEventListener('DOMContentLoaded', () => {
    console.log("USC Social Hub is ready!");

    //Fetch restuarants from the server
    fetch('/api/food')
        .then(response => response.json())
        .then(data => {
            const foodSection = document.getElementById('food-list');
            data.forEach(resto => {
                const item = document.createElement('li');
                item.innerText = `${resto.name} - ${resto.type} (${resto.distnace})`;
                item.classList.add('restaurant-item'); 
                foodSection.appendChild(item);
            });
        });
});

document.querySelectorAll('section').forEach(section => {
    section.addEventListener('click', () => {
        alert(`You clicked on ${section.querySelector('h2').innerText}`);
    });
});