import React from "react";
import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";
import {HeaderContainer} from "./styled";
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { goToProjects, goToHome, goToContact } from "../../routes/Coordinator";

export const Header = () => {
  const history = useHistory();
  const currentDate = format(new Date(), "EEEE, d MMM Y", { locale: ptBR });
  return(
  <HeaderContainer>
  <div onClick={() => goToHome(history)}>Kelvia Santos</div>
  <p>Full Stack web Developer</p>
  <Button onClick={() => goToProjects(history)} color="primary">Projetos</Button>
  <Button  onClick={() => goToContact(history)} color="primary">Contato</Button>
  <span>{currentDate}</span>
  </HeaderContainer>
  )
};
