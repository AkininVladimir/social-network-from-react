import React from 'react';
import style from './Users.module.css';
import user_photo from "./149071.png";
import {NavLink} from "react-router-dom";
import axios from "axios";

let Users = (props) => {
    let pagesCount = Math.round(props.totalUsersCount / props.pageSize); /*определяем количество страниц*/
    let pagesArray = []; /* массив из элементов */
    for (let i = 1; i <= pagesCount; i++) {
        pagesArray.push(i)
    }/*и циклом перебираем заполняя массив pagesArray*/

    return (<div>
        <div className={style.itemsContainer}>
            {pagesArray.map(page => {
                return (<div className={props.currentPage === page ? style.countPage : ''}
                             onClick={() => {
                                 props.onSetClick(page);
                             }}>{page}</div>)
            })}
        </div>

        {props.users.map(u => <div key={(u.id)}>

            <div>
                <NavLink to={'/profile/'}>
                    <img src={u.photos.small != null ? u.photos.large : user_photo} className={style.Avatar}
                         alt=""/>
                </NavLink>

            </div>
            <div>
                {u.follow ?
                    <button onClick={()=>(
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {},
                        {withCredentials: true,
                            headers: {"KYE-API": "30564202-2cef-41d4-a960-1be18a2519b6"}})
                        .then(response => {
                            if (response.data.resultCode === 0){
                                props.unfollow(u.id);
                            }
                        })

                    )}>Добавить</button>
                    :<button onClick={()=> (
                        axios.delete (`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                            {withCredentials: true, headers: {"KYE-API": "30564202-2cef-41d4-a960-1be18a2519b6"}})
                            .then(response => {
                                if (response.data.resultCode === 0) {
                                 props.unfollow(u.id);
                                }
                            })
                    )}>Исключить</button>
                }

                    </div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                {/*<div>{u.location.city}</div>*/}
                {/*<div>{u.location.country}</div>*/}
                    </div>)}
                    </div>)
                    }

                    export default Users;

                    /*!!!! Важно знать, что мы вызываем не  action Creator, а анонимную функцию follow и unfollow*/
                    /*В запросах get и delete вторым парамеентром передаем withCredentials*/
                    /*В запросах post вторым парамеентром передаем {}, а терим параметром пердаем withCredentials*/