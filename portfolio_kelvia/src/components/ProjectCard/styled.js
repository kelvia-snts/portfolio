import styled from "styled-components" ;

export const CardContainer = styled.div`
display: flex;
flex-direction: column;
width: 30vw;
align-items: center;
justify-content: center;
margin-bottom: 20px;
padding: 5px;
h3{
  margin: 0;
}
img{
  width: 100%;
}
p{
  text-align: justify;
  text-indent: 1.5rem;
  color: gray;
}
a{
  width: 100%;
}
@media (max-width:600px) {
  margin-top: 10px;

  p{
    font-size: 13px;
  }
}
`