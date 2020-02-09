import List from "../Models/List.js";
import _store from "../store.js";
import { generateId } from "../utils.js"

//Public
class ListService {
  constructor() {

  }
  addList(newList) {
    let list = new List(newList);
    _store.State.lists.push(list);
    _store.saveState();
    console.log(localStorage);
  }
  addItem(newItem, id) {
    let lists = _store.State.lists;
    console.log(id);
    newItem.id = generateId();
    lists.forEach(list => {
      if (list.id == id) {
        list.items.push(newItem);
        console.log(list.items);
      }
    })
    _store.State.lists = lists;
    _store.saveState();
    console.log(lists)
  }
  deleteList(id) {
    let lists = _store.State.lists;
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].id === id) {
        console.log(lists[i]);
        lists.splice(i, 1);
      }
    }
    _store.State.lists = lists;
    _store.saveState();
  }
  deleteItem(id) {
    let lists = _store.State.lists;
    lists.forEach(list => {
      for (let i = 0; i < list.items.length; i++) {
        console.log(list.items[i])
        if (list.items[i].id == id) {
          list.items.splice(i, 1);
          console.log("Removed?" + id)
        }
        else {
          console.log("nope" + " " + id)
        }
      }
    })
    _store.State.lists = lists;
    _store.saveState();
  }
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
}

const SERVICE = new ListService();
export default SERVICE;
