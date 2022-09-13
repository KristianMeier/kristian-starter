import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/utils/Layout'
import PageOne from './pages/PageOne'
import PageTwo from './pages/PageTwo'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<PageOne />} />
            <Route path='PageOne' element={<PageOne />} />
            <Route path='PageTwo' element={<PageTwo />} />
            <Route path='*' element={<PageOne />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
