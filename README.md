# AI-Powered 3D T-Shirt Website

Welcome to the AI-powered 3D T-shirt website! This application leverages AI and 3D rendering to provide an interactive and customizable T-shirt experience.

## Table of Contents

- [Features](#features)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Dependencies](#dependencies)

## Features

- **Customization**: Personalize T-shirts using AI-generated designs, colors, and textures.
- **Interactive 3D Rendering**: Experience dynamic 3D visuals of customized T-shirts.
- **User-Friendly Interface**: Intuitive design for seamless user interaction.
- **AI Integration**: Utilizes the OpenAI API for AI-powered image generation.

## Folder Structure

- **server**: Backend server implementation using Express.js, handling API requests.
- **client**: Frontend React application for user interaction and 3D rendering.
- **config**: Configuration files, constants, and utility functions.
- **pages**: React components representing different pages of the application.
- **components**: Reusable UI components for various functionalities.
- **store**: State management using the Valtio library.
- **canvas**: 3D rendering components for the T-shirt customization canvas.

## Installation

1. Clone the repository: `git clone https://github.com/tanbiralam/ai_threejs_tshirt_3d.git`
2. Navigate to the project folder: `cd ai_threejs_tshirt_3d`
3. Install dependencies:
   - For the server: `cd server && npm install`
   - For the client: `cd client && npm install`

## Usage

1. Start the server: `cd server && npm start`
2. Start the client: `cd client && npm start`
3. Open your browser and visit `http://localhost:3000` to access the application.

## Configuration

- **server/config.js**: Contains server configuration settings.
- **client/config.js**: Includes client-side configuration parameters.

## Dependencies

- **Server**:
  - Express.js
  - Mongoose
  - OpenAI API

- **Client**:
  - React
  - Three.js
  - Valtio
