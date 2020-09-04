import React from 'react';
import { UserDetail } from './UserDetail';
import { GET_USER } from '../gql/queries';
import { useLazyQuery } from '@apollo/client';

const UsersList = ({ users }) => {
    const [getUser, { called, loading, data }] = useLazyQuery(GET_USER);

    const getUserHandler = id => {
        getUser({ variables: { id }})
    }
    return (
        <>
            <h2>Users</h2>
            <div className="list-div">
                <ul>
                    {
                        users.map((user, i) => {
                            return(
                                <li onClick={()=>getUserHandler(user.id)} key={i}>{user.name}</li>
                            )
                        })
                    }
                </ul>
                {
                    data && <UserDetail loading={loading} open={true} user={data.user} />
                }
                
            </div>
        </>
    )
}

export default UsersList;