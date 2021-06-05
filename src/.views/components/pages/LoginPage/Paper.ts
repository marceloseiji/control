import styled from "styled-components/macro";
import { Paper as sPaper } from "@material-ui/core";
import theme from "../../../styles/theme";

const Paper = styled(sPaper)`
  padding: 15px 20px;
  background-color: ${theme.palette.grey[900]};
`;

export default Paper;
