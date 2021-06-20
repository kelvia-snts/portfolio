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
}
h2{
  font-size: 2rem;
  margin:0;
  margin-top: -20px;
  text-align: center;
}
p{
  font-size: 1.3rem;
  text-align: justify;
  padding: 10px;
  text-indent: 1.5em;
}
@media (max-width:600px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  img{
    width: 90%;
    height: 30vh;
    margin-left: 2px;
    border-radius: 10px;
  }
  h2{
    margin-top: 10px;
  }
  p{
    width:  95%;
    font-size: 17px;
    margin-top: 0px;
  }
}
`

export const Curriculum  = styled.div`
  margin-left: 250px;
  margin-top: -50px;
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
    width: 99%;
    margin: 0px;
    align-items: center;
    a{
      width: 5vh;
    }
  }
` 