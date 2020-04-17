<img src="http://coderslab.pl/img/coderslab-logo.png" width="400"/>

# ES6 Dzień 2 - Export & Import

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak, aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Dzien_2/5_export_import`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**


## Zadanie do wykoanania z wykładowcą

### Zadanie 0a - `js/task0a.js`

Zainstaluj bibliotekę `date-fns` z repozytorium NPM. 

Następnie użyj metody `formatDistanceToNow` do której przekaż jako parament obiek `new Date(2018, 4, 5)`. 

Metoda ta wyświetla w formacie tekstowym ile czasu upłynęło od podanej daty do teraz -> https://date-fns.org/v2.6.0/docs/formatDistanceToNow.

Wynik sprawdź w konsoli.


## Zadania do samodzielnego wykonania

### Zadanie 1 - `js/task01/*.js`

W folderze ```js/task01``` znajdziesz 3 pliki:
* ```polygon.js``` - zawierający klasę opisującą figurę geometryczną (wielokąt)
* ```square.js``` - zawierający klasę dziedziczącą po klasie polygon
* ```app.js``` - w którym towrzony jest obiekt na bazie klasy Square.

Twoim zadaniem jest połączenie plików w taki sposób, aby Square widział Polygon, a plik app.js widział klasę Square.

Tak, aby plik wyjściowy ```out.js``` nie wywoływał błędów w konsoli.
