# Wanmin Restaurant

A simple modular restaurant website inspired by Genshin Impact's Wanmin Restaurant, built using vanilla JavaScript and bundled with Webpack. Each page is dynamically rendered using JavaScript DOM manipulation rather than traditional navigation, aiming to capture the aesthetic of Liyue Harbor with warm, theme-consistent visuals.

## Features

- Modular, component-based structure using ES modules
- Dynamic DOM rendering for home, menu, and about pages
- Webpack bundling with asset handling (fonts, images, styles)
- Responsive layout with clean, themed UI
- Custom font integration for stylized, game-inspired appearance
- Lightweight and maintainable structure

## Project Structure

wanmin-restaurant/
├── dist/ # Webpack output
├── src/
│ ├── home/ # Home page module
│ ├── menu/ # Menu page module
│ ├── about/ # About page module
│ ├── index.js # Main entry point
│ └── styles.css # Global styles
├── webpack.config.js # Webpack configuration
├── package.json # Project metadata and scripts
└── README.md

## Setup and Usage

1. Clone the repository:
```bash
git clone https://github.com/your-username/wanmin-restaurant.git
cd wanmin-restaurant
```
Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run start
```

Assets and Credits
All characters and original artwork belong to miHoYo / HoYoverse.

Guoba GIF and other Genshin-themed images are used purely for educational/demo purposes.

One background image is from Wallpapers.com, credited to the user undefi_2joyw.

License
This project is for educational and non-commercial purposes only. All rights to Genshin Impact assets belong to miHoYo. Please do not redistribute or reuse without proper attribution.