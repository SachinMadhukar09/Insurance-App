import React from "react";
import { useHistory, useParams } from "react-router-dom";
import SideBar from "../Sidebar";
import axios from "axios";
import Configs from "../../../configs/config";

const url = Configs.endpoint;
function NewProducts() {
  let { company } = useParams();
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const history = useHistory();
  const clientId = localStorage.getItem("clientId");

  const getProducts = async () => {
    try {
      if (!clientId && !company) {
        const response = await axios.get(`${url}/insurance/getProductList`);
        if (response) {
          setProducts(response.data.products);
        }
      } else {
        try {
          const response = await axios.get(
            `${url}/insurance/getInsuranceProduct/${clientId}`
          );
          if (response) {
            setProducts(response.data.products);
          }
        } catch (err) {
          setProducts([]);
        }
      }
    } catch (error) {
      setProducts([]);
    }
  };

  React.useEffect(() => {
    getProducts();
  }, []);

  const renderComponent = (product) => {
    let path;
    switch (product) {
      case "Car Insurance":
        path = `${company}/vehicle-details`;
        break;

      case "Health Insurance":
        path = `${company}/health-details`;
        break;

      case "2 Wheeler Insurance":
        path = `${company}/2wheeler-details`;
        break;

      case "Child Savings Plan":
        path = `${company}/child-savings`;
        break;

      case "Family Health Insurance":
        path = `${company}/housing-society`;
        break;

      case "Investment Plans":
        path = `${company}/investment-plans`;
        break;

      case "Heart Insurance":
        path = `${company}/heart-insurance`;
        break;

      case "Group Protection":
        path = `${company}/gmcproducts`;
        break;

      default:
        path = "/";
        break;
    }

    history.push(path);
  };

  const handleBuyPolicies = () => {
    history.push(`${company}/buy-policy`);
  };

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-sidebar">
        <SideBar />
      </div>
      <div className="dashboard-content">
        <h2 className="top-heading">My Products</h2>
        {/* <div className="product-section"> */}
          {products.length ? (
            <div className="product-section">
            {/* <div className="listing"> */}
              {products.map((product, index) => (
                <div
                  className="product_card"
                  onClick={() => history.push("/product1")}
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
          ) : (
            <div className="buypolicy-container">
              <div className="policy-container" style={{ textAlign: "center" }}>
                <div style={{ padding: 20 }}>
                  You have not purchased any Policy till now
                </div>
                <button
                  type="submit"
                  className="login-submit"
                  onClick={handleBuyPolicies}
                  style={{ marginTop: 0, marginBottom: 30 }}
                >
                  {loading ? "Please wait..." : "Buy First Policy"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    // </div>
  );
}

export default NewProducts;
