import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

//menu for drinks or snacks that shows list of available items in that category
//if a link item is clicked it goes to the detail page for that item
function Menu({ items, type }) {
  //render menu for items, loops over items and cretes a link for each one
  //changes depending on if items passed is snacks or drinks
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {type === "snacks"? "Snack Menu" : "Drink Menu"}
          </CardTitle>
          <CardText>
            Please check out our fine selection of {type === "snacks"? "snack" : "drink"} items.
          </CardText>
          <ListGroup>
            {items.map(item => (
              type === "snacks"?
              //if type is snacks render snack links
              <Link to={`/snacks/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>:
              //else render drink links
              <Link to={`/drinks/${item.id}`} key={item.id}>
              <ListGroupItem>{item.name}</ListGroupItem>
            </Link>
            ))}
            <Link to="/new-item">
            <ListGroupItem>Add New {type === "snacks"? "Snack" : "Drink"} Item!</ListGroupItem>
              </Link>
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default Menu;
