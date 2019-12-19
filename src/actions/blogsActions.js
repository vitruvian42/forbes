import axios from "axios";
import store from '../store';

export function getBlogs() {
  return function(dispatch) {
    if(store.getState().blogs.blog.length == 0) {
      axios.get('src/actions/blogs.json').then(
        response => {
          dispatch({
            type: "CREATE_NEW_BLOG_STORE",
            payload: response.data
          })

        }).catch(err => {
          console.log(err)
        })
    }
    
  }
}

export function updateLikesCount(ind) {
  return function(dispatch) {
    let likes 
    if(store.getState().blogs.blog[ind].likes) {
      likes = store.getState().blogs.blog[ind].likes + 1
    } else {
      likes = 1
    }
    
    dispatch({
      type: "UPDATE_LIKES_COUNT",
      payload: {
        "index": ind,
        "likes": likes
      }
    })
  }
}