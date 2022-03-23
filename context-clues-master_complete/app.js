
var friends = ['Bill','Bob','Ted','Sue','Jill'];
var locations = ['hallway','upstairs bathroom','downstairs bathroom','pantry','kitchen','dining room','master bedroom','guest bedroom','cellar','attic']
var weapons = ['knife','baseball bat','JavaScript videos','syntax errors','lack of sleep','gun','shoe','request to work all weekend','paper airplane','board','hammer','lead pipe','rock','ping pong ball','nacho cheese dorito','rice maker','pencil','scizzors','high blood pressure','lack of exercise'];


for (var i = 0; i < 100; i++) {
    var accusation = document.createElement('h3');
    accusation.className = 'accusation';

    accusation.textContent = `Accusation ${i + 1}`
    document.body.appendChild(accusation);


    // This works
    function createFunction() {
        var accusationNum = i + 1;
        var friend = friends[i % 5];
        var location = locations[i % 10];
        var weapon = weapons[i % 20];
        return () => {
            alert(`Accusation ${accusationNum}: I accuse ${friend}, with the ${weapon}, in the ${location}!`);
        }
    }

    var displayAlert = createFunction();

    // I'm not understanding why this does not work
    // var displayAlert = () => {
    //     var accusationNum = i + 1;
    //     var friend = friends[i % 5];
    //     var location = locations[i % 10];
    //     var weapon = weapons[i % 20];
    //     return () => {
    //         alert(`Accusation ${accusationNum}: I accuse ${friend}, with the ${weapon}, in the ${location}!`);
    //     }
    // }



    accusation.addEventListener('click',displayAlert);
}




