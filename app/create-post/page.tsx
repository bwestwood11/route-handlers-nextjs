"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')

    const router = useRouter()
   
    const handlePostCreation = async (event: React.FormEvent<HTMLFormElement>) => {
       if(!title || !date) return alert('Please fill out all fields')

        event.preventDefault()
        const response = await fetch('/api/create-post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                date
        })
    }) 
      if (response.ok) {
        alert('Post created successfully!')
        setTitle('')
        setDate('')
        router.push('/books')
        } else {
        alert('Error creating post.')
        }

    const data = await response.json();
    console.log(data)
}

  return (
    <div className='w-full max-w-6xl mx-auto text-center h-screen'>
        <h1 className='font-bold text-2xl mt-20 mb-10'>Create New Book</h1>
        <form className='flex flex-col gap-3 items-center rounded-lg shadow-xl border border-gray-500 max-w-lg mx-auto p-4' onSubmit={handlePostCreation}>
            <label className='font-semibold'>Book Title</label>
            <input className='border-gray-500 border rounded-md' type="text"  value={title} onChange={(e) => setTitle(e.target.value)}/>
            <label className='font-semibold'>Book Publishing Date</label>
            <input className='border-gray-500 border rounded-md' type="text" value={date} onChange={(e) => setDate(e.target.value)} />
            <button className='bg-green-500 text-white p-2 rounded-lg hover:bg-green-500/70' type="submit">Submit</button>
        </form>
        <div>
        <button className='text-gray-900 leading-7 mt-4 underline hover:text-gray-900/70' onClick={() => router.push('/books')}>Go to Books</button>
        </div>
    </div>
  )
}

export default CreatePost