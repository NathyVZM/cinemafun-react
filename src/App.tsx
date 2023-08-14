import './App.sass'
import { Header, Sidebar } from './components'
import { Router } from './router'

export const App = () => {

  return (
    <>
      <div id="lights">
          <div className="pink"></div>
          <div className="blue"></div>
          <div className="second-blue"></div>
          <div className="green"></div>
          <div className="yellow"></div>
      </div>
      <Header />
      <Sidebar />
      <Router />
    </>
  )
}
