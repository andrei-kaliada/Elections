import React from 'react'
import styled from 'styled-components';
import PhoneIcon from '@material-ui/icons/Phone';

const Wrapper = styled.div`
margin:150px 0;
display: flex;
justify-content: center;
align-items: center;
`;

const WrapperContent = styled.div`
  width:500px;
  height:300px;
  background-color:#fff;
  border-radius: 10px;
  padding:30px 0;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`;

const Title = styled.div`
text-align:center;

h1{
  color:#595959;
  margin:0;
}
`;

const Content = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

const ContentText = styled.div`
p{
  font-size:2rem;
}
`;

const ContentImage = styled.div`
display:flex;
justify-content:center;
align-items:center;
  a{
    font-size:2rem;
    color:red;
    text-decoration:none;
  }
  svg{
    margin-right:10px;
  }
`;

export default function Feedback() {
  return (
   <Wrapper>
      <WrapperContent>
      <Title>
        <h1>Feedback</h1>
      </Title>
      <Content>
        <ContentText>
          <p>Asking about app or voting:</p>
        </ContentText>
        <ContentImage>
        <PhoneIcon fontSize="large" /><a href="tel:+380980707638">+380 980 707 638</a>
        </ContentImage>
      </Content>
    </WrapperContent>
   </Wrapper>
  )
}
