import React from 'react';

const post = {
    "id": 1,
    "description": "Meu Diário de um Hustler, é essencial para quem quer iniciar nessa jornada!",
    "likes": 20,
    "author": null,
    "published_at": "2021-05-01T21:40:06.427Z",
    "created_at": "2021-05-01T21:40:02.401Z",
    "updated_at": "2021-05-01T21:40:06.460Z",
    "image": {
        "url": "/uploads/1_mv7h_YA_8mz_BBY_8c_M_Zn4ls9_Q_d6063ddff0.jpeg",
    }
}

const API_URL = 'http://localhost:1337'

const formatImageUrl = (url) => `${API_URL}${url}`

export default ({description, likes, url}) => {

    return (
      <div className="Post">
        <img className="Post__Image" src={formatImageUrl(url)}/> 
          <h4>{description}</h4>
          <div>
            <span>Likes: {likes}</span>
          </div>
      </div>

    )
}