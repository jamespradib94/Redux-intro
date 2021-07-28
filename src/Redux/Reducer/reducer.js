const initState = {
  loading: false,
  data: "",
  allUserData: [],
  counter: 0,
  errorMessage:""
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "Loading":
      return { ...state, loading: action.loading };
    case "Save_Data":
      return { ...state, data: action.value , errorMessage:"" };
    case "Save_Data_AllUsers":
      return { ...state, allUserData: action.value , errorMessage:""};
    case "CLEARDATA":
      return { ...state, allUserData: [], data: "", errorMessage:"" };
    case "Counter":
      return { ...state, counter: state.counter + 1 };
    case "Increase":
      return { ...state, counter: state.counter + 1 };
    case "Decrease":
      return { ...state, counter: state.counter - 1 };
      case "Error":
        return {...state,errorMessage:action.value}
    default:
      return state;
  }
};

export default reducer;
