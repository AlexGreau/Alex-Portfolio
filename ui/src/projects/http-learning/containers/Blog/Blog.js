import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import classes from './Blog.module.css';

class Blog extends Component {
    state = {posts: []}

    componentDidMount() {
        console.log("component did mount : ", this.state)
        this.getPosts();
    }

    getPosts= () => {
            const url = 'https://jsonplaceholder.typicode.com/posts';
            fetch(url)
                .then((response) => response.json())
                .then((res) => {
                    console.log("res :", res)
                    this.setState({posts: res})
                })
                .catch(err => console.log(err))
        
    }

    render () {
        console.log("render state : ", this.state)
        const posts = this.state.posts.map (post => {
            return <Post title={post.title}></Post>
        })

        return (
            <div>
                <section className={classes.Posts}>
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;