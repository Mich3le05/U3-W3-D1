const initialState = {
  main: {
    favourites: [], // Array per salvare i preferiti
  },
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVOURITES':
      return {
        ...state,
        main: {
          ...state.main,
          favourites: [...state.main.favourites, action.payload],
        },
      }
    case 'REMOVE_FROM_FAVOURITES':
      return {
        ...state,
        main: {
          ...state.main,
          favourites: state.main.favourites.filter(
            (company) => company !== action.payload
          ),
        },
      }
    default:
      return state
  }
}

export default mainReducer
