<img src="http://coderslab.pl/img/coderslab-logo.png" width="400"/>

# ES6 Dzień 2 - Rest / Spread Operator

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak, aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Dzien_2/2_rest_spread_operator`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**

## Zadanie rozwiązywane z wykładowcą

### Zadanie 0a - `js/task0a.js`

Stwórz dwie tablice ```namesA``` i ```namesB```. Pierwsza niech zawiera same stringi.
Druga niech zawiera dwa dowolne stringi, a od trzeciego miejsca te same elementy co tablica ```namesA```. Ostatnie dwa elementy tablicy ```namesB``` to niech będą "Jan" i  "Karol".

Przykład:

```plain
["Zosia", "Marcin", "Kamil"] // Tablica 1
["Ala", "Puszek", "Zosia", "Marcin", "Kamil", "Jan", "Karol" ] // Tablica 2
```

---

### Zadanie 0b - `js/task0b.js`

Stwórz funkcję o nazwie ```getAverage```, która może przyjąć dowolną liczbę parametrów (w postaci liczb) i która zwraca średnią arytmetyczną tych liczb.

Przykład wywołania:

```js
getAverage(2, 4, 5, 6, 7, 79);
```

## Zadania do samodzielnego wykonania

### Zadanie 1 - `js/task01.js`

Stwórz zmienną przechowującą Twoje imię. Za pomocą **operatora rozproszenia** zapisz każdą literkę do tablicy.
Wypisz tablicę w konsoli.

---

### Zadanie 2 - `js/task02.js`

Stwórz dwie tablicę ```fruits``` i ```vegetables```. Następnie stwórz trzecią tablicę ```mix```, która będzie połączeniem obu poprzednich tablic. Użyj **operator rozproszenia**.

---

### Zadanie 3 - `js/task03.js`

W pliku `js/task03.js` znajduje się obiekt `state`. Twoim zadaniem jest stworzenie **jego kopii** w zmiennej `stateCopy` wraz ze zmianą dwóch właściwości: 

- `availableYears` - powinno teraz zawierać tylko lata do `1999` włącznie (użyj odpowiedniej metody tablicowej)
- `isUserLogged` - powinno mieć wartość `true`

Na koniec sprawdź w konsoli czy obiekt `state` pozostał bez zmian.