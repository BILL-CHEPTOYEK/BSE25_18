# BSE25_18
## Bus Ticketing System
Overview

The Bus Ticketing System is a web application designed to allow users to browse available bus routes, book tickets, and manage their bookings. The system is divided into two main components:

    A React.js frontend for the user interface.
    A Node.js/Express backend that handles business logic, routes, and ticket management.

This project is developed as part of the BSE4101 Capstone Project to demonstrate version control and CI/CD implementation.
Features

    Search for available bus routes.
    Book tickets for a specific route.
    View bus schedules.
    User login and guest checkout.
    Administrative interface for bus management (optional future feature).

Tech Stack
Frontend:

    React.js – For building the user interface.
    Axios – For making HTTP requests to the backend.
    React Router – For navigation between different pages.

Backend:

    Node.js/Express – For building the server and RESTful APIs.
    Mysql – For storing bus, route, and booking data.
    dotenv – For managing environment variables.


### Getting Started

Follow these steps to set up the Bus Ticketing System on your local machine.
Prerequisites

    Node.js: Ensure you have Node.js installed on your system.
    Git: Version control is handled using Git.
    Mysql: If using a database to store routes and bookings.

1. Clone the Repository

First, clone the project repository from GitHub:

bash

git clone https://github.com/BILL-CHEPTOYEK/BSE25_18.git
cd Bus-Ticketing-System

2. Install Dependencies
Backend (Node.js)

Navigate to the server folder and install the necessary dependencies:

bash

cd server
npm install

Frontend (React.js)

Navigate to the client folder and install the frontend dependencies:

bash

cd client
npm install

3. Set Up Environment Variables

For the backend, create a .env file in the server directory and define the following environment variables:

makefile

PORT=5000

4. Start the Backend Server

Start the backend API by running:

bash

npm start

The backend will run on http://localhost:5000.
5. Start the Frontend Development Server

Now, start the React frontend:

bash

cd ../client
npm start

The frontend will run on http://localhost:3000 by default.
6. Test the Application

Open a browser and visit http://localhost:3000 to test the bus ticketing system.
API Endpoints

The backend provides several API endpoints for managing buses, routes, and bookings.
Bus Routes

    GET /buses – Retrieve all available buses.
    GET /buses/
    – Retrieve details for a specific bus.
    POST /buses – Add a new bus (Admin).

Booking Routes

    POST /bookings – Create a new booking.
    GET /bookings/
    – Retrieve a specific booking.

Version Control Workflow

This project follows a Git-based version control workflow:

    Branching: Each feature or bug fix should be developed in its own branch.
        Use descriptive branch names like feature/booking-system.
    Commits: Commit changes regularly with clear, descriptive commit messages.
        Example: git commit -m "Add booking form to React app"
    Merging: Once a feature is completed, it should be merged into the main branch via a Pull Request (PR).

GitHub Repository

The GitHub repository for this project is located at:
https://github.com/BILL-CHEPTOYEK/BSE25_18.git

Contributing

We welcome contributions! Here’s how you can help:

    Fork the repository.
    Create your feature branch (git checkout -b feature/some-feature).
    Commit your changes (git commit -m "Add some feature").
    Push to the branch (git push origin feature/some-feature).
    Open a Pull Request.

Future Features (Optional)

    Payment Integration: Allow users to pay for their tickets via popular payment gateways.
    Seat Selection: Enable users to choose specific seats on the bus.
    Admin Dashboard: Provide an interface for admins to manage buses, routes, and schedules.

License

This project is licensed under the MIT License - see the LICENSE file for details.
