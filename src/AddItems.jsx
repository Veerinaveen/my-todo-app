import React from 'react'

const AddItems = ({additem, setAdditem,  handleSubmit}) => {
  return (
    <form 
    onSubmit={handleSubmit}
    >
      <input type="text" name="" id="addItem"
       required
       placeholder='add item'
       autoFocus
       value={additem}
       onChange={(e) => setAdditem(e.target.value)}
      />
      <button type="submit">add</button>
    </form>
  )
}

export default AddItems
