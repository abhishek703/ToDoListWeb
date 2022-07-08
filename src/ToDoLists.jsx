import React from 'react'

function ToDoLists(props) {
    return (
        <>

            <div className='todo-style'>
       
                <i class='fa fa-times' aria-hidden="true"
                    onClick={() => {
                        props.onSelect(props.id)
                    }}
                >X</i>
                <li>{props.txt}</li>
            </div>

        </>
    )
}

export default ToDoLists