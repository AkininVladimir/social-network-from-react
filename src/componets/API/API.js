import axios from "axios";

//*Создаем вспомогательный метод axios для сокращения кода помещаем туда дублирующиеся переменные иметоды */
const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    // headers: {'KYE-API': 'a80070e0-15b2-43f2-8bce-2fd3fce0aa6c'} /*пока не работает, я не оплатил доступ на сервер*/

})
//упрощаем функциональную логику getUsers до объекта usersAPI с методом getUsers

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                    return (
                        response.data)
                })

        )}
};



