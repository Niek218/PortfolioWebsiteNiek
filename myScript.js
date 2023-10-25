// ___PHOTO/MENU___
// Ik maak 2 variabelen aan: photo en nav.
const photo = document.querySelector('#myPhoto');
const nav = document.querySelector('#myNav');


// Hieronder heb ik .addEventListener() gebruikt en wanneer de muis in het gebied van de foto beweegt, zal de style 'display' bij het navigatiemenu veranderen naar 'block' en de style van de foto veranderen naar 'none'.
photo.addEventListener('mouseenter', () => {
    nav.style.display = 'block';
    photo.style.display = 'none';
});


// Wanneer de muis uit het gebied van de navigatie beweegt, zal de style 'display' bij het navigatiemenu veranderen naar 'none' en de style van de foto veranderen naar 'block'.
nav.addEventListener('mouseleave', () => {
    nav.style.display = 'none';
    photo.style.display = 'block';
});




// ___MUSIC BUTTONS___
function showMusicSongs() {
    const mySongList = document.querySelector("#musicSongs")
    if(mySongList.style.opacity == '0') {
        mySongList.style.opacity = '1';
    } else {
        mySongList.style.opacity = '0';
    }
}




// ___PERSONAL PAGE HOBBY LIST___
if(document.URL.includes("personal.html")) {
    // Array with my hobbies
    const hobbyLijst = ["Music Production", "Fitness", "Guitar", "Learning new things"];

    // Add unordered list to variables
    let hobbies = `<ul id="hobbies">`;

    // ForEach function with that adds list item opening + value (individual hobbies) + list item closing to text variable.
    hobbyLijst.forEach(value => {
        hobbies += "<li>" + value + "</li>";
    })

    // Add ending unorderded list to variable hobbies.
    hobbies += "</ul>"

    // Make it HTML
    document.getElementById("hobbies").innerHTML = hobbies;
}




// ___PROJECT PAGE PROJECTS___




// ___SOCIALBUTTONS___
// Wanneer de muis in het gebied van de 3 puntjes komt zal de positie (in css heb ik dit aangegeven met 'top') van '-8' (de standaard) naar '4' schuiven.
const dots = document.getElementById("myDots");
const socials = document.getElementById("mySocials");

// Hide dots and adjust socials position
dots.addEventListener('mouseenter', () => {
    dots.style.display = 'none';
    socials.style.top = '4%';
})

// Show dots on-screen and move socials off-screen
socials.addEventListener('mouseleave', () => {
    dots.style.display = 'block';
    socials.style.top = '-8%';
})



// ___CONTACTPAGE___
function submitForm() {
    const name = document.getElementById("textName").value;
    const email = document.getElementById("textEmail").value;
    const subject = document.getElementById("textSubject").value;
    const message = document.getElementById("textMessage").value;

    const gegevens = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };
    
    const jsonFile = JSON.stringify(gegevens, null, 2);

    alert(jsonFile);
};




// ___AUTOMATIC AGE__
// When the page is loaded, the code is activated
function AgeCalculator() {
    // Get milliseconds
    const newDate = new Date();
    const newDateMs = newDate.getTime();
    
    // Get current year
    const year = newDate.getFullYear();

    // My birthday in date code
    const myBirthday = new Date(year, 5, 10, 23,59,59);
    const myBirthdayMs = myBirthday.getTime(); 
    
    // Year and day will be connected to the outcome of the functions
    const yearNumber = yearCalculator(year);
    const dayNumber = ageCalculator(newDateMs, myBirthday);

    // Code wordt ingeladen in de 'p' #ageNumbers
    document.querySelector("#ageNumbers").innerHTML = `Hi, I'm Niek. I'm ${yearNumber} years and ${dayNumber} days old. I was born in Leiderdorp and since I was four years old, my parents and I moved to Apeldoorn. Right now I still live in Apeldoorn. <br><br><br> Before I started my study Open-ICT in Utrecht I was working as a pharmacy assistant in the hospital. That's also where I met my girlfriend and right now we live together with our two cats. <br><br><br>   I like to make music. I mainly make electronic music. I also use my guitar or other sounds that are useful for making music.`;

    // Calculating days without the full years: My age in milliseconds will be subtracted from current date in milliseconds. If my birthday (with current year) is bigger than current date, add 365 days.   
    function ageCalculator(currentDate, myBirthday) {
        let calculation = Math.round((currentDate - myBirthday) / (1000 * 60 * 60 * 24));
        if(myBirthday > currentDate) {
            calculation += 365;
        }
        return calculation;
    }

    // Calculating years by subtracting my birth year from the current year. If the date the current date (in ms) is smaller than my birthday, it will add a year.
    function yearCalculator() {
        let total = year - 1995;
        if(newDateMs < myBirthdayMs) {
            total -= 1;
        }
        return total
    }
};

