<img src="http://coderslab.pl/img/coderslab-logo.png" width="400"/>

# ES6 Dzień 2 - Destructing

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak, aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Dzien_2/4_Destructuring`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**

## Zadanie rozwiązywane z wykładowcą

### Zadanie 0a - `js/task0a.js`

Podstaw pod zmienne pierwszą i ostatnią wartość następującej tablicy: ```[ "snow", "rain", "sun" ]```. Wypisz zmienne w konsoli.

---

### Zadanie 0b - `js/task0b.js`

Stwórz obiekt ```slider```, taki jak poniżej:

```JavaScript
const slider = {
  type: "infinite",
  numberOfItems: 10,
  center: true,
  autoStart: true
}
```

Podstaw do zmiennych ```type``` oraz ```autoStart``` odpowiednie wartości z obiektu ```slider```.


## Zadania do samodzielnego wykonania

### Zadanie 1 - `js/task01.js`

Stwórz tablicę z 3 imionami. Następnie każde imie przypisz do kolejnej zmiennej np. name1, name2, name3. Wykorzystaj destrukturyzację.

---

### Zadanie 2 - `js/task02.js`

Stwórz funkcję ```generateRandomNumbers()```, której zadaniem jest wylosowanie i zapisanie do tablicy 6 liczb (0-5) oraz zwrócenie tej tablicy.
Zapisz do zmiennych pierwszą i trzecią liczbę ze zwróconej tablicy. Wyświetl te zmienne w konsoli.

---

### Zadanie 3 - `js/task03.js`

Stwórz funkcję ```showAnimal()```, która przyjmie obiekt:
```js
const cat = {
  name: "Mruczek",
  age: 10,
  getVoice: () => "miau miau"
};
```

I wyświetli w konsoli: `Kot ${name} ma ${catAge} lat i robi ${getVoice()}`.

#### Warunki
- Zmienna `catAge` powinna zawierać wartość z pola `age`
- Przypisanie wartości kluczy obiektu do zmiennych powinno nastąpić już w procesie deklaracji funkcji (nie w jej ciele)