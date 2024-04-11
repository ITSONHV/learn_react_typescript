import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
function AboutPage() {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn == "false") {
        //navigate("/login");
        return <Navigate to="/login"></Navigate>
    }
    return (
        <div>
            <div style={{ padding: '20px' }}>
                <h2>Nội dung About</h2>
            </div>
        </div>
    );
}
export default AboutPage;