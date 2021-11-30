"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const jokeElement = document.getElementById('joke');
const otherJoke = document.getElementById('otherJoke'); // ! es que no va a ser null
otherJoke.addEventListener('click', tellAJoke);
const notGood = document.getElementById('1');
notGood.addEventListener('click', () => scoreJoke(joke, 1));
const regular = document.getElementById('2');
notGood.addEventListener('click', () => scoreJoke(joke, 2));
const goodJoke = document.getElementById('3');
notGood.addEventListener('click', () => scoreJoke(joke, 3));
let joke;
function tellAJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const jokeResult = yield fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        });
        joke = yield jokeResult.json();
        console.log(joke);
        jokeElement.innerHTML = joke.joke; // es el string denro de la interface
    });
}
function scoreJoke(joke, resultado) {
    const jokeReport = {
        joke,
        resultado,
        date: new Date().toISOString()
    };
    jokesReports.push(jokeReport);
    console.log(jokesReports);
}
const jokesReports = [];
//# sourceMappingURL=first.js.map