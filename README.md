# Pokedex-Lite 🐬 Advanced MERN Pokémon Exploration Webapp 🐯

<p align="left">
  <img src="https://www.animatedimages.org/data/media/562/animated-line-image-0184.gif" width="1920" 
</p>

![Screenshot 2024-12-28 at 6 44 59 PM](https://github.com/user-attachments/assets/77ab4ec9-07b7-4114-9f2f-cc8ba709bbb8)

## Overview

Pokedex Lite is an advanced web application built using the MERN (MongoDB, Express, React, Node.js) stack. It offers a sleek and interactive way to explore the Pokémon universe. With a responsive design and several powerful features, this app ensures an engaging experience for users across all devices.

The application leverages the PokéAPI (v2) to fetch Pokémon data and allows users to search, paginate, favorite, and view detailed information about their favorite Pokémon. It also includes optional features like user authentication and animations for an enhanced user experience.

<p align="left">
  <img src="https://www.animatedimages.org/data/media/562/animated-line-image-0184.gif" width="1920" 
</p>

![Screenshot 2024-12-28 at 7 00 16 PM](https://github.com/user-attachments/assets/388a2690-bcec-4620-945b-a8665a25d3d7)

## Features

### 1. **Core Functionality**
- **List Pokémon**: Retrieve and display a list of Pokémon fetched from PokéAPI.
- **Search**: Search Pokémon by name with real-time filtering.
- **Pagination**: Browse Pokémon using pagination or infinite scrolling.
- **Favorites**: Mark Pokémon as favorites and persist the selection using local storage.
- **Detail View**: View detailed stats (e.g., HP, attack, abilities) of each Pokémon in a separate view or modal.
- **Responsive Design**: Ensure compatibility across mobile, tablet, and desktop devices.

### 2. **Advanced Features**
- **Data Fetching**: Implemented efficient API calls with error handling and loading indicators.
- **UI Enhancements**: Smooth transitions and animations for user interactions (e.g., hover effects, page switches).
- **Build & Deployment**: Streamlined build process with deployment readiness for platforms like Netlify, Vercel, or GitHub Pages.

### 3. **Bonus Features (Optional)**
- **User Authentication**: Integrated OAuth for login functionality via Google/GitHub (proof-of-concept implementation).
- **Server-Side Rendering (SSR)**: Experimented with SSR using Next.js to improve SEO and initial load times.

<p align="left">
  <img src="https://www.animatedimages.org/data/media/562/animated-line-image-0184.gif" width="1920" 
</p>

## Getting Started

### Prerequisites
Ensure you have the following installed on your system:
- **Node.js** (v18 or higher)
- **MongoDB**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/themihirmathur/Pokedex-Lite.git
   cd Pokedex-Lite
   ```

2. Install dependencies for both client and server:
   ```bash
   npm install
   ```

3. Build the project:
   ```bash
   npm run build
   ```

4. Set up environment variables:
   - Replace the `.env.example` file with a `.env` file.
   - Update the following values:
     - `MONGO_URI`: URI of your MongoDB instance.
     - `SECRET`: A randomly generated hash for encrypting passwords.

### Running the Application

1. Start the client and server:
   ```bash
   npm run start
   ```

2. Access the app in your browser at `http://localhost:3000`.

<p align="left">
  <img src="https://www.animatedimages.org/data/media/562/animated-line-image-0184.gif" width="1920" 
</p>

## Technologies Used (MERN Stack)

- **Frontend**: React.js, React Router, CSS for responsive design.
- **Backend**: Express.js, Node.js, MongoDB.
- **API**: PokéAPI v2 for Pokémon data.
- **Deployment**: Configured for platforms like Netlify or Vercel.

<p align="left">
  <img src="https://www.animatedimages.org/data/media/562/animated-line-image-0184.gif" width="1920" 
</p>

## Challenges and Solutions

- **Efficient Data Fetching**: Optimized API calls using pagination to reduce load times and memory usage.
- **Error Handling**: Implemented robust error handling to ensure a smooth user experience even during API failures.
- **Responsive Design**: Used media queries and a mobile-first approach to ensure compatibility across devices.
- **Persistent Favorites**: Leveraged local storage for a seamless experience so they remain after a page refresh.

<p align="left">
  <img src="https://www.animatedimages.org/data/media/562/animated-line-image-0184.gif" width="1920" 
</p>

## Future Plans

1. **Code Refactoring**: Enhance code readability and maintainability by improving modularization and documentation.
2. **Additional Features**: Integrate real-time chat or leaderboard for Pokémon fans.
3. **SSR**: Fully implement server-side rendering for better SEO and faster load times.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request for any feature additions or bug fixes.

--- 

<p align="left">
  <img src="https://www.animatedimages.org/data/media/562/animated-line-image-0184.gif" width="1920" 
</p>
