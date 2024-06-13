
# Identyfikacja zagadnienia biznesowego (problemu)

## Definicja celów projektu

**Odbiorca:**
Projekt jest skierowany do miłośników książek, którzy poszukują platformy do czytania książek online, dzielenia się opiniami oraz dodawania własnych książek.

**Potrzeba biznesowa:**
- **Czytanie online:** Zapewnienie użytkownikom dostępu do rozdziałów książek w formie online.
- **Interakcja i społeczność:** Umożliwienie użytkownikom logowania się, rejestracji, dodawania książek oraz komentowania książek.
- **Zarządzanie treścią:** Użytkownicy mogą dodawać i usuwać książki.

## Opis zakresu projektu w kontekście potrzeby biznesowej

Aplikacja zapewnia platformę, która umożliwia:
- **Logowanie i rejestrację:** Zarządzanie kontami użytkowników.
- **Dodawanie książek:** Zalogowani użytkownicy mogą dodawać nowe książki oraz ich rozdziały.
- **Czytanie książek:** Użytkownicy mogą przeglądać i czytać dostępne książki oraz ich poszczególne rozdziały.
- **Komentowanie:** Użytkownicy mogą dodawać oraz usuwać komentarze i opinie dotyczące przeczytanych książek.

## Rozwiązanie problemu

Proponowana aplikacja rozwiązuje kluczowe zagadnienia związane z:
- **Dostępem do treści:** Umożliwia łatwy dostęp do książek online.
- **Interakcją użytkowników:** Stwarza społeczność, w której użytkownicy mogą dzielić się opiniami na temat przeczytanych książek.
- **Zarządzaniem treścią:** Użytkownicy mogą dodawać i usuwać dodane przez siebie książki.

Aplikacja w pełni realizuje założone potrzeby biznesowe, zapewniając platformę zarówno do czytania książek, jak i interakcji między użytkownikami, stając się narzędziem do zarządzania książkami online i budowania społeczności czytelników. Nie jest wykluczone dalsze rozwijanie aplikacji o dodatkowe funkcjonalności w przyszłości.


# Wymagania systemowe i funkcjonalne

## Ogólny opis i model proponowanej aplikacji
Aplikacja webowa do wyświetlania oraz zarządzania książkami i komentarzami, składająca się z frontendu (React) i backendu (Node.js/Express).

## Wymagania funkcjonalne
- **Frontend (React)**
    - Interfejs użytkownika: React, Bootstrap.
    - Routing: `react-router-dom`.
    - Komunikacja z backendem: `axios`.
- **Backend (Node.js/Express)**
    - Autoryzacja: `jsonwebtoken`, `bcrypt`.
    - Operacje CRUD: `mongoose`.

## Wymagania techniczne
- **Frontend**
    - `React`: ^18.3.1, 
    - `Bootstrap`: ^5.3.3, 
    - `Axios`: ^1.7.2, 
    - `React Router DOM`: ^6.23.1.
- **Backend**
    - `Node.js`: ^4.19.2,
    - `Express`: ^4.19.2,
    - `Mongoose`: ^8.2.4,
    - `JSON Web Token`: ^9.0.2,
    - `Bcrypt`: ^5.1.1, 
    - `Nodemon`: ^3.1.0.

## Wymagania baz danych
- **Baza danych**: MongoDB
    - Adres: `mongodb://user:password@172.104.249.16:27017/book_database?authSource=admin`
    - Modele: `User`, `Book`, `Chapter`, `Comment`.

## Model architektury
- **Frontend**: Przeglądarka (React)
- **Backend**: Serwer (Node.js, Express) → Baza danych (MongoDB)

Aplikacja webowa zapewnia zarządzanie użytkownikami, książkami, rozdziałami oraz komentarzami, wykorzystując React do interfejsu użytkownika i Node.js/Express do logiki biznesowej oraz MongoDB do przechowywania danych.

# Analiza zagadnienia i jego modelowanie (DO POPRAWY TO TYLKO TAKIE WSTEPNE POMOCNICZE ZEBY ROZWINAC)

Projekt składa się z aplikacji webowej, która umożliwia zarządzanie książkami i komentarzami. Aplikacja została zbudowana z wykorzystaniem technologii JavaScript, React na froncie i Node.js/Express na backendzie. Dane są przechowywane w bazie danych MongoDB.

## Metody obiektowe

Aplikacja składa się z kilku głównych komponentów:

- **Książki (Books):** Użytkownicy mogą przeglądać dostępne książki, dodawać nowe książki, a także usuwać książki, które dodali.
- **Rozdziały (Chapters):** Każda książka składa się z rozdziałów, które użytkownicy mogą przeglądać.
- **Użytkownicy (Users):** Użytkownicy mogą się rejestrować, logować i zarządzać swoim kontem.
- **Komentarze (Comments):** Użytkownicy mogą dodawać komentarze do książek, które przeczytali.

## Definicje

- **Klasa Book:** Reprezentuje książkę w systemie. Każda książka ma tytuł, autora, kategorię, popularność i listę rozdziałów.
- **Klasa Chapter:** Reprezentuje rozdział w książce. Każdy rozdział ma tytuł i treść.
- **Klasa User:** Reprezentuje użytkownika w systemie. Każdy użytkownik ma nazwę użytkownika, hasło i listę książek, które dodał.
- **Klasa Comment:** Reprezentuje komentarz dodany do książki. Każdy komentarz ma autora (użytkownika), treść i książkę, do której jest dodany.

## Metody strukturalne

Aplikacja korzysta z REST API do komunikacji między frontendem a backendem. API obejmuje następujące punkty końcowe:

- **/books:** GET, POST, PUT, DELETE dla operacji na książkach.
- **/chapters:** GET, POST, PUT, DELETE dla operacji na rozdziałach.
- **/users:** GET, POST dla operacji na użytkownikach.
- **/comments:** GET, POST, DELETE dla operacji na komentarzach.

## Definicje

- **Encja Book:** Reprezentuje książkę w bazie danych. Każda książka ma tytuł, autora, kategorię, liczbę wyświetleń i listę rozdziałów.
- **Encja Chapter:** Reprezentuje rozdział w książce. Każdy rozdział ma tytuł i treść.
- **Encja User:** Reprezentuje użytkownika w systemie. Każdy użytkownik ma nazwę użytkownika, hasło i listę książek, które dodał.
- **Encja Comment:** Reprezentuje komentarz dodany do książki. Każdy komentarz ma autora (użytkownika), treść i książkę, do której jest dodany.