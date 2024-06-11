import './App.css'
import SideBar from './components/SideBar/SideBar'
import Body from './components/Body/Body'

function App() {

  return (
    <>
    <div className='app'>
    <div className='side-bar'>
      <SideBar/>
    </div>
    <div className='main-body'>
      <Body/>
    </div>   
    </div>
    </>
  )
}

export default App
