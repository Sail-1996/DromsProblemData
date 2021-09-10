import React from 'react'
import {FormControlLabel,FormControl,Radio,FormLabel,RadioGroup as MuiRadioGroup} from "@material-ui/core"
export default function RadioGroup(props) {
    const {name,label,value,onChange,items,helperText,error=null}=props;
    return (
        <div>
              <FormControl>
            <FormLabel>{label}</FormLabel>
            <MuiRadioGroup
              row
              name={name}
              value={value}
              onChange={onChange}
              error={error}
         helperText={helperText}
            >
            {
                items.map(
                    (item)=>(
                        <FormControlLabel key={item.id} value={item.id} control={<Radio/>} label={item.title} />
                    )
                )
            }
            
            </MuiRadioGroup>
          </FormControl>
        </div>
    )
}
