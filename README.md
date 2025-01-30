# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# React Project Setup Guide

## Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (Recommended: LTS version)
- [Git](https://git-scm.com/)
- A package manager: **npm** (comes with Node.js) or **yarn**

## Cloning the Repository
To clone this React project, open your terminal or command prompt and run:

```sh
# Replace `your-repo-url` with the actual repository URL
git github.com:samuelgbenga/tobamsgassesment.git

# Navigate into the project directory
cd your-project-folder
```

## Installing Dependencies
This project only uses **react-router-dom** as an external library. Install dependencies using:

```sh
# Using npm
npm install

# OR using yarn
yarn install
```

## Running the Project
Start the development server with:

```sh
# Using npm
npm start

# OR using yarn
yarn start
```

The app should now be running at [http://localhost:3000](http://localhost:3000/) in your browser.

## Project Structure
```
├── src
│   ├── components  # Reusable components
│   ├── assets      # images and svg use
│   ├── interface  # Define the props type
│   ├── layouts     # layout structure for pages  
│   ├── sections    # a break down of a single page
│   ├── pages        # Page components
│   ├── roueter.js       # React Router configurations
│   ├── main.tsx       # Root component
│   ├── index.css     # css
├── public           # Static assets
├── package.json     # Project metadata & dependencies
├── README.md        # Documentation
```

## Building for Production
To create an optimized production build, run:

```sh
# Using npm
npm run build

# OR using yarn
yarn build
```

This will generate a `build` folder with the compiled files ready for deployment.

## License
This project is open-source. Feel free to modify and distribute it as per the license specified in this repository.

---

Happy coding! 🚀

