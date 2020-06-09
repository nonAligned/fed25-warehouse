# Warehouse Operations

A FED 25 Course Angular Project. This is a web application designed to support a warehouse company. The user is able to view and manipulate the documents that contain lists of items stored in the warehouse.

## How to download

In order to get this project for testing use the following command
```
git clone https://github.com/nonAligned/fed25-warehouse.git
```

## Prerequisites

Before running the application, please install the following software on your machine

- Node.js [Download](https://nodejs.org/en/download/)
- Angular CLI [Install instructions](https://cli.angular.io/)

## Starting

### Backend

1. Open new terminal or cmd and navigate to warehouse-server
2. Run command npm install
3. After npm install is complete, run command npm start

#### Server endpoints

Application uses the following endpoints
- `http://localhost:3000/api/documents`
- `http://localhost:3000/api/documents/:id`
- `http://localhost:3000/api/documents/:id/items`
- `http://localhost:3000/api/articles`

### Frontend

1. Open new terminal or cmd and navigate to warehouse-front
2. Run command npm install
3. After npm install is complete, run command ng serve
4. To view the application, navigate to `http://localhost:4200/` in your browser

## Author

Momcilo Savic
