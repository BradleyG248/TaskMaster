import ListService from "../Services/ListService.js";
import _store from "../store.js"

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let listElem = document.getElementById("lists");
  let list = _store.State.lists;
  let listTemplate = '';
  list.forEach(list => {
    listTemplate += list.ListTemplate;
  })

  listElem.innerHTML = listTemplate;
}
function _drawItems() {
  let lists = _store.State.lists;
  lists.forEach(list => {
    let itemTemplate = '';
    list.items.forEach(item => {
      itemTemplate += list.ItemTemplate(item);
    })
    let itemElem = document.getElementById(list.id);
    itemElem.innerHTML = itemTemplate;
  })
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
    _drawItems();
  }
  addList(event) {
    event.preventDefault();
    let formData = event.target;
    let newList = {
      title: formData.title.value
    }
    ListService.addList(newList);
    _drawLists();
    _drawItems();
    formData.reset();
  }
  addItem(event, id) {
    event.preventDefault();
    let formData = event.target;
    let newItem = {
      item: formData.item.value,
      id: null
    }
    ListService.addItem(newItem, id);
    _drawItems();
    formData.reset();
  }
  deleteList(id) {
    if (confirm("Are you sure?")) {
      ListService.deleteList(id);
      _drawLists();
      _drawItems();
    }
  }
  deleteItem(id) {
    if (confirm("Are you sure?")) {
      ListService.deleteItem(id);
      _drawLists();
      _drawItems();
    }
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
