document.getElementById('favoritesForm').addEventListener('submit', function(event) {
    //helps to not reload the page with every click of the button
    event.preventDefault();
/*
    Hey Jarrett. for this page it includes both the form and questionaire because im lazy but hey it follows the 
    instruction. Small bit of validation but it works.
*/

    let favoriteFood = document.getElementById('favoriteFood').value.trim().toLowerCase();
    let favoriteColor = document.getElementById('favoriteColor').value.trim().toLowerCase();
    let zodiacSign = document.getElementById('zodiacSign').value.trim().toLowerCase();

    if (!favoriteFood || !favoriteColor || !zodiacSign) {
        alert('Please fill out all fields!');
        return;
    }

    let commonFood = "hamburger";
    let commonColor = "blue";
    let commonSign = "scorpio";

    let foodMessage = document.getElementById('food');
    let colorMessage = document.getElementById('color');
    let signMessage = document.getElementById('sign');

    if (favoriteFood === commonFood) {
        foodMessage.innerText = "You are common! The most picked food is Hamburger.";
        foodMessage.style.color = 'green';
    } else {
        foodMessage.innerText = "You are not common. The most picked food is Hamburger.";
        foodMessage.style.color = 'red';
    }

    if (favoriteColor === commonColor) {
        colorMessage.innerText = "You are common! The most picked color is Blue.";
        colorMessage.style.color = 'green';
    } else {
        colorMessage.innerText = "You are not common. The most picked color is Blue.";
        colorMessage.style.color = 'red';
    }

    if (zodiacSign === commonSign) {
        signMessage.innerText = "You are common! The most picked sign is Scorpio.";
        signMessage.style.color = 'green';
    } else {
        signMessage.innerText = "You are not common. The most picked sign is Scorpio.";
        signMessage.style.color = 'red';
    }
});
