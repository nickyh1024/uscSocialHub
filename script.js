document.addEventListener('DOMContentLoaded', () => {
    console.log("USC Social Hub is ready!");
});

document.querySelectorAll('section').forEach(section => {
    section.addEventListener('click', () => {
        alert(`You clicked on ${section.querySelector('h2').innerText}`);
    });
}); 