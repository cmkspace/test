# Lotto Number Generator Blueprint

## Project Overview
A modern, visually appealing Lotto number generation web application. Users can generate 6 unique numbers between 1 and 45 with a single click, featuring a polished UI with interactive animations.

## Current Status & Features
- Initial setup: Transformation from a "Hello World" template.
- Core Feature: 6-number generation (1-45 range).
- Visuals: Interactive Lotto balls with vibrant colors, deep shadows, and smooth transitions.
- Partnership Inquiry: Integrated contact form using Formspree for business inquiries.
- Responsive Design: Works across mobile and desktop.

## Implementation Plan
1. **Structure (`index.html`)**:
   - Main container for the app.
   - Slot for the Lotto balls.
   - Action button ("Generate Numbers").
   - **Partnership Inquiry Section**: A clean form with Name, Email, and Message fields.
2. **Styling (`style.css`)**:
   - Modern typography and vibrant color palette.
   - Glassmorphism effects for the form container.
   - Styled input fields and submission button to match the Lotto Pro theme.
3. **Behavior (`main.js`)**:
   - Random number generation logic.
   - Animation for ball appearance.
   - Form submission handling (via Formspree).
4. **Validation**:
   - Check for runtime errors in the console.
   - Verify unique number constraints.
