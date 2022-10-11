import React from "react";
import "./car.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { BsFillBriefcaseFill, BsFillCpuFill } from "react-icons/bs";
import { FaCanadianMapleLeaf } from "react-icons/fa";

export default function Car(props) {
  return (
    <Card sx={{ minWidth: 275 , maxWidth: 400}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <BsFillBriefcaseFill /> {props.make}
        </Typography>
        
    
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <BsFillCpuFill /> {props.model}
          </Typography>

      
          <Typography variant="body2">
            <FaCanadianMapleLeaf /> {props.year}
          </Typography>
      
      </CardContent>
    </Card>
  );
}
