import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

export default function Relation() {

    const handleOnAdd =()=>{
        let inputObj=[];
        let inputElem = document.getElementById("input");
        let inputValue = localStorage.getItem("inputValue")
        if(inputValue==null){
            inputObj=[];
        }else{
            inputObj = JSON.parse(inputValue)
        }

        inputObj.push(inputElem.value);
        if (inputElem.value.length<=2){
        console.log("kdjdk")
        }else{
            localStorage.setItem("inputValue", JSON.stringify(inputObj))
            inputElem.value=""
        }

    }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "left",
        height:"100%"
      }}
    >
      <Box
      sx={{textAlign:"left",ml:{sm : 5}}}
      >
        <Typography variant="h1" sx={{}}>Add Relation</Typography>
        <Box  sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "left",
        width:"fit-content",
        mt:{sm:4}
      }}>
          <Typography>
            {}
          </Typography>
          <Typography
          sx={{
            display: "flex",
        flexDirection: "row",
        justifyContent: "baseline",
        alignItems: "flex-end",
        mx:{sm:2}
          }}>is a friend of</Typography>
          <TextField
            id="input"
            label="Username"
            type="search"
            variant="standard"
            sx={{width:{sm:200},mr:{sm:2}}}
          />
          <Button variant="outlined" onClick={handleOnAdd} >Add</Button>
        </Box>
      </Box>
    </Box>
  );
}
