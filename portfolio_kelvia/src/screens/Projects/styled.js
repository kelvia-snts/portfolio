import styled from "styled-components"

export const ProjectPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  margin-top: 20px;  
  h2{
    margin-bottom: 50px;
    color: #808080;
  }
  @media (max-width:600px) {
    
    h2{
      margin-top: 45px;
    }
  }
` 