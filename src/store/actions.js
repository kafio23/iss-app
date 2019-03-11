import * as types from "./mutation-types";
import PeopleService from "@/services/PeopleService";

export const loadItems = ({ commit }) => {
  const task = "action loadItems";
  console.log(task);
  return new Promise((resolve, reject) => {
    commit(types.ADD_PROCESSING_TASK, task);
    PeopleService.load()
      .then(items => {
        commit(types.SET_ITEMS, items);
        commit(types.REMOVE_PROCESSING_TASK, task);
        resolve();
      })
      .catch(error => {
        console.error(`Error loading items from the backend: ${error}.`);
        commit(types.REMOVE_PROCESSING_TASK, task);
        reject(error);
      });
  });
};
