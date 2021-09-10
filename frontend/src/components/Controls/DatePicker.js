import React from "react";

import {TextField,makeStyles} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
 
  textField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    // width: 200,
  },
}));

export default function DatePicker(props) {
  const classes = useStyles();
  const { name, label, value, onChange,helperText,error=null,...other } = props;


  return (
    <TextField
        id="date"
        label={label}
        name={name}
        value={value}
        variant="outlined"
     {...other}
         type="date"
         margin='normal'
        onChange={onChange}
        defaultValue="04-05-21"
        error={error}
        helperText={helperText}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
  );
}
