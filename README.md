


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

![Image](https://github.com/user-attachments/assets/5c4f60eb-8c28-48a1-aaa6-027d483bf7c3)

![Image](https://github.com/user-attachments/assets/b3774c93-928f-4adf-8823-80d2c117cae6)

![Image](https://github.com/user-attachments/assets/57f70c67-e136-41f1-b064-f55012ed16bb)

![Image](https://github.com/user-attachments/assets/bda8f3aa-b768-4192-a265-ecc5b99c5da6)

![Image](https://github.com/user-attachments/assets/a4cc7fd4-25c2-45d4-b0d5-bf7238025aa3)

