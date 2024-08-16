function WhosPaying(names) {
    var names = ["Ana", "Iasmin", "Livia", "Alfrisio", "Giulia", "Filipe"];

    var numberOfPeople = names.length;

    var randomPeoplePosition = Math.floor(Math.random()*numberOfPeople);

    var random = names[randomPeoplePosition];

    return random + " is going to pay lunch today";
}