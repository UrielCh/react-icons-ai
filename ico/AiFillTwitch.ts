import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FillTwitch from Ant Design Icons
 */
export function AiFillTwitch(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 1042 1042",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"defs",attr:{},child:[{tag:"filter",attr:{id:"a","width":"102.3%","height":"102.3%",x:"-1.2%",y:"-1.2%","filterUnits":"objectBoundingBox"},child:[{tag:"feOffset",attr:{"dy":"2","in":"SourceAlpha","result":"shadowOffsetOuter1"}},{tag:"feGaussianBlur",attr:{"in":"shadowOffsetOuter1","result":"shadowBlurOuter1","stdDeviation":"2"},child:[]},{tag:"feColorMatrix",attr:{"in":"shadowBlurOuter1","result":"shadowMatrixOuter1","values":"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"},child:[]},{tag:"feMerge",attr:{},child:[{tag:"feMergeNode",attr:{"in":"shadowMatrixOuter1"},child:[]},{tag:"feMergeNode",attr:{"in":"SourceGraphic"},child:[]}]}]}]},{tag:"g",attr:{"filter":"url(#a)","transform":"translate(9 9)"},child:[{tag:"path",attr:{d:"M57.143 0 0 142.857v542.857h171.429V800h114.285L400 685.714h142.857l200-200V0zm314.286 428.571h-85.715V198.214h85.715zm200 0h-85.715V198.214h85.715z","transform":"translate(128 112)"},child:[]}]}]})(props);
}
export default AiFillTwitch;
