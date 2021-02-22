import { Link, useParams } from "@reach/router";
import data from "../../assets/data";
const ServiceDetail = () => {
  const { id } = useParams();
  const dataItem = data.filter((item) => item.id == id);
  console.log(dataItem);
  return (
    <div className="container">
      <div>
        {dataItem[0].name ? <h2> Course Name : {dataItem[0].name}</h2> : ""}
        {dataItem[0].level ? (
          <h2> Expertise Level : {dataItem[0].level}</h2>
        ) : (
          ""
        )}
        {dataItem[0].description ? (
          <h2> Course description : {dataItem[0].description}</h2>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ServiceDetail;
