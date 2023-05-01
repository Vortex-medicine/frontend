import { Props as OriginalProps, GroupBase } from "react-select";

declare module "react-select" {
  export interface CustomSelectProps<
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>
  > extends OriginalProps<Option, IsMulti, Group> {
    wrapperClassName?: string;
    label?: string;
  }
}
