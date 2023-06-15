const listItems = document.getElementById('list-items');

const addItem = (e) => {
  e.preventDefault();
  const formInput = document.getElementById('form-input');

  const li = document.createElement('li');
  li.id = 'item';
  
  const text = document.createElement('p');
  text.append(document.createTextNode(formInput.value));
  const btnDel = document.createElement('span');
  btnDel.id = 'delete';
  btnDel.append(document.createTextNode('X'));

  li.append(text, btnDel);
  listItems.append(li);
}

export default addItem;