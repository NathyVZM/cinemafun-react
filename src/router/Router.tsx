import { Route, Switch, Redirect } from "wouter";
import { Home, MovieDetails, Movies } from "../views";

export const Router = () => {
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