import * as React from "react";
import { MutableRefObject, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import countries from "@/constants/countries";
import { matchSorter } from "match-sorter";
import styles from "./styles.module.scss";
import classnames from "classnames";
import { Fade, Popper } from "@mui/material";
import useMobileDetect from "@/hooks/use-mobile-detect";
import { SEARCH_SELECT_POPPER_MAX_HEIGHT } from "@/constants/common";

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

export default function CountrySelect() {
  const [isMobile, setIsMobile] = useState(false);
  const [noScrolling, setNoScrolling] = useState(false);
  const [, setAmountOfListChildren] = useState(countries.length);
  const popperRef = useRef<HTMLDivElement>(null);

  useMobileDetect(setIsMobile);

  function handleListChildrenChange() {
    console.log("popperRef", popperRef);
    if (popperRef.current) {
      const listElem = popperRef.current.querySelector(
        ".MuiAutocomplete-listbox"
      );
      console.log("listElem", listElem);
      if (listElem) {
        let totalHeight = 0;
        for (let i = 0; i < listElem.children.length; i++) {
          totalHeight += listElem.children[i].clientHeight;
        }
        console.log("children length", listElem.children.length);
        console.log("totalHeight", totalHeight);
        if (totalHeight <= SEARCH_SELECT_POPPER_MAX_HEIGHT) {
          console.log("setNoScrolling(true)");
          setNoScrolling(true);
        } else {
          setNoScrolling(false);
        }
      }
    }
  }

  useWaitForRef(popperRef, handleListChildrenChange);

  return (
    <Autocomplete
      className={styles.countrySelect}
      options={countries}
      autoHighlight
      defaultValue={countries.find((country) => country.label === "Poland")}
      disableClearable
      getOptionLabel={(option) => option.label}
      filterOptions={(options, { inputValue }) => {
        if (inputValue === "") {
          return options;
        }

        const result = matchSorter(options, inputValue, { keys: ["label"] });
        setAmountOfListChildren(result.length);
        return result;
      }}
      renderOption={(props, option) => (
        <li
          {...props}
          className={classnames(props.className, styles.countryOption)}
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
          transition
          className={classnames(styles.popper, props.className, {
            [styles.popperMobile]: isMobile,
            [styles.popperNoScrolling]: noScrolling,
          })}
        >
          {({ TransitionProps }) => {
            if (React.isValidElement(props.children)) {
              return (
                <Fade {...TransitionProps} timeout={300}>
                  {props.children}
                </Fade>
              );
            }
            return null;
          }}
        </Popper>
      )}
    />
  );
}
