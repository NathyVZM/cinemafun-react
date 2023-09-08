import './App.sass'
import { Footer, Header, Sidebar } from './components'
import { SearchProvider } from './core/hooks'
import { Router } from './router'

export const App = () => {
  return (
    <SearchProvider>
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
        <Footer />
    </SearchProvider>
  )
}
