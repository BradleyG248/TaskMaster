import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    this.title = data.title,
      this.items = [];
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
  }
  get ListTemplate() {
    return `
    <div class="col-6 col-md-3">
    <h2>${this.title}</h2>
    <form onsubmit="app.listController.addItem(event, '${this.id}')">
      <div class="form-group">
        <input type="text" class="form-control" id="list-title" placeholder="Item" name="item">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <ul  id = "${this.id}">

    </ul>
  </div>
    `
  }
  ItemTemplate(item) {
    return `
    <li>${item}</li>
    `
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
}
