import { Link } from "@reach/router";
import "./serviceList.css";
import data from "../../assets/data";
const ServiceList = () => {
  return (
    <div className="container">
      <div className="row">
        {data.map((item, i) => (
          <div className="Card-section col-xs-12 col-md-4 col-lg-4" key={i}>
            <Link to={`serviceDetails/${item.id}`}>
              <h1>{item.name}</h1>
              <h3>{item.level}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
