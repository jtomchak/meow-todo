import { compose } from "redux";
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
    case "ADD_TODO":
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1
        }
      ];

    default:
      return state;
  }
}
