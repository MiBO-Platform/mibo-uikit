import { colorProps } from "../../theme/MIBO/types";

export interface ProgressProps {
  width?: string | number;
  height?: string | number;
  to?: number;
  color?: colorProps;
  background?: colorProps;
  sx?: any;
}