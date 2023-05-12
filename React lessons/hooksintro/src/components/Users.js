import React, {Component} from 'react';
// import User from "./User";
import UserConsumer from "./context";
import User from './User';

export default class Users extends Component {

    render() {
        return (
            <UserConsumer>
                {
                    value => {
                        const {users} = value
                        return (
                            <div>
                                {
                                    users.map((user) => (
                                        // <>
                                        //     <p>{user.name}</p>
                                        //     <p>{user.salary}</p>
                                        //     <p>{user.department}</p>
                                        // </>
                                       
                                        <User key={user.id}
                                        user={user}
                                        />
                                      )
                                    )
                                }
                            </div>
                        )
                    }
                }
            </UserConsumer>
        );
    }
}