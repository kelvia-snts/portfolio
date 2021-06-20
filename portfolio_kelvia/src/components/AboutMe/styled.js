import styled from "styled-components" ;

export const ResumeContainer = styled.div`
display: flex;
align-items: center;
color: gray;
img{
  height: 43vh;
  margin-left: -25px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow:
    12px 0 5px 7px white,
    0 0 0 15px gray;
}
h2{
  font-size: 2rem;
  margin:0;
  text-align: center;
}
p{
  font-size: 1.3rem;
  text-align: justify;
  padding: 90px;
  text-indent: 1.5em;
  margin-top: -50px;
}
@media (max-width:600px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -70px;
  img{
    width: 90%;
    height: 30vh;
    margin-left: 5px;
    border-radius: 10px;
    box-shadow: none;
  }
  h2{
    margin-top: 10px;
  }
  p{
    width:  90%;
    font-size: 17px;
    padding: 0;
    margin: 0 20px;
  }
}
`

export const Curriculum  = styled.div`
  margin-left: 270px;
  margin-top: -80px;
  display: flex;
  justify-content: space-around;
  a{
    width: 20vw;
  }
  a:hover{
    background: lightgray;
    transition: transform 1s;
    transform: translateY(-7px) scale(1);
  }
  @media (max-width:600px) {
    display: flex;
    width: 100%;
    margin: 0px;
    align-items: center;
   
  }
` 