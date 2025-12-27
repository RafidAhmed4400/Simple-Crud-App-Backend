# Simple CRUD App Backend using Node.js & Express API with MongoDB
- A RESTful API for managing products built with Node.js, Express.js, and MongoDB. This project features a complete CRUD implementation, structured architecture with models, routes, and controllers, and database integration with Mongoose.

## Features:
- Create, read, update, and delete products

- MongoDB Atlas integration using Mongoose

- Organized folder structure (models, routes, controllers)

- Middleware for JSON and URL-encoded data

- Development workflow with Nodemon

## Tech Stack

- Node.js

- Express.js

- MongoDB 

- Mongoose

- Nodemon

## API Endpoints

- Base Url: http://localhost:3000/api/products
- Add Entry (Post): '/'
- Get all Products (Get): '/'
- Get one Product with id (Get): '/:id'
- Update an entry (Put): '/:id'
- Delete an entry (Delete): '/:id'

## Format for Post and Put: Json
{
"name": "pizza",
"quantity": 10,
"price": 5.99
}
