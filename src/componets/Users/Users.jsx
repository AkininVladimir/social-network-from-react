import React from 'react';
import style from './Users.module.css';
import axios from "axios";
import user_photo from "./149071.png";


class Users extends React.Component {
    onSetClick = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    };

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    render() {

        let pagesCount = Math.round(this.props.totalUsersCount / this.props.pageSize); /*определяем количество страниц*/
        let pagesArray = []; /* массив из элементов */
        for (let i = 1; i <= pagesCount; i++) {
            pagesArray.push(i)
        }
        ; /*и циклом перебираем заполняя массив pagesArray*/


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
                </div>)
                }
                <div className={style.itemsContainer}>
                    {pagesArray.map(page => {
                            return (
                                <div className={this.props.currentPage === page ? style.countPage : ''}
                                     onClick={() => {
                                         this.onSetClick(page);

                                     }}>{page}</div>)
                        }
                    )}
                </div>

            </div>)
    }
}


export default Users;