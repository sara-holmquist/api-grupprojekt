let api_key = 'CNCFz3LTIegsRtNzARWJShPRpuzRXlCjtC0p1K69';
let year;
let month;
let day;

//#region Header
function header() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.nasa.gov/planetary/apod?api_key=CNCFz3LTIegsRtNzARWJShPRpuzRXlCjtC0p1K69");
    xhr.responseType = "json";
    xhr.onload = function () {
document.querySelector(".headerbg").style.backgroundImage = "url('" + xhr.response.url + "')";
    console.log("header visar: " + xhr.response.url);
    };
    xhr.send();
};
header();
//#endregion

// MARS
async function marsRover() {
    year = '2015';
    month = '12';
    day = '11';
    let bild;
       let result = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${year}-${month}-${day}&api_key=${api_key}`)
        .then(response => response.json())
        .then(data => document.getElementById("start_image").src = data.photos[0].img_src);
            
    console.log(`result: ${result}`);
}


// let year = "2020";
// let month = '05';
// let day = '25';

function tellusEpic() {
    let xhr = new XMLHttpRequest();
    let pickedDate = document.querySelector("#date").value;

    xhr.open("GET", "https://api.nasa.gov/EPIC/api/natural/date/" + year + "-" + month + "-" + day + "?api_key=" + api_key);
    
    xhr.responseType = "json";

    document.querySelector("img").onload = function() {
    }

    xhr.onload = function() {
        if (xhr.response.code == 400) {
            document.querySelector("h1").innerText = "Ogiltigt datum";
            document.querySelector("p").innerText = "Välj ett annat";
        }
        else {
            console.log(xhr.response);
            document.querySelector("img").src = "https://epic.gsfc.nasa.gov/archive/natural/" +  year + "/" + month + "/" + day + "/png/" + xhr.response[0].image + ".png";

        }
    };
    xhr.send();
}