import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * OutlineInfo icon from Ant Design Icons
 * @module
 */
export function AiOutlineInfo(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M448 224a64 64 0 1 0 128 0 64 64 0 1 0-128 0zm96 168h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V400c0-4.4-3.6-8-8-8z"}}]})(props);
}
export default AiOutlineInfo;
