
![WhatsApp Image 2025-03-09 at 19 51 19_30a8bf57](https://github.com/user-attachments/assets/7fdc650c-68ed-4c54-ab27-dfcdcf26eff2)

![WhatsApp Image 2025-03-09 at 19 51 20_0e2c67d6](https://github.com/user-attachments/assets/fe2870ba-172e-422e-aefc-9bc7d2949edc)
![WhatsApp Image 2025-03-09 at 19 51 21_415c07a8](https://github.com/user-attachments/assets/7e5f1377-b265-4452-88da-4bf6b0aaef38)
![WhatsApp Image 2025-03-09 at 19 51 21_f97fd840](https://github.com/user-attachments/assets/a3ad0e02-9545-4f63-90c5-21f26630a81a)

![WhatsApp Image 2025-03-09 at 19 51 21_205df303](https://github.com/user-attachments/assets/c0f86565-9fbc-442a-9a38-86172db667e6)
![WhatsApp Image 2025-03-09 at 19 51 22_02a320fd](https://github.com/user-attachments/assets/ac7de94d-8b72-4405-88ba-57e5bc4b6718)

# MERN Login and Register with JWT Authentication

This is a full-stack MERN application that demonstrates the implementation of login and registration functionality using JSON Web Tokens (JWT) for secure authentication. It provides an intuitive user experience with both frontend and backend components. The app is built using MongoDB, Express, React, and Node.js.

## Features
- **User Registration**: New users can register by providing their details (email, password, etc.).
- **User Login**: Registered users can log in using their credentials.
- **JWT Authentication**: JSON Web Tokens are used to secure user sessions, ensuring that only authenticated users can access protected routes.
- **Responsive Design**: The app is fully responsive, providing a seamless experience across different devices.
- **Toast Notifications**: Alerts and notifications are displayed to users for better interaction and experience.

## Technologies Used
### Frontend:
- **React.js**: For building the user interface.
- **React Router DOM**: For navigation management.
- **Toastify**: To display notifications and alerts.

### Backend:
- **Node.js**: JavaScript runtime environment.
- **Express**: Web application framework for Node.js.
- **MongoDB**: Database to store user credentials and session data.
- **JWT**: For secure user authentication.

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/Dulakshi-2002/Login-and-Registration.git
```
### 2. Install Dependencies

Navigate to the project directory:

```bash
cd Login-and-Registration
```

### Install backend dependencies:

```bash
npm install
```

### Navigate to the frontend directory:

```bash
cd client
```

###
Install frontend dependencies:

```bash
npm install
```
### 3. Configure MongoDB and JWT

Go to the MongoDB website, create an account, and set up a new database.
Get the connection string and generate a 256-bit random JWT secret key.
Create a .env file in the root directory and add the following:

```bash
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

### 4. Run the Application
Start the backend server:
```bash
node app.js
```
In a new terminal, start the frontend:
```bash
cd client
npm run dev
```
### 5. Access the Application
Once the application is running, you can visit it in your browser at:
```bash
http://localhost:5173
```
Here, you can register a new account or log in using existing credentials.



