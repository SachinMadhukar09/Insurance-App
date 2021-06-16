import "../products.css";
import FamilyIcon from "../../../Assets/svg/Group Protection.svg";
import { useHistory } from "react-router";

const investments = [
  {
    product_icon: FamilyIcon,
    product_name: "child investment plan",
  },
  {
    product_icon: FamilyIcon,
    product_name: "child investment plan",
  },
  {
    product_icon: FamilyIcon,
    product_name: "child investment plan",
  },
  {
    product_icon: FamilyIcon,
    product_name: "child investment plan",
  },
  {
    product_icon: FamilyIcon,
    product_name: "child investment plan",
  },
  {
    product_icon: FamilyIcon,
    product_name: "child investment plan",
  },
  {
    product_icon: FamilyIcon,
    product_name: "child investment plan",
  },
];

const products = [
  {
    product_icon: FamilyIcon,
    product_name: "child investment plan",
  },
  {
    product_icon: FamilyIcon,
    product_name: "child investment plan",
  },
  {
    product_icon: FamilyIcon,
    product_name: "child investment plan",
  },
  {
    product_icon: FamilyIcon,
    product_name: "child investment plan",
  },
  {
    product_icon: FamilyIcon,
    product_name: "child investment plan",
  },
  {
    product_icon: FamilyIcon,
    product_name: "child investment plan",
  },
  {
    product_icon: FamilyIcon,
    product_name: "child investment plan",
  },
  {
    product_icon: FamilyIcon,
    product_name: "child investment plan",
  },
  {
    product_icon: FamilyIcon,
    product_name: "child investment plan",
  },
  {
    product_icon: FamilyIcon,
    product_name: "child investment plan",
  },
  {
    product_icon: FamilyIcon,
    product_name: "child investment plan",
  },
  {
    product_icon: FamilyIcon,
    product_name: "child investment plan",
  },
  {
    product_icon: FamilyIcon,
    product_name: "child investment plan",
  },
  {
    product_icon: FamilyIcon,
    product_name: "child investment plan",
  },
  {
    product_icon: FamilyIcon,
    product_name: "child investment plan",
  },
];

const AllProducts = () => {
  const history = useHistory()
  return (
    <section>
      <h3 className="plan-heading">Investment Plans</h3>
      <div className="list-container">
        {investments.map((product) => (
          <div
            className="product-card"
            onClick={()=> history.push("/product1")}
          >
            <img
              src={product.product_icon}
              alt=""
              style={{ width: "65%", paddingTop: "10px" }}
            />

            <h5 className="product-title">{product.product_name}</h5>
          </div>
        ))}
      </div>

      <h3 className="plan-heading">Term insurance</h3>
      <div className="list-container">
        {investments.map((product) => (
          <div className="product-card" onClick={()=> history.push("/product2")}>
            <img
              src={product.product_icon}
              alt=""
              style={{ width: "65%", paddingTop: "10px" }}
            />

            <h5 className="product-title">{product.product_name}</h5>
          </div>
        ))}
      </div>
      <h3 className="plan-heading">Small Protection insurance</h3>
      <div className="list-container">
        {products.map((product) => (
         <div className="product-card" onClick={()=> history.push("/product3")}>
            <img
              src={product.product_icon}
              alt=""
              style={{ width: "65%", paddingTop: "10px" }}
            />

            <h5 className="product-title">{product.product_name}</h5>
          </div>
        ))}
      </div>

      <h3 className="plan-heading">Other General insurance</h3>
      <div className="list-container">
        {products.map((product) => (
          <div className="product-card">
            <img
              src={product.product_icon}
              alt=""
              style={{ width: "65%", paddingTop: "10px" }}
            />

            <h5 className="product-title">{product.product_name}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllProducts;
