
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Plans from './components/Plans'
import Authors from './components/Authors'
import SingleAuthor from './components/SingleAuthor'
import SinglePlan from './components/SinglePlan'

function App() {
  

  return (
    <>
      <h1>Welcome Woodworkers!</h1>
      <Header />
        <div>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/plans" element={ <Plans /> } />
            <Route path="/authors" element={ <Authors /> } />
            <Route path="/plans/:planID" element={ <SinglePlan /> } />
            <Route path="/authors/:authorID" element={ <SingleAuthor /> } />
          </Routes>
        </div>
    </>
  )
}

export default App
