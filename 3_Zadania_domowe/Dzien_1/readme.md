# ES6 - zadania domowe

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `3_Zadania_domowe/Dzien_1`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**
>
### Zadanie 1 - `js/task01.js`

Stwórz funkcję (Arrow function) o nazwie ```getNumbers```, która przyjmuje jako parametr tablicę z liczbami. Następnie mnoży każdy element tablicy przez dwa i zwraca wynik.

Spróbuj posłużyć się jedną z metod (```forEach```, ```map``` lub ```reduce```).

--- 

### Zadanie 2 - `js/task02.js`

Stwórz funkcję o nazwie ```Weather```, która będzie konstruktorem.  Stwórz obiekt na bazie tego konstruktora, któremu przekaż tablicę z 3 pomiarami temperatury w ciągu dnia. Rozszerz konstruktor ```Weather``` o metodę ```getAvgTemperature``` (dodaj ją do prototypu), której celem jest zwrócenie średniej temperatury dnia. Wstaw tą wartość do elementu o klasie ```avg```.

Spróbuj posłużyć się jedną z metod (```forEach```, ```map``` lub ```reduce```).

Przykładowe wywołania:

```JavaScript
const day1 = new Weather([-2, 4.4, 3]);
console.log( day1.getAvgTemperature());
```
