import React, { useEffect, useState } from 'react';

import Post from '../components/Post'

export default () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
      const getPosts = async () => {
        const response = await fetch('http://localhost:1337/posts')
        const data = await response.json()
        setPosts(data)

      }

      getPosts()
    }, [])
  
    return (
    <div className="Home">
      {posts.map(post => (
        <Post 
          likes={post.likes}
          description={post.description}
          url={post.image && post.image.url}
        />
        
      ))}
    </div>
    );
  
}