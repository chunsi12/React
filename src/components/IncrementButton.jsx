import {useState} from "react";

function IncrementButton({count,onclick}){

    return(
        <div>
           Current Count : {count}<br/>
            <button onClick={()=>onclick(count + 1)}>
                Increment
            </button>

        </div>
    );
}
export default IncrementButton;