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
      <div className="product-section">
        {investments.map((product) => (
          <div
            className="product_card"
            onClick={()=> history.push("/product1")}
          >
            <img
              src={product.product_icon}
              alt=""
              className="icon_product"
            />

            <div className="product_title">{product.product_name}</div>
          </div>
        ))}
      </div>

      <h3 className="plan-heading">Term insurance</h3>
      <div className="product-section">
        {investments.map((product) => (
          <div className="product_card" onClick={()=> history.push("/product2")}>
            <img
              src={product.product_icon}
              alt=""
              className="icon_product"
            />

            <div className="product_title">{product.product_name}</div>
          </div>
        ))}
      </div>
      <h3 className="plan-heading">Small Protection insurance</h3>
      <div className="product-section">
        {products.map((product) => (
         <div className="product_card" onClick={()=> history.push("/product3")}>
            <img
              src={product.product_icon}
              alt=""
              className="icon_product"
            />

            <div className="product_title">{product.product_name}</div>
          </div>
        ))}
      </div>

      <h3 className="plan-heading">Other General insurance</h3>
      <div className="product-section">
        {products.map((product) => (
          <div className="product_card">
            <img
              src={product.product_icon}
              alt=""
              className="icon_product"
            />

            <div className="product_title">{product.product_name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllProducts;
