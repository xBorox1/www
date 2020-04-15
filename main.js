var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function zaloguj() {
    var komunikaty = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        komunikaty[_i] = arguments[_i];
    }
    console.log.apply(console, __spreadArrays(["Ależ skomplikowany program!"], komunikaty));
}
zaloguj("Ja", "cię", "nie", "mogę");
var jsonString = "{\n\n\t\"piloci\": [\n\n\t\t\"Pirx\",\n\n\t\t\"Exupery\",\n\n\t\t\"Idzikowski\",\n\n\t\t\"G\u0142\u00F3wczewski\"\n\n\t],\n\n\t\"lotniska\": {\n\n\t\t\"WAW\": [\"Warszawa\", [3690, 2800]],\n\n\t\t\"NRT\": [\"Narita\", [4000, 2500]],\n\n\t\t\"BQH\": [\"Biggin Hill\", [1802, 792]],\n\n\t\t\"LBG\": [\"Paris-Le Bourget\", [2665, 3000, 1845]]\n\n\t}\n\n}";
function sprawdzDaneLiniiLotniczej(dane) {
    return dane && dane.piloci && dane.lotniska && dane.piloci.isArray && dane.piloci.isArray;
}
var submit = document.querySelector('input[type=submit]');
submit.style.display = "none";
var el = document.querySelector("div.potwierdzenie");
el.style.display = "none";
var nowyElement = document.createElement("p");
var beforeElement = document.getElementById("ostatni");
nowyElement.innerHTML = "To paragraf stworzony w typescript";
document.body.appendChild(nowyElement);
function timeout() {
    setTimeout(function () {
        console.log("No już wreszcie.");
    }, 2000);
}
timeout();
