let homeName = "Brooklyn Nets"
let homeColors = ['Black', 'White']
let homeplayers = {
    'Alan Anderson': 
    {
        number: 0,
        shoe: 16,
        points:22 ,
        rebounds:12 ,
        assists: 12,
        steals: 3,
        blocks: 1,
        slamDunks: 1
    },
    'Reggie Evans':
    {
        number:30 ,
        shoe: 14,
        points: 12,
        rebounds: 12,
        assists: 12,
        steals: 12,
        blocks: 12,
        slamDunks: 7 
    } ,
    'Brook Lopez':
    {
        number: 11,
        shoe: 17,
        points: 17,
        rebounds: 19,
        assists: 10,
        steals: 3,
        blocks: 1,
        slamDunks:15 
    }	,
    'Mason Plumlee':
    {
        number:1 ,
        shoe: 19,
        points: 26,
        rebounds: 12,
        assists: 6,
        steals: 3,
        blocks: 8,
        slamDunks:5 
    } ,
    'Jason Terry':
    {
        number: 31,
        shoe: 15,
        points: 19,
        rebounds: 2,
        assists:2 ,
        steals: 4,
        blocks: 11,
        slamDunks: 1
    }
}

let awayName = "Charlotte Hornets"
let awayColors = ['Turquoise', 'Purple']
let awayplayers = {
    'Jeff Adrien': 
    {
        number: 4,
        shoe: 18,
        points:10 ,
        rebounds:1 ,
        assists: 1,
        steals: 2,
        blocks: 7,
        slamDunks: 2
    },
    'Bismak Biyombo':
    {
        number:0 ,
        shoe: 16,
        points: 12,
        rebounds: 4,
        assists: 7,
        steals: 7,
        blocks: 15,
        slamDunks: 10 
    } ,
    'DeSagna Diop':
    {
        number: 2,
        shoe: 14,
        points: 24,
        rebounds: 12,
        assists: 12,
        steals: 4,
        blocks: 5,
        slamDunks:5 
    }	,
    'Ben Gordon':
    {
        number:8 ,
        shoe: 15,
        points: 33,
        rebounds: 3,
        assists: 2,
        steals: 1,
        blocks: 1,
        slamDunks:0 
    } ,
    'Brendan Haywood':
    {
        number: 33,
        shoe: 15,
        points: 6,
        rebounds: 12,
        assists:12 ,
        steals: 22,
        blocks: 5,
        slamDunks: 12
    }
}

function gameObject(){

    return {
        home:
        {
            teamName : homeName,
            colors: homeColors,
            players:  homeplayers
        } ,
        away: 
        {
            teamName : awayName,
            colors: awayColors,
            players: awayplayers

        }
    }
}


function homeTeamName(){

    return gameObject()['home']['teamName']
}

function numPointsScored(name){
    
    let playerPoints = ""

    if ((gameObject()['home']['players'][name]))
    {
        playerPoints = gameObject()['home']['players'][name]['points']
        return playerPoints
    }
    else if ((gameObject()['away']['players'][name]))
    {
        playerPoints = gameObject()['away']['players'][name]['points']
        return playerPoints
    }
    else 
    {
        return ("ERROR : \'" + name + "\' does not exist")
    }
    
}

function shoeSize(name){

    let playerShoe
    let homestuff = Object.entries(gameObject()['home']['players'])
    let awaystuff = Object.entries(gameObject()['away']['players'])

    homestuff.forEach(el => {
        if (el[0]==name)
        {
            playerShoe = el[1].shoe;
        }
    })

    awaystuff.forEach(el => {
        if (el[0]==name)
        {
            playerShoe = el[1].shoe;
        }
    })

    return playerShoe
}

function teamColors(name){
    let clrs;
    Object.entries(gameObject()).forEach(el => el.forEach(lol=> 
        {
            if (lol.teamName == name)
            {
            clrs = lol.colors
            }
        }
        ))
    return clrs

}


function teamNames(){
    let arr =[];
let thing = Object.values(gameObject())
thing.map((e)=>{arr.push(e.teamName)})
return arr
}

function playerNumbers(name){
    let arr = []
    let obj = Object.values(gameObject())
    obj.forEach((e)=>{
        if (e.teamName == name)
        {
            Object.values(e.players).forEach(e=>arr.push(e.number))
        }
    })

    return arr;
}

function playerStats(name){

    let stuff;
    let obj = Object.values(gameObject())

    obj.forEach(e =>{
        Object.keys(e.players).forEach(el => {
            if (el==name)
            {
                stuff = e.players[el]
            }
         })

    })

    return stuff
}

function bigShoeRebounds(){
    let temp = 0;
    let tempRebound;
    let obj = Object.values(gameObject())
    obj.forEach(e=>{
        Object.values(e.players).forEach(el => {
            if (el.shoe > temp)
             {
                temp = el.shoe
                tempRebound = el.rebounds; 
             }
        })
        
    })
    return tempRebound;
}


console.log(bigShoeRebounds())