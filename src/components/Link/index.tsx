import NextLink from "next/link";
import type { LinkProps } from "next/link";
import type { FunctionComponent as FC } from "react";
//
import { styled } from "@/css";

const StyledLink = styled("a", {
  color: "$fg",
  textDecoration: "none",
  borderBottomWidth: "2px",
  borderBottomStyle: "solid",
  borderBottomColor: "$accent"
});

export const Link: FC<LinkProps> = ({ children, ...props }) => (
  <NextLink passHref {...props}>
    <StyledLink>{children}</StyledLink>
  </NextLink>
);
