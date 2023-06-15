import addItem from "./app/addItem.service.js";
import removeItem from "./app/removeItem.service.js";
import searchItem from "./app/searchItem.service.js";

const formAdd = document.getElementById('form-add');
const listItems = document.getElementById('list-items');
const formSearch = document.getElementById('form-search');

formAdd.addEventListener('submit', addItem);
listItems.addEventListener('click', removeItem);
formSearch.addEventListener('submit', searchItem);