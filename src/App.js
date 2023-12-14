import Header from './Header';
import './App.css';
import { useState } from 'react';
import Content from './Content';
import Footer from './Footer';
import AddItems from './AddItems';

function App() {

const [items, setItems] = useState(JSON.parse(localStorage.getItem('saveItems')));

const [additem, setAdditem] = useState('');

const newItem = (item) => {
  const id = items.length ? items[items.length - 1].id +1 : 1
  const kotta = {id, checked:false, item}
  const listItems = [...items, kotta]
  setItems(listItems)
  localStorage.setItem("saveItems",JSON.stringify(listItems));
}

const handleClick = (id) => {
  const listItems = items.map((hari) => {
    return (id === hari.id ? {...hari, checked: !hari.checked} : hari)
  })
  setItems(listItems)
  localStorage.setItem("saveItems",JSON.stringify(listItems));
}

const handleDelete = (id) => {
  const listItems = items.filter((hari) => {
    return id !== hari.id
  })
  setItems(listItems)
  localStorage.setItem("saveItems",JSON.stringify(listItems));
}

const handleSubmit = (e) => {
   e.preventDefault()
   if (!additem) return;
   console.log('submited');
   newItem(additem)
   setAdditem('')
}

  return (
    <div className="App">
       <Header />
       <AddItems 
         additem = {additem}
         setAdditem = {setAdditem}
         handleSubmit = {handleSubmit}
       />
       <Content
         items ={items}
         handleClick = {handleClick}
         handleDelete = {handleDelete}
         />
       <Footer
        items = {items.length}
        />
    </div>
  );
}

export default App;
