import React from 'react';
import style from './Users.module.css';
import axios from "axios";
import user_photo from "./149071.png";



class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {
        return (
            <div>

                {this.props.users.map(u => <div key={(u.id)}>

                    <div><img src={u.photos.small != null ? u.photos.large : user_photo} className={style.Avatar}
                              alt=""/>
                    </div>
                    <div>
                        {u.follow ? <button onClick={() => {
                            this.props.follow(u.id)
                        }}>Добавить</button> : <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}>Исключить</button>}
                    </div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    {/*<div>{u.location.city}</div>*/}
                    {/*<div>{u.location.country}</div>*/}

                </div>)}
            </div>)
    }
}



export default Users;