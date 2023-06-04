import {
  Autocomplete,
  Avatar,
  Button,
  List,
  ListItem,
  Pagination,
  Rating,
  TextField,
} from "@mui/material";
import "./style.scss";
import React from "react";

const Header = () => {
  const [age, setAge] = React.useState<number | null>(null);
  const [gender, setGender] = React.useState<number | null>(null);
  const [rating, setRating] = React.useState<number | null>(null);

  const ageList: number[] = [...Array(90).keys()];
  const genderList = [
    {
      value: 0,
      label: "Male",
    },
    {
      value: 1,
      label: "Female",
    },
    {
      value: 2,
      label: "Others",
    },
  ];
  const ratingList: number[] = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
  return (
    <div className="container-fluid">
      <div>
        <div className="row">
          <div className="col-4 align-self-end">
            <b>Request received: 15</b>
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col">
                <Autocomplete
                  id="age-filter"
                  size="small"
                  options={ageList}
                  getOptionLabel={(option: number) => option.toString()}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Age"
                    />
                  )}
                  onChange={(event: any, newValue: number | null) => {
                    setAge(newValue ?? null);
                  }}
                />
              </div>
              <div className="col">
                <Autocomplete
                  id="gender-filter"
                  size="small"
                  options={genderList}
                  getOptionLabel={(option) => option.label}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Gender"
                    />
                  )}
                  onChange={(event: any, newValue) => {
                    setGender(newValue?.value ?? null);
                  }}
                />
              </div>
              <div className="col">
                <Autocomplete
                  id="rating-filter"
                  size="small"
                  options={ratingList}
                  getOptionLabel={(option) => option.toString()}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Rating"
                    />
                  )}
                  onChange={(event: any, newValue: number | null) => {
                    setRating(newValue ?? null);
                  }}
                />
              </div>
              {/* <div className="col">
                <button
                  onClick={() => {
                    console.log(age + " " + gender);
                  }}
                >
                  hello
                </button>
              </div> */}
            </div>
          </div>
        </div>

        <div className="row pt-3">
          <List sx={{ width: "100%" }}>
            <ListItem
              alignItems="flex-start"
              className="my-4"
              sx={{ width: "100%", bgcolor: "background.paper" }}
            >
              <div className="row h-100 w-100">
                <div className="col-3 align-self-center text-center  ps-5">
                  <Avatar
                    sx={{ width: 120, height: 120 }}
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                  />
                </div>
                <div className="col">
                  <div className="row">
                    <div className="d-flex w-100 justify-content-between">
                      <b>Stephen Curry</b>
                      <small>Request ID: 1</small>
                    </div>
                  </div>
                  <div className="row">
                    <span>Gender: Female</span>
                  </div>
                  <div className="row">
                    <b>Age: 22</b>
                  </div>
                  <div className="row">
                    <b>Address: 4 bể là nhà</b>
                  </div>
                  <div className="row w-100 ">
                    <div className="col-6">
                      <Rating
                        name="half-rating"
                        value={rating ?? 0}
                        precision={0.5}
                        size="large"
                        readOnly
                      />
                    </div>
                    <div className="col-6 p-0">
                      <div className="d-flex flex-row-reverse me-0 pe-0 w-100">
                      <Button
                      className="px-3"
                          size="small"
                          variant="outlined"
                          style={{
                            borderColor: "#FF7008",
                          }}
                        >
                          Delete
                        </Button>
                        <Button
                          className="me-2 ms-2 px-3"
                          size="small"
                          variant="contained"
                          style={{
                            backgroundColor: "#FF7008",
                          }}
                        >
                          Accept
                        </Button>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ListItem>

            <ListItem
              alignItems="flex-start"
              className="my-4"
              sx={{ width: "100%", bgcolor: "background.paper" }}
            >
              <div className="row h-100 w-100">
                <div className="col-3 align-self-center text-center ps-5">
                  <Avatar
                    sx={{ width: 120, height: 120 }}
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                  />
                </div>
                <div className="col">
                  <div className="row">
                    <div className="d-flex w-100 justify-content-between">
                      <b>Stephen Curry</b>
                      <small>Request ID: 1</small>
                    </div>
                  </div>
                  <div className="row">
                    <span>Gender: Female</span>
                  </div>
                  <div className="row">
                    <b>Age: 22</b>
                  </div>
                  <div className="row">
                    <b>Address: 4 bể là nhà</b>
                  </div>
                  <div className="row w-100 ">
                    <div className="col-6">
                      <Rating
                        name="half-rating"
                        value={rating ?? 0}
                        precision={0.5}
                        size="large"
                        readOnly
                      />
                    </div>
                    <div className="col-6 p-0">
                      <div className="d-flex flex-row-reverse me-0 pe-0 w-100">
                      <Button
                      className="px-3"
                          size="small"
                          variant="outlined"
                          style={{
                            borderColor: "#FF7008",
                          }}
                        >
                          Delete


                        </Button>
                        <Button
                          className="me-2 ms-2 px-3"
                          size="small"
                          variant="contained"
                          style={{
                            backgroundColor: "#FF7008",
                          }}
                        >
                          Accept
                        </Button>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ListItem>

            <ListItem
              alignItems="flex-start"
              className="my-4"
              sx={{ width: "100%", bgcolor: "background.paper" }}
            >
              <div className="row h-100 w-100">
                <div className="col-3 align-self-center text-center">
                  <Avatar
                    sx={{ width: 120, height: 120 }}
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                  />
                </div>
                <div className="col">
                  <div className="row">
                    <div className="d-flex w-100 justify-content-between">
                      <b>Stephen Curry</b>
                      <small>Request ID: 1</small>
                    </div>
                  </div>
                  <div className="row">
                    <span>Gender: Female</span>
                  </div>
                  <div className="row">
                    <b>Age: 22</b>
                  </div>
                  <div className="row">
                    <b>Address: 4 bể là nhà</b>
                  </div>
                  <div className="row w-100 ">
                    <div className="col-6">
                      <Rating
                        name="half-rating"
                        value={rating ?? 0}
                        precision={0.5}
                        size="large"
                        readOnly
                      />
                    </div>
                    <div className="col-6 p-0">
                      <div className="d-flex flex-row-reverse me-0 pe-0 w-100">
                      <Button
                      className="px-3"
                          size="small"
                          variant="outlined"
                          style={{
                            borderColor: "#FF7008",
                          }}
                        >
                          Delete
                        </Button>
                        <Button
                          className="me-2 ms-2 px-3"
                          size="small"
                          variant="contained"
                          style={{
                            backgroundColor: "#FF7008",
                          }}
                        >
                          Accept
                        </Button>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ListItem>

       
          </List>
        </div>

        <div className="d-flex justify-content-center pt-3">
        <Pagination count={10} variant="outlined" shape="rounded" color="primary" />
        </div>
      </div>
    </div>
  );
};

export default Header;
