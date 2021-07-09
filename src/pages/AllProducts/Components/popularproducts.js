import "../products.css";
import FamilyIcon from "../../../Assets/svg/Group Protection.svg";

const PopularProducts = () => {

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
        }
      ];

    return (
        <section>
      <h3 className="plan-heading">Popular Plans</h3>
      <div className="list-container">
        {investments.map((product) => (
          <div className="product_card">
            <img
              src={product.product_icon}
              alt=""
              className="icon_product"
            />

            <h5 className="product_title">{product.product_name}</h5>
          </div>
        ))}
      </div>
      </section>
    )
};

export default PopularProducts;