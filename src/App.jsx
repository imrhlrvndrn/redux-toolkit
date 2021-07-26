import React from 'react';
import { useLoadPostsQuery } from './features/posts/post.api';

// styles
import './App.css';

const App = () => {
    const { data, isLoading, isFetching, error } = useLoadPostsQuery();

    if (isLoading && !data)
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
    if (!isLoading && !isFetching && error) return <div>Error: {JSON.stringify(error)}</div>;

    return (
        <div className='App'>
            <h1>User's feed</h1>
            <div className='posts'>
                {data?.map((post) => (
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
