import React, {Component} from 'react';
import User from "./user";
import UserConsumer from "./context";

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
                                        <>
                                            <p>{user.id}</p>
                                            <p>{user.name}</p>
                                            <p>{user.salary}</p>
                                            <p>{user.department}</p>
                                        </>)
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
