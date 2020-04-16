function zaloguj(...komunikaty: string[]) {
	console.log("Ależ skomplikowany program!", ...komunikaty);
}

async function teczoweKolory(elm: HTMLElement) {
	const colors : string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'];
	let i = 0;

	while(true) {
		i++;
		if(i === colors.length) i = 0;
		const wait = () => new Promise(res => setTimeout(res, 1000));
		await wait();
		elm.style.backgroundColor = colors[i];
	}
}

async function showAvatar() {
	const resp = await fetch('https://api.github.com/repos/Microsoft/TypeScript/commits').then((response) => 		{
		return response.json();
	});
	const link = resp[0].author.avatar_url;
	const newImage = document.createElement("img");
	newImage.src = link;
	newImage.alt = "Zdjęcie autora najnowszego commita";
	document.body.appendChild(newImage);
}

function Fib(i : number) {
	if(i === 0) return 1;
	return Fib(i - 2) + Fib(i - 1);
}

function checkForm() {
	const elImie = document.getElementById("imie");
	if(elImie.value === "") return false;
	const elNazw = document.getElementById("nazwisko");
	if(elNazw.value === "") return false;
	const elData = document.getElementById("data");
	const now = new Date();
	const day = ("0" + now.getDate()).slice(-2);
	const month = ("0" + (now.getMonth() + 1)).slice(-2);
	const today = now.getFullYear() + "-" + (month) + "-" + (day);
	if(elData.value < today) return false;
	return true;
}

function formSubmit() {
	const elRez = document.querySelector("div.potwierdzenie");
	const elFor = document.getElementById("formularz");
	const elImie = document.getElementById("imie");
	const elNazw = document.getElementById("nazwisko");
	const elData = document.getElementById("data");
	const elSkad = document.getElementById("skad");
	const elDokad = document.getElementById("dokad");
	elRez.innerHTML = elRez.innerHTML + "<br> Imię : " + elImie.value;
	elRez.innerHTML = elRez.innerHTML + "<br> Nazwisko : " + elNazw.value;
	elRez.innerHTML = elRez.innerHTML + "<br> Skąd : " + elSkad.value;
	elRez.innerHTML = elRez.innerHTML + "<br> Dokąd : " + elDokad.value;
	elRez.innerHTML = elRez.innerHTML + "<br> Data : " + elData.value;
	elRez.style.display = "block";
}

zaloguj("Ja", "cię", "nie", "mogę");

let jsonString: string = `{

	"piloci": [

		"Pirx",

		"Exupery",

		"Idzikowski",

		"Główczewski"

	],

	"lotniska": {

		"WAW": ["Warszawa", [3690, 2800]],

		"NRT": ["Narita", [4000, 2500]],

		"BQH": ["Biggin Hill", [1802, 792]],

		"LBG": ["Paris-Le Bourget", [2665, 3000, 1845]]

	}

}`;

interface ILotnisko {
	miasto: string;
	[index: number]: number;
}

interface Pilot {
	nazwa: string;
}

interface ILiniaLotnicza {
	piloci: Pilot[];
	lotniska: ILotnisko[];
}

function sprawdzDaneLiniiLotniczej(dane: any): dane is ILiniaLotnicza {
	return dane && dane.piloci && dane.lotniska && dane.piloci.isArray && dane.piloci.isArray;
}

// Ukrycie przycisku submit.
let submit = document.querySelector('input[type=submit]');
submit.style.display = "none";

let el = document.querySelector("div.potwierdzenie");
el.style.display = "none";

// Stworzenie paragrafu na dole body.
let nowyElement = document.createElement("p");
let beforeElement = document.getElementById("ostatni");
nowyElement.innerHTML = "To paragraf stworzony w typescript.";
document.body.appendChild(nowyElement);

// 2-sekundowy timeout.
function timeout() {
	setTimeout(() => {
		console.log("No już wreszcie.");
	}, 2000);
}

timeout();

// Tęczowe kolory.
let listaElement = document.getElementById("loty");
teczoweKolory(listaElement);

// Pokazywanie zdjęcia autora najnowszego commita.
showAvatar();

// Zmiana koloru tła po naciśnięciu.
let elGrid = document.getElementById("grid");
let elRezw = document.getElementById("rezerwacja");

let ileKlik = 0;

elGrid.onclick = () => {
	const color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
	elGrid.style.backgroundColor = color;
	ileKlik++;
	console.log(Fib(10 * ileKlik));
}

elRezw.onclick = (event) => {
	event.stopPropagation();
}

// Sprawdzanie poprawności formularza.
elRezw.onchange = () => {
	if(checkForm()) submit.style.display = "inline";
}
