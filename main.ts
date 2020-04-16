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

let submit = document.querySelector('input[type=submit]');
submit.style.display = "none";

let el = document.querySelector("div.potwierdzenie");
el.style.display = "none";

let nowyElement = document.createElement("p");
let beforeElement = document.getElementById("ostatni");
nowyElement.innerHTML = "To paragraf stworzony w typescript.";
document.body.appendChild(nowyElement);

function timeout() {
setTimeout(() => {
	  console.log("No już wreszcie.");
}, 2000);
}

timeout();

let listaElement = document.getElementById("loty");
teczoweKolory(listaElement);

showAvatar();
