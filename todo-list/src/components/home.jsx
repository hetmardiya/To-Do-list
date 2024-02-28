import "../style/home.css";
import Task from "./task";
import React , {useState} from 'react'

const Home = () => {
    const [task,setTask] = useState([]);
    const [title,setTitle] = useState("");
    const [description,setDiscription] = useState("");
    const taskadded = (e)=>{
        e.preventDefault();

        setTask([...task,{title,description}]);
        setTitle("");
        setDiscription("");
    };

    const deletetask = (index)=>{
        const filterarray = task.filter((val,i)=>{
            return i!== index;
        })
        setTask(filterarray)
    }


  return (
    <div className="container">
        <h1>DAILY GOALS</h1>
      <form onSubmit={taskadded}>
        <input type="text" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <textarea placeholder="Describe Your Goal" value={description} onChange={(e)=>setDiscription(e.target.value)}></textarea>
        <button type="submit">Add</button>
      </form>
      {task.map((item,index)=>{
        return <Task key={index} title = {item.title} description = {item.description} deletetask={deletetask} index={index} />
    })}
    </div>
  );
};

export default Home;
