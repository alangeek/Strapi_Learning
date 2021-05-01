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
        "id": 1,
        "name": "1_mv7hYA8mzBBY8cMZn4ls9Q.jpeg",
        "alternativeText": "",
        "caption": "",
        "width": 1920,
        "height": 1080,
        "formats": {
            "thumbnail": {
                "name": "thumbnail_1_mv7hYA8mzBBY8cMZn4ls9Q.jpeg",
                "hash": "thumbnail_1_mv7h_YA_8mz_BBY_8c_M_Zn4ls9_Q_d6063ddff0",
                "ext": ".jpeg",
                "mime": "image/jpeg",
                "width": 245,
                "height": 138,
                "size": 8.92,
                "path": null,
                "url": "/uploads/thumbnail_1_mv7h_YA_8mz_BBY_8c_M_Zn4ls9_Q_d6063ddff0.jpeg"
            },
            "large": {
                "name": "large_1_mv7hYA8mzBBY8cMZn4ls9Q.jpeg",
                "hash": "large_1_mv7h_YA_8mz_BBY_8c_M_Zn4ls9_Q_d6063ddff0",
                "ext": ".jpeg",
                "mime": "image/jpeg",
                "width": 1000,
                "height": 563,
                "size": 101.98,
                "path": null,
                "url": "/uploads/large_1_mv7h_YA_8mz_BBY_8c_M_Zn4ls9_Q_d6063ddff0.jpeg"
            },
            "medium": {
                "name": "medium_1_mv7hYA8mzBBY8cMZn4ls9Q.jpeg",
                "hash": "medium_1_mv7h_YA_8mz_BBY_8c_M_Zn4ls9_Q_d6063ddff0",
                "ext": ".jpeg",
                "mime": "image/jpeg",
                "width": 750,
                "height": 422,
                "size": 60.14,
                "path": null,
                "url": "/uploads/medium_1_mv7h_YA_8mz_BBY_8c_M_Zn4ls9_Q_d6063ddff0.jpeg"
            },
            "small": {
                "name": "small_1_mv7hYA8mzBBY8cMZn4ls9Q.jpeg",
                "hash": "small_1_mv7h_YA_8mz_BBY_8c_M_Zn4ls9_Q_d6063ddff0",
                "ext": ".jpeg",
                "mime": "image/jpeg",
                "width": 500,
                "height": 281,
                "size": 30.12,
                "path": null,
                "url": "/uploads/small_1_mv7h_YA_8mz_BBY_8c_M_Zn4ls9_Q_d6063ddff0.jpeg"
            }
        },
        "hash": "1_mv7h_YA_8mz_BBY_8c_M_Zn4ls9_Q_d6063ddff0",
        "ext": ".jpeg",
        "mime": "image/jpeg",
        "size": 326.26,
        "url": "/uploads/1_mv7h_YA_8mz_BBY_8c_M_Zn4ls9_Q_d6063ddff0.jpeg",
        "previewUrl": null,
        "provider": "local",
        "provider_metadata": null,
        "created_at": "2021-05-01T21:38:33.053Z",
        "updated_at": "2021-05-01T21:38:33.071Z"
    }
}

const API_URL = 'http://localhost:1337'

const formatImageUrl = (url) => `${API_URL}${url}`

export default () => {
  const url = post.image && post.image.url
  console.log("url", url)

  const description = post.description
  console.log("description", description)

  const likes = post.likes
  console.log("likes", likes)

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