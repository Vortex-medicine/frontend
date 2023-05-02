import React, { FocusEvent, useState } from "react";
import { Autocomplete, Popper } from "@mui/material";
import { AutocompleteProps } from "@mui/material/Autocomplete/Autocomplete";
import styles from "./styles.module.scss";
import classnames from "classnames";
import { matchSorter } from "match-sorter";
import { v1 as uuid } from "uuid";
import useMobileDetect from "@/hooks/use-mobile-detect";

interface SearchSelectProps<
  T,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false
> extends AutocompleteProps<T, Multiple, DisableClearable, FreeSolo> {
  label?: string;
  required?: boolean;
}

function SearchSelect<
  T,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false
>(
  props: SearchSelectProps<T, Multiple, DisableClearable, FreeSolo>
): JSX.Element {
  const [isMobile, setIsMobile] = useState(false);
  const [focused, setFocused] = useState(false);
  const { label, required, id = uuid(), onFocus, onBlur } = props;

  const classes = classnames(styles.searchSelect, props.className);
  const labelClasses = classnames(styles.label, {
    [styles.labelInputFocused]: focused,
  });

  function handleInputOnFocus(event: FocusEvent<HTMLInputElement>) {
    setFocused(true);
    onFocus?.(event);
  }

  function handleInputOnBlur(event: FocusEvent<HTMLInputElement>) {
    setFocused(false);
    onBlur?.(event);
  }

  useMobileDetect(setIsMobile);

  return (
    <div>
      {label && (
        <label className={labelClasses} htmlFor={id}>
          {label}
          {required && <span className={styles.starRequired}> *</span>}
        </label>
      )}
      <Autocomplete
        {...{ ...props, id }}
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
            className={classnames(styles.popper, props.className, {
              [styles.popperMobile]: isMobile,
            })}
          />
        )}
        onFocus={handleInputOnFocus}
        onBlur={handleInputOnBlur}
      />
    </div>
  );
}

export default SearchSelect;
