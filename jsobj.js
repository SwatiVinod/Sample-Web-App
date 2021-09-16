var app = new window.Webex.Application();
const APP_URL = 'https://swativinod.github.io/Sample-Web-App/'

app.onReady().then(function () {
    console.log("App is ready, getting user info...", {})
    updateColorTheme(app.theme)
    app.context.getUser().then(
        function (user) {
            console.log('Here '+user)
        }
    ).catch(
        function (error) {
            console.log("getUser promise rejected with " + error.message, {});
        })
    // Create listener for application:themeChanged event
    app
       .listen().then(
           function () {
               app.on('application:themeChanged', (theme) => {
                   // Call function to update CSS based on new theme
                   updateColorTheme(theme);
               })
           }
       )
       .catch(function (reason) {
               console.log("listen.then() failed with error: " + Webex.Application.ErrorCodes[reason])
           }
       )
}
)

function updateColorTheme(theme) {
     console.log('SWati - '+window.location.href);
     switch (theme) {
         case "LIGHT":
             document.getElementById('home-page').classList.remove('container');
             document.getElementById('home-page').classList.add('containerlight');
             break;
         case "DARK":
             document.getElementById('home-page').classList.remove('containerlight');
             document.getElementById('home-page').classList.add('container');
             break;
         default:
             break;
     }
 }

function handleSetShareUrl() {
  //var url = document.getElementById("shareUrl").value
  app.setShareUrl(APP_URL);
  console.log('setShareUrl()', {message:'Set URL to share: ',url:APP_URL})
}

function handleClearShareUrl() {
  app.clearShareUrl();
  console.log('clearShareUrl()', {message:'Cleared shared URL'})
}

function openIceBreaker() {
  window.location.href = "icebreaker.html";
}
function spyfall() {
  window.location.href = "https://www.spyfall.app/"
}

function fishBowl(){
     window.location.href = "https://fishbowl-game.com/"
}

function openStressBuster(){
    window.location.href = "stressBuster.html";
}

function pictionary(){
    window.location.href = "https://skribbl.io/"
}

function bingo(){
     window.location.href = "https://myfreebingocards.com/mfbc"
}

function openTrivia(){
    window.location.href = "trivia.html";
    switch (app.theme) {
         case "LIGHT":
             document.getElementById('trivia').classList.remove('container');
             document.getElementById('trivia').classList.add('containerlight');
             break;
         case "DARK":
             document.getElementById('trivia').classList.remove('containerlight');
             document.getElementById('trivia').classList.add('container');
             break;
         default:
             break;
     }
    
}

function codewords(){
     window.location.href = "https://netgames.io/games/codewords/"
}

function scattergories(){
     window.location.href = " https://scattergoriesonline.net/"
}

function updateName() {
  let name = '!';
  if(app.isPrivateDataAvailable) {
    let user = await app.context.getUser()
    name = ' '+user.displayName;
    console.log('Got name from framework')
  }
  document.getElementById("Username").innerHTML="Welcome"+ name;
}
// cast =[
//     {  Name:"Millie Bobby Brown", DOB: "19/02/2004", Age: 17,  Place: "Marbella, Spain", 
//      Cast: "Eleven" },
    
//     { Name:"Noah Schnapp", DOB: "03/10/2004", Age: 16,   Place:"Scarsdale, New York",  
//      Cast: "Will Byers" },
    
//     { Name:"Finn Wolfhard", DOB: "23/12/2002", Age: 18,  Place: "Vancouver, Canada", 
//      Cast: "Mike Wheeler" },

//     { Name:"Joe Keery", DOB: "24/04/1992", Age: 18,  Place: "Newburyport, Massachusetts", 
//      Cast: "Steve Harrington" },
    
//     { Name:"Sadie Sink", DOB: "24/04/1992", Age: 18,  Place: "Newburyport, Massachusetts", 
//      Cast: "Mad Max" },

//     { Name:"Natalie Dyer", DOB: "24/04/1992", Age: 18,  Place: "Newburyport, Massachusetts", 
//      Cast: "Nancy Wheeler" },
    
// ];

// function out(n)
// {
//   var a=" ";
//   for(x in cast[n])
//         a="The role '" +cast[n]["Cast"] + "' is enacted by " + cast[n]["Name"] + " who was born on " + cast[n]["DOB"] + " at " + cast[n]["Place"] + " who's current age now is " + cast[n]["Age"] + ".<br>";
//   document.getElementById("list").innerHTML=a;
// }  
