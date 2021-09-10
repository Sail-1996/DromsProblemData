
import axios from "axios"

const url="http://localhost:8000/employee";

export const getUsers=async(_id)=>{
    _id=_id||'';
    console.log(axios.get(`${url}/${_id}`))
    return await axios.get(`${url}/${_id}`);
    
}

export const addUser=async(user)=>{
    return await axios.post(url,user);
}

export const deleteUser = async (_id) => {
    return await axios.delete(`${url}/${_id}`);
}

export const editUser=async(_id,user)=>{
    return await axios.patch(`${url}/${_id}`,user)
}

