import './App.sass'
import { useContext } from 'react'
import { Footer, Header, Loading, Sidebar, Trailer } from './components'
import { SearchProvider, TrailerContext, LoadingContext } from './core/context'
import { Router } from './router'

export const App = () => {
  const { isLoading } = useContext(LoadingContext)
  const { trailer } = useContext(TrailerContext)

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

        { isLoading && <Loading /> }

        <Trailer
          url={`https://www.youtube.com/embed/${trailer.key}`}
          isOpened={trailer.isOpened}
        />
    </SearchProvider>
  )
}
