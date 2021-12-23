import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Story = (props) => {
  return (
    <Accordion>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
      >
        <h3>{props.recipeName}</h3>
      </AccordionSummary>
      <AccordionDetails>{props.story}</AccordionDetails>
    </Accordion>
  )
}