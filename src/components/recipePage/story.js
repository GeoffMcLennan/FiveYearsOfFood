import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './index.css';

export const Story = (props) => {
  return (
    <Accordion>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
      >
        <h3 className='Story-Title'>{props.recipeName}</h3>
      </AccordionSummary>
      <AccordionDetails>{props.story}</AccordionDetails>
    </Accordion>
  )
}