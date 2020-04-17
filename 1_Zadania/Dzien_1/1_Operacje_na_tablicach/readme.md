<img src="http://coderslab.pl/img/coderslab-logo.png" align="right" width="400"/>

# ES6 Dzień 1 - Opracje na tablicach

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak, aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Dzien_1/1_Operacje_na_tablicach`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**

## Ważne!
W tych zadaniach, **nie należy** używać metody `for`. Należy korzystać z metod tablicowych.

## Zadanie rozwiązywane z wykładowcą

### Zadanie 0a - `js/task0a.js`

Mając do dyspozycji tablicę z nazwami miast, zwróć i wypisz nową tablicę z ilością liter każdego miasta.

Na przykład dla tablicy miast:
```js
const cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];
```

Wynik powinien być następujący:

```js
[6, 7, 8, 19]
```

## Zadania do samodzielnego wykonania

### Zadanie 1 - `js/task01.js`

Mając do dyspozycji tablicę ze zwierzętami, wypisz kolejne zwierzę w konsoli.

```js
const animals = ["cat", "shrimp", "giraffe"];
```

---

### Zadanie 2 - `js/task02.js`

Mając do dyspozycji tablicę z latami, stwórz nową tablicę, która będzie zawierała wiek osoby urodzonej danego roku. Wyświetl nową tablicę.

```js
const years = [1995, 1856, 2014, 1987];
```

---

### Zadanie 3 - `js/task03.js`

Mając do dyspozycji tablicę z produktami, wyświetl na stronie tylko te które:

- należą do kategorii `car`, 
- ich stan jest `new` i 
- cena nie przekracza `45000`.

Wszystkie produkty powinny znaleźć się na liście `<ul id="all-products"></ul>`. 
Przefiltrowane powinny pojawić się w `<ul id="filtered-products"></ul>`.

Każdy produkt powinien być elementem `li` w przykładowej strukturze:
```html
<li>
  <strong>Nazwa produktu</strong><span>, cena produktu - stan</span>
</li>
```

Tablica z produktami znajduje się w pliku `js/task03.js`.

---

## Dodatkowe - tworzenie funkcji wyższego rzędu
### Zadanie 4 - `js/task04.js`

Stwórz funkcję ```randomize(param1, param2, callback)```, która jako parametry przyjmuje:
* Dowolne dwie liczby -  określające przedział między jakim będziemy losować liczbę
* funkcje anonimową, której zadaniem jest wypisanie wylosowanej liczby.
* niech funkcja ```ranodmize()``` sprawdza przed wywołaniem  callback czy rzeczywiście jest ona funkcją.

