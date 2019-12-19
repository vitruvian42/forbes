import React from 'react';
import { connect } from "react-redux"
import {getBlogs} from "../actions/blogsActions"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

import Element from './Element'


class List extends React.Component {
    constructor(props) {
        super(props)
        this.getForbesBlogs = this.getForbesBlogs.bind(this);
    }

    componentDidMount() {
        this.getForbesBlogs()
    }

    getForbesBlogs(){
        this.props.dispatch(getBlogs());
    }

    render() {
        let blogs = this.props.blogs


        const listItems = blogs.map(
            (blog, index) => 
                <Element blog={blog} key={index} />
            );

        return <div >
                <div className="header">
                    Blog
                </div>
                <div className="flexGrow">
                    {listItems}
                </div>
            </div>
    }
}

function mapStateToProps(state) {
    return { blogs: state.blogs.blog }
}

export default connect(mapStateToProps)(List)
