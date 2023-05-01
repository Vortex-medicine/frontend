import React, {
  createContext,
  CSSProperties,
  forwardRef,
  useEffect,
  useRef,
} from "react";
import { MenuItem, MenuListProps } from "@mui/material";
import { ListChildComponentProps } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { VariableSizeList as List } from "react-window";
import classnames from "classnames";

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
}

const SearchSelectMenuList = forwardRef<
  HTMLDivElement,
  SearchSelectMenuListProps
>(function SearchSelectMenuList(props, ref): JSX.Element {
  const { children, selectedValue, ...other } = props;
  const listRef = useRef<List | null>(null);
  const rowHeights = useRef<Record<number, number>>({});

  function getRowHeight(index: number) {
    return rowHeights.current[index] || 32;
  }

  function Row({ index, style, data }: ListChildComponentProps) {
    const rowRef = useRef<HTMLDivElement | null>(null);
    const dataSet = data[index];

    useEffect(() => {
      if (rowRef.current) {
        const newSize = rowRef.current.clientHeight;
        listRef.current?.resetAfterIndex(0);
        rowHeights.current = { ...rowHeights.current, [index]: newSize };
      }
    }, [rowRef, index]);

    const inlineStyle: CSSProperties = {
      ...style,
    };

    if (index === 0) {
      console.log("label - " + dataSet[1].label);
    }

    const itemClassName = classnames(dataSet[0].className, {
      "Mui-focused": index === 0,
    });

    console.log("itemClassName - " + itemClassName);

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
          padding: 0,
          margin: 0,
          whiteSpace: "normal",
        }}
      >
        <div
          style={{ padding: "10px 20px", width: "100%", minHeight: "48px" }}
          ref={rowRef}
        >
          {dataSet[1].label}
        </div>
      </MenuItem>
    );
  }

  const itemData: React.ReactElement[] = [];
  (children as React.ReactElement[]).forEach(
    (item: React.ReactElement & { children?: React.ReactElement[] }) => {
      itemData.push(item);
      itemData.push(...(item.children || []));
    }
  );

  return (
    <div ref={ref} style={{ height: "300px", width: "100%" }}>
      <OuterElementContext.Provider value={other}>
        <AutoSizer>
          {({ height, width }) => (
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
          )}
        </AutoSizer>
      </OuterElementContext.Provider>
    </div>
  );
});

export default SearchSelectMenuList;
