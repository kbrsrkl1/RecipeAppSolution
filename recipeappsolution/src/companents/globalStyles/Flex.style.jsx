import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: ${({ justify = "center" }) => justify};
  align-items: ${({ align = "center" }) => align};
  flex-wrap: ${({ wrap = "nowrap" }) => wrap};
  flex-direction: ${({ direction = "row" }) => direction};
  
`;

export default Flex;
