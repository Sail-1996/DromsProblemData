import React, { useState, useEffect } from "react";
import Form from "./Form";

import { editUser,deleteUser, getUsers } from "../api";

import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment,
  Button,
  TableHead,
  Table,
  IconButton,
} from "@material-ui/core";
import { Search, Add, LocalDrinkOutlined } from "@material-ui/icons";
import EditIcon from "@material-ui/icons/Edit";
import Education from "./ArrayTable/EducationTable";
import Reference from "./ArrayTable/Reference";
import Experience from "./ArrayTable/Experience";
import PerContact from "./ArrayTable/PerContact";
import { Link ,useParams} from "react-router-dom";
import Controls from "./Controls/control";

import PopUp from "./Controls/PopUp";
import Notificatin from "./Controls/Notificatin";
import PersonalDetails from "./ArrayTable/PersonalDetails";

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

export default function Employees() {
  const classes = useStyles();

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const [openPopup, setOpenPopup] = useState(false);
  const [openRef, setRef] = useState(false);
  const [openEdu, setEdu] = useState(false);
  const [openContact, setContact] = useState(false);
  const [openExp, setExp] = useState(false);
  const [personal, setPersonal] = useState(false);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
    
  }, []);
  const getAllUsers = async (_id) => {
    const response = await getUsers(_id);
    console.log(response);
    setUsers(response.data.reverse());
  };

  const deleteUserData = async (_id) => {
    await deleteUser(_id);
    getAllUsers();


    setNotify({
      isOpen: true,
      message: "Deleted Successfully",
      type: "error",
    });
  };


 const getUser=async(_id)=>{
 const res=   await getUsers(_id)
 console.log(res.data)

 }


  return (
    <div>
      <Paper className={classes.pageContent}>
        <Toolbar>
          <Controls.Input
            label="Search Employees"
            className={classes.serchInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          <Controls.Button
            text="Add New"
            variant="outlined"
            className={classes.newButton}
            startIcon={<Add />}
            onClick={() => {
              setOpenPopup(true);
            }}
          />
        </Toolbar>
        <Table className={classes.table}>
          <TableHead>
            <TableRow className={classes.thead}>
              <TableCell>Employee ID</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Personal Details</TableCell>
              <TableCell>Contact</TableCell>

               <TableCell>Education</TableCell>
              <TableCell>Experience</TableCell>
              <TableCell>Reference</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow className={classes.row} key={index}>
                <TableCell>{user._id}</TableCell>
                <TableCell>{`${user.personal.firstName} ${user.personal.middleName} ${user.personal.lastName} `}</TableCell>

                {/* Personal Details Popup */}
                <TableCell>
                  <IconButton onClick={() => setPersonal(true)}>
                    <EditIcon color="primary" />
                  </IconButton>
                  <PopUp
                    title="Personal Form"
                    openPopup={personal}
                    setOpenPopup={() => setPersonal(false)}
                  >
                    <PersonalDetails personal={user.personal} />
                  </PopUp>
                </TableCell>
                {/* Contact Details Popup */}
                <TableCell>
                  <IconButton onClick={() => setContact(true)}>
                    <EditIcon color="primary" />
                  </IconButton>
                  <PopUp
                    title="Contact Form"
                    openPopup={openContact}
                    setOpenPopup={() => setContact(false)}
                  >
                    <PerContact contact={user.contact} />
                  </PopUp>
                </TableCell>
                {/* Education Details Popup */}
                <TableCell>
                  <IconButton onClick={() =>{return(setEdu(true),getUser(user._id))} }>
                    <EditIcon color="primary" />
                  </IconButton>
                  <PopUp
                    title="Education Form"
                    openPopup={openEdu}
                    setOpenPopup={() => setEdu(false)}
                  >
                    <Education  degree={getUser(user._id)} />
                  
                  

                  </PopUp>
                </TableCell>
                {/* Experience Details Popup */}
                <TableCell>
                  <IconButton onClick={() => setExp(true)}>
                    <EditIcon color="primary" />
                  </IconButton>
                  <PopUp
                    title="Experience Table"
                    openPopup={openExp}
                    setOpenPopup={() => setExp(false)}
                  >
                    {user.experience.map((exp) => (
                      <Experience experience={exp} />
                    ))}
                  </PopUp>
                </TableCell>
                {/* Reference Details Popup */}
                <TableCell>
                  <IconButton onClick={() => setRef(true)}>
                    <EditIcon color="primary" />
                  </IconButton>
                  <PopUp
                    title="Reference Table"
                    openPopup={openRef}
                    setOpenPopup={() => setRef(false)}
                  >
                    {user.reference.map((ref) => (
                      <Reference reference={ref} />
                    ))}
                  </PopUp>
                </TableCell>
                {/* Update Button */}
                <TableCell>
                  <Button
                    style={{ marginBottom: "10px" }}
                    variant="contained"
                    color="primary"
                    component={Link}
                    to={`/edit/${user._id}`}
                  >
                    Update
                  </Button>
                  {/* Delete Button */}
                  <Button
                    style={{ marginBottom: "10px" }}
                    variant="contained"
                    color="secondary"
                    onClick={() => deleteUserData(user._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      <PopUp
        title="Employee Form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <Form />
      </PopUp>
     
      <Notificatin notify={notify} setNotify={setNotify} />
    </div>
  );
}
