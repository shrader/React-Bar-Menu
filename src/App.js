import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch} from "react-router-dom";
import Menu from "./Menu";
import Snack from "./FoodOrDrinkItem";
import Drink from "./FoodOrDrinkItem";
import Page404 from "./404";
import NewItemForm from "./NewItemForm";

//app gets snack and drink items and passes them as props and does the routing for the app
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  //get snacks from psuedoDB
  async function getSnacks() {
    let snacks = await SnackOrBoozeApi.getSnacks();
    setSnacks(snacks);
    setIsLoading(false);
  }

  //get drinks from psuedoDB
  async function getDrinks() {
    let drinks = await SnackOrBoozeApi.getDrinks();
    setDrinks(drinks);
    setIsLoading(false);
  }

  //when NewItemForm is submitted add new item to psuedoDB (passed as prop in route)
  async function addItem(data, type) {
    console.log("data", data);
    //is the type being added food or drink?
    let res = type==="food" ? 
      await SnackOrBoozeApi.addSnack(data):
      await SnackOrBoozeApi.addDrink(data);
    
      if (!res.error) {
        alert("Item added successfully");
      } else {
        alert("Item could not be added.", res.error)
      }

      getSnacks();
      getDrinks();
  }

  //on initial page load get snacks and drinks
  useEffect(() => {
    getSnacks();
    getDrinks();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home numDrinks={drinks.length} numSnacks={snacks.length} />
            </Route>
            <Route exact path="/snacks">
              <Menu items={snacks} type="snacks" title="Snacks" />
            </Route>
            <Route path="/snacks/:id">
              <Snack items={snacks}  cantFind="/snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu items={drinks} type="drinks" title="Drinks" />
            </Route>
            <Route path="/drinks/:id">
              <Drink items={drinks} cantFind="/drinks" />
            </Route>
            <Route exact path="/new-item">
              <NewItemForm drinks={drinks} snacks={snacks} addItem={addItem}/>
            </Route>
            <Route>
              <Page404 />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
