import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }

  a {
    margin-top: 8px;
    font-size: 12px;
    color: #c4c4c4;
    text-decoration: none;
    font-style: italic;
  }
`;
