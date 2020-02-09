import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    this.title = data.title,
      this.items = data.items || [];
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
  }
  get ListTemplate() {
    return `
    <div class="col-6 col-md-3">
    <h2>${this.title}</h2>
    <form onsubmit="app.listController.addItem(event, '${this.id}')">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Item" name="item">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <ul class = "d-flex flex-column align-items-start" id = "${this.id}">

    </ul>
    <button class="btn btn-danger" onclick = "app.listController.deleteList('${this.id}')">Delete</button>
  </div>
    `
  }
  ItemTemplate(item) {
    return `
    <li>${item.item}</li> <p class = "item-delete mb-0 align-self-end" onclick = "app.listController.deleteItem('${item.id}')" id = "${item.id}">x</p>
    `
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
}
