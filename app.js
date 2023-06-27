console.log("Hello World")

const {addUsers} = require("./assets/users")
const {makeTeam} = require("./assets/team")
const {getRiddle} = require("./assets/riddle")

const users = []

async function main(){
    for(let i = 0; i<1; i++){
        console.log(`Enter user ${i}`)
        await addUsers(users);        
    }    
    const teams = makeTeam(users)
    const riddles = getRiddle()
    console.log(teams.team1)   
    console.log(riddles.riddle1)     
}

main()




