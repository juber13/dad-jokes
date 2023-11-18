const api_key = "zU6JPH2koosWwixno58L6g==EsW3QYU63SAV1xTM";
const container = document.getElementsByClassName("container")[0];


const jokes = [
	'Unpacking dad jokes... Handle with extreme laughter!',
	'Gathering puns and dad wisdom... Brace yourself!',
	"Summoning dad-level humor... It's loading slower than a dad joke at a family dinner.",
	"Brewing the perfect dad joke... It's like waiting for your dad to finish a story.",
	'Loading giggles... Warning: may cause uncontrollable laughter.',
	"Spinning the dad joke generator wheel... Hope you're ready for a dad-tastic time!",
	'Assembling dad jokes... This might take longer than a dad taking forever in a hardware store.',
	"Downloading dad jokes... Your patience is appreciated, unlike a dad's dance moves.",
	'Generating dad-approved humor... Please stand by for dad-level wit.',
	"Preparing a fresh batch of dad jokes... Don't worry, it's not as long as a dad's grocery list.",
]


const options = {
    method : "GET",
    headers : {
        "X-Api-Key" : api_key
    }
}

const fetchJokes = async () => {   
    try{
        fetch('https://api.api-ninjas.com/v1/dadjokes?limit=1' , options)
        .then(res =>  res.json())
        .then(data => {
            displayJoke(data);
        })
        // document.getElementsByClassName('loding')[0].classList.remove('active');
    } catch(err){
        console.log(err)
    }
}


const displayJoke = (data) => {
        container.textContent = data[0].joke || jokes[0];
}

function randomejokes(){
   const randomNumber = Math.floor(Math.random() * jokes.length);
   container.innerHTML  = jokes[randomNumber];
}

fetchJokes();

document.getElementById('random-joke').addEventListener('click' , randomejokes)