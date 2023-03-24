import { userApis } from "../axiosApis";

export const getAllUsers = async () => {
    try {
        return await userApis.get("/users");
    } catch (error) {
        console.log("error", error);
    }
}

export const getSingleUser = async (id) => {
    try {
        //console.log("id", id);
        return await userApis.get(`/users/${id}`);
    } catch (error) {
        console.log("error", error);
    }
}