import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from "react-redux"
import {getBlogs, updateLikesCount} from "../actions/blogsActions"
import List from './List';
import SingleElement from './SingleElement'
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';


class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.updateLikes = this.updateLikes.bind(this)
    }

    updateLikes(ind) {
        this.props.dispatch(updateLikesCount(ind));
    }
    
    render() {
        let { blogs} = this.props
        let blog = blogs[this.props.match.params.id]

        return <div>
                <SingleElement blog={blog} ind={this.props.match.params.id} updateLikes={this.updateLikes} />
                <List title="Similar Blogs" topic={blog.category} />
            </div>
    }
}

function mapStateToProps(state) {
    return { 
        blogs: state.blogs.blog,
        counter: state.blogs.counter
    }
}

export default connect(mapStateToProps)(Blog)
