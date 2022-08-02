//generate a web to display  teams info like email and github profile
//HTML file is generated that displays formatted team info based on user input



//array with the same questions for team members or employees to input 
let teamQuestions = [ 
    {
        type: 'input',
        message: (prompt) => prompt.role ? `Enter the ${prompt.role}'s name` : `Enter the Team Managers's name`,
        name: 'employeeName'
    },
    {
        type: 'input',
        message: (prompt) => prompt.role ? `Enter the ${prompt.role}'s employee ID` : `Enter the Team Managers's employee ID`,
        name: 'id'
    },
    {
        type: 'input',
        message: (prompt) => prompt.role ? `Enter the ${prompt.role}'s email address` : `Enter the Team Managers's email address`,
        name: 'email'
    },
]

function init(){}

// array containing all team employee objects
let teamObjects = [
] 



init()