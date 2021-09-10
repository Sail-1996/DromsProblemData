import React from "react";
import { useFieldArray, useFormContext, Controller } from "react-hook-form";
import { Paper, IconButton, TextField, Grid, Button } from "@material-ui/core";
import { DeleteOutline } from "@material-ui/icons";
import { getQualification, getStream } from "./IdSelect";
import Controls from "../Controls/control";
export default function Education_details() {
  const { control } = useFormContext({});
  const { append, fields, remove } = useFieldArray({
    control,
    name: "education",
  });
  return (
    <Grid container spacing={2} direction="row-reverse">
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          type="button"
          onClick={() => append({ degree: "", passingYear: "", grade: "" })}
        >
          Add More
        </Button>
      </Grid>
      <Grid>
        {fields.map((item, index) => (
          <div className="form-row form-group" key={item.id}>
            <div className="col">
              <Controller
                control={control}
                name={`education.[${index}].degree`}
                rules={{
                  required: " Degree is Required",
                }}
                render={({ field }) => (
                  <Controls.Select
                    name={`education.[${index}].degree`}
                    label="Degree"
                    defaultValue={item.degree}
                    options={getQualification()}
                    {...field}
                    // error={Boolean(errors.{`education.[${index}].degree)}
                    // helperText={errors.{`education.[${index}].degree`}?.message}
                  />
                )}
              />
            </div>
<div className="col">
<Controller
                control={control}
                name={`education.[${index}].stream`}
                rules={{
                  required: " Stream is Required",
                }}
                render={({ field }) => (
                  <Controls.Select
                    name={`education.[${index}].stream`}
                    label="Degree"
                    defaultValue={item.degree}
                    options={getStream()}
                    {...field}
                    // error={Boolean(errors.{`education.[${index}].degree)}
                    // helperText={errors.{`education.[${index}].degree`}?.message}
                  />
                )}
              />
</div>
            <div className="col">
              <Controller
                control={control}
                name={`education.[${index}].passingYear`}
                rules={{ required: "Grade required" }}
                render={({ field }) => (
                  <TextField
                    label="Passing Year"
                    variant="outlined"
                    placehoder="Passing Year"
                    {...field}
                    defaultValue={item.passingYear}
                  />
                )}
              />
            </div>
            <div className="col">
              <Controller
                control={control}
                name={`education.[${index}].grade`}
                rules={{ required: "Grade required" }}
                render={({ field }) => (
                  <TextField
                    label="Grade"
                    variant="outlined"
                    placehoder="Grade or Percentage"
                    {...field}
                    defaultValue={item.grade}
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
    </Grid>
  );
}
