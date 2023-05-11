import React, {useState} from 'react';
// import SomeComponent from "./someComponent";
import Users from "./Users";
import { UserProvider} from "./context";

function App() {
    return (
        <div>
           {/*<SomeComponent some={"Some message"}/>*/}
           <UserProvider>
            <Users/>
           </UserProvider>
        </div>
    );
}

export default App;
