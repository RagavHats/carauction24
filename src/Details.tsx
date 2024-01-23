import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "react-grid-system";
import mockCarList from "./utils/mockCarList.json";
import { MockColor, MockLocationData } from "./utils/mockData.ts";
import Preview from "./preview.tsx";
import DrawerAppBar from "./Global/Menu.tsx";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
const Details = () => {
  const [modelDetails, setModelDetails] = useState(mockCarList.carList);
  const [modelId, setModelId] = useState("");
  const [location, setLocation] = useState("");
  const [owner, setOwner] = useState("");
  const [color, setLocationColor] = useState("");
  const [yearOfManufactor, setYearOfManufactor] = useState("");
  const [transmission, setTransmission] = useState("");
  const [insurance, setInsurance] = useState("");
  const [external, setExternal] = useState("");
  const [kms, setKms] = useState("");
  const { carsList } = useSelector((state: any) => state.cars);
  const [carsDetailList, setCarDetailList] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [showPreview, setPreview] = useState(false);

  const onChangeSelect = (e: any) => {
    setModelId(e.target.value);
  };
  const onChangeDetails = (item: any) => {
    setSelectedItem(item);
    setPreview(true);
  };
  const onSearch = () => {
    setPreview(false);
    let tempArr = [];
    if (modelId != "") {
      const resultModelData = carsList.filter((x: any) => x.model == modelId);
      tempArr = resultModelData;
    }
    if (location != "") {
      const resultlocationData = tempArr.filter(
        (x: any) => x.location == location
      );
      tempArr = resultlocationData;
    }

    if (owner != "") {
      const resultOwnerData = tempArr.filter((x: any) => x.owner == owner);
      tempArr = resultOwnerData;
    }

    if (color != "") {
      const resultColorData = tempArr.filter((x: any) => x.color == color);
      tempArr = resultColorData;
    }
    if (kms != "") {
      const resultKmsData = tempArr.filter((x: any) => x.kms == kms);
      tempArr = resultKmsData;
    }
    if (tempArr.length > 0) {
      setCarDetailList(tempArr);
    } else {
      setPreview(false);
      setCarDetailList([]);
    }
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <DrawerAppBar />
      <Typography variant="h6" gutterBottom>
        {" "}
        Filter
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Model</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={modelId}
                label="Model"
                onChange={onChangeSelect}
              >
                <MenuItem value={""}></MenuItem>
                {modelDetails &&
                  modelDetails.map((item, key) => {
                    return (
                      <MenuItem value={item.id} key={key}>
                        {item.brand_name}{" "}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
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
                <MenuItem value={""}></MenuItem>
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
                label="Color"
                onChange={(e) => setLocationColor(e.target.value)}
                value={color}
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
          </Grid>
          <br />
          <br />
          <Button variant="outlined" onClick={onSearch}>
            Search
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" gutterBottom>
            {" "}
            Car List : {carsDetailList.length > 0 ? carsDetailList.length : ""}
          </Typography>
          {carsDetailList &&
            carsDetailList.map((item, index) => {
              return (
                <Card
                  sx={{ maxWidth: 200 }}
                  key={index}
                  onClick={() => onChangeDetails(item)}
                >
                  <CardMedia
                    sx={{ height: 140 }}
                    image={item?.photo}
                    title={item?.brand_name}
                  />
                </Card>
              );
            })}
          {showPreview && <Preview selectedItem={selectedItem} />}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Details;
