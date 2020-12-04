import React,{Suspense} from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/Header/Header"
import NewsFeed from "./Pages/NewsFeed/NewsFeed";
import Footer from "./components/footer/Footer";
import BodyImage from "./components/BodyImage";

const GraphPage = React.lazy(()=>{
  return import("./Pages/Graph/Graph");
});
function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <BodyImage />
        <Suspense fallback="Waiting..." >
        <Switch> 
               <Route path="/" exact render={(props)=> <NewsFeed  {...props} /> }/>
               <Route path="/graph" exact render={(props)=><GraphPage {...props} /> } />
               <Redirect to="/" />
        </Switch>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
