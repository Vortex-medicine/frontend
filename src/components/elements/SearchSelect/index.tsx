import React from "react";
import { Autocomplete, Popper } from "@mui/material";
import { AutocompleteProps } from "@mui/material/Autocomplete/Autocomplete";
import styles from "./styles.module.scss";
import classnames from "classnames";
import { matchSorter } from "match-sorter";

function SearchSelect<
  T,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false
>(
  props: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>
): JSX.Element {
  const classes = classnames(styles.searchSelect, props.className);
  return (
    <Autocomplete
      {...props}
      className={classes}
      filterOptions={(options, { inputValue }) => {
        if (inputValue === "") {
          return options;
        }
        return matchSorter(options, inputValue, { keys: ["label"] });
      }}
      PopperComponent={(props) => (
        <Popper
          {...props}
          className={classnames(styles.popper, props.className)}
        />
      )}
    />
  );
}

export default SearchSelect;
