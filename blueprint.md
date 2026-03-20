# Lotto Number Generator Blueprint

## Project Overview
A modern, visually appealing Lotto number generation web application. Users can generate 6 unique numbers between 1 and 45 with a single click, featuring a polished UI with interactive animations.

## Current Status & Features
- Initial setup: Transformation from a "Hello World" template.
- Core Feature: 6-number generation (1-45 range).
- Visuals: Interactive Lotto balls with vibrant colors, deep shadows, and smooth transitions.
- Responsive Design: Works across mobile and desktop.
- Logic: Ensuring unique number generation per draw.

## Implementation Plan
1. **Structure (`index.html`)**:
   - Main container for the app.
   - Slot for the Lotto balls.
   - Action button ("Generate Numbers").
   - Navigation/Footer.
2. **Styling (`style.css`)**:
   - Modern typography and vibrant color palette.
   - `:has()` selector for interactive feedback.
   - Container queries for responsive ball sizing.
   - Glassmorphism effects and deep shadows for "lifted" cards.
3. **Behavior (`main.js`)**:
   - Random number generation logic.
   - Sorting numbers for better readability.
   - DOM manipulation to animate the appearance of balls.
4. **Validation**:
   - Check for runtime errors in the console.
   - Verify unique number constraints.
