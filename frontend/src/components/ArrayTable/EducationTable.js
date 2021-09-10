import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import { getUsers,editUser } from "../../api";

import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
  Button,
  TableHead,
  Table,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  serchInput: {
    width: "75%",
  },
  newButton: {
    position: "absolute",
    right: "5px",
  },

  tabButton: {
    position: "absolute",
    right: "150px",
  },
}));

export default function EducationTable({ degree}) {
  // const [education,setEducation]=useState([])
  const classes = useStyles();

  // useEffect(() => {
  //   loadUserData();
  // }, []);

  // const loadUserData = async (degree) => {
  //   const response = await getUsers(degree);
  //   setEducation(response.data);
  //   console.log(response.data)
  // };
  console.log(degree);

  return (
    <div>
      <Paper className={classes.pageContent}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow className={classes.thead}>
              <TableCell>Degree</TableCell>
              <TableCell>Passing Year</TableCell>
              <TableCell>Grade</TableCell>
              <TableCell>Stream</TableCell>
            </TableRow>
          </TableHead>

     <TableBody >
   
           <TableRow className={classes.row} >
              <TableCell></TableCell>
              <TableCell></TableCell>

              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
       
            
          </TableBody>
 
        
        </Table>
      </Paper>
    </div>
  );
}
