import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";

//404 page for resources that can't be found
function page404() {

  return (
    <section className="col-md-8">
    <Card>
      <CardBody className="text-center">
        <CardTitle>
          <h1>404!</h1>
        <h2>Sorry. I can't seem to find what you want.</h2>
        <Link to="/">Go back Home</Link>
        </CardTitle>
      </CardBody>
    </Card>
  </section>
  )
}

export default page404;