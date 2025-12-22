# Project Documentation

This document provides a guide to the style, accessibility features, and maintenance procedures for the Angel Salazar Digital website.

## 1. Style Guide

### Color Palette

- **Primary Purple**: `#8b5cf6` (Used for highlights, links, and accents)
- **Dark Background**: `#050505`
- **Card Background**: `linear-gradient(145deg, rgba(30, 30, 35, 0.4) 0%, rgba(20, 20, 25, 0.3) 100%)`
- **Text (Primary)**: `#e5e5e5`
- **Text (Secondary)**: `#a1a1aa` (Zinc 400)
- **Borders**: `rgba(255, 255, 255, 0.08)`

### Typography

- **Primary Font**: 'Inter', sans-serif (Used for general body text)
- **Heading Font (Montserrat)**: 'Montserrat', sans-serif (Used for main headings)
- **Accent Font (Manrope)**: 'Manrope', sans-serif (Used for navigation and sub-headings)

Font weights from 200 to 700 are used to create visual hierarchy.

### Components

- **Glass Card (`.glass-card`)**: A semi-transparent card with a blurred backdrop, used to display key information and case studies. It has a subtle hover effect that lifts the card and brightens its border.
- **Border Shine (`.border-shine`)**: A decorative element on cards that animates a gradient on hover to create a "shine" effect.

## 2. Accessibility Manual

This website aims to comply with WCAG 2.2 Level AA guidelines.

- **Semantic HTML**: The page is structured using semantic HTML5 tags such as `<nav>`, `<section>`, and `<footer>` to provide context to assistive technologies.
- **Keyboard Navigation**: All interactive elements, including links and form fields, are accessible via keyboard. Focus states are handled by default browser behavior and custom focus rings.
- **Image Alt Text**: All images (when added) should have descriptive `alt` attributes. Decorative images should have an empty `alt=""`.
- **Form Labels**: All form inputs in the diagnosis section have associated `<label>` elements for screen reader accessibility.

## 3. Maintenance Guide

### Updating Content

The website is a single static HTML file (`src/index.html`). To update text content, edit the content directly within this file.

### Managing Styles and Scripts

- **CSS**: All custom styles are located in `src/style.css`. The project also uses Tailwind CSS via a CDN, which is configured in a `<script>` tag in the `<head>` of `index.html`.
- **JavaScript**: All custom JavaScript for animations and interactions is located in `src/script.js`.

### Adding a New Case Study

To add a new case study under the "Transparencia Radical" section:

1.  Open `src/index.html`.
2.  Navigate to the `<div class="space-y-8">` element inside the section with `id="cases"`.
3.  Copy an existing case study block (e.g., the `<!-- Case 3: Medusa -->` block).
4.  Paste the copied block and update the following:
    -   The `<span>` tag for the category (e.g., "E-Commerce").
    -   The `<h3>` for the company name.
    -   The main paragraph describing the client's initial situation.
    -   The metric values and descriptions in the two-column grid.
    -   The details inside the `<details>` block, including the "Error", "Solución", and "Factor Decisivo" sections.
