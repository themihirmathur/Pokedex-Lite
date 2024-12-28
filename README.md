# Pokedex-Lite 🐬 Advanced MERN Pokémon Exploration Webapp 🐯

<p align="left">
  <img src="https://www.animatedimages.org/data/media/562/animated-line-image-0184.gif" width="1920" 
</p>

![Screenshot 2024-12-28 at 6 44 59 PM](https://github.com/user-attachments/assets/77ab4ec9-07b7-4114-9f2f-cc8ba709bbb8)

## Overview

`Pokedex-Lite` is an advanced web application built using the MERN (MongoDB, Express, React, Node.js) stack. It offers a sleek and interactive way to explore the Pokémon universe. With a responsive design and several powerful features, this app ensures an engaging experience for users across all devices.

The application leverages the PokéAPI (v2) to fetch Pokémon data and allows users to search, paginate, favorite, and view detailed information about their favorite Pokémon. It also includes optional features like user authentication and animations for an enhanced user experience.

<p align="left">
  <img src="https://www.animatedimages.org/data/media/562/animated-line-image-0184.gif" width="1920" 
</p>

![Screenshot 2024-12-28 at 7 00 16 PM](https://github.com/user-attachments/assets/388a2690-bcec-4620-945b-a8665a25d3d7)

## Features

### 1. **Data Fetching**
I used the PokéAPI to retrieve a list of Pokémon and implemented robust error handling. Loading states were gracefully managed by displaying spinners or error messages when necessary.

![Screenshot 2024-12-28 at 7 17 42 PM](https://github.com/user-attachments/assets/3f26e178-68a9-4877-bd29-0a1a65d4c26b)

### 2. **Listing & Basic UI**
I displayed Pokémon in a visually appealing grid format with their names and images. The design was made fully responsive, ensuring compatibility across mobile, tablet, and desktop devices.

![Screenshot 2024-12-28 at 6 44 59 PM](https://github.com/user-attachments/assets/ef2d647d-6e44-48cc-9d07-c043491e0a76)

### 3. **Search**
I provided a search bar that allowed users to filter Pokémon by name in real time as they typed.

![Screenshot 2024-12-28 at 6 46 13 PM](https://github.com/user-attachments/assets/e8828d97-4073-408c-8ffd-04ae25c4b1d4)

### 4. **Pagination**
Instead of fetching all Pokémon at once, I implemented pagination, allowing users to navigate through the Pokémon list efficiently with next and previous buttons.

![Screenshot 2024-12-28 at 6 47 04 PM](https://github.com/user-attachments/assets/0afbecbf-f44e-4496-a78b-9d898645b8a9)

### 5. **Favorites**
I allowed users to mark Pokémon as favorites and ensured their choices were persisted using local storage, so favorites remained intact even after refreshing the page.

![Screenshot 2024-12-28 at 6 48 04 PM](https://github.com/user-attachments/assets/9d69cef4-9065-4f6b-b095-67c8f1ddeaab)

### 6. **Detail View**
I created a detailed view (accessible via a separate page or modal) where users could explore additional data about a Pokémon, such as stats (e.g., HP, attack) and abilities. Users could close the view and return to the main list seamlessly.

![Screenshot 2024-12-28 at 6 48 40 PM](https://github.com/user-attachments/assets/067890dc-ca4e-4ec0-afa9-c619c5d322bf)

### 7. **Build & Deployment**
I provided clear instructions for running the project locally and ensured the app could be easily built for deployment on platforms like Netlify, Vercel, or GitHub Pages.

### **Bonus Features**
1. **User Authentication (OAuth)**  
I experimented with a simple login flow using OAuth providers like Google and GitHub to authenticate users.

![Screenshot 2024-12-28 at 6 52 51 PM](https://github.com/user-attachments/assets/3f12e3c3-607f-4707-9673-604ea41df76f)

No one can just log in, it will check for the user details!
![Screenshot 2024-12-28 at 6 52 24 PM](https://github.com/user-attachments/assets/3ad37904-04fd-48ff-ab30-3a9a65173f47)

2. **Animations**  
I added subtle animations for hover effects, page transitions, and modal interactions to enhance the user experience.

![Screenshot 2024-12-28 at 6 49 53 PM](https://github.com/user-attachments/assets/615eb31c-28e6-4801-abc4-c6c52dc0e0ac)

3. **Server-Side Rendering (SSR)**  
I experimented with Next.js to enable server-side rendering, ensuring faster initial loads and improved SEO.

![Screenshot 2024-12-28 at 6 51 28 PM](https://github.com/user-attachments/assets/f4af9291-9ef2-4730-9e44-342e925bca82)

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

![Screenshot 2024-12-28 at 6 58 46 PM](https://github.com/user-attachments/assets/e67601d5-6779-463d-a951-9901af0ec75d)

## Contributing

Contributions are welcome! Please fork the repository and create a pull request for any feature additions or bug fixes.

--- 

<p align="left">
  <img src="https://www.animatedimages.org/data/media/562/animated-line-image-0184.gif" width="1920" 
</p>
