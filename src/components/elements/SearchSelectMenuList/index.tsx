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
import classnames from "classnames";
import styles from "./styles.module.scss";
import { SEARCH_SELECT_POPPER_MAX_HEIGHT } from "@/constants/common";
import colors from "@/styles/colors.module.scss";

const OuterElementContext = createContext({});

const OuterElementType = forwardRef<HTMLDivElement>(function OuterElementType(
  props,
  ref
) {
  const outerProps = React.useContext(OuterElementContext);
  return <div ref={ref} {...props} {...outerProps} />;
});

const SearchSelectMenuList = forwardRef<HTMLDivElement, MenuListProps>(
  function SearchSelectMenuList(props, ref): JSX.Element {
    const { children, ...other } = props;
    const listRef = useRef<List | null>(null);
    const rowHeights = useRef<Record<number, number>>({});
    const [popperHeight, setPopperHeight] = useState(1);
    const virtualListWrapperRef = useRef<HTMLDivElement | null>(null);

    const itemData: React.ReactElement[] = [];
    (children as React.ReactElement[]).forEach(
      (item: React.ReactElement & { children?: React.ReactElement[] }) => {
        itemData.push(item);
        itemData.push(...(item.children || []));
      }
    );

    function overrideListboxScrollTop() {
      const listbox = virtualListWrapperRef.current?.querySelector(
        ".MuiAutocomplete-listbox"
      ) as HTMLDivElement;
      console.log("listbox", listbox);
      listbox.scrollTop = 0;
    }

    useEffect(() => {
      if (virtualListWrapperRef.current) {
        overrideListboxScrollTop();
      }
    }, [virtualListWrapperRef]);

    function getRowHeight(index: number) {
      return rowHeights.current[index] || 32;
    }

    function updatePopperBorder(virtualListElem: HTMLDivElement) {
      const paperRootElem = virtualListElem.parentNode?.parentNode?.parentNode
        ?.parentNode as HTMLDivElement;
      paperRootElem.style.borderRadius = "20px";
      paperRootElem.style.borderRight = `1px solid ${colors.grey}`;
    }

    function updatePopper() {
      if (virtualListWrapperRef.current) {
        const virtualListElem = virtualListWrapperRef.current.querySelector(
          ".MuiAutocomplete-listbox > div"
        ) as HTMLDivElement;
        const totalHeight = parseInt(getComputedStyle(virtualListElem).height);
        setPopperHeight(Math.min(totalHeight, SEARCH_SELECT_POPPER_MAX_HEIGHT));

        if (totalHeight <= SEARCH_SELECT_POPPER_MAX_HEIGHT) {
          updatePopperBorder(virtualListElem);
        }
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
          updatePopper();
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
      <div ref={ref} className={styles.listWrapper}>
        <OuterElementContext.Provider value={other}>
          <div ref={virtualListWrapperRef}>
            <List
              itemData={itemData}
              ref={listRef}
              height={popperHeight}
              itemCount={itemData.length}
              itemSize={getRowHeight}
              width="100%"
              outerElementType={OuterElementType}
            >
              {Row}
            </List>
          </div>
        </OuterElementContext.Provider>
      </div>
    );
  }
);

export default SearchSelectMenuList;
