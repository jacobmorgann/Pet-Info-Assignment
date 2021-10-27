const petsData = [
    {
        petName: "Stella",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation",
        petKind:"dog"
    },
    {
        petName: "Cody",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi",
        petKind: "dog"
    },
    {
        petName: "Mango",
        age: 2,
        weightInKilos: 11,
        breed: "Persian",
        petKind: "cat"
    },

    {
        petName: "Lucy",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python",
        petKind: "snake"
    },

    {
        petName: "Buhmie",
        age: 1,
        weightInKilos: 28,
        breed: "Bull-dog",
        petKind: "dog"
    }
];

var userInput = prompt("Enter a number between 0 and 4: ");
let arraySpace = document.querySelector(".pets");
if (userInput < 5) {
    arraySpace.textContent = petsData[userInput].petName + " the " + petsData[userInput].petKind + " is " + petsData[userInput].age + " years old. This " + petsData[userInput].petKind + " weighs " + petsData[userInput].weightInKilos + " kilos and is a " + petsData[userInput].breed + " breed.";
}
else {
    alert("That is incorrect. The number should be between 0 and 4! ")
}
