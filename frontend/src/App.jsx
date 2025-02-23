import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import AddTasks from './Components/AddTasks'
import TaskCard from './Components/TaskCard'
import Empty from './Components/Empty'

function App() {

  const [tasks, setTasks] = useState([]);
  const [isDoneShow, setIsDoneShow] = useState(false);


  return (
    <>
      <Navbar />
      <AddTasks tasks={tasks} setTasks={setTasks} />
      <div className='flex items-center justify-center mt-2 gap-1'>
        <button className='bg-blue-500 px-2 py-1 rounded-md text-white' onClick={() => setIsDoneShow(false)}>To Do</button>
        <button className='bg-green-500 px-2 py-1 rounded-md text-white' onClick={() => setIsDoneShow(true)}>Done</button>
      </div>

      {/* here task */}

      <div className='h-[60vh] mt-5 overflow-x-hidden overflow-y-scroll relative'>
        
        <div className={tasks?.length != 0 ? "hidden" : 'block'}>
          <Empty />
        </div>

        <div className={isDoneShow ? 'hidden' : 'block'}>
          {
            tasks?.map((task, index) => (
              task.isDone ? "" :
                <TaskCard key={task?.tasktask_id} task_id={task?.task_id} setTasks={setTasks} content={task?.content} />
            ))
          }
        </div>

        <div className={isDoneShow ? 'block' : 'hidden'}>
          {
            tasks?.map((task, index) => (
              task.isDone ? <TaskCard key={task?.tasktask_id} task_id={task?.task_id} isDone={task?.isDone} setTasks={setTasks} content={task?.content} /> : ""
            ))
          }
        </div>
      </div>

    </>
  )
}

export default App
