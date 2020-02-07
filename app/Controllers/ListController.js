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
function _drawItems(id) {
  let itemElem = document.getElementById(id);
  let itemTemplate = '';
  let lists = _store.State.lists;
  lists.forEach(list => {
    if (list.id == id) {
      list.items.forEach(item => {
        itemTemplate += list.ItemTemplate(item);
      })
    }
  })
  itemElem.innerHTML = itemTemplate;
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }
  addList(event) {
    event.preventDefault();
    let formData = event.target;
    let newList = {
      title: formData.title.value
    }
    ListService.addList(newList);
    console.log(newList);
    _drawLists();
    formData.reset();
  }
  addItem(event, id) {
    event.preventDefault();
    console.log(id);
    debugger;
    let formData = event.target;
    let newItem = formData.item.value;
    ListService.addItem(newItem, id);
    _drawItems(id);
    formData.reset();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
