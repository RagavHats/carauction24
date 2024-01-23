import { useState } from "react";
import "./styles.css";
import mockCarList from "./utils/mockCarList.json";
import AddList from "./AddList.tsx";
import DrawerAppBar from "./Global/Menu.tsx";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function Home() {
  const [carId, setCarId] = useState(1);
  const [carName, setCarName] = useState("");
  const [carList, setCarList] = useState(mockCarList.carList);
  const [showAdd, setShowAdd] = useState(false);
  const onChangeAdd = (id, name) => {
    console.log("name", id);
    setCarId(id);
    setCarName(name);
    setShowAdd(true);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <DrawerAppBar />
      <Typography variant="h6" gutterBottom>
        Select Brand And Add product
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Stack direction="row" spacing={2}>
            <Grid container spacing={2}>
              {carList &&
                carList.map((item, key) => {
                  return (
                    <Grid item xs={3}>
                      <Avatar
                        alt="Remy Sharp"
                        src={"/images/" + item.image_url}
                        key={key}
                        sx={{ width: 100, height: 100 }}
                        style={{ cursor: "pointer" }}
                        onClick={() => onChangeAdd(item.id, item.brand_name)}
                      />
                    </Grid>
                  );
                })}
            </Grid>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          {showAdd && <AddList carId={carId} carName={carName} />}
        </Grid>
      </Grid>

      <br />
      <br />
    </Box>
  );
}
