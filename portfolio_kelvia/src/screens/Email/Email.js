import React from "react";
import Button from "@material-ui/core/Button";
import { goToHome} from "../../routes/Coordinator";
import { useHistory } from "react-router-dom";
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import {ContactContainer} from './styled'

const Email = () => {
  const history = useHistory();
  return (
    <ContactContainer>
      <Button href="mailto:keldev9@gmail.com" onclick={() => goToHome(history)} type="submit" variant="contained" color="primary">
        ENVIAR EMAIL
      </Button>
      <Button href="https://twitter.com/UltimoK_"variant="contained" color="primary" ><TwitterIcon /></Button>
      <Button href="https://www.instagram.com/kelvia_snts/" variant="contained" color="primary"><InstagramIcon /></Button>
    </ContactContainer>
  );
};

export default Email;
