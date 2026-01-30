import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home.jsx'
import Layout from './Layout.jsx'
import About from './components/about.jsx'
import Contacts from './components/Contacts.jsx'
import Github,{githubInfoLoader} from './components/Github.jsx'
import { createBrowserRouter ,createRoutesFromElements, RouterProvider,Route,} from 'react-router-dom'
import User from './components/User.jsx'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />}/>
      <Route path='about/' element={<About />}/>
      <Route path='contact/' element={<Contacts />}/>
      <Route loader={githubInfoLoader} path='github/' element={<Github />}/>
      <Route path='user/' element={<User />}>
      <Route path=':username' element={<User />}/>
      </Route>
      <Route path='*' element={<div>User not found</div>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
