# YouChoose - choose your favourite movies!

### ASE Web Technologies Project
Small web app that allows users to build and publicly share lists of favourite movies. 

## General requirements
1. At least four entities of which one is parent and one is  a child, stored in a relational database and accessed through an ORM
2. Operations on the entities exposed through a REST interface
3. SPA front-end with React.js
4. External service integration

## Functional requirements
### Entities
- User
- Role
  - Admin
  - Normal User
- List
- Movie

### Possible user actions

Normal User
- Create account
- Log in
- Search for Movie
- Create List
- Add, Modify, Delete Movies in List
- Share

Admin 
- Everything a Normal User can do
- Add, Modify, Delete Users from DB

### Technologies used
Database
- MySQL

Backend
- NodeJS with Express

Frontend
- React JS

### Integration with TMDB
- To be implemented, documentation available at [TMDB](https://www.themoviedb.org/documentation/api?language=en-US)

### Authors
- Kovacs Erik Robert

