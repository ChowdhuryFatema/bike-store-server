# Bike Store Backend

The **Bike Store Backend** is a server-side application built using **Node.js**, **Express.js**, **Mongoose**, and **TypeScript**. It provides a comprehensive API for managing bikes and orders, ensuring seamless data handling and efficient CRUD operations with MongoDB.

---

## Features

- **Bike Management**: Add, update, retrieve, and delete bikes from the inventory.
- **Order Management**: Place, retrieve, update, and cancel orders for bikes, with each order linked to a specific bike via a reference ID.
- **Relationships**: Ensures data integrity with MongoDB references between bikes and orders.
- **TypeScript**: Implements type-safe development for improved maintainability and scalability.
- **Error Handling**: Centralized middleware for error validation and responses.
- **Authentication (Optional)**: Supports token-based authentication for protected endpoints.

---

## Tech Stack

- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB (via Mongoose)
- **Language**: TypeScript

---

## Getting Started

### Prerequisites

1. Install **Node.js**.
2. Install **npm** or **yarn**.
3. Ensure **MongoDB** is running (either locally or via a cloud service).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ChowdhuryFatema/bike-store-server.git
   cd bike-store-server
   Install dependencies:
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a .env file in the root directory and configure the following variables:

   ```bash
   NODE_ENV=
   PORT=
   DATABASE_URL=
   ```

4. Build the project:

   ```bash
   npm run build
   ```

5. Start the development server:

   ```bash
   npm run start:dev
   ```

6. Start the production server:

   ```bash
   npm run start
   ```

API Endpoints
Bike Endpoints
GET /api/bikes: Retrieve all bikes in the inventory.
GET /api/bikes/:id: Retrieve a specific bike by its ID.
POST /api/bikes: Add a new bike to the inventory.
Example request body:
json

{
"name": "Mountain Bike",
"price": 1200,
"brand": "TrailMaker",
"availability": true
}
PUT /api/bikes/:id: Update bike details by ID.
DELETE /api/bikes/:id: Remove a bike from the inventory.
Order Endpoints
GET /api/orders: Retrieve all orders.
GET /api/orders/:id: Retrieve a specific order by its ID.
POST /api/orders: Place a new bike order.
Example request body:
json

{
"bike": "bikeObjectIdHere",
"quantity": 2
}
PUT /api/orders/:id: Update an order (e.g., change its status).
DELETE /api/orders/:id: Cancel an order.
Database Relationships
Bike Schema
Defines bike data with fields for name, price, brand, and availability.

Usage
Add a Bike: Use the /api/bikes POST endpoint to add a new bike to the inventory.
Retrieve Bikes: Use the /api/bikes GET endpoint to fetch all available bikes.
Place an Order: Use the /api/orders POST endpoint with the bike field referencing a valid bike ID.
Manage Orders: Update or delete orders using their respective endpoints.
Folder Structure
bash

├── src
│ ├── controllers # Handles CRUD logic for bikes and orders
│ ├── models # Mongoose schemas for bikes and orders
│ ├── routes # API routes for bikes and orders
│ ├── middlewares # Middleware for validation and error handling
│ ├── services # Business logic for operations
│ ├── utils # Utility functions and helpers
│ ├── config # Configuration files (e.g., database connection)
│ └── app.ts # Express app setup
├── dist # Compiled JavaScript files (output of TypeScript)
└── .env # Environment variables
