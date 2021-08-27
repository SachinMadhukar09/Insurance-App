import React from "react";
import { useHistory, useParams } from "react-router-dom";
import SideBar from "../Sidebar";
import axios from "axios";
import Configs from "../../../configs/config";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const url = Configs.endpoint;
function NewProducts() {
  let { company } = useParams();
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const history = useHistory();
  const clientId = localStorage.getItem("clientId");

  React.useEffect(() => {
    axios
      .get("https://backend.1protekt.com/insurance/getProductList")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
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
  const classes = useStyles();

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
              <Card className={classes.root} style={{ margin: "10px" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={product.product_icon}
                    title="Contemplative Reptile"
                    style={{ height: "60%" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
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
