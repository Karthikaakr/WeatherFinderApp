# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# 🌦️ Weather Finder (React + OpenWeather API)

A simple React-based weather application that allows users to search for any city and get **real-time weather details** such as temperature, condition, and geographical coordinates.  

This project uses the **OpenWeatherMap API** (GeoCoding + Weather endpoints).

---

## 📖 Project Overview
- Enter a city name (e.g., `Chennai` or `London,UK`)  
- If country code not given, it defaults to **India (IN)**  
- Fetches **Latitude & Longitude** using OpenWeather Geo API  
- Fetches **Weather Data** using OpenWeather Weather API  
- Displays Temperature, Weather Condition, Lat, and Lon  
- Provides **error handling** for invalid locations  

---

## 🚀 Features
- 🔍 Search weather by **city name**  
- 🌡️ Shows **temperature** in °C  
- 🌤️ Displays **weather condition** (e.g., cloudy, sunny)  
- 📍 Shows **latitude & longitude**  
- ⚡ Error handling for wrong input  
- 🎨 External CSS styling  

---

## 🛠️ Tech Stack
- React.js (Hooks: `useState`)  
- OpenWeatherMap API  
- JavaScript (ES6)  
- CSS  

---

## ⚙️ Installation & Setup
1. Clone the repository  
   ```bash
   git clone https://github.com/your-username/weather-finder.git
   cd weather-finder
2. Install dependencies
  npm install
3. Start development server
   npm run dev
4.Open in browser
   http://localhost:5173/ 
