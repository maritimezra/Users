# Django React Authentication App

## Overview

This project is a web application that implements user authentication (login, signup, logout) using a Django backend and a React frontend. The backend uses Django REST Framework (DRF) to provide API endpoints, while the frontend uses React to create a user interface for interacting with these endpoints.

## Features

- User registration with email, username, and password.
- User login with email and password.
- User logout.
- Protected routes that require authentication.
- Fetch and display authenticated user's username.

## Technologies Used

- **Backend**: Django, Django REST Framework (DRF)
- **Frontend**: React, React Router
- **Authentication**: Token-based authentication using DRF's `TokenAuthentication`

## Installation

### Backend Setup

1. **Clone the repository:**

    ```sh
    git clone https://github.com/yourusername/your-repo-name.git
    cd your-repo-name
    ```

2. **Create a virtual environment and activate it:**

    ```sh
    python3 -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. **Install the required packages:**

    ```sh
    pip install -r requirements.txt
    ```

4. **Apply the migrations:**

    ```sh
    python manage.py migrate
    ```

5. **Create a superuser:**

    ```sh
    python manage.py createsuperuser
    ```

6. **Run the development server:**

    ```sh
    python manage.py runserver
    ```

### Frontend Setup

1. **Navigate to the frontend directory:**

    ```sh
    cd frontend
    ```

2. **Install the required packages:**

    ```sh
    npm install
    ```

3. **Run the development server:**

    ```sh
    npm run dev
    ```

## Project Structure

### Backend

- `apps/accounts/`
  - `managers.py`: Custom user manager for handling user creation.
  - `models.py`: Custom user model.
  - `serializers.py`: Serializers for user registration, login, and fetching user data.
  - `views.py`: API views for user registration, login, logout, and fetching user data.
  - `urls.py`: URL routes for the account-related API endpoints.
- `settings.py`: Django project settings.
- `urls.py`: Root URL configuration.

### Frontend

- `src/`
  - `components/`
    - `Login.jsx`: Login form component.
    - `Signup.jsx`: Signup form component.
    - `Home.jsx`: Home component showing a welcome message with the username.
    - `PrivateRoute.jsx`: Higher-order component for protecting routes.
    - `Logout.jsx`: Component handling user logout.
  - `App.jsx`: Main application component with routes.
  - `main.jsx`: Entry point for the React application.

## API Endpoints

- **POST** `/api/accounts/register/`: Register a new user.
- **POST** `/api/accounts/login/`: Log in an existing user and receive an authentication token.
- **POST** `/api/accounts/logout/`: Log out the authenticated user.
- **GET** `/api/accounts/get_username/`: Get the username of the authenticated user.

## Usage

1. **Register a new user:**

   Navigate to `/signup`, fill out the form, and submit to create a new user.

2. **Log in:**

   Navigate to `/login`, fill out the form, and submit to log in. Upon successful login, you will be redirected to the home page.

3. **View home page:**

   The home page will display a welcome message with the authenticated user's username.

4. **Log out:**

   Click the logout button on the home page to log out the user.

## Environment Variables

Ensure you have the following environment variables set up for your backend:

- `SECRET_KEY`: Django secret key.
- `DEBUG`: Set to `True` for development, `False` for production.
- `ALLOWED_HOSTS`: List of allowed hosts.

## Contributing

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Commit your changes.
5. Push to your branch.
6. Create a pull request.

