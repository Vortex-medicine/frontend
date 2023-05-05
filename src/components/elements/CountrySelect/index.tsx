import * as React from "react";
import { MutableRefObject, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import countries from "@/constants/countries";
import { matchSorter } from "match-sorter";
import styles from "./styles.module.scss";
import classnames from "classnames";
import { Popper } from "@mui/material";
import useMobileDetect from "@/hooks/use-mobile-detect";
import { SEARCH_SELECT_POPPER_MAX_HEIGHT } from "@/constants/common";
import { v1 as uuid } from "uuid";
import { ClassName } from "@/types/common";

function useWaitForRef<T extends HTMLElement>(
  ref: MutableRefObject<T | null>,
  callback: () => void
) {
  React.useEffect(() => {
    if (ref.current) {
      callback();
    } else {
      const observer = new MutationObserver(() => {
        if (ref.current) {
          callback();
          observer.disconnect();
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });
      return () => observer.disconnect();
    }
  }, [ref, callback]);
}

interface CountrySelectProps {
  label?: string;
  required?: boolean;
  id?: string;
  className?: ClassName;
}

export default function CountrySelect(props: CountrySelectProps): JSX.Element {
  const [isMobile, setIsMobile] = useState(false);
  const [noScrolling, setNoScrolling] = useState(false);
  const [, setAmountOfListChildren] = useState(countries.length);
  const popperRef = useRef<HTMLDivElement>(null);
  const { label, required, id = uuid(), className } = props;
  const [focused, setFocused] = useState(false);

  function handleInputOnFocus() {
    setFocused(true);
  }

  function handleInputOnBlur() {
    setFocused(false);
  }

  useMobileDetect(setIsMobile);

  function handleListChildrenChange() {
    if (popperRef.current) {
      const listElem = popperRef.current.querySelector(
        ".MuiAutocomplete-listbox"
      );
      if (listElem) {
        let totalHeight = 0;
        for (let i = 0; i < listElem.children.length; i++) {
          totalHeight += listElem.children[i].clientHeight;
        }
        if (totalHeight <= SEARCH_SELECT_POPPER_MAX_HEIGHT) {
          setNoScrolling(true);
        } else {
          setNoScrolling(false);
        }
      }
    }
  }

  useWaitForRef(popperRef, handleListChildrenChange);

  const labelClasses = classnames(styles.label, {
    [styles.labelInputFocused]: focused,
  });

  return (
    <div className={classnames(styles.selectWrapper, className)}>
      {label && (
        <label className={labelClasses} htmlFor={id}>
          {label}
          {required && <span className={styles.starRequired}> *</span>}
        </label>
      )}
      <Autocomplete
        id={id}
        className={styles.countrySelect}
        options={countries}
        autoHighlight
        defaultValue={countries.find((country) => country.label === "Poland")}
        disableClearable
        getOptionLabel={(option) => option.label}
        filterOptions={(options, { inputValue }) => {
          console.log(inputValue);
          if (inputValue === "") {
            return options;
          }

          const result = matchSorter(options, inputValue, { keys: ["label"] });
          setAmountOfListChildren(result.length);
          return result;
        }}
        renderOption={(props, option, state) => (
          <li
            {...props}
            className={classnames(props.className, styles.countryOption, {
              ["Mui-focused"]: state.index === 0,
            })}
          >
            <img
              className={styles.countryOptionFlag}
              loading="lazy"
              width="20"
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              alt=""
            />
            <p className={styles.countryOptionLabel}>{option.label}</p>
          </li>
        )}
        renderInput={(params) => <TextField {...params} />}
        PopperComponent={(props) => (
          <Popper
            {...props}
            ref={popperRef}
            className={classnames(styles.popper, props.className, {
              [styles.popperMobile]: isMobile,
              [styles.popperNoScrolling]: noScrolling,
            })}
          />
        )}
        onFocus={handleInputOnFocus}
        onBlur={handleInputOnBlur}
      />
    </div>
  );
}
