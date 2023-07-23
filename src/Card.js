import React from "react";
function Card(props){
    var n;
    n=props.num;
    if(n===1){
        return(
            <div className="one">
            </div>
        );
    }
    else if(n===2){
        return(
            <div className="two">
            </div>
        );
    }
    else if(n===3){
        return(
            <div className="one" >
                <span>start</span>
            </div>
        );
    }
    else if(n===4){
        return(
            <div className="one">
                <span>end</span>
            </div>
        );
    }
    else{
        return(
            <div className="zero">
            </div>
        );
    }
}
export default Card