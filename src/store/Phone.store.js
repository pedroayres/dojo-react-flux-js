import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class PhoneStore extends EventEmitter {
  constructor() {
    super();
    this.phone = [];
  }

  createTodo(text) {
    const id = Date.now();
    this.phone.push({
      id: id,
      text: text,
      complete: false
    });

    this.emit("change");
  }

  getAll() {
    return this.phone;
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.text);
      }
    }
  }
}

const phoneStore = new PhoneStore;
dispatcher.register(phoneStore.handleActions.bind(phoneStore));
export default phoneStore;