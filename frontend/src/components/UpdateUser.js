import { FormGroup, makeStyles, Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Controls from "./Controls/control";
import { editUser, getUsers } from "../api";
import { useHistory, useParams } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    width: "50%",

    margin: "0% 0 0 25%",
    marginBottom: "20px",
    "&>*": {
      marginTop: "20px",
    },
  },
});
const initialValues = {
  employeeID: "",
  firstName: "",
  middleName: "",
  lastName: "",
  gender: "",
  dateOfBirth: "",
  maritalStatus: "",
  idProof: "",
  phoneNo: "",
  landLineNo: "",
  email: "",
  permanentAddress: "",
  localAddress: "",
};

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
];

const maritalItem = [
  { id: "unmarried", title: "Unmarried" },
  { id: "maried", title: "Married" },
];
export default function EditUser() {
  const [user, setUser] = useState(initialValues);
  const {
    employeeID,
    firstName,
    middleName,
    lastName,
    gender,
    dateOfBirth,
    maritalStatus,
    idProof,
    phoneNo,
    landLineNo,
    email,
    permanentAddress,
    localAddress,
  } = user;
  const { _id } = useParams();
  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    const response = await getUsers(_id);
    setUser(response.data);
    console.log(response.data)
  };
  const classes = useStyles();
  const history = useHistory();

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const editUserData = async () => {
    await editUser(_id, user);
    history.push("/");
  };
  return (
    <div className="card shadow">
      <FormGroup className={classes.container}>
        <div className="card-header">Update User</div>
        <div className="card-body">
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <div className="form-group">
                <Controls.Input
                  label="Employee Id"
                  onChange={(e) => onValueChange(e)}
                  name="employeeID"
                  value={employeeID}
                />
              </div>

              <div className="form-group">
                <Controls.Input
                  label="First Name"
                  onChange={(e) => onValueChange(e)}
                  name="firstName"
                  value={firstName}
                />
              </div>

              <div className="form-group">
                <Controls.Input
                  label="Middle Name"
                  onChange={(e) => onValueChange(e)}
                  name="middleName"
                  value={middleName}
                />
              </div>

              <div className="form-group"></div>
              <Controls.Input
                label="Last Name"
                onChange={(e) => onValueChange(e)}
                name="lastName"
                value={lastName}
              />
            </Grid>
            <Grid item xs={4}>
              <div className="form-group"></div>
              <Controls.RadioGroup
                label="Gender"
                onChange={(e) => onValueChange(e)}
                name="gender"
                items={genderItems}
                value={gender}
              />

              <div className="form-group">
                <Controls.DatePicker
                  label="Date Of Birth"
                  onChange={(e) => onValueChange(e)}
                  name="dateOfBirth"
                  value={dateOfBirth}
                />
              </div>

              <div className="form-group">
                <Controls.RadioGroup
                  label="Marital Status"
                  onChange={(e) => onValueChange(e)}
                  name="maritalStatus"
                  items={maritalItem}
                  value={maritalStatus}
                />
              </div>

              <div className="form-group">
                <Controls.Input
                  label="ID Proof"
                  onChange={(e) => onValueChange(e)}
                  name="idProof"
                  value={idProof}
                />
              </div>

              <div className="form-group">
                <Controls.Input
                  label="Phone No:"
                  type="number"
                  onChange={(e) => onValueChange(e)}
                  name="phoneNo"
                  value={phoneNo}
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="form-group">
                <Controls.Input
                  label="Email"
                  type="email"
                  onChange={(e) => onValueChange(e)}
                  name="email"
                  value={email}
                />
              </div>

              <div className="form-group">
                <Controls.Input
                  type="number"
                  label="Land Line No:"
                  onChange={(e) => onValueChange(e)}
                  name="landLineNo"
                  value={landLineNo}
                />
              </div>

              <div className="form-group">
                <Controls.Input
                  label="Permanent Address:"
                  onChange={(e) => onValueChange(e)}
                  name="permanentAddress"
                  value={permanentAddress}
                />
              </div>
              <div className="form-group">
                <Controls.Input
                  label="Local Address"
                  onChange={(e) => onValueChange(e)}
                  name="localAddress"
                  value={localAddress}
                />
              </div>
            </Grid>
          </Grid>

          <button className="btn btn-warning " onClick={() => editUserData()}>
            Update User
          </button>
        </div>
      </FormGroup>
    </div>
  );
}
