const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload,
          completed: false,
        },
      ];

    case 'toggle':
      return state.map((todo) => {
        const td = todo;
        if (todo.id === action.payload) {
          td.completed = !todo.completed;
        }
        return td;
      });

    case 'remove':
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};

export default reducer;
