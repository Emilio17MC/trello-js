require('dotenv').config()

if(!process.env.TOKEN && !process.env.KEY) {
    throw new Error('No hay configuración con API Key y con Token');
}

let Trello = require('trello');
let trello = new Trello(process.env.KEY, process.env.TOKEN);

let cardTitle = `Card Nueva ${new Date()}`;

trello.addCard(cardTitle, "LaunchX Card Description", "62709ba9a6ea1f6af697c652", function(error, trelloCard) {
    if(error) {
        console.log('Could not add new card:', error);
    } else {
        console.log('Added card:', trelloCard);
    }
});