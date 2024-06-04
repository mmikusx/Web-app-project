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
- `POST /register` - registration of a new user
- `POST /login` - user login

## Models

### Novel
- `id` (integer)
- `title` (string)
- `author` (string)
- `description` (text)
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

## Controllers

### NovelController
- `index` - retrieves a list of all novels
- `show` - retrieves details of the selected novel
- `store` - creates a new novel
- `update` - updates information about the novel
- `destroy` - deletes the novel
- `popular` - retrieves a list of the most frequently chosen novels
- `topRated` - retrieves a list of the best-rated novels

### UserController
- `register` - registration of a new user
- `login` - user login

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

### UserService
- `registerUser` - registers a new user
- `loginUser` - logs in a user

### ChapterService
- `getChaptersByNovelId` - returns a list of chapters for a given novel
- `getChapterById` - returns details of the selected chapter
- `createChapter` - creates a new chapter
- `updateChapter` - updates information about the chapter
- `deleteChapter` - deletes the chapter