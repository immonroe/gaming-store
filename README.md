# Gaming E-Commerce Store

A web-based gaming e-commerce store built with React and Firebase.

<a href="https://immonroe.github.io/gaming-store/"> LIVE DEMO</a>

## Overview

The Gaming E-Commerce Store is a modern online platform for gamers to explore and purchase their favorite games. This project combines a user-friendly front-end with a powerful Firebase backend, enabling users to browse a selection of games and add them to their cart!

## Features

- Browse a collection of popular games.
- Add games to the shopping cart.
- Adjust the quantity of items in the cart.
- Persist cart data across page refreshes using Firebase and local storage.

## Technologies

- React: A JavaScript library for building user interfaces.
- Firebase: A cloud-based platform for developing web and mobile applications.
- Firestore: A NoSQL cloud database to store cart data.
- HTML and CSS: Structure and style for the user interface.
- Vite: A build tool that serves as the development environment.

## Installation

1. Clone the repository to your local machine:

```javascript
git clone git@github.com:immonroe/gaming-store.git
```

2. Change to the project directory:

```javascript
cd gaming-store
```

3. Install project dependencies:

```javascript
npm install
```

4. Start the development server:

```javascript
npm run dev
```

Open your web browser and visit http://localhost:3000 to access the app.

## Configuration
Before running the application, make sure to configure Firebase with your credentials. Create a Firebase project on the Firebase Console and obtain your configuration details. Update the Firebase configuration in src/firebase/firebase.jsx with your own values:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
```

## Usage
- Browse the game selection on the home page.
- Click on a game card to view more details.
- Add games to the cart and adjust quantities.

## Cart Persistence
This application uses Firebase and local storage to ensure cart data is saved and restored across page refreshes. Cart data is also stored on Firebase, making it accessible to authenticated users on different devices.

## Credits
Game images and data are for demonstration purposes and were obtained from various sources.

## License
This project is open-source and available under the MIT License.

## Author
Immanuel Monroe