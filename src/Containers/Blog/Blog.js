import React, { Component } from 'react'
import Post from '../../Components/Post/Post';
import FullPost from '../../Components/FullPost/FullPost';
import NewPost from '../../Components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: null
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(pst => {
                    return {
                        ...pst,
                        author: 'Krut'
                    }
                })
                this.setState({ posts: updatedPosts });
            }).catch(error => {
                this.setState({ error: true });
            });
    }

    postSelectHandler = (id) => {
        this.setState({ selectedPostId: id });
    }

    render() {

        let posts = <p style={{ textAlign: 'center', color: 'red' }}>Something went wrong!</p>
        if (!this.state.error) {
            posts = this.state.posts.map(p => {
                return <Post key={p.id} title={p.title} author={p.author} clicked={() => this.postSelectHandler(p.id)} />
            })
        }
        return (
            <div>
                <section className='Posts'>
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div >
        );
    }
}

export default Blog;