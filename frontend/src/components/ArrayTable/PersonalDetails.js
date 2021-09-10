import React from "react";
import { getDepartmentColllection } from "../FormGroup/IdSelect";
import { Grid, Paper } from "@material-ui/core";

import { Controller, useFormContext } from "react-hook-form";
import Controls from "../Controls/control";
const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
];

const maritalItem = [
  { id: "unmarried", title: "Unmarried" },
  { id: "maried", title: "Married" },
];
export default function Personal_details(personal) {
    console.log(personal)

  return (
      <>
    <Grid container spacing={3}>
      <Grid item xs={6}>
      
            <Controls.Input
              id="employeeID"
              label="Employee ID"
              variant="outlined"
              placeholder="Enter Employee  ID"
              fullWidth
              margin="normal"
          
            />
       
   
            <Controls.Input
              id="firstName"
              label="First Name"
              variant="outlined"
              placeholder="Enter First  Name"
              fullWidth
              margin="normal"
           
            />
     
     
            <Controls.Input
              id="middleName"
              label="Middle Name"
              variant="outlined"
              placeholder="Middle Name"
              fullWidth
              margin="normal"
              
            />
       
      
            <Controls.Input
              id="lastName"
              label="Last Name"
              variant="outlined"
              placeholder="Last Name"
              fullWidth
              margin="normal"
             
            />
      
      </Grid>
      <Grid item xs={6}>
      
            <Controls.DatePicker
              // id="dateOfBirth"
       
       
              label="Date Of Birth"
              // placeholder="Enter Birth date"
              fullWidth
             
            />
       
     
            <Controls.Select
              name="idProof"
              label="Id Proof"
              options={getDepartmentColllection()}
           
            />
        
     
            <Controls.Input
              id="idNo"
              label="Id No"
              variant="outlined"
              placeholder="Enter Id no"
              fullWidth
              margin="normal"
           
            />
        
      
            <Controls.RadioGroup
              id="gender"
              name="gender"
              label="Gender"
              items={genderItems}
            
            />
      
      
            <Controls.RadioGroup
              id="maritalStatus"
              name="personal.maritalStatus"
              label="Marital Status"
              items={maritalItem}
            
            />
         
      </Grid>
    </Grid>
    </>
  );
}
