import React, { useState } from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  
  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null)

  console.log("file", file)

  const formData = new FormData()
  formData.append('data', JSON.stringify({description}))
  formData.append('files.image', file)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const response = await fetch('http://localhost:1337/posts', {
      method: 'POST',
      body: formData 
    })

    const data = await response.json()

    console.log("data", data)
  }
  
  return (
    <div className='Create'>
      <h2>Create</h2>
 
      <form action='' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Descrição'
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <input
          type="file" 
          placeholder="Adcionar arquivo"
          onChange={(event) => setFile(event.target.files[0])}
        />
        <button>Enviar</button>
      </form>
    </div>



  )
}