import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { Resizable } from "re-resizable";
import Tasks from "../resources/tasks-data.json";
import moment from "moment";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export const TasksList = () => {
  const [state, setState] = useState({ width: 175 });
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Resizable
        className="schemaListPosition"
        size={{ width: state.width }}
        onResizeStop={(d) => {
          setState({
            width: state.width + d.width,
          });
        }}
      >
        {Tasks &&
          Tasks.data.map((task) => {
            return (
              <>
                <Accordion
                  key={task._id}
                  expanded={expanded === task.displayName}
                  onChange={handleChange(task.displayName)}
                >
                  <AccordionSummary>
                    <Typography>{task.name}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box>
                      <List className="cardList">
                        <ListItemText>Name:{task.name}</ListItemText>
                        <ListItemText>
                          File name:{task.displayName}
                        </ListItemText>
                        <ListItemText>
                          Date of foundation:
                          {moment(task.created).format("MM.DD.YY hh:mm:ss")}
                        </ListItemText>
                        <ListItemText>
                          Date of change:
                          {moment(task.modified).format("MM.DD.YY hh:mm:ss")}
                        </ListItemText>
                        <ListItemText>Author:{task.author}</ListItemText>
                        <ListItemText>
                          Author of change:{task.modifier}
                        </ListItemText>
                        <ListItemText>Version:{task.version}</ListItemText>
                      </List>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </>
            );
          })}
        {/* <Accordion
        expanded={expanded === "task2"}
        onChange={handleChange("task2")}
      >
        <AccordionSummary>
          <Typography>task 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>task 2</Typography>
        </AccordionDetails>
      </Accordion> */}
      </Resizable>
    </>
  );
};
