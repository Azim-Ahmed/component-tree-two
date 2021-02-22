import { Redirect, Router } from "@reach/router";
import NoService from "../components/NoService";
import Home from "../pages/home/Home";
import ServiceDetails from "../pages/serviceDetails/ServiceDetails";

const Routers = () => {
  return (
    <Router>
      <Home path="/" />
      <Redirect from="serviceDetails" to="/" noThrow />
      <ServiceDetails path="serviceDetails/:id" />
      <NoService default />
    </Router>
  );
};

export default Routers;
