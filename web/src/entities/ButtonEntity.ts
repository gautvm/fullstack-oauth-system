import { DetailedHTMLProps, AriaAttributes, ButtonHTMLAttributes } from "react";

export interface ButtonEntity
  extends DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    AriaAttributes {}
