import styled from "styled-components";

export const ContactContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  a{
    width: 50vw;
    margin-top: 30px;
  }
  @media (max-width:600px) {
    height: 80vh;
    a{
      margin-top: 50px;
    }
  }
` 