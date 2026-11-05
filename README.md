## Default and Named Exports in React

In this project, I used both default exports and named exports to organise and import React components.

### 1. Default Exports

A default export allows us to export one main component or value from a file. When importing a default export, curly braces are not required.

I used default exports in the following components:

- **Navbar.jsx** – Displays the website navigation menu.
- **Hero.jsx** – Displays the main heading and introduction.
- **RecipeCard.jsx** – Displays the featured recipe information.

Example:

```jsx
function Navbar() {
  return <nav>Foodie Recipes</nav>;
}

export default Navbar;
```

Importing the component:

```jsx
import Navbar from "./components/Navbar";
```

### 2. Named Exports

Named exports allow us to export specific components or values using their declared names. When importing named exports, curly braces are required.

I used named exports in the following components:

- **Ingredients.jsx** – Displays the ingredients required for the recipe.
- **Footer.jsx** – Displays contact information and copyright details.

Example:

```jsx
export function Ingredients() {
  return <h2>Ingredients</h2>;
}
```

Importing the component:

```jsx
import { Ingredients } from "./components/Ingredients";

### 3. How They Were Used in This Project

The `App.jsx` file imports all five components and renders them inside the main `App` component.

Three components use default exports (Navbar, Hero and RecipeCard), while two components use named exports (Ingredients and Footer).

This demonstrates how React components can be organised into separate files and imported into a parent component to build a complete application.

### Conclusion

Using default and named exports helps organise React code into reusable and manageable components. It also makes it easier to maintain the project and understand how different components work together.