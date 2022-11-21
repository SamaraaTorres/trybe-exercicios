import { nanoid } from "nanoid";
import './style.css'

const h2 = document.querySelector('h2');
const button = document.querySelector('button');

button.addEventListener('click', () => h2.innerText = nanoid());