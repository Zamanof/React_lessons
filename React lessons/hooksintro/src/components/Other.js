import React, {createContext, useContext} from 'react';
import {UserContext} from "./context";
import User from "./User";

function Other() {

    const {users} = useContext(UserContext)
    return (

        <div>
            {
                users.map((user) => (
                    <User
                        key={user.id}
                        user={user}>

                    </User>
                ))
            }
        </div>
    );
}

export default Other;