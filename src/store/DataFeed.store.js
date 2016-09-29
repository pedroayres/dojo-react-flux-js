import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import ApplicationConstants from "../constant/Application.constant";

class DataFeedStore extends EventEmitter {
  constructor() {
    super();
    this.feed = {};
  }

  populateFeed(data) {
    this.feed = data;
    this.emit("feedChanged");
  }

  getAll() {
    return this.feed;
  }

  handleActions(action) {
    switch(action.type) {
      case ApplicationConstants.ActionType.RECEIVE_DATA: {
        this.populateFeed(action.response.data);
      }
    }
  }
}

const dataFeedStore = new DataFeedStore;
dispatcher.register(dataFeedStore.handleActions.bind(dataFeedStore));
export default dataFeedStore;