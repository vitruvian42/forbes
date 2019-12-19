export default function reducer(state={
    blog: [],
    fetching: false,
    fetched: false,
    error: null,
    session : true,
    counter: 0
  }, action) {
    switch (action.type) {
      case "CREATE_NEW_BLOG_STORE": {
        let coun = state.counter
        return {
          ...state,
          fetching: false,
          fetched: true,
          session : true,
          blog: action.payload,
          counter: coun + 1
        }
      }
      case "UPDATE_LIKES_COUNT": {
        let blogs = state.blog
        let coun = state.counter
        blogs[action.payload.index].likes = action.payload.likes
        return {
          ...state,
          fetching: false,
          fetched: true,
          session : true,
          blog: blogs,
          counter: coun + 1
        }
      }
    }

    return state
}