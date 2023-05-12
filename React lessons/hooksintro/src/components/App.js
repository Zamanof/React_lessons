import React, {useState} from 'react';
// import SomeComponent from "./someComponent";
import Users from "./Users";
import { UserProvider} from "./context";
import Other from "./Other";

function App() {
    return (
        <div>
           {/*<SomeComponent some={"Some message"}/>*/}
           <UserProvider>
                {/*<Users/>*/}
               <Other/>
           </UserProvider>
        </div>
    );
}

export default App;
