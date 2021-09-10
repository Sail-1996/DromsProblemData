import React from "react";
import { useFieldArray, useFormContext, Controller } from "react-hook-form";
import { DeleteOutline } from "@material-ui/icons";
import { Grid, IconButton,TextField,Button } from "@material-ui/core";
export default function Reference_details() {
  const {
   
    control
  } = useFormContext({});
  const { append, fields, remove } = useFieldArray({
    control,
    name: "reference",
  });
  return (
    <Grid container spacing={1} alignItems='flex-end' >
      <Grid item sm={10}>
      {fields.map((item, index) => (
       
        <div className="form-row form-group" key={item.id}>
          <div className="col">
            <Controller
              control={control}
              name={`reference.[${index}].fullName`}
              rules={{ required: "Reference Name is Required" }}
              render={({ field }) => (
                <TextField
                  label="Full Name"
                  placehoder="Reference Full Name"
                  variant="outlined"
                  {...field}
                  defaultValue={item.fullName}
                />
              )}
            />
          </div>
          <div className="col">
            <Controller
              control={control}
              name={`reference.[${index}].phoneNo`}
              rules={{ required: "Reference mobile no required" }}
              render={({ field }) => (
                <TextField
                  label="Phone No"
                  placehoder="Reference phone No"
                  variant="outlined"
                  {...field}
                  defaultValue={item.phoneNo}
                />
              )}
            />
          </div>
          <div className="col">
            <Controller
              control={control}
              name={`reference.[${index}].refAddress`}
              rules={{ required: "Reference Address required" }}
              render={({ field }) => (
                <TextField
                  label="Address"
                  placehoder="Reference address"
                  variant="outlined"
                  {...field}
                  defaultValue={item.refAddress}
                />
              )}
            />
          </div>
          <div className="col">
            <Controller
              control={control}
              name={`reference.[${index}].refId`}
              rules={{ required: "Reference Address required" }}
              render={({ field }) => (
                <TextField
                  label="ID"
                  placehoder="Reference ID"
                  variant="outlined"
                  {...field}
                  defaultValue={item.refId}
                />
              )}
            />
          </div>
          <div className="col">
          <IconButton onClick={() => remove(index)}>
              <DeleteOutline color="secondary" />
            </IconButton>
          
          </div>
        </div>
      
      ))}
      </Grid>
      <Grid item sm={2}>
      <Button
     color="primary"
     variant='contained'
        type="button"
        
        onClick={() =>
          append({ fullName: "", phoneNo: "", refAddress: "", refId: "" })
        }
      >
        Add More
      </Button>
      </Grid>
    </Grid>
  );
}
