import { Badge } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { links } from "../../config/links";
import { theme } from "../../theme";
import { ButtonRegular } from "../buttons/ButtonRegular";
import { TextSmall } from "../texts/TextSmall";

export const Header = () => {
  return (
    <Root>
      <NavLink to="/foo" activeClassName="active">
        <ButtonRegular color="secondary">Team Member Management</ButtonRegular>
      </NavLink>
      <NavLink to="/foo" activeClassName="active">
        <ButtonRegular color="secondary">User Management</ButtonRegular>
      </NavLink>
      <NavLink to={links.filesRequest.index()} activeClassName="active">
        <ButtonRegular color="secondary">Files Request</ButtonRegular>
      </NavLink>
      <UerInfo>
        <CustomBadge
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <AccountCircle color="primary" />
        </CustomBadge>
        <TextSmall>Hi Adam!</TextSmall>
      </UerInfo>
    </Root>
  );
};

const UerInfo = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  cursor: pointer;
`;
const CustomBadge = styled(Badge)`
  .MuiBadge-dot {
    background-color: ${theme.color.green2};
  }
`;

const Root = styled.div`
  display: flex;
  gap: ${theme.spacing.l};
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;

  .MuiSvgIcon-root {
    width: 2em;
    height: 2em;
  }
`;
