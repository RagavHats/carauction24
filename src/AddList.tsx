import React, { useEffect, useState } from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { addCarDetails } from "./features/carsSlice.js";
import { MockLocationData, MockColor } from "./utils/mockData.ts";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
const AddList = ({ carId, carName }) => {
  const dispatch = useDispatch();
  const { carsList } = useSelector((state: any) => state.cars);
  const [model, setModel] = useState(carId);
  const [location, setLocation] = useState("");
  const [color, setLocationColor] = useState("");
  const [owner, setOwner] = useState("");
  const [yearOfManufactor, setYearOfManufactor] = useState("");
  const [transmission, setTransmission] = useState("");
  const [insurance, setInsurance] = useState("");
  const [external, setExternal] = useState("");
  const [kms, setKms] = useState("");
  const [photo, setPhoto] = useState("");

  const handleChange = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };
  useEffect(() => {
    setModel(carId);
  }, [carId]);
  const submitData = () => {
    let payload = {
      model,
      carName,
      location,
      color,
      owner,
      yearOfManufactor,
      transmission,
      insurance,
      external,
      kms,
      photo,
    };
    //console.log("payload", payload);
    dispatch(addCarDetails(payload));
    alert("Successfully Added");
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Model"
          id="outlined-size-small"
          defaultValue="Small"
          size="small"
          value={carName}
          aria-readonly={true}
        />{" "}
        <br />
        <br />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Location</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={location}
            label="Location"
            onChange={(e) => setLocation(e.target.value)}
          >
            {MockLocationData &&
              Object.values(MockLocationData).map((item, key) => {
                return (
                  <MenuItem value={item} key={key}>
                    {" "}
                    {item}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
        <br />
        <br />
        <FormControl fullWidth>
          <TextField
            fullWidth
            label="Year of Manufacture"
            id="outlined-size-small"
            defaultValue="Small"
            size="small"
            value={yearOfManufactor}
            onChange={(e) => setYearOfManufactor(e.target.value)}
            aria-readonly={true}
            type="date"
          />{" "}
        </FormControl>
        <br />
        <br />
        <Button component="label" variant="contained">
          Upload Photo
          <input type="file" onChange={handleChange} />
        </Button>
        <br />
        <br />
        <Button
          variant="outlined"
          onClick={() => submitData()}
          alignItems="flex-end"
          style={{ backgroundColor: "green", color: "white" }}
        >
          Save
        </Button>
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Owners"
          id="outlined-size-small"
          defaultValue="Small"
          size="small"
          value={owner}
          type="number"
          onChange={(e) => setOwner(e.target.value)}
        />
        <br />
        <br />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Color</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={color}
            label="Color"
            onChange={(e) => setLocationColor(e.target.value)}
          >
            {MockColor &&
              Object.values(MockColor).map((item, key) => {
                return (
                  <MenuItem value={item} key={key}>
                    {" "}
                    {item}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
        <br />
        <br />
        <TextField
          fullWidth
          label="Kms"
          id="outlined-size-small"
          defaultValue="Small"
          size="small"
          value={kms}
          type="number"
          onChange={(e) => setKms(e.target.value)}
        />
      </Grid>
      <br />
      <br />
    </Grid>
  );
};

export default AddList;
