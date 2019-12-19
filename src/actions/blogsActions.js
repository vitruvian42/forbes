import axios from "axios";

export function getBlogs() {
  return function(dispatch) {
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