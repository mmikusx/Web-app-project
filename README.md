# Web App Project - early project requirements specification

## Table of Contents
1. [Routes](#routes)
2. [Models](#models)
3. [Controllers](#controllers)
4. [Services](#services)

## Routes
- `GET /novels` - displays a list of all novels
- `GET /novels/{id}` - displays details of the selected novel
- `POST /novels` - creates a new novel
- `PUT /novels/{id}` - updates information about the novel
- `DELETE /novels/{id}` - deletes the novel
- `GET /novels/popular` - displays a list of the most frequently chosen novels
- `GET /novels/top-rated` - displays a list of the best-rated novels
- `GET /novels/category/{category}` - searches for novels by category
- `GET /novels/search` - searches for novels by title or author
- `POST /register` - registration of a new user
- `POST /login` - user login
- `GET /user/{id}/novels` - displays a list of novels uploaded by the user

## Models

### Novel
- `id` (integer)
- `title` (string)
- `author` (string)
- `description` (text)
- `category` (string)
- `chapters` (array of `Chapter`)
- `popularity` (integer)
- `rating` (float)

### Chapter
- `id` (integer)
- `novel_id` (integer)
- `title` (string)
- `content` (text)

### User
- `id` (integer)
- `username` (string)
- `password` (string)
- `novels` (array of `Novel`) - novels uploaded by the user

## Controllers

### NovelController
- `index` - retrieves a list of all novels
- `show` - retrieves details of the selected novel
- `store` - creates a new novel
- `update` - updates information about the novel
- `destroy` - deletes the novel
- `popular` - retrieves a list of the most frequently chosen novels
- `topRated` - retrieves a list of the best-rated novels
- `searchByCategory` - searches for novels by category
- `search` - searches for novels by title or author

### UserController
- `register` - registration of a new user
- `login` - user login
- `userNovels` - retrieves a list of novels uploaded by the user

### ChapterController
- `index` - retrieves a list of chapters for a given novel
- `show` - retrieves details of the selected chapter
- `store` - creates a new chapter
- `update` - updates information about the chapter
- `destroy` - deletes the chapter

## Services

### NovelService
- `getAllNovels` - returns a list of all novels
- `getNovelById` - returns details of the selected novel
- `createNovel` - creates a new novel
- `updateNovel` - updates information about the novel
- `deleteNovel` - deletes the novel
- `getPopularNovels` - returns a list of the most frequently chosen novels
- `getTopRatedNovels` - returns a list of the best-rated novels
- `getNovelsByCategory` - searches for novels by category
- `searchNovels` - searches for novels by title or author

### UserService
- `registerUser` - registers a new user
- `loginUser` - logs in a user
- `getUserNovels` - returns a list of novels uploaded by the user

### ChapterService
- `getChaptersByNovelId` - returns a list of chapters for a given novel
- `getChapterById` - returns details of the selected chapter
- `createChapter` - creates a new chapter
- `updateChapter` - updates information about the chapter
- `deleteChapter` - deletes the chapter