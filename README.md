# Nevmo, A Venmo Clone

The project is primarily focused on the UI of the application.

## Table of Contents

- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Running the App Locally](#running-the-app-locally)
  - [Prerequisites](#prerequisites)
  - [Running the Backend Server](#running-the-backend-server)
  - [Running the Frontend Client](#running-the-frontend-client)

---

## Project Structure

```bash
├── client/                 # Frontend code
│   ├── src/
├── server/                 # Backend code (Express server)
│   └── src/
└── README.md               # Project documentation
```

## Technologies Used

- **Frontend**: React, Tailwind CSS, React Router
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT

## Running the App Locally

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. [Download here](https://nodejs.org/).

### Running Backend Server

1. Navigate to `/server` folder.
2. Install dependencies: `npm install`.
3. Start server using: `npm start`.
4. The backend server will run on http://localhost:5000.

### Running Frontend Client

1. Navigate to `/client` folder.
2. Install dependencies using: `npm install`.
3. Start client using: `npm run dev`.
4. The frontend client will run on http://localhost:5173.
