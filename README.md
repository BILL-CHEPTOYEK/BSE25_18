#Bus Ticket Booking System

The Bus Ticket Booking System is a web-based application designed to facilitate the booking and management of bus tickets. The system provides features such as user registration, ticket booking, and admin management of routes and schedules. It is built using **Django**, a high-level Python web framework, known for its scalability and rapid development capabilities.

#Technical Stack

- Backend:Django (Python)
- Frontend:HTML, CSS, JavaScript
- Database:SQLite (default for development), PostgreSQL (for production)
- Other Tools:Django Admin, Django REST Framework (for API)

#Setup and Installation

To set up the project locally, follow these steps:

#1. Clone the Repository:
   
 `git clone https://github.com/yourusername/bus-ticket-booking-system.git
cd bus-ticket-booking-system
`


#2. Create a Virtual Environment:
   
   `python -m venv env
   source env/bin/activate`
   
   On Windows,
    `use env\Scripts\activate`
   

#3. Install Dependencies:
   
   `pip install -r requirements.txt`
  
#4. Set Up the Database:
   Apply the database migrations to set up the initial database schema.
   
   `python manage.py migrate`
   
#5. Create a Superuser
   
   Create an admin account to access the Django admin interface.
   
   `python manage.py createsuperuser`
   
#7. Run the Development Server
   
   Start the Django development server.
   
   `python manage.py runserver`
  

#8.Run Tests:
  Execute the unit tests for the application using:
  
  `python manage.py test`
  
