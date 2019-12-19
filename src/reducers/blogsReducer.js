export default function reducer(state={
    blog: {},
    fetching: false,
    fetched: false,
    error: null,
    session : true
  }, action) {
    switch (action.type) {
      case "CREATE_NEW_BLOG_STORE": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          session : true,
          blog: action.payload
        }
      }
    }

    return state
}