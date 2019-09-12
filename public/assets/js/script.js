

const friends = [
    { name: "Elvira", img: "assets/images/female1.jpg", gender: "female", age: "34", interest: "male", eval: [5, 4, 3, 2, 1, 4, 3, 2, 1, 5] },
    { name: "Margot", img: "assets/images/female2.jpg", gender: "female", age: "48", interest: "male", eval: [4, 3, 2, 1, 2, 3, 4, 5, 4, 3] },
    { name: "Michelle", img: "assets/images/female3.jpg", gender: "female", age: "25", interest: "female", eval: [3, 2, 1, 2, 3, 4, 5, 4, 3, 2] },
    { name: "Julian", img: "assets/images/male1.jpg", gender: "male", age: "23", interest: "male", eval: [2, 1, 2, 3, 4, 5, 4, 3, 2, 1] },
    { name: "Kamilo", img: "assets/images/male2.jpg", gender: "male", age: "36", interest: "female", eval: [1, 2, 3, 4, 5, 4, 3, 2, 1, 2] },
    { name: "Sebastian", img: "assets/images/male3.jpg", gender: "male", age: "38", interest: "female", eval: [2, 3, 4, 5, 4, 3, 2, 1, 2, 3] },
    { name: "MariaElena", img: "assets/images/female4.jpg", gender: "female", age: "54", interest: "female", eval: [2, 1, 2, 3, 4, 5, 4, 3, 2, 1] },
    { name: "Rodrigo", img: "assets/images/male4.jpg", gender: "male", age: "34", interest: "both", eval: [1, 2, 3, 4, 5, 4, 3, 2, 1, 2] },
    { name: "Gloria", img: "assets/images/female5.jpg", gender: "female", age: "26", interest: "male", eval: [2, 3, 4, 5, 4, 3, 2, 1, 2, 3] },
    { name: "Amy", img: "assets/images/female6.jpg", gender: "female", age: "23", interest: "male", eval: [3, 4, 5, 4, 3, 2, 1, 2, 3, 4] },
    { name: "Peter", img: "assets/images/male5.jpg", gender: "male", age: "28", interest: "both", eval: [4, 5, 4, 3, 2, 1, 3, 4, 5, 4] },
    { name: "David", img: "assets/images/male6.jpg", gender: "male", age: "47", interest: "female", eval: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5] },
    { name: "Candace", img: "assets/images/female7.jpg", gender: "female", age: "27", interest: "female", eval: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
    { name: "Carlos", img: "assets/images/male7.jpg", gender: "male", age: "36", interest: "male", eval: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3] },
    { name: "Franchesca", img: "assets/images/female8.jpg", gender: "female", age: "24", interest: "female", eval: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4] },
    { name: "Fabian", img: "assets/images/male8.jpg", gender: "male", age: "38", interest: "male", eval: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2] },
    { name: "Nikolas", img: "assets/images/male9.jpg", gender: "male", age: "32", interest: "male", eval: [1, 2, 1, 2, 1, 2, 1, 2, 1, 2] },
    { name: "Alejandro", img: "assets/images/male10.jpg", gender: "male", age: "31", interest: "both", eval: [4, 2, 4, 2, 4, 2, 4, 2, 4, 2] },
    { name: "Priscilla", img: "assets/images/female9.jpg", gender: "female", age: "33", interest: "male", eval: [1, 5, 1, 5, 1, 5, 1, 5, 1, 5] }
];

let selectedAns;
let possibleOne = "";
let possibleOneValue = 0;
let possibleTwo = "";
let possibleTwoValue = 0;

$("#btnSubmit").on("click", handleSubmit);



function handleSubmit() {
    if ($("input:checked").length < 10) {
        alert("Please answer all questions")
    };

    selectedAns = $("input:checked");

    for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];

        if (possibleOne == "") {
            possibleOne = friend;
            for (let j = 0; j < friend.eval.length; j++) {
                possibleOneValue += Math.abs(friend.eval[j] - selectedAns[j].value)
            }
        } else {
            possibleTwo = friend;
            for (let j = 0; j < friend.eval.length; j++) {
                possibleTwoValue += Math.abs(friend.eval[j] - selectedAns[j].value)

                if (possibleTwoValue < possibleOneValue) {
                    possibleOne = friend;
                    possibleOneValue = possibleTwoValue;
                    possibleTwoValue = 0;
                };
            };
        };
    };

    $(".container").hide();
    $(".card-img").attr("src", possibleOne.img);
    $(".card").show(1000);
};

