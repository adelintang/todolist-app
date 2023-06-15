const formSearch = document.getElementById('form-search');
const listItems = document.getElementById('list-items');

const searchItem = (e) => {
  e.preventDefault();
  const searchValue = formSearch.querySelector('input').value.toLowerCase();
  
  const items = listItems.getElementsByTagName('li');
  Array.from(items).forEach((item) => {
    const itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(searchValue) != -1) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  })
}

export default searchItem;