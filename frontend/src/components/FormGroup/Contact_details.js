
import React from 'react'
import { Grid } from '@material-ui/core';
  import { Controller, useFormContext } from "react-hook-form";
  import Controls from "../Controls/control";
export default function Contact_details() {
    const {
        control,
        formState: { errors },
      } = useFormContext();
    return (
        <Grid container spacing={1}>
        <Grid item xs={6}> <Controller
        control={control}
        name="contact.phoneNo"
        rules={{
          required: "Phone is Required",
        }}
        render={({ field }) => (
          <Controls.Input
            id="phoneNo"
            label="Phone No"
            variant="outlined"
            placeholder="Phone No"
            fullWidth
            type="phoneNo"
            margin="normal"
            {...field}
            error={Boolean(errors.phoneNo)}
            helperText={errors.phoneNo?.message}
          />
        )}
      />
        <Controller
        control={control}
        name="contact.landLineNo"
        // rules={{
        //     required:"Phone No. Required",
        // }}
        render={({ field }) => (
          <Controls.Input
            id="landLineNo"
            label="Land Line No"
            variant="outlined"
            placeholder="Enter Your  Land Line No"
            fullWidth
            type="string"
            margin="normal"
            {...field}
            // error={Boolean(errors.phone)}
            // helperText={errors.pnone?.message}
          />
        )}
      />
        <Controller
        control={control}
        name="contact.emergencyNo"
        rules={{
            required:"Emergency Contact no is required",
        }}
        render={({ field }) => (
          <Controls.Input
            id="emergencyNo"
            label="Emergency Mobile No"
            variant="outlined"
            placeholder="Emergency Contact"
            fullWidth
            type="string"
            margin="normal"
            {...field}
            error={Boolean(errors.emergencyNo)}
            helperText={errors.emergencyNo?.message}
          />
        )}
      />
      </Grid>
     <Grid item xs={6}>    <Controller
        control={control}
        name="contact.email"
        rules={{
          required: "Email  is Required",
        }}
        render={({ field }) => (
          <Controls.Input
            id="email"
            label="E-mail"
            variant="outlined"
            placeholder="Enter Your E-mail Address"
            fullWidth
            type="email"
            margin="normal"
            {...field}
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="contact.permanentAddress"
        rules={{
          required: "Permanent Address is Required!",
        }}
        render={({ field }) => (
          <Controls.Input
            id="permanentAddress"
            label="Enter Your Permanent  Address"
            variant="outlined"
            placeholder="Enter Your Permanent  Address"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors.permanentAddress)}
            helperText={errors.permanentAddress?.message}
          />
        )}
      />
        <Controller
        control={control}
        name="contact.localAddress"
        rules={{
          required: "Local Address is Required!",
        }}
        render={({ field }) => (
          <Controls.Input
            id="localAddress"
            label="Enter Local Address"
            variant="outlined"
            placeholder="Enter Your Local  Address "
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors.localAddress)}
            helperText={errors.localAddress?.message}
          />
        )}
      /></Grid>
    
    </Grid>

    )
}
