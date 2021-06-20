import React from "react";
import {CardContainer} from "./styled"
import Button from '@material-ui/core/Button';


export const ProjectCard = (props) => {
  return(
    <CardContainer>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <img src={props.image} alt={props.alt} />
      <Button href={props.link} target="_blank" variant="contained" color="primary">{props.name}</Button>
    </CardContainer>
  )
}