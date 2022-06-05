import React from "react";
import style from './Users.module.css';
import  axios from "axios";
import user_photo from "./149071.png";

let Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            /*props.setUsers([
                {
                    id: 1,
                    avaURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp2ScQC703NKYiVWBYTxBGAWI8yhSQGIXjfw&usqp=CAU',
                    follow: true,
                    fullName: 'Василий',
                    status: 'Свободен',
                    location: {city: 'Москва', country: 'Россия'}
                }, {
                    id: 2,
                    avaURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1T7ixWXy3oy4KPtSJoBxbYqrSSABjccrz-Q&usqp=CAU',
                    follow: true,
                    fullName: 'Дмитрий',
                    status: 'Деловая встреча',
                    location: {city: 'Киев', country: 'Украина'}
                }, {
                    id: 3,
                    avaURL: 'https://www.asi.org.ru/wp-content/uploads/2021/02/asi-antimonik_zamyslov-042-400x267.jpg',
                    follow: true,
                    fullName: 'Юля',
                    status: 'Живу и не парюсь',
                    location: {city: 'Бостон', country: 'Америка'}
                }, {
                    id: 4,
                    avaURL: 'https://icdn.lenta.ru/images/2021/04/23/16/20210423164432633/square_320_d90ae1d483a7c5d9cd72a7530d9a2270.jpg',
                    follow: false,
                    fullName: 'Шарип',
                    status: 'Со своими заморочками',
                    location: {city: 'Батуми', country: 'Грузия'}
                }
                ])*/

            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items)}
                );

        }
    }
    return (
        <div>
            <button onClick={getUsers}>Отразить пользователей</button>
            {props.users.map(u => <div key={(u.id)}>

                    <div><img src={u.photos.small != null ? u.photos.large : user_photo} className={style.Avatar} alt=""/></div>
                    <div>
                        {u.follow
                            ? <button onClick={() => {
                                props.follow(u.id)
                            }}>Добавить</button>
                            : <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Исключить</button>
                        }
                    </div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    {/*<div>{u.location.city}</div>*/}
                    {/*<div>{u.location.country}</div>*/}

                </div>
            )}
        </div>
    )
}

export default Users;