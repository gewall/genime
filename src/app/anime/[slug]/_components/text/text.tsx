import React from "react";
import type { TextProps } from "./text.types";

const Text: React.FC<TextProps> = ({ heading, text }) => {
  return (
    // <div className="flex flex-row">

    <tr className="align-top">
      <td className="font-medium">{heading}</td>
      <td className="px-2">:</td>
      <td>{text}</td>
    </tr>
  );
};
{
  /* <h5 className="font-medium">{heading} </h5>
    <div className="flex-1">:</div>
    <span className="font-normal ">{text}</span> */
}
// </div>

export default Text;
