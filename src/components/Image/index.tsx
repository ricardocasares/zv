import NextImage from "next/image";
import type { ImageProps } from "next/image";
import type { FunctionComponent as FC } from "react";
//
import { css } from "@/css";

const rounded = css({ borderRadius: "$2" });

export const Image: FC<ImageProps> = (props) => <NextImage className={rounded()} {...props} />;
