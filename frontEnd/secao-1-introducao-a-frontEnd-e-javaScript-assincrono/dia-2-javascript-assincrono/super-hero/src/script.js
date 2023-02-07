import Swal from "sweetalert2";

const button = document.querySelector('button');
const img = document.querySelector('img');
const h2 = document.querySelector('h2');

button.addEventListener('click', () => {
  const id = Math.floor(Math.random() * 731);
  const SUPERHERO_API = `https://akabab.github.io/superhero-api/api/id/${id}.json`;
  fetch(SUPERHERO_API)
  .then((resolve) => resolve.json())
  .then((data) => {
    const { name, images: { md } } = data;
    img.alt = `${name} image hero`;
    img.src = md;
    h2.innerText = name;
  })
  .catch(() => Swal.fire({
    title: 'Error!',
    text: `Ocorreu um erro`,
    icon: 'error',
    confirmButtonText: 'Cool'
  }))})