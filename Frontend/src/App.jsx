import React from 'react'
import Parent from './component/Parent'
import State from './component/State'
import Navbar from './component/Navbar'
import {Routes,Route} from 'react-router-dom'
import Effect from './component/Effect'
import Todo from './component/Todo'

const App = () => {
  return (
    //Fragment Tag
    <> 
      <Navbar/>
      <Routes>
        <Route path='/' element={<Parent/>}></Route>
        <Route path='/useState' element={<State/>}/>
        <Route path='/useEffect' element={<Effect/>}/>
        <Route path='/todo' element={<Todo/>}/>
      </Routes>
    </>
  )
}

export default App