import React from 'react'
import {getDepartmentColllection} from "./IdSelect"
import {
  
    Grid,
    Paper
  
  } from "@material-ui/core";

  import { Controller, useFormContext} from "react-hook-form";
  import Controls from "../Controls/control";
  const genderItems = [
    { id: "male", title: "Male" },
    { id: "female", title: "Female" },
  ];
  
  const maritalItem = [
    { id: "unmarried", title: "Unmarried" },
    { id: "maried", title: "Married" },
  ];
export default function Personal_details() {
    const {
        control,
        formState: { errors },
      } = useFormContext();
    return (
     
        <Grid container spacing={3}>
      <Grid item xs={6}>
        <Controller
          control={control}
          name="personal.employeeID"
          rules={{
            required: "Employee ID is Required",
          }}
          render={({ field }) => (
            <Controls.Input
              id="employeeID"
              label="Employee ID"
              variant="outlined"
              placeholder="Enter Employee  ID"
              fullWidth
              margin="normal"
              {...field}
              // error={Boolean(errors.personal.employeeID)}
              // helperText={errors.personal.employeeID?.message}
            />
          )}
        />
          <Controller
          control={control}
          name="personal.firstName"
          rules={{
            required: "First name is Required",
          }}
          render={({ field }) => (
            <Controls.Input
              id="firstName"
              label="First Name"
              variant="outlined"
              placeholder="Enter First  Name"
              fullWidth
              margin="normal"
              {...field}
              // error={Boolean(errors.personal.firstName)}
              // helperText={errors.personal.firstName?.message}
            />
          )}
        />
           <Controller
          control={control}
          name="personal.middleName"
          // rules={{
          //     required:"Father's  Name is Required",
          // }}
          render={({ field }) => (
            <Controls.Input
              id="middleName"
              label="Middle Name"
              variant="outlined"
              placeholder="Middle Name"
              fullWidth
              margin="normal"
              {...field}
              // error={Boolean(errors.middleName)}
              // helperText={errors.middleName?.message}
            />
          )}
        />
          <Controller
          control={control}
          name="personal.lastName"
          rules={{
            required: "Last  Name is Required",
          }}
          render={({ field }) => (
            <Controls.Input
              id="lastName"
              label="Last Name"
              variant="outlined"
              placeholder="Last Name"
              fullWidth
              margin="normal"
              {...field}
              // error={Boolean(errors.personal.lastName)}
              // helperText={errors.personal.lastName?.message}
            />
          )}
        />
       
     
      </Grid>
      <Grid item xs={6}>
      <Controller
          control={control}
          name="personal.dateOfBirth"
          rules={{
            required: "Date of birth is Required!",
          }}
          render={({ field }) => (
            <Controls.DatePicker
              // id="dateOfBirth"
              label="Date Of Birth"
             
              // placeholder="Enter Birth date"
              fullWidth
             
              {...field}
              // error={Boolean(errors.personal.dateOfBirth)}
              // helperText={errors.personal.dateOfBirth?.message}
            />
          )}
        />
      <Controller
          control={control}
          name="personal.idProof"
          rules={{
            required: " Identity Required",
          }}
          render={({ field }) => (
            <Controls.Select
            name="idProof"
            label="Id Proof"
          
           
            options={getDepartmentColllection()}
              {...field}
              // error={Boolean(errors.personal.idProof)}
              // helperText={errors.personal.idProof?.message}
            />
          )}
        />
    <Controller
          control={control}
          name="personal.idNo"
          rules={{
            required: "Id number is required",
          }}
          render={({ field }) => (
            <Controls.Input
              id="idNo"
              label="Id No"
              variant="outlined"
              placeholder="Enter Id no"
              fullWidth
              margin="normal"
              {...field}
              // error={Boolean(errors.personal.idNo)}
              // helperText={errors.personal.idNo?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="personal.gender"
          rules={{
              required:"Plese select the gender",
          }}
          render={({ field }) => (
            <Controls.RadioGroup
              id="gender"
              name="gender"
              label="Gender"
              items={genderItems}
              {...field}
              // error={Boolean(errors.personal.gender)}
              // helperText={errors.personal.gender?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="personal.maritalStatus"
          rules={{
              required:"Describe the marital status",
          }}
          render={({ field }) => (
            <Controls.RadioGroup
              id="maritalStatus"
              name="personal.maritalStatus"
              label="Marital Status"
              items={maritalItem}
              {...field}
            />
          )}
        />
      </Grid>
    </Grid>

    )
}
