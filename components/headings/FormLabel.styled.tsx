import styled from "styled-components";
import { colors } from "../../constants/colors";

export const Container = styled.div`
  width: 100%;
  padding: 20px 0px;
`;

export const Text = styled.span`
  /* Title -> */
  font-size: 50px;
  display: flex;
  justify-content: center;
  font-family: "Lora";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 55px;
  /* Dark */
  color: ${colors.secondaryText};
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;
