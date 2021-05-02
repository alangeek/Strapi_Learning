import React, {useState, useEffect} from 'react'
import './App.css';

import Post from './components/Post'


const mockPosts = [
  {
    likes: 20,
    description: "AlanHustler",
    image: {
      url: "/uploads/1_mv7h_YA_8mz_BBY_8c_M_Zn4ls9_Q_d6063ddff0.jpeg"
    }
  },
  {
    likes: 33,
    description: "Outro post",
    image: {
      url: "/uploads/1_mv7h_YA_8mz_BBY_8c_M_Zn4ls9_Q_d6063ddff0.jpeg"
    }
  },
]


function App() {

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
   <div className="App">
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

export default App;
