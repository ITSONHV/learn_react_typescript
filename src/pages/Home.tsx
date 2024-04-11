import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import userData from "../datas/users.json";
import { useSelector } from "react-redux";
import { AuthState } from "../reducers/authReducer";
import { RootState } from "../reducers";

interface UserData {
    id: number,
    username: string,
    password: string,
    name: string
}
function HomePage() {
    const[data,setData] = useState<UserData[]>([]);
    const isLogIn = useSelector((state: RootState) => state.auth.isLoggedIn);
    console.log(isLogIn);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                setData(userData);
            } catch (error) {
                console.log('Error fetching data: ',error);
            }
        };
        fetchData();
    },[]);
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn == "false") {
        //navigate("/login");
        return <Navigate to="/login"></Navigate>
    }
   
    return (
        <div style={{ padding: '20px' }}>
            <h1>Data from JSON File</h1>
            <ul>
                {
                    data.map((item, index) => (
                        <li key={index}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    );
}
export default HomePage;