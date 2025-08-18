
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import LayOut from './Layout/LayOut.jsx'

function App() {

  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayOut/>}>

        <Route index element={<Home/>} />

        </Route>
      </Route>
    )
  )


  return (
    <>

    <RouterProvider router={route}/>
    </>
  )
}

export default App
