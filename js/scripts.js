/*
1. prompt per chiedere numero di km da percorrere
2. prompt per chiedere l'età del passeggero

3. imposto una varianta secondo la quale 1km equivale a 0.21€
4. condizionale: 
 - se sei più piccolo di 18 hai uno sconto del 20%
 - se invece sei più grande di 64 hai uno sconto del 40%
 - altrimenti il prezzo è normale
*/



// 1. chiedo numero km
let chilometri = prompt('Quanti chilometri devi percorrere?');
console.log('chilometri da percorrere', chilometri);

// 2. chiedo numero km
let age = prompt('Quanti anni hai?');
console.log('gli anni del passeggero sono', age);

// 3. imposto prezzo biglietto normale poi gli sconti
let ticketPrice = (chilometri * 2 + '€');
console.log('il prezzo del biglietto è', ticketPrice);

// condizioni
if (age < 18){
    ticketPrice = (ticketPrice - ((ticketPrice * 20) / 100));
    alert('il tuo biglietto è ridotto del 20%');
    console.log('il prezzo del biglietto sotto ai 18 è', ticketPrice);
}
else if (age > 65){
    ticketPrice = (ticketPrice - ((ticketPrice * 40) / 100));
    alert('il tuo biglietto è ridotto del 40%');
    console.log('il prezzo del biglietto sopra ai 65 è', ticketPrice);
}
else{
    alert('il prezzo è intero');
    console.log('il prezzo del biglietto intero è', ticketPrice);
}


