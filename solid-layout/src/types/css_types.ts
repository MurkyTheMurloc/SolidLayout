type SizeUnit = "px" | "rem" | "%" | "em" | "vh" | "vw" | "vmin" | "vmax";
export type Size = `${number}${SizeUnit}`;

type GridUnit = "fr" | SizeUnit;
type GridSize = `${number}${GridUnit}`;

export type Height = Size 
export type FlexBasis = "auto" | "content" | "fit-content" | "max-content" | "min-content" | "inherit" | "initial" | "unset" | Size;
export type GridAutoFlow = "row" | "column" | "row dense" | "column dense";
export type GridAutoColumns = Size;
export type Overflow = "visible" | "hidden" | "clip" | "scroll" | "auto";
export type ScrollSnapType = "none" | "x" | "y" | "block" | "inline" | "both" | "x mandatory" | "y mandatory" | "block mandatory" | "inline mandatory" | "both mandatory" | "x proximity" | "y proximity" | "block proximity" | "inline proximity" | "both proximity";
export type ScrollBehavior = "auto" | "smooth";
export type ScrollPadding = Size;
export type Gap = Size;
export type Padding = Size;
export type Margin = Size;
export type Columns = GridSize | `${number}`;
export type MarginInline = Size | "auto";
export type ColumnLength = GridSize;