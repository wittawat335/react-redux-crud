import { Button, Checkbox, FormControlLabel, Radio, RadioGroup, Stack, TextField } from '@mui/material';
import React, { useState } from 'react'

type Props = {}

const CompanayForm = (props: Props) => {
    const [id, idchange] = useState(0);
    const [name, namechange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [address, addresschange] = useState("");
    const [type, typechange] = useState("MNC");
    const [agreeterm, agreetermchange] = useState(true);
  return (
    <div>
         <form onSubmit={handlesubmit}>
            <Stack spacing={2} margin={2}>
              <TextField
                required
                error={name.length === 0}
                value={name}
                onChange={(e) => {
                  namechange(e.target.value);
                }}
                variant="outlined"
                label="Name"
              ></TextField>
              <TextField
                required
                error={name.length === 0}
                value={email}
                onChange={(e) => {
                  emailchange(e.target.value);
                }}
                variant="outlined"
                label="Email"
              ></TextField>
              <TextField
                required
                error={name.length === 0}
                value={phone}
                onChange={(e) => {
                  phonechange(e.target.value);
                }}
                variant="outlined"
                label="Phone"
              ></TextField>
              <TextField
                multiline
                maxRows={2}
                minRows={2}
                value={address}
                onChange={(e) => {
                  addresschange(e.target.value);
                }}
                variant="outlined"
                label="Address"
              ></TextField>
              <RadioGroup
                value={type}
                onChange={(e) => {
                  typechange(e.target.value);
                }}
                row
              >
                <FormControlLabel
                  value="MNC"
                  control={<Radio color="success"></Radio>}
                  label="MNC"
                ></FormControlLabel>
                <FormControlLabel
                  value="DOMESTIC"
                  control={<Radio></Radio>}
                  label="DOMESTIC"
                ></FormControlLabel>
              </RadioGroup>
              <FormControlLabel
                checked={agreeterm}
                onChange={(e) => {
                  agreetermchange(e.target.checked);
                }}
                control={<Checkbox></Checkbox>}
                label="Agree Terms & Conditions"
              ></FormControlLabel>
              <Button disabled={!agreeterm} variant="contained" type="submit">
                Submit
              </Button>
            </Stack>
          </form>
    </div>
  )
}

export default CompanayForm