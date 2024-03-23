// Code your solutions in this file

const names = []

function writeCards(names , event){
let thankYouMessage = []
for(let i = 0; i < names.length; i++){
    thankYouMessage.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
}
    return thankYouMessage
}

function countDown(num){
    while(num >= 0){
        console.log(num--)
    }

}


// function writeCards(listName, event) {
//     let newArr = [];
//     for(let i = 0; i < listName.length; i++) {
//         newArr.push(`Thank you, ${listName[i]}, for the wonderful ${event} gift!`);
//     }
//     return newArr;
// }