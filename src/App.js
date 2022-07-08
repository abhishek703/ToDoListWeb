import React, { useState } from 'react'
import ToDoLists from './ToDoLists';

function App() {

  const [data, setData] = useState();
  const [list, setList] = useState([]);

  const getData = (event) => {
    setData(event.target.value);
  }

  const listOfItems = () => {
    setList((oldItems) => {
      return [...oldItems, data];
    })
    setData("");
  }

  const deleteItems =(id)=>{
    console.log("Deletd");
    setList((oldItems)=>{
      return oldItems.filter((arrEm,index)=>{
          return index !==id;
      })
    })
  }

  return (
    <>

      <div className='main-div'>
        <div className='center-div'>
          <br />
          <h1>ToDo List</h1>
          <br />

          <input type="text"
            placeholder='Add a Items'
            value={data}
            onChange={getData}
          />
          <button onClick={listOfItems}>+</button>

          <ol>
            {list.map((itemVal,index) => {
             return (<ToDoLists 
              key={index}
              txt={itemVal}
              id={index}
              onSelect={deleteItems}/>) 
             
            })}
          </ol>
        </div>


      </div>

    </>
  )
}

export default App