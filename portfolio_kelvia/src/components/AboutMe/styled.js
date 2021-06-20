import styled from "styled-components" ;

export const ResumeContainer = styled.div`
display: flex;
align-items: center;
color: gray;
img{
  margin-left: -20px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
}
h2{
  margin:0;
  margin-top: -40px;
  text-align: center;
}
p{
  text-align: justify;
  padding: 10px;
  text-indent: 1.5em;
}
`

export const Curriculum  = styled.div`
  margin-left: 180px;
  margin-top: -50px;
  display: flex;
  justify-content: space-around;
  a{
    width: 25vw;
  }
  a:hover{
    background: lightgray;
    transition: transform 1s;
    transform: translateY(-7px) scale(1);
  }
` 