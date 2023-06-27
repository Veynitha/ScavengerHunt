const { resolve } = require("path");
const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



const addUsers = async (users) => {
    return new Promise((resolve) => {
            const user = {
                name: "",
                phone: ""
            };
            rl.question("Enter your name : ", function(name) {
                user.name = name
                rl.question("Enter your phone number : ", function(phone){
                    user.phone = phone
                    users.push(user)
                    resolve()
                })
    
            })
        
    })   
}

module.exports = {addUsers}