import styled from "styled-components" ;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: gray;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  >div{
    font-weight: bold;
    font-size: 1.6rem;
    letter-spacing: 5px;
  }div:hover{
    cursor: pointer;
  }
  p{
    margin-right:300px;
  }
  @media (max-width:600px) {
    width: 99%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 50px;    
   p{
      margin: 0px; 
    }
  }
`