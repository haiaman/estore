import logo from './logo.svg'
import './App.css'
import TopNav from './components/TopNav'
import CatNav from './components/CatNav'
import MainComponent from './components/MainComponent'

function App() {
  return (
    <div className='App'>
     <TopNav/>
     <CatNav/>
     <MainComponent/>
    </div>
  )
}

export default App
