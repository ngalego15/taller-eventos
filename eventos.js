document.addEventListener('DOMContentLoaded', function() {
    var myButton = document.getElementById('myButton');

    myButton.addEventListener('click', function() {
        alert('Hola!');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var myDiv = document.getElementById('myDiv');

    myDiv.addEventListener('click', function() {
        myDiv.stopPropagation();
        alert('Hola! Soy el div');
    });
});
