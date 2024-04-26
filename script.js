const participants = ["Ada", "Bruce", "Carlos", "Dahlia", "Eugene", "Fana"];
let namesCharacters = 0;
console.log("Participants: " + participants);
const remove = participants.pop("Fana");
console.log("Participants: " + participants);
participants[2] = "Chavo";
console.log("Participants: " + participants);
console.log("Number of participants in the raffle: " + participants.lenght);
for(let i = 0; i < participants.length; i++){
    namesCharacters += participants[i].length;
    console.log(participants[i].length);
    
}
const luckyIndex = namesCharacters % participants.length;
console.log("Congratulations " + participants[luckyIndex]);