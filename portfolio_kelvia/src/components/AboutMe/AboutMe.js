import React from "react";
import { ResumeContainer , Curriculum} from "./styled";
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';

export const AboutMe = () => {
  return (
<div>
<ResumeContainer>
      <img
        src="https://media-exp1.licdn.com/dms/image/C4D03AQE77uKeQA8Dtg/profile-displayphoto-shrink_200_200/0/1620395291331?e=1629331200&v=beta&t=8dnI9Lms7C-y6IZVuHx4m4No2-oRl1G2Y6-P3B-XY5Y"
        alt="Minha foto"
      />
      <div>
        <h2>Sobre mim</h2>
        <p>
          Movida pelo prazer em aprender e aplicar o conhecimento na construção,
          colaborativa e saudável, de algo valoroso para todos os envolvidos.
          Graduada em gestão Logística, início da paixão por conectar pessoas às
          suas necessidades de forma eficaz o que me levou ao interesse na
          tecnologia e atualmente estudo metodologias ágeis e programação web,
          desenvolvendo, semanalmente, projetos web individuais e em grupo
          utilizando as seguintes tecnologias: Frontend: HTML, CSS, JavaScript,
          Reactjs, Jest Backend:Node, TypeScript, MySQL,AWS.
        </p>
      </div>
      <div>
      </div>
    </ResumeContainer>
    <Curriculum>
    <Button href="https://www.canva.com/design/DAEfsvLqtsg/ZCD2NxeIikv6jtHo8qtLyg/view?utm_content=DAEfsvLqtsg&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton" target="_blank" color="primary">
    <DescriptionIcon/> CURRÍCULO
      </Button>
    <Button  href="https://github.com/kelvia-snts" target="_blank" color="primary">
    <GitHubIcon/>  GITHUB 
      </Button>
    <Button href="https://www.linkedin.com/in/kelvia-kelline/" target="_blank" color="primary">
      <LinkedInIcon/> LINKEDIN
      </Button>
    </Curriculum>
    </div>
  );
};
