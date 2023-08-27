/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Route, Switch, Redirect, useLocation } from "wouter";
import { Home, MovieDetails, Movies } from "../views";
import { useSearchContext } from "../core/hooks";

export const Router = () => {
    const { search, setCurrentView } = useSearchContext()
    const [location, setLocation] = useLocation()

    useEffect(() => {
        if (search && location !== "/movies") {
          setCurrentView('other')
          setLocation('/movies')
        } else if (!search && location === '/movies') setCurrentView('movies')
      }, [search])

    return (
        <>
            <Switch>
                <Route path="/" component={Home} />
                <Route path="/movies" component={Movies} />
                <Route path="/movies/:id" component={MovieDetails} />
                <Redirect to="/" />
            </Switch>
        </>
    )
}