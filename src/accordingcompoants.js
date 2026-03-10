import React, { useState } from 'react';  // ← ADD THIS!
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Switch from '@mui/material/Switch';
import SimpleContainer from "./SimpleContainer";

// MERGED INTO ONE COMPONENT
export default function AccordionUsage() {
  // State to track switch status
  const [checked, setChecked] = useState(false);

  // Handle switch change
  const handleChange = (event) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
  };

  const label = { inputProps: { 'aria-label': 'Color switch demo' } };

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span">Switch Control</Typography> {/* ← ADDED TITLE */}
        </AccordionSummary>
        <AccordionDetails>
          <Switch 
            {...label} 
            color="warning" 
            checked={checked}          // ← ADD THIS
            onChange={handleChange}     // ← ADD THIS
          />
          <Typography>
            Switch is {checked ? 'ON' : 'OFF'}  {/* ← SHOW STATUS */}
          </Typography>
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
      
      <SimpleContainer isLarge={checked} />
    </div>
  );
}