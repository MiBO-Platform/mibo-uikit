import { CardProps as ThemeUICardProps } from "theme-ui";
import { colorProps } from "../../theme/MIBO/types";

export interface CardProps extends ThemeUICardProps {
  background?: colorProps;
}
