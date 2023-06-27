
const makeTeam = (users) => {
    const team1 = [ users[0], users[1]]
    const team2 = [ users[2], users[3]]
    const team3 = [ users[4], users[5]]
    // const team4 = [ users[6], users[7]]
    // const team5 = [ users[8], users[9]]
    // const team6 = [ users[10], users[11]]    
    return {team1, team2, team3}
}

module.exports = {makeTeam}