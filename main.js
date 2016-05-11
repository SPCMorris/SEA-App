
var introduction = {
    begin: "Great! Let's get started. Choose 'Option 1' for the choice on the left or 'Option 2' for the choice on the right.",
    intro: "Who am I? My name is Ryan Morris former US Army Infantryman, entrepreneur and international backpacker extraordin... Anyway, I decided to swtich from my current field to the tech industry via programming and after a lot of research found out about code bootcamps. One of the top programs is Hack Reactor, also known as the “Harvard of boot camps,”  and I interviewed for them awhile back. Well, I wasn’t ready :(. Since then, I have been working on this project to sharpen my skills and try again! This is my very first project, much more to follow. This would be Option 1 (Sound's great man!), and Option 2 (Get to work!)"
};

var questions = {
    1:	"Where do you see yourself? (Mountains, Beaches)",
    2:	"Are you more of an outdoors or indoors person, or both? (Indoors, Outdoors)",
    3:	"Do you consider yourself adventurous? (Kinda, Totally)",
    4:	"Are you that way with food? Adventurous I mean. (Kinda, Totally)",
    5:  "Are you into massages? Learning and or getting? (Getting, Learning)"
};

var Thailand = "You cannot go wrong with Thailand! It is a wonderful country that truely has something for everyone";
var Philippines = "The Philippines isn't as widely trvaelled by backpackers as the others and that is a real shame. If you love the outdoors, especially mountain hikes and beautiful beaches, the Phillipines is for you!";
var Vietnam = "Vietnam is the cheapest destination in South East Asia. The best thing about Vietnam is that it only recently opened up to tourists, compared to the others, and has a ton of local charm. Plus, the Pho!";
var Malaysia = "While Malaysia has great nature scenes I think the cities are where it is at here. Malaysia is a cultural melting pot and it shows. It is also a foodies dream location with so many different fares to choose from!";

/*the arrayQuestions returns an array from the objs so it is easier to iterate through them in order. I used objs to store the questions so that I could easily add or change questions in order.*/
function arrayQuestions(intro, questions) {
    var storage = [], parra, item;
  
    for(parra in intro) {
      storage.push(intro[parra]);
    }
    
    for(item in questions) {
      storage.push(questions[item]);
    }
      return storage;
}

var recommendations = [Thailand, Philippines, Vietnam, Malaysia];

/*numOfQuestions function maintains functionality of the changeQuestion function when additional items are added to introduction and questions*/
var numOfQuestions = function(obj1, obj2) {
var storage = [];
    
    for(var item in obj1) {
        storage.push(item);
    }
    
    for(var el in obj2) {
        storage.push(obj2);
    }
    
    return storage.length;
};

//Used to each time the button is pressed to iterate through the questions
var buttonPress = -1;
function changeQuestion() {
var replacedText, changeText, replacedButtonText1, changeButtonText1, replacedButtonText2, changeButtonText2;
buttonPress++;
    
   
    if(buttonPress <= arrayQuestions(introduction,questions).length) {
        //Iterate through questions
        replacedText = document.getElementsByClassName("questions");
        changeText = replacedText[0].innerHTML = arrayQuestions(introduction,questions)[buttonPress];
        //change button 1 text 
        replacedButtonText1 = document.getElementsByClassName("button1");
        changeButtonText1 = replacedButtonText1[0].innerHTML = "Option 1";
         //change button 2 text 
        replacedButtonText2 = document.getElementsByClassName("button2");
        changeButtonText2 = replacedButtonText2[0].innerHTML = "Option 2";
    } else if(buttonPress === numOfQuestions(questions, introduction)) {
        replacedText = document.getElementsByClassName("questions");
        changeText = replacedText[0].innerHTML = "That's it! Press any button one more time for your recommendation.";
        replacedButtonText1 = document.getElementsByClassName("button1");
        changeButtonText1 = replacedButtonText1[0].innerHTML = "Where am I going?";
        replacedButtonText2 = document.getElementsByClassName("button2");
        changeButtonText2 = replacedButtonText2[0].innerHTML = "Bag's are already packed!";
    }
    
    if(buttonPress === numOfQuestions(questions,introduction)) {        //make buttonPress dynamic
        recommendation();
    }
    
    //final recoomendation
    function recommendation() {
    var totalScore = Math.floor(Math.random()*5);  
    var run = 0;   
        
        if(totalScore === 4) {
            replacedText = document.getElementsByClassName("questions");
            changeText = replacedText[0].innerHTML = recommendations[3]; 
            geo = coordinates["Malaysia"];
            zoom = 6;
            initMap();
        } else if(totalScore === 3) {
            replacedText = document.getElementsByClassName("questions");
            changeText = replacedText[0].innerHTML = recommendations[2];
            geo = coordinates["Vietnam"];
            zoom = 6;
            initMap();
        } else if(totalScore === 2) {
            replacedText = document.getElementsByClassName("questions");
            changeText = replacedText[0].innerHTML = recommendations[1];
            geo = coordinates["Philippinese"];
            zoom = 6;
            initMap();
        } else {
            replacedText = document.getElementsByClassName("questions");
            changeText = replacedText[0].innerHTML = recommendations[0];
            geo = coordinates["Thailand"];
            zoom = 6;
            initMap();
        }  
        run++;
        if(run === 1) {
            replacedButtonText1 = document.getElementsByClassName("button1");
            changeButtonText1 = replacedButtonText1[0].innerHTML = "Click me for an awesome travel site! P.S: It's gonna happen anyway.";
            replacedButtonText2 = document.getElementsByClassName("button2");
            changeButtonText2 = replacedButtonText2[0].innerHTML = "Click me twice to try again! P.S: Gonna reset you anyway. : ) ";
        }
        
    }
    
    //resets and redirects
        if(buttonPress === numOfQuestions(questions,introduction) + 1) {
            openNewPage();
           } 
        if(buttonPress === numOfQuestions(questions,introduction) + 2) {
            resetPage();
           }
    
    //functions to open a new page for more info and to reset the page
    function openNewPage() {
        window.open("http://www.travelfish.org/");
    }
    function resetPage () {
        window.location.reload();
    }
}

/*Array containing the locations of each country as an object of latitude and longitude coordinates. Positioning coorespondes with the recommendations array*/ 
var coordinates = {
    "Thailand": {lat: 15.707663, lng: 100.634766}, 
    "Philippinese": {lat: 14.562318, lng: 120.981445}, 
    "Vietnam": {lat: 13.710035, lng: 108.413086}, 
    "Malaysia": {lat: 3.096636, lng: 101.645508}, 
    "SEA": {lat: 10.228437, lng: 113.15918}
};   

/*generates the map using Google Map API. I used the variables geo and zoom to allow the map to change coordinates and zoom amount based on recommendation*/
var geo = coordinates["SEA"];
var zoom = 3;
var map;

function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
  center: geo,
  zoom: zoom
});
}

