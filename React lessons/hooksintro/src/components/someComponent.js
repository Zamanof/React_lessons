import React, {useState} from 'react';
import AnotherComponent from "./anotherComponent";
import IncrementButton from "./increment-button";
import DecrementButton from "./decrement-button";

function SomeComponent({some}) {
    const [id, setId] = useState(42)
    return (
        <div>
            <IncrementButton setId={setId} id={id}>
                {id}
            </IncrementButton>
            <p>{id}</p>
            <DecrementButton setId={setId} id={id}/>
        </div>
    );
}

export default SomeComponent;