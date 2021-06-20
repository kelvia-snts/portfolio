import React from "react";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import labefy from "../../assets/labefy.png";
import labeMatch from "../../assets/labeMatch.png";
import labex from "../../assets/labex.png";
import labeddit from "../../assets/Labeddit.png";
import landingPage from "../../assets/landingPage.png";
import futureNinja from "../../assets/futureNinja.png";
import pokedex from "../../assets/pokedex.png";
import labefood from "../../assets/labefood.jpg";
import labECommerce from "../../assets/labECommerce.png";
import {ProjectPageContainer} from "./styled"

const Project = () => {
  return (
    <ProjectPageContainer>
      <div>
        <h2>Projetos Individuais - FRONT</h2>
      <ProjectCard
        title="Labeddit"
        description="Projeto de uma rede real, com cadastro, login, posts, likes e comentários, baseado no reddit.com. Fazendo integração com uma API"
        image={labeddit}
        alt="página inicial do projeto"
        link="http://sad-mountain.surge.sh/login"
        name="Ver projeto"
      />
      <ProjectCard
        title="Labex"
        description="Projeto para criar uma plataforma de gerenciamento de viagens espaciais. Com uma parte pública e outra privada. Fazendo integração com uma API. Para login: email: astrodev@gmail.com.br
        Senha: 123456"
        image={labex}
        alt="página inicial do projeto"
        link="http://foolish-cactus.surge.sh/"
        name="Ver projeto"
      />
      <ProjectCard
        title="LabeMatch"
        description="Projeto com o objetivo de fazer um clone do Tinder. Fazendo integração com uma API."
        image={labeMatch}
        alt="página inicial do projeto"
        link="http://smoggy-mitten.surge.sh/"
        name="Ver projeto"
      />
      <ProjectCard
        title="Labefy"
        description="Projeto de gerenciamento básico de playlist de músicas, realizando integração com uma API."
        image={labefy}
        alt="página inicial do projeto"
        link="https://inconclusive-bottle.surge.sh/"
        name="Ver projeto"
      />
      </div>
      <div>
        <h2>Projetos em Grupo - FRONT</h2>
        <ProjectCard
        title="iFuture"
        description="Projeto baseado no ifood, seguindo um designer definido e fazendo integração com uma API"
        image={labefood}
        alt="página inicial do projeto"
        link="http://cruz-labefoods2.surge.sh/"
        name="Ver projeto"
      />
        <ProjectCard
        title="Pokédex"
        description="Projeto utilizando a API pública Poke API"
        image={pokedex}
        alt="página inicial do projeto"
        link="http://pokedex-2.surge.sh/"
        name="Ver projeto"
      />
        <ProjectCard
        title="Future Ninja"
        description="Projeto para construção de um marketplace"
        image={futureNinja}
        alt="página inicial do projeto"
        link="futureninja-cruz-marketplace3.surge.sh"
        name="Ver projeto"
      />
        <ProjectCard
        title="Cruz Sky Treasures"
        description="Projeto le-commerce de itens espaciais."
        image={labECommerce}
        alt="página inicial do projeto"
        link="https://labecommerce.surge.sh/"
        name="Ver projeto"
      />
        <ProjectCard
        title="F4Life"
        description="Projeto landing Page. Empresa de aluguéis de repúblicas para universitários."
        image={landingPage}
        alt="página inicial do projeto"
        link="https://github.com/future4code/cruz-landing-page16"
        name="Ver projeto"
      />
        </div>

        <div>
          <h2>Projetos Back-end</h2>
          <ProjectCard
            title="LabenuSystem"
            link="https://github.com/future4code/cruz-labenu-system1"
            name="Ver Projeto"
          />
          <ProjectCard
            title="Cookenu"
            link="https://github.com/future4code/Kelvia-Sousa/pull/55"
            name="Ver Projeto"
          />
            <ProjectCard
              title="TO DO LIST"
              link="https://github.com/future4code/Kelvia-Sousa/pull/50"
              name="Ver Projeto"
            />
          <ProjectCard
            title="Sistema Bancário"
            link="https://github.com/future4code/Kelvia-Sousa/pull/46"
            name="Ver Projeto"
          />
          
        </div>
    
    </ProjectPageContainer>
  );
};

export default Project;
