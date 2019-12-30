import React, {useState, useEffect} from 'react';
import { render } from '@testing-library/react';

function App() {

  const [task, setTask] = useState("");

  useEffect(() => {
    console.log("value of task: " + task);
  })

  const changeHandler = e => {
    // console.log(e.target.value);
    setTask(e.target.value)
  }

  const addTask = e =>{
    e.preventDefault();
    
    localStorage.setItem("task", task)
    // console.log(localStorage)

    if(localStorage.task === ""){
        return(
          console.log("wala")
        )
    }else{
      return (
        <div className="container">
          <div className="row">
            <div className="col">{localStorage.task}</div>
            <button className="btn btn-outline-info col mr-2 mt-2"><i className="far fa-edit"></i></button>
            <button className="btn btn-outline-danger col mt-2"><i className="far fa-trash-alt"></i></button>
          </div>
        </div>
      )
    }

  }

  return (
    <div className="container">
      <h1 className="text-center mt-5">My Task</h1>
      <div className="input-group row">
        <form className="col-md-4 mx-auto mt-3" onSubmit={addTask}>
          <input type="text" className="form-control" name="task" placeholder="Task..." onChange={changeHandler} />
          <button className="btn btn-block btn-success mt-3">Add Task</button>
        </form>
      </div>
    </div>
  );
}

export default App;
