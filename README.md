
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

# Implementacja  

Kluczowe funkcjonalności aplikacji obejmują zarządzanie użytkownikami, książkami, rozdziałami oraz komentarzami.  

## Serwer
Plik **server.js** definiuje konfigurację serwera. Wykorzystywany jest między innymi express do tworzenia serwera HTTP oraz Mongoose do łączenia się z bazą danych MongoDB. Middleware cors umożliwia obsługę żądań z innych domen, a express.json() parsuje dane JSON w ciele żądań. Serwer obsługuje różne trasy dla użytkowników, książek, rozdziałów i komentarzy.

W katalogu services zawarta jest logika biznesowa aplikacji. Przykładowy serwis książek znajdujący się w katalogu ./server/Services pozwala na wykonywanie operacji CRUD (Create, Read, Update, Delete) na książkach oraz dodatkowe operacje, takie jak wyszukiwanie książek, pobieranie najpopularniejszych książek i wyświetlanie książek według kategorii. Mongoose jest używany do interakcji z bazą danych MongoDB.  

Fragment kodu z pliku **BookServices.js**:  
```
exports.getPopularBooks = async () => {
    return await Book.find().sort({ visits: -1 }).limit(10);
};

exports.getBooksByCategory = async (category) => {
    return await Book.find({ categories: category });
};

exports.searchBooks = async (titleOrAuthor) => {
    return await Book.find({
        $or: [
            { title: { $regex: titleOrAuthor, $options: 'i' } },
            { author: { $regex: titleOrAuthor, $options: 'i' } }
        ]
    });
};  
```

**Routing** definiuje ścieżki API, które są dostępne dla klienta. Każda ścieżka jest powiązana z odpowiednią metodą kontrolera, która przetwarza żądania. Wykorzystany został express.Router do zarządzania trasami.  

Routing zdefiniowany dla książek w katalogu **./server/Routes** w pliku **BookRoutes.js**:  
```
const express = require('express');
const BookController = require('../Controllers/BookController');
const router = express.Router();

router.get('/books', BookController.books);
router.get('/books/popular', BookController.popular);
router.get('/books/category/:category', BookController.searchByCategory);
router.get('/books/search/:titleOrAuthor', BookController.search);
router.get('/books/:id', BookController.show_book);
router.get('/user/:id/books', BookController.userBooks);
router.post('/books', BookController.create);
router.put('/books/:id', BookController.update);
router.delete('/books/:id', BookController.delete);

module.exports = router;
```

**Modele** definiują strukturę dokumentu w kolekcji MongoDB. Używając **mongoose**, określamy pola, ich typy oraz relacje z innymi modelami (np. relacja książek z komentarzami).  

Model z pliku **Book.js** z katalogu **./server/Models**
```
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    author: String,
    description: String,
    categories: [String],
    visits: Number,
    uploaded_by: { type: Schema.Types.ObjectId, ref: 'User' },
    cover_image: String, // URL do obrazka w folderze
    chapterNumber: Number,
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
});

module.exports = mongoose.model('Book', BookSchema);
```

**Kontrolery** obsługują żądania HTTP i wykorzystują metody z serwisów do wykonywania logiki biznesowej. Każda metoda kontrolera odpowiada na konkretne żądanie. Dla książek będzie to przykładowo pobieranie listy wszytskich książek, pobieranie książki określonej przez id czy jej usunięcie.

Frament kodu z pliku **BookController.js** z katalogu **./server/Controllers**:  
```
const BookServices = require('../Services/BookServices');

exports.books = async (req, res) => {
    const books = await BookServices.getAllBooks();
    return res.json(books);
}

exports.show_book = async (req, res) => {
    const book = await BookServices.getBookById(req.params.id);
    await BookServices.incrementVisits(req.params.id);
    return res.json(book);
}  
```  

## Klient  

Każdy z komponentów po stronie klienta wykorzystuje bibliotekę **axios** do komunikacji z serwerem oraz **React** do zarządzania stanem i renderowaniem interfejsu użytkownika. Stylowanie komponentów zostało zrealizowane za pomocą plików CSS znajdujących się w katalogu **./client/stylesheets**.  

Główny plik App.js odpowiada za konfigurację routingu aplikacji oraz zarządzanie stanem logowania użytkownika. Wykorzystuje bibliotekę **react-router-dom** do obsługi nawigacji i wyświetlania odpowiednich komponentów w zależności od ścieżki URL.  

Zarządzanie stanem logowania:  

```
const handleLogin = (token, userId) => {
    setIsLoggedIn(true);
    setUserId(userId);
  };

  const handleLogout = () => {
    console.log("Logging out");
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    setIsLoggedIn(false);
  };
  ```  

Obsługa nawigacji:  

```
<Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} userId={userId} />
        <Routes>
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<Book />} />
          <Route path="/books/category/:category" element={<BooksByCategory />} />
          <Route path="/books/search/:query" element={<SearchResults />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/books/:bookId/:chapterId" element={<Chapter />} />
          <Route path="/books/:id/chapters" element={<ChaptersList />} />
          {isLoggedIn && <Route path={`/user/${userId}/books`} element={<UserBooks userId={userId} />} />}
        </Routes>
      </div>
    </Router>
```  

Strona klienta składa się z 4 głównych komponentów: **bookComponent**, **chapterComponent**, **commentComponent**.  

Plik **ShowBookById.js** z katalogu **./client/bookComponent** jest odpowiedzialny za wyświetlanie szczegółów konkretnej książki. Korzysta z **axios** do pobierania danych książki z serwera. Komponent używa **useParams** do pobrania ID książki z URL, a następnie wywołuje **useEffect** do pobrania danych książki przy pomocy HTTP GET. Komponent ten integruje również sekcję komentarzy za pomocą komponentu **CommentSection**.  

```
useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/books/${id}`);
                setBook(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.response?.data || "An error occurred during fetching book");
                alert(error.response?.data || "An error occurred during fetching book");
                setLoading(false);
            }
        };

        fetchBook();
    }, [id]);
```  

Plik **ShowChapter.js** z katalogu **./client/chapterComponent** zarządza wyświetlaniem treści rozdizału książki. Pobiera informacje o rozdziale oraz o innych rozdziałach książki, aby umożliwić nawigację pomiędzy nimi. Używa funkcji useEffect do pobierania danych rozdziału oraz listy wszystkich rozdziałów książki, a także umożliwia nawigację do następnego i poprzedniego rozdziału.

Obsługa przechodzenia do poprzedniego oraz następnego rozdziału.
```
const goToNextChapter = () => {
        const currentInd = chapters.findIndex(chap => chap._id === chapterId);
        if(currentInd < chapters.length - 1) {
            navigate(`/books/${bookId}/${chapters[currentInd + 1]._id}`);
        }
    };

    const goToPreviousChapter = () => {
        const currentInd = chapters.findIndex(chap => chap._id === chapterId);
        if (currentInd > 0) {
            navigate(`/books/${bookId}/${chapters[currentInd - 1]._id}`);
        }
    };
```

Plik **commentSection.js** z katalogu **./client/commentComponent** umożliwia użytkownikom dodawanie i usuwanie komentarzy do książki. Zalogowany użytkownik może usuwać jedynie swoje komentarze.  

```
const handleCommentSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`http://localhost:3000/books/${bookId}/comments`, {
                book_id: bookId,
                user_id: userId,
                content: newComment
            });
            setComments((prevComments) => [...prevComments, response.data]);
            setNewComment("");
        } catch (error) {
            alert(error.response?.data || "An error occurred while submitting your comment");
        }
    };

    const handleCommentDelete = async (commentId) => {
        try {
            await axios.delete(`http://localhost:3000/comments/${commentId}`);
            setComments((prevComments) => prevComments.filter((comment) => comment._id !== commentId));
        } catch (error) {
            alert(error.response?.data || "An error occurred while deleting the comment");
        }
    };
```

Komponent **userComponent** umożliwia użytkownikom między innymi logowanie się do aplikacji. W pliku **Login.js** wprowadzone dane logowania przechowywane są w stanie komponentu (username, password). Jeśli logowanie się powiedzie, przechowywany jest token uwierzytelniający i identyfikator użytkownika w localStorage oraz wyświetlany jest komunikat o powodzeniu.

```
const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/login', { username, password });
            console.log("Login successful");
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userId', response.data.userId);
            onLogin(response.data.token, response.data.userId);
            setSuccessMessage("Login successful!");
            setError("");
        } catch (error) {
            setError(error.response?.data || "An error occurred during login");
        }
    };
```