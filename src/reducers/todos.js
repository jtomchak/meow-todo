import { compose } from "redux";
import * as types from "../ActionTypes";
const initialState = [
  {
    text: "I am Totally Lost",
    completed: false,
    id: 0
  },
  {
    text: "Here I am ",
    completed: false,
    id: 1
  }
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1
        }
      ];
    case types.COMPLETE_TODO:
      const todoIndex = state.map(x => x.id).indexOf(action.id);
      const completedTodo = state[todoIndex];
      return [
        ...state.slice(0, todoIndex),
        { ...completedTodo, completed: !completedTodo.completed },
        ...state.slice(todoIndex + 1, state.length)
      ];

    default:
      return state;
  }
}
