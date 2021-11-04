import type { FunctionComponent as FC } from "react";
//
import { Stack } from "@/components/Stack";

export const Wrap: FC<Stack> = ({ children, ...props }) => (
  <Stack
    css={{ maxWidth: "1024px", margin: "0 auto" }}
    pad={{ "@initial": 2, "@sm": 3 }}
    gap="2"
    {...props}
  >
    {children}
  </Stack>
);
