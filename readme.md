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

bash

npm install
Create a .env file in the root directory and configure the following variables:

env

NODE_ENV=
PORT=
DATABASE_URL=

bash

npm run start:build
Start the development server:

bash

npm run start
Start the production server:



