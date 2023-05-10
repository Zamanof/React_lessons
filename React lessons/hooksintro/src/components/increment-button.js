import React, {useState} from 'react';

function IncrementButton({setId, id, children}) {
    return (
        <div>
            <button onClick={()=>setId(id +1)}>{children}</button>
        </div>
    );
}

export default IncrementButton;