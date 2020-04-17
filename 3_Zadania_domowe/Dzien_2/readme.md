# ES6 - zadania domowe

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `3_Zadania_domowe/Dzien_2`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**

#### Zadanie 1 - `js/task01.js`

Stwórz super klasę o nazwie ```Insect```. Stwórz również dwie klasy, które będą dziedziczyły z klasy bazowej: ```Centipede``` oraz  ```Spider```.

W klasie bazowej ```Insect``` stwórz konstruktor, który będzie ustawiał imię owada oraz ilość jego nóg. (Wymyśl coś kreatywnego. Zamiast imienia możesz również ustawić typ lub podtyp owada, jeśli masz odwagę sprawdzić to w Wikipedii).

Stwórz również metodę/metody ```getLegs()```, która wypisuje ile nóg ma dane zwierzę w następujący sposób:

```HTML
Cześć mam na imię lucy jestem stonogą i mam 20 nóg
Cześć mam na imię Majkel jestem pająkiem i mam 8 nóg
```

Wstaw te teksty w opodwiednie paragrafy na stronę html.

---

#### Zadanie 2 - `js/task02.js`

Stwórz funkcję ```saySomething()``` (Arrow function) i jako parametr przekaż jej następujący obiekt:

```JavaScript
const wally = {
  name: "Wally",
  age: 2,
  proffesion: "naprawianie innych robotów"    
}
```

Następnie za pomocą destrukturyzacji podstaw wszystkie 3 atrybuty obiektu pod takie same nazwy zmiennych. Następnie zwróć string w postaci:

 ```HTML
 Cześć mam na imię Wally, mam 2 lata i moim zajęciem jest naprawianie innych robotów".
 ```

---

### Zadanie 3 - `js/task03.js`

Stwórz funkcję ```sayHello```, której celem będzie wypisanie ```Hello``` dla wszystkich jej parametrów. Parametry powinny być stringami. Wykorzystaj Rest/Spread operator.

Spróbuj posłużyć się jedną z metod (```forEach```, ```map``` lub ```reduce```). Pamiętaj, że znasz oprócz słówka ```var``` jeszcze ```const``` i ```let```.


Przykładowe wywołania:

```JavaScript
sayHello("Ania", "Kasia", "Steve", "Bogumił");
```

Wynik w konsoli:

```HTML
Hello: Ania
Hello: Kasia
Hello: Steve
Hello: Bogumił
```
