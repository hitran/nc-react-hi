import styled from 'styled-components'

export const StyledMenuButton = styled.div`
  position: ${(props) => (props.isClosed ? 'absolute' : 'static')};
  left: ${(props) => (props.isClosed ? '80%' : '30px')};
  top: 22px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`
