<img src="http://coderslab.pl/img/coderslab-logo.png" width="400"/>

# ES6 Dzień 2 - Template strings

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak, aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Dzien_2/3_Template_strings`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**


## Zadanie rozwiązywane z wykładowcą

### Zadanie 0a - `js/task0a.js`

Stwórz funkcję ```whoAreYou()```, której celem będzie **zwrócenie**  stringa (przykład niżej), na podstawie przekazanego do niej obiektu ```person```.


```JavaScript
const person = {
  name: "Vlad",
  lastName: "Drăculea",
  yearOfBirth: 1431,
  proffesion: "Lord of Wallachia"
};

whoAreYou(person);
```

```HTML
My name is Vlad Drăculea.
I am 586 years old.
My proffesion is Lord of Wallachia.
```


## Zadania do samodzielnego wykonania

### Zadanie 1 - `js/task0a.js`

Stwórz dwie zmienne, które będą przechowywały dowolne liczby. Następnie wypisz ich sumę w konsoli korzystając z łańcucha szablonowego (Template strings).
Przykład:
```JavaScript
Suma dwóch liczb 2 i 4 to: 6
```

---

### Zadanie 2 - `js/task02.js`

Wstaw do zmiennej swoje imię. Następnie wypisz je w konsoli razem z nazwiskiem. Przykład:

```JavaScript
Moje imię i nazwisko to: Chuck Norris
```

---

### Zadanie 3 - `js/task03.js`

Stwórz funkcję, której celem będzie wypisanie w konsoli kilkulinijkowego tekstu np:

```HTML
"Myślę, że jest wiele piękna
w posiadaniu problemów.
To jeden ze sposobów w jaki się uczymy"
Herbie Hancock
```

Wstaw tekst do elementu `#quote` w pliku `index.html`

---

### Zadanie 4 - `js/task04.js`

Mając do dyspozycji obiekt button (przykład niżej), wypisz w konsoli następujący tekst:

```plain
To jest button.
Jego szerokość to 140px.
Napis, który na nim widnieje to "Send message".
```

```JavaScript
const button = {
  text: "Send message",
  id: "sendMsg",
  width: 100,
  padding: 20
};
```

Na podstawie danych z obiektu stwórz nowy element ```button``` i wstaw go na stronę wewnątrz elementu `#buttonContainer` w pliku `index.html`.

Wykorzystaj obiekt do ustawienia odpowiednich styli i atrybutów.
