import "react-dates/initialize"; // <---- put this at the very top of your js file

import React, { Component, Fragment } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import { DateRangePicker } from "react-dates";
import "./TravelInsurance.css";
import moment from "moment";
import "react-dates/lib/css/_datepicker.css";

// import Rating from "@material-ui/lab/Rating";
// import { ExpandMore, ExpandLess } from "@material-ui/icons";

class TravelInsurance extends Component {
  state = {
    query: "",
    search: "",
    token: "Token cd7431d4f36f3c355fae81c9ae26dac92e6d69ae",
    result: [],
    child: 0,
    cityName: "",
    childAge: [],
    country: "",
    room: 1,
    adult: 2,
    citycode: "",
    StarRating: "All",
    display: false,
    orderBy: "PriceAsc",
    vertical: "horizontal",
  };

  //   componentDidMount() {
  //     var data = JSON.parse(localStorage.getItem("searchData"));
  //     if (window.matchMedia("(max-width: 600px)").matches) {
  //       this.setState({ vertical: "vertical" });
  //     }

  //     if (data) {
  //       this.setState({
  //         search: data.cityName + "," + " " + data.country,
  //         cityName: data.cityName,
  //         country: data.country,
  //         citycode: data.citycode,
  //         child: parseInt(data.child),
  //         adult: parseInt(data.adult),
  //         startDate: moment(data.startDate),
  //         endDate: moment(data.endDate),
  //         room: parseInt(data.room),
  //         currency: data.currency
  //       });
  //     }
  //   }

  handleSelect = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // setAuthToken(this.state.token)

    // axios
    //   .get(
    //     `https://sithu.pythonanywhere.com/api/v1/destinationsearch/?q=${this.state.search}`
    //   )
    //   .then(res => this.setState({ result: res.data }))
    //   .catch(err => console.log(err));
  };
  onListClick = (city, country, citycode) => {
    this.setState({
      search: city + "," + " " + country,
      cityName: city,
      country: country,
      result: [],
      citycode: citycode,
    });
  };
  handleSelectChild = (e) => {
    var ages = this.state.childAge;

    var obj = {};
    obj[e.target.name] = e.target.value;

    this.setState({ childAge: this.pushToArray(ages, e.target.name, obj) });
  };

  pushToArray = (arr, name, obj) => {
    const index = arr.findIndex(
      (a) => parseInt(Object.keys(a).toString()) === parseInt(name)
    );

    if (index === -1) {
      arr.push(obj);
    } else {
      arr[index] = obj;
    }
    return arr;
  };
  onsubmit = (e) => {
    if (!this.state.search) {
      alert("Please choose the Destination");
    } else if (!this.state.startDate) {
      alert("Please choose the CheckIn date");
    } else if (!this.state.endDate) {
      alert("Please choose the CheckOut date");
    } else if (this.state.room > this.state.adult) {
      alert("Please check Number of rooms or adult again ");
    } else {
      var searchData = {
        cityName: this.state.cityName,
        country: this.state.country,
        citycode: this.state.citycode,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        room: this.state.room,
        adult: this.state.adult,
        child: this.state.child,
        currency: this.state.currency,
      };
      localStorage.setItem("searchData", JSON.stringify(searchData));
      var startDate = moment(this.state.startDate).format("YYYY-MM-DD");
      var endDate = moment(this.state.endDate).format("YYYY-MM-DD");
      var childAge = this.state.childAge.map((age, i) => age[i + 1]).toString();
      this.props.GetHotels(
        this.state.token,
        this.state.country,
        this.state.cityName,
        this.state.citycode,
        startDate,
        endDate,
        this.state.room,
        this.state.adult,
        this.state.child,
        childAge,
        this.state.StarRating,
        this.state.orderBy,
        // this.state.currency,
        this.props.history
      );
    }
  };
  handleAddOne = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };
  handleMinusOne = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  };
  render() {
    let list;
    if (this.state.result.length > 0) {
      list = this.state.result.map((res) => {
        return (
          <Fragment>
            <li
              onClick={() =>
                this.onListClick(res.cityname, res.countryname, res.citycode)
              }
            >
              {res.cityname},{res.countryname}
            </li>
            {/* <Divider /> */}
          </Fragment>
        );
      });
    }

    if (this.state.search.length === 0) {
      list = null;
    }
    // var icon;
    // if (this.state.display) {
    //   icon = <ExpandLess />;
    // } else {
    //   icon = <ExpandMore />;
    // }

    var childAge = [];
    for (var i = 0; i < this.state.child; i++) {
      childAge.push(
        <div style={{ marginBottom: "14px" }}>
          <select
            className="childSelect"
            onChange={(e) => this.handleSelectChild(e)}
            name={i + 1}
          >
            {[...Array(13)].map((_, f) => {
              return <option value={f + 1}>{f + 1}</option>;
            })}
          </select>
        </div>
      );
    }
    return (
      <Fragment>
        <h1 className="termlife__header_content slide">
          Travel Insurance at best rates. Buy in 3 minutes
        </h1>
        <div
          style={{ display: "flex", justifyContent: "center" }}
          className="tab_search slide"
        >
          <div className="inside_inpu">
            <input
              name="search"
              placeholder="City, Place to go"
              className="travel_input"
              value={this.state.search}
              onChange={(e) => this.onChange(e)}
              type="text"
            />

            <ul role="listbox" className="search_list">
              {list}
            </ul>
          </div>
          <div className="DateGuestWrapper">
            <DateRangePicker
              startDate={this.state.startDate}
              startDateId="your_unique_start_date_id"
              endDate={this.state.endDate}
              startDatePlaceholderText="Check-In"
              orientation={this.state.vertical}
              endDatePlaceholderText="Check-Out"
              endDateId="your_unique_end_date_id"
              onDatesChange={({ startDate, endDate }) =>
                this.setState({ startDate, endDate })
              }
              focusedInput={this.state.focusedInput}
              onFocusChange={(focusedInput) => this.setState({ focusedInput })}
            />
            <div className="Guests">
              {/* <div>
              <div className="label1">Room</div>
              <select
                name="room"
                value={this.state.room}
                onChange={e => this.handleSelect(e)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div>
              <div className="label1">Adult</div>
              <select
                name="adult"
                value={this.state.adult}
                onChange={e => this.handleSelect(e)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
            <div>
              <div className="label1">Child</div>
              <select
                name="child"
                value={this.state.child}
                onChange={e => this.handleSelect(e)}
              >
                {[...Array(6)].map((_, f) => {
                  return <option value={f}>{f}</option>;
                })}
              </select>
            </div> */}
              {/* <div
                className="GuestsBox"
                onClick={() => this.setState({ display: !this.state.display })}
              >
                <div>
                  <span>
                    {" "}
                    {this.state.room} Rooms,{" "}
                    {this.state.adult + this.state.child} Guests{" "}
                  </span>
                </div> */}
              {/* {icon} */}
              {/* </div> */}
              {/* <div
                style={{ display: this.state.display ? "block" : "none" }}
                className="guestInfo"
              >
                <div className="singleGuest">
                  <div> Rooms</div>
                  <div className="guestCalc">
                    <button
                      className="AddButton"
                      disabled={this.state.room === 10 ? true : false}
                      onClick={() =>
                        this.setState({ room: this.state.room + 1 })
                      }
                    >
                      +
                    </button>
                    <h5> {this.state.room}</h5>
                    <button
                      className="AddButton"
                      disabled={this.state.room === 0 ? true : false}
                      onClick={() =>
                        this.setState({ room: this.state.room - 1 })
                      }
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="singleGuest">
                  <div> Adults</div>
                  <div className="guestCalc">
                    <button
                      className="AddButton"
                      disabled={this.state.adult === 10 ? true : false}
                      onClick={() =>
                        this.setState({ adult: this.state.adult + 1 })
                      }
                    >
                      +
                    </button>
                    <h5> {this.state.adult}</h5>
                    <button
                      className="AddButton"
                      disabled={this.state.adult === 0 ? true : false}
                      onClick={() =>
                        this.setState({ adult: this.state.adult - 1 })
                      }
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="singleGuest">
                  <div> Child</div>
                  <div className="guestCalc">
                    <button
                      className="AddButton"
                      disabled={this.state.child === 6 ? true : false}
                      onClick={() =>
                        this.setState({ child: this.state.child + 1 })
                      }
                    >
                      +
                    </button>
                    <h5> {this.state.child}</h5>
                    <button
                      className="AddButton"
                      disabled={this.state.child === 0 ? true : false}
                      onClick={() =>
                        this.setState({ child: this.state.child - 1 })
                      }
                    >
                      -
                    </button>
                  </div>
                </div>
                <p>Child's Age</p>
                <div className="childAges">{childAge}</div>
                <div
                  onClick={() =>
                    this.setState({ display: !this.state.display })
                  }
                  className="done"
                >
                  Done
                </div>
              </div> */}

              {/* <div style={{ display: "flex" }}>{childAge}</div> */}
            </div>
          </div>
          <Link to="/traveller-details">
            {" "}
            <div style={{ marginTop: 0 }} className="view_quotes__btn">
              view quotes
            </div>{" "}
          </Link>
        </div>
        <div className="search_filter">
          {/* <select
            className="filter"
            name="orderBy"
            value={this.state.orderBy}
            onChange={e => this.handleSelect(e)}
          >
            <option value="PriceAsc">Price (Low to High)</option>
            <option value="PriceDesc">Price (High to Low)</option>
            <option value="StarRatingAsc">Star(1-5)</option>
            <option value="StarRatingDesc">Star (5-1)</option>
          </select> */}
          <div>
            {/* <Rating
              size="small"
              name="half-rating"
              precision={0.5}
              value={this.state.StarRating}
              onChange={(event, newValue) => {
                this.setState({ StarRating: newValue })
              }}
            /> */}
          </div>
        </div>
        <div></div>

        <br />
      </Fragment>
    );
  }
}

export default TravelInsurance;
