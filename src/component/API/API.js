import axios from "axios";


const instance = axios.create({
    baseURL:`https://649b68d9bf7c145d023a48c2.mockapi.io/api/advertsCars`
})

export const cars = async (page, limit) => {
    try {
        const response = await instance.get(`?_page=${page}&_limit=${limit}`);
        const data = response.data;
        return data;
    } catch (error) {
        console.error('Помилка при завантаженні даних автомобілів:', error);
        throw error; 
    }
}