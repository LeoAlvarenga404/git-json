import { FavoritesView } from "./favorites.js";

new FavoritesView("#app")

const button = document.querySelector('.search button')
button.addEventListener('click', () => {
  document.querySelector('.enought').classList.add('clean')
})