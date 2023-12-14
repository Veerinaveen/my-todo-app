import React from 'react'

const Content = ({ items, handleClick, handleDelete}) => {
  return (
    <div className='content'>
     {items.length ? (  
    <ul>
      {items.map((item) => {
        return <li key={item.id}>

             <input type="checkbox" 
              checked = {item.checked}
              onChange={() => handleClick(item.id)}
             />

           <label htmlFor=""
             style={item.checked ? {textDecoration : "line-through"}: null}
             onDoubleClick={() => handleClick(item.id)}
           >
            {item.item}
           </label>

           <button
             onClick={() => handleDelete(item.id)}
           >delete</button>
        </li>
      })}
     </ul>
     ): (<h1 className='hari'>you can add what you want...</h1>)}
    </div>
  )
}

export default Content
