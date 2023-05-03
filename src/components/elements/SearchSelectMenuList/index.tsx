import React, {
  createContext,
  CSSProperties,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { MenuItem, MenuListProps } from "@mui/material";
import {
  ListChildComponentProps,
  VariableSizeList as List,
} from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import classnames from "classnames";
import styles from "./styles.module.scss";
import { SEARCH_SELECT_POPPER_MAX_HEIGHT } from "@/constants/common";

const OuterElementContext = createContext({});

const OuterElementType = forwardRef<HTMLDivElement>(function OuterElementType(
  props,
  ref
) {
  const outerProps = React.useContext(OuterElementContext);
  return <div ref={ref} {...props} {...outerProps} />;
});

interface SearchSelectMenuListProps extends MenuListProps {
  selectedValue?: string;
  setNoScrolling?: (value: boolean) => void;
}

const SearchSelectMenuList = forwardRef<
  HTMLDivElement,
  SearchSelectMenuListProps
>(function SearchSelectMenuList(props, ref): JSX.Element {
  const { children, selectedValue, setNoScrolling, ...other } = props;
  const listRef = useRef<List | null>(null);
  const rowHeights = useRef<Record<number, number>>({});
  const [popperHeight, setPopperHeight] = useState(1);
  const divRef = useRef<HTMLDivElement | null>(null);

  const itemData: React.ReactElement[] = [];
  (children as React.ReactElement[]).forEach(
    (item: React.ReactElement & { children?: React.ReactElement[] }) => {
      itemData.push(item);
      itemData.push(...(item.children || []));
    }
  );

  function getRowHeight(index: number) {
    return rowHeights.current[index] || 32;
  }

  function updatePopperHeight() {
    if (divRef.current) {
      const virtualListElem = divRef.current.querySelector(
        ".MuiAutocomplete-listbox > div"
      ) as HTMLDivElement;
      const totalHeight = parseInt(getComputedStyle(virtualListElem).height);
      console.log("totalHeight", totalHeight);
      setPopperHeight(Math.min(totalHeight, SEARCH_SELECT_POPPER_MAX_HEIGHT));
      setNoScrolling?.(totalHeight <= SEARCH_SELECT_POPPER_MAX_HEIGHT);
    }
  }

  function Row({ index, style, data }: ListChildComponentProps) {
    const rowRef = useRef<HTMLDivElement | null>(null);
    const dataSet = data[index];

    useEffect(() => {
      if (rowRef.current) {
        const newSize = rowRef.current.clientHeight;
        listRef.current?.resetAfterIndex(0);
        rowHeights.current = { ...rowHeights.current, [index]: newSize };
        console.log("rowHeights", rowHeights.current);
        updatePopperHeight();
      }
    }, [rowRef, index]);

    const inlineStyle: CSSProperties = {
      ...style,
    };

    const itemClassName = classnames(styles.menuItem, dataSet[0].className, {
      "Mui-focused": index === 0,
    });

    return (
      <MenuItem
        component="li"
        noWrap
        {...dataSet[0]}
        className={itemClassName}
        selected={dataSet[1].label === selectedValue}
        style={{
          ...dataSet[0].style,
          ...inlineStyle,
        }}
      >
        <div className={styles.menuItemInnerWrapper} ref={rowRef}>
          {dataSet[1].label}
        </div>
      </MenuItem>
    );
  }

  return (
    <div
      ref={ref}
      className={styles.listWrapper}
      style={{ height: popperHeight }}
    >
      {/*<div ref={divRef}>*/}
      <OuterElementContext.Provider value={other}>
        <AutoSizer>
          {({ height, width }) => (
            <div ref={divRef}>
              <List
                itemData={itemData}
                ref={listRef}
                height={height ?? 0}
                itemCount={itemData.length}
                itemSize={getRowHeight}
                width={width ?? 0}
                outerElementType={OuterElementType}
              >
                {Row}
              </List>
            </div>
          )}
        </AutoSizer>
      </OuterElementContext.Provider>
      {/*</div>*/}
    </div>
  );
});

export default SearchSelectMenuList;
