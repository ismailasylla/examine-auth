import styled from "styled-components";
import { colors } from "../../constants/colors";

interface NavBtnLinkProps {
  fill?: string;
  disabled?: boolean;
}

export const Container = styled.button<NavBtnLinkProps>`
  /* Buttons */
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 4px;

  width: 499px;
  height: 50px;

  /* Primary */
  background: ${(props) => (props.fill ? `${colors.primary}` : "#FFF")};
  color: ${(props) => (props.fill ? "#FFF" : `${colors.primary}`)};
  border-radius: 4.8px;

  /* Inside auto layout */
  flex: none;
  order: 3;
  flex-grow: 0;
`;
