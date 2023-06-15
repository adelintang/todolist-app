const listItems = document.getElementById('list-items');

const removeItem = (e) => {
  e.preventDefault();

  if (e.target.id === 'delete') {
    const li = e.target.parentElement;
    listItems.removeChild(li);
  }
}

export default removeItem;