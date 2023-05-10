import React, { FocusEvent, useRef, useState } from "react";
import { Autocomplete, Popper } from "@mui/material";
import { AutocompleteProps } from "@mui/material/Autocomplete/Autocomplete";
import styles from "./styles.module.scss";
import classnames from "classnames";
import { matchSorter } from "match-sorter";
import { v1 as uuid } from "uuid";
import useMobileDetect from "@/hooks/use-mobile-detect";
import SearchSelectMenuList from "@/components/elements/SearchSelectMenuList";

interface SearchSelectProps<
  T,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false
> extends AutocompleteProps<T, Multiple, DisableClearable, FreeSolo> {
  label?: string;
  required?: boolean;
  id?: string;
}

function SearchSelect<
  T extends { label: string },
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false
>(
  props: SearchSelectProps<T, Multiple, DisableClearable, FreeSolo>
): JSX.Element {
  const [isMobile, setIsMobile] = useState(false);
  const [focused, setFocused] = useState(false);
  const { label, required, id = uuid(), onFocus, onBlur, loading } = props;
  const [popperOpen, setPopperOpen] = useState(false);
  const popperRef = useRef<HTMLDivElement>(null);

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
    <div className={styles.selectWrapper}>
      {label && (
        <label className={labelClasses} htmlFor={id}>
          {label}
          {required && <span className={styles.starRequired}> *</span>}
        </label>
      )}
      <Autocomplete
        {...{ ...props, id }}
        className={classes}
        onOpen={() => {
          setPopperOpen(true);
        }}
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
              [styles.popperLoading]: loading,
              [styles.popperOpen]: popperOpen,
            })}
            ref={popperRef}
          />
        )}
        renderOption={(props, option, state) =>
          [props, option, state.index] as React.ReactNode
        }
        onFocus={handleInputOnFocus}
        onBlur={handleInputOnBlur}
        ListboxComponent={SearchSelectMenuList}
        getOptionLabel={(option) => (option as T).label}
      />
    </div>
  );
}

export default SearchSelect;
