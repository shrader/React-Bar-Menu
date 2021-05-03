import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";


function NewItemForm({drinks, snacks, addItem}) {
  
  const History = useHistory();
  const[error, setError] = useState();

  const [itemData, setItemData] = useState({
    id:"",
    name: "",
    description: "",
    recipe: "",
    serve: ""
  });

  //update input state as user writes in form
  function handleChange(e) {
    const {name, value} = e.target;
    setItemData(itemData => ({ ...itemData, [name]: value }));
  }

  //use function for adding new item -------------------still to-do
  function handleSubmit(e) {

    //make id from name
    //validate input by checking that all fields are not ""
    //also check that id / name are not already in the system
    e.preventDefault()
    let type = document.getElementById("inputGroupSelect01").value;
    let tempId = (itemData.name).toLowerCase().replace(/\s/g , "-");
    let data = {...itemData, id:tempId}

    //make sure something has been entered into every input if not add error
    if (Object.values(data).every(inputVal => inputVal !== "")) {
      
      //make sure this id isn't already in the psuedo DB if it is add appropriate error
      if (snacks.every(snack => snack.id !== tempId) && drinks.every(drink => drink.id !== tempId)) {
        
      //add item and redirect to home page
      addItem(data, type);
      History.push("/");

      } else {
        setError({txt: "This item is already on the menu, check again or re-name the item"});
      }

    } else {
      setError({txt: "Please make sure every field is filled out"});
    }
  }


  return(
    <section className="col-md-8">
    <Card>
      <CardBody className="text-center">
        <CardTitle>
          <h2>New Item</h2>
        </CardTitle>
        {error? <div class="alert alert-danger" role="alert">{error.txt}</div> : null}
        <form id="newItemForm">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
              <label class="input-group-text" htmlFor="inputGroupSelect01">Item type</label>
              </div>
            <select  class="custom-select" id="inputGroupSelect01">
              <option selected>Choose...</option>
              <option value="food">Food</option>
              <option value="drink">Drink</option>
            </select>
          </div>
          <p></p>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Item Name</span>
            </div>
              <input name="name" value={itemData.name} onChange={handleChange} type="text" class="form-control" placeholder="Rum & Coke" aria-label="Username" aria-describedby="basic-addon1">
              </input>
            </div>
          <p></p>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Description</span>
            </div>
              <input name="description" value={itemData.description} onChange={handleChange} type="text" class="form-control" placeholder="Something to drink" aria-label="Description" aria-describedby="basic-addon1">
              </input>
            </div>
          <p></p>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Recipe</span>
            </div>
              <input name="recipe" value={itemData.recipe} onChange={handleChange} type="text" class="form-control" placeholder="Some Rum and some Coke" aria-label="Description" aria-describedby="basic-addon1">
              </input>
            </div>
          <p></p>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Serve</span>
            </div>
              <input name="serve" value={itemData.serve} onChange={handleChange} type="text" class="form-control" placeholder="cold and fizzy" aria-label="Description" aria-describedby="basic-addon1">
              </input>
            </div>
          <p></p>
          <button type="button" onClick={handleSubmit} class="btn btn-lg btn-block btn-outline-primary">Add Item!</button>
        </form>
      </CardBody>
    </Card>
  </section>
  )
}

export default NewItemForm;