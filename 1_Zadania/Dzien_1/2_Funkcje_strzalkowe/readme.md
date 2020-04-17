<img src="http://coderslab.pl/img/coderslab-logo.png" width="400"/>

# ES6 Dzień 1 - Funkcje strzałkowe

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak, aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Dzien_1/2_Funkcje_strzalkowe`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**

## Ważne!
W tych zadaniach, **nie należy** używać metody `for`. Należy korzystać z metod tablicowych.

## Zadania do samodzielnego wykonania

### Zadanie 1 - `js/task01.ja`

W pliku `js/task01.js` znajdują się funkcje napisane w standardowy sposób. Twoim zadaniem jest przerobienie ich na **funkcje strzałkowe**, tak aby ich wywołania nie powodowały błędów.

---

### Zadanie 2 - `js/task02.ja`

Napisz **funkcję strzałkową** `getSecondMaxNumber(array)`, która jako argument przyjmuje tablicę. 

Funkcja **ma zwrócić** drugą największą liczbę w tablicy.

Przykład:
```js
const arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];
console.log(getSecondMaxNumber(arr1));
Wynik w consoli: 49 // Największą liczbą w tablicy jest 100, ale my szukaliśmy drugiej największej więc odpowiedzią musi być 49 w tym przypadku
```

---

### Zadanie 3 - `js/task03.js`

Napisz **funkcję strzałkową** `runInterval(n)`, która jako parametr (`n`) przyjmie liczbę całkowitą od `1 - 10`.

Zmienna `n` ma mieć domyślną wartość `8` w razie wywołania funkcji bez żadnej wartości. 

Wewnątrz funkcji uruchom interwał (`setInterval`) który ma wyświetlać napis "Hello" w konsoli co `500 ms`. 

Napis ten powinien pojawić się określoną ilość razy - ustaloną przez parametr przesłany do funkcji. 

Po osiągnięciu, np. 8 powtórzeń interwału, zostaje wyczyszczony.

Przykład:
```js
runInterval(3);

"Hello" // wait 500 ms
"Hello" // wait 500 ms
"Hello" 

// Clear Interval
```

---

### Zadanie 4 - `js/task04.js`

#### Część 1
Dopisz funkcję ```generateLinks```, która na podstawie istniejącej tablicy z nazwami serwisów internetowych stworzy nową tablicę z linkami do tych stron.

Przykład:

Wejściowa tablica: `["google", "twitter", "facebook"]`  
Nowa tablica: `["https://google.com", "https://twitter.com", "https://facebook.com"]`

#### Część 2
W metodzie `insertLinks()` wstaw wygenerowane adresy do listy o id `task04` w pliku `index.html`:

Przykład:
```html
<li><a href="https://google.com">https://google.com</a></li>
```

