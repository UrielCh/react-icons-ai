import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FillLayout icon from Ant Design Icons
 * @module
 */
export function AiFillLayout(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M384 912h496c17.7 0 32-14.3 32-32V340H384v572zm496-800H384v164h528V144c0-17.7-14.3-32-32-32zm-768 32v736c0 17.7 14.3 32 32 32h176V112H144c-17.7 0-32 14.3-32 32z"}}]})(props);
}
export default AiFillLayout;
