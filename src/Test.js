import React from "react";
import matrix from "./matrix";
function Test(){
    const temp =structuredClone(matrix);
    temp[1][1]=2;
    console.log(temp);
    console.log(matrix);
}
export default Test