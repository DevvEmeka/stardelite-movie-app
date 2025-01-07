# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.


Setup Instructions

Follow these steps to set up and run the project:

- Create a react app using vite

npm create vite@latest

- Install Dependencies

Ensure you have Node.js installed. Run the following command to install the required packages:

npm install

- Start the Development Server

To run the app locally, use the command:
npm run dev
Open your browser and navigate to http://localhost:5174/



Features List

Movie Search

Users can search for movies by entering a keyword in the search bar.

Fetches and displays results dynamically from the OMDb API.

Responsive Design

Fully responsive layout built using modern CSS and flexible design principles.

Movie Preview

Displays a movie card showing:

Year of release

Poster image

Type (e.g., Movie, Series)

Title

Poster Fallback

If the movie poster is unavailable, a placeholder image is shown.

Error Handling

Displays a friendly message (e.g., "No Movies Found") if no results are returned or an API error occurs.

Default Movie Search

Shows a list of movies (e.g., "Avatar") on the initial page load.



API Key Setup Guide

The app uses the OMDb API, which requires an API key. Follow these steps to set it up:

Sign Up for an OMDb API Key

Visit the OMDb API website: http://www.omdbapi.com/.

Click on "Sign Up" and create an account.

After signing up, you will receive a unique API key.

Add the API Key to the Project

Locate the API_URL variable in your project code:   

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=YOUR_API_KEY";

Replace YOUR_API_KEY with the key provided by OMDb.

Secure the API Key (Optional)

Use environment variables to store the API key securely:

Create a .env file in the root of your project.

Add the following:

REACT_APP_API_KEY=your-omdb-api-key

Update the API_URL in your code:

const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

Restart your development server after making changes to .env.

Test the API Key

Run the app and search for movies to ensure the API key works correctly.