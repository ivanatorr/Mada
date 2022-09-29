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
import moment from "moment";
import Pipelines from "../resources/pipeline-data.json";
import { WorkSpacePipelines } from "./WorkSpacePipelines";

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

export const PipelineList = () => {
  const [highlight, setHighlight] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [state, setState] = useState({ width: 175 });
  const [expanded, setExpanded] = useState(null);

  const handleClick = () => {
    setIsShown((current) => !current);
    setHighlight(!highlight);
  };

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
        {Pipelines &&
          Pipelines.data.map((pipeline) => {
            return (
              <Accordion
                key={pipeline._id}
                expanded={expanded === pipeline.displayName}
                onChange={handleChange(pipeline.displayName)}
              >
                <AccordionSummary onClick={handleClick}>
                  <Typography>{pipeline.name}</Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: highlight ? "lightblue" : "unset" }}
                >
                  <Box>
                    <List className="cardList">
                      <ListItemText>
                        <b>Name: </b>
                        {pipeline.name}
                      </ListItemText>
                      <ListItemText>
                        <b>File name: </b>
                        {pipeline.displayName}
                      </ListItemText>
                      <ListItemText>
                        <b>Date of creating: </b>
                        {moment(pipeline.created).format("MM.DD.YY hh:mm:ss")}
                      </ListItemText>
                      <ListItemText>
                        <b>Date of change: </b>
                        {moment(pipeline.modified).format("MM.DD.YY hh:mm:ss")}
                      </ListItemText>
                      <ListItemText>
                        <b>Author: </b>
                        {pipeline.author}
                      </ListItemText>
                      <ListItemText>
                        <b>Author of change: </b>
                        {pipeline.modifier}
                      </ListItemText>
                      <ListItemText>
                        <b>Version: </b>
                        {pipeline.version}
                      </ListItemText>
                    </List>
                  </Box>
                </AccordionDetails>
              </Accordion>
            );
          })}
      </Resizable>

      {isShown && (
        <WorkSpacePipelines
          onClick={handleChange(Pipelines.data.displayName)}
        />
      )}
    </>
  );
};
