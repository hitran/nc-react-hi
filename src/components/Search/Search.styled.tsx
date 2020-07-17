import styled from 'styled-components'

export const StyledSearchWrapper = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => (props.isSearchShown ? 0 : '-100%')};
  width: 100%;
  height: 100vh;
  transition: 0.2s ease-in-out;
`
