import React, { useEffect, useState } from 'react'
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";

function TaskCard({ task_id, isDone, setTasks, content }) {

    const [value, setValue] = useState("");

    useEffect(() => {
        console.log(task_id);
    }, [])

    let handleTaskDelete = (id) => {
        console.log(id)
        setTasks((prevTasks) => prevTasks.filter(task => task.task_id !== id));
    };
    let handleTaskDone = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map(task =>
                task.task_id === id ? { ...task, isDone: !task.isDone } : task
            )
        );
    };
    let handleUpdate = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map(task =>
                task.task_id === id ? { ...task, content: value } : task
            )
        );
        setValue('');
    }


    return (
        <div className='flex items-center justify-center gap-5 md:gap-10 mt-5 w-[90%] md:w-[75%] shadow-lg mx-auto rounded-md p-2 border'>
            <div>
                <input type="checkbox" checked={isDone ? true : false} className="checkbox checkbox-md" onClick={() => handleTaskDone(task_id)} />
            </div>
            <div className='w-[45%] md:w-[60%]'>
                <p>{content}</p>
            </div>
            <div className='flex items-center justify-center gap-3'>
                <button onClick={() => document.getElementById('my_modal_1').showModal()} className='bg-blue-500 hover:bg-blue-600 p-1 text-white text-2xl rounded-md'><BiEdit /></button>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Edit your task</h3>
                        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder='Write you task here' className="input input-bordered w-[80%] md:w-[50%] mt-3 block mx-auto" />

                        <div className="modal-action">
                            <form method="dialog" className='flex gap-2'>
                                <button className="btn">Cancel</button>
                                <button className="btn" onClick={() => handleUpdate(task_id)} >Ok</button>
                            </form>
                        </div>
                    </div>
                </dialog>

                <button onClick={() => document.getElementById('my_modal_2').showModal()} className='bg-red-500 hover:bg-red-600 p-1 text-white text-2xl rounded-md'><MdDeleteOutline /> </button>
                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Alert !</h3>
                        <p className="py-2">Are you sure to delete this task</p>
                        <div className="modal-action">
                            <form method="dialog" className='flex gap-2'>
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Cancel</button>
                                <button className="btn" onClick={(e) => { e.stopPropagation(), handleTaskDelete(task_id) }}>Ok</button>
                            </form>
                        </div>
                    </div>
                </dialog>

            </div>
        </div>
    )
}

export default TaskCard