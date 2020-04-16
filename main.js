var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
function teczoweKolory(elm) {
    return __awaiter(this, void 0, void 0, function () {
        var colors, i, wait;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'];
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 3];
                    i++;
                    if (i === colors.length)
                        i = 0;
                    wait = function () { return new Promise(function (res) { return setTimeout(res, 1000); }); };
                    return [4 /*yield*/, wait()];
                case 2:
                    _a.sent();
                    elm.style.backgroundColor = colors[i];
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function showAvatar() {
    return __awaiter(this, void 0, void 0, function () {
        var resp, link, newImage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('https://api.github.com/repos/Microsoft/TypeScript/commits').then(function (response) {
                        return response.json();
                    })];
                case 1:
                    resp = _a.sent();
                    link = resp[0].author.avatar_url;
                    newImage = document.createElement("img");
                    newImage.src = link;
                    newImage.alt = "Zdjęcie autora najnowszego commita";
                    document.body.appendChild(newImage);
                    return [2 /*return*/];
            }
        });
    });
}
function Fib(i) {
    if (i === 0)
        return 1;
    return Fib(i - 2) + Fib(i - 1);
}
function checkForm() {
    var elImie = document.getElementById("imie");
    if (elImie.value === "")
        return false;
    var elNazw = document.getElementById("nazwisko");
    if (elNazw.value === "")
        return false;
    var elData = document.getElementById("data");
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + (month) + "-" + (day);
    if (elData.value < today)
        return false;
    return true;
}
function formSubmit() {
    var elRez = document.querySelector("div.potwierdzenie");
    var elFor = document.getElementById("formularz");
    var elImie = document.getElementById("imie");
    var elNazw = document.getElementById("nazwisko");
    var elData = document.getElementById("data");
    var elSkad = document.getElementById("skad");
    var elDokad = document.getElementById("dokad");
    elRez.innerHTML = elRez.innerHTML + "<br> Imię : " + elImie.value;
    elRez.innerHTML = elRez.innerHTML + "<br> Nazwisko : " + elNazw.value;
    elRez.innerHTML = elRez.innerHTML + "<br> Skąd : " + elSkad.value;
    elRez.innerHTML = elRez.innerHTML + "<br> Dokąd : " + elDokad.value;
    elRez.innerHTML = elRez.innerHTML + "<br> Data : " + elData.value;
    elRez.style.display = "block";
}
zaloguj("Ja", "cię", "nie", "mogę");
var jsonString = "{\n\n\t\"piloci\": [\n\n\t\t\"Pirx\",\n\n\t\t\"Exupery\",\n\n\t\t\"Idzikowski\",\n\n\t\t\"G\u0142\u00F3wczewski\"\n\n\t],\n\n\t\"lotniska\": {\n\n\t\t\"WAW\": [\"Warszawa\", [3690, 2800]],\n\n\t\t\"NRT\": [\"Narita\", [4000, 2500]],\n\n\t\t\"BQH\": [\"Biggin Hill\", [1802, 792]],\n\n\t\t\"LBG\": [\"Paris-Le Bourget\", [2665, 3000, 1845]]\n\n\t}\n\n}";
function sprawdzDaneLiniiLotniczej(dane) {
    return dane && dane.piloci && dane.lotniska && dane.piloci.isArray && dane.piloci.isArray;
}
// Ukrycie przycisku submit.
var submit = document.querySelector('input[type=submit]');
submit.style.display = "none";
var el = document.querySelector("div.potwierdzenie");
el.style.display = "none";
// Stworzenie paragrafu na dole body.
var nowyElement = document.createElement("p");
var beforeElement = document.getElementById("ostatni");
nowyElement.innerHTML = "To paragraf stworzony w typescript.";
document.body.appendChild(nowyElement);
// 2-sekundowy timeout.
function timeout() {
    setTimeout(function () {
        console.log("No już wreszcie.");
    }, 2000);
}
timeout();
// Tęczowe kolory.
var listaElement = document.getElementById("loty");
teczoweKolory(listaElement);
// Pokazywanie zdjęcia autora najnowszego commita.
showAvatar();
// Zmiana koloru tła po naciśnięciu.
var elGrid = document.getElementById("grid");
var elRezw = document.getElementById("rezerwacja");
var ileKlik = 0;
elGrid.onclick = function () {
    var color = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
    elGrid.style.backgroundColor = color;
    ileKlik++;
    console.log(Fib(10 * ileKlik));
};
elRezw.onclick = function (event) {
    event.stopPropagation();
};
// Sprawdzanie poprawności formularza.
elRezw.onchange = function () {
    if (checkForm())
        submit.style.display = "inline";
};
