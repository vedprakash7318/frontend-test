import React from 'react'
import { RouterProvider } from 'react-router-dom'
import AppRoute from './route/AppRoute'

function App() {
  
  return (
    <div>
      <RouterProvider router={AppRoute} ></RouterProvider>
    </div>
  )
}
export default App