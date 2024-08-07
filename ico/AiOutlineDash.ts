import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * OutlineDash icon from Ant Design Icons
 * @module
 */
export function AiOutlineDash(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M112 476h160v72H112zm320 0h160v72H432zm320 0h160v72H752z"}}]})(props);
}
export default AiOutlineDash;
