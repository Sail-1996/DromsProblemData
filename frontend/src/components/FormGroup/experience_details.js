import React,{useState} from "react";
import { useFieldArray, useFormContext, Controller } from "react-hook-form";
import { Paper,Button,Grid,IconButton, TextField } from "@material-ui/core";
import { DeleteOutline } from "@material-ui/icons";
import Control from "../Controls/control"
import Checkbox from "../Controls/Checkbox";
export default function Experience_details() {
 const [check,setCheck]=useState(false)
 const [checkEndDate,setEndDate]=useState(true)
 const onChange=()=>{
   setCheck(true)
   setEndDate(false)
 }
  const {
   
    control
    
  } = useFormContext({});
  const { append, fields,remove } = useFieldArray({
    control,
    name: "experience",
  });
  return (
     <Grid container spacing={2} direction="row-reverse">
      <Grid item xs={2}>
        <Button
          variant="contained"
          color="primary"
          type="button"
          onClick={() => append({organization: "", startDate: "", endDate:"",currentSalary:""})}
        >
          Add More
        </Button>
      </Grid>
      <Grid>
      {fields.map((item, index) => (
        <div className="form-row form-group" key={item.id}>
          {/* <div className="col-2"> */}
          <Controller
              control={control}
              name={`experience.[${index}].organization`}
              rules={{ required: "organization name is require" }}
              render={({ field }) => (
                <TextField
                  label="Organization"
                  variant="outlined"
                 size="small"
                  {...field}
                  defaultValue={item.organization}
                />
              )}
            />
          {/* </div> */}
          {/* <div className="col-2"> */}
            <Controller
              control={control}
              name={`experience.[${index}].startDate`}
              rules={{ required: "start Date is Require" }}
              render={({ field }) => (
                <Control.DatePicker
                  label="Start Date"
                  variant="outlined"
                 size="small"
                  {...field}
                  defaultValue={item.startDate}
                />
              )}
            />
          {/* </div>
     
          <div className="col-2"> */}
        {
          checkEndDate &&     <Controller
              control={control}
              name={`experience.[${index}].endDate`}
              rules={{ required: "End Date" }}
              render={({ field }) => (
                <Control.DatePicker
                  label="End Date"
                
                  variant="outlined"
               size="small"
                  {...field}
                  defaultValue={item.endDate}
                />
              )}
            />
        }
          {/* </div>
          <div className="col-2"> */}
          {
            check &&  <Controller
              control={control}
              name={`experience.[${index}].currentSalary`}
              rules={{ required: "Current Salary required" }}
              render={({ field }) => (
                <TextField
                  label="Your Salary"
                  placehoder="Current Salary"
                  variant="outlined"
                
                  size="small"
                  {...field}
                  defaultValue={item.currentSalary}
                />
              )}
            />
          }
         
           
          {/* </div>
       
          <div className="col-2"> */}
         <Checkbox   onChange={onChange} label="Currently Working" />
           
          {/* </div>
          <div className="col-2"> */}
          <IconButton onClick={() => remove(index)}>
              <DeleteOutline color="secondary" />
            </IconButton>
          
          {/* </div>*/}
        </div>
      ))}
      </Grid>
    </Grid>
  );
}
