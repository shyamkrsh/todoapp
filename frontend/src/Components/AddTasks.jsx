import React, { useEffect, useState } from 'react'

function AddTasks({tasks, setTasks}) {
    const [content, setContent] = useState('');
    let handleSubmit = (e) => {
        e.preventDefault();
        let newTask = { task_id: Date.now(), content: content, isDone: false }
        setTasks((prevTasks) => [...prevTasks, newTask]);
        setContent('');
    }
    return (
        <div onSubmit={handleSubmit} className='mt-5'>
            <form action="" className='flex flex-col md:flex-row justify-center items-center gap-3'>
                <input type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder='Write you task here' className="input input-bordered w-[80%] md:w-[50%]" />
                <button type='submit' className="bg-blue-500 w-[50%] md:w-[10%] px-3 py-2 md:py-3 rounded-md text-white">Add new task</button>
            </form>
        </div>
    )
}

export default AddTasks