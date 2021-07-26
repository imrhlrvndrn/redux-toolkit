import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    loadPosts,
    selectPosts,
    selectPostsError,
    selectPostsStatus,
} from './features/posts/post.slice';

// styles
import './App.css';

const App = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const postError = useSelector(selectPostsError);
    const postStatus = useSelector(selectPostsStatus);

    useEffect(() => {
        dispatch(loadPosts());
    }, []);

    if (postStatus === 'loading')
        return (
            <div
                style={{
                    width: '100%',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <h1>Loading posts...</h1>
            </div>
        );
    if (postStatus === 'error' && postError) return <div>Error: {postError}</div>;

    return (
        <div className='App'>
            <h1>User's feed</h1>
            <div className='posts'>
                {posts?.map((post) => (
                    <div className='post' key={post.id}>
                        <div className='post-header'>
                            <h1>
                                {post.id}. {post?.title}
                            </h1>
                        </div>
                        <div className='post-content'>
                            <p>{post?.body}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
