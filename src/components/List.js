import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from "react-redux"
import {getBlogs} from "../actions/blogsActions"
import Button from '@material-ui/core/Button';


import Element from './Element'


class List extends React.Component {
    constructor(props) {
        super(props)
        this.getForbesBlogs = this.getForbesBlogs.bind(this);
        this.increaseCounter = this.increaseCounter.bind(this)
        this.openBlog = this.openBlog.bind(this)
        this.increaseCount = 4
    }

    componentDidMount() {
        this.getForbesBlogs()
    }

    getForbesBlogs(){
        this.props.dispatch(getBlogs());
    }

    increaseCounter() {
        this.increaseCount += 4
        this.forceUpdate()
    }

    openBlog(ind) {
        this.props.history.push(`/blog/${ind}`);
    }

    render() {
        let { blogs, title, topic} = this.props
        let listItems = []


        blogs.map(
            (blog, index) => {
                    if(topic!==undefined) {
                        if (blog.category == topic) {
                            listItems.push(<Element blog={blog} key={index} ind={index}  openBlog={this.openBlog}  />)
                        }
                    } else {
                        if(index < this.increaseCount) {        
                            listItems.push(<Element blog={blog} key={index} ind={index} openBlog={this.openBlog} />)
                        }
                    }
                }
            );

        return <div >
                <div className="header">
                    {title || "Blog"}
                </div>
                <div className="flexGrow">
                    {listItems}
                </div>
                <div className="button-centered">
                    {
                        topic==undefined ? <Button {...this.props} variant="contained" onClick={this.increaseCounter} className="button-color">
                            More Articles
                        </Button> : ""
                    }
                    
                </div>
            </div>
    }
}

function mapStateToProps(state) {
    return { 
        blogs: state.blogs.blog
    }
}

export default connect(mapStateToProps)(List)
