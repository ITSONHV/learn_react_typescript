import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
function ContactPage() {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn == "false") {
        //navigate("/login");
        return <Navigate to="/login"></Navigate>
    }
    return (
        <div>
            <div style={{ padding: '20px' }}>
                <h2>Nội dung Contact</h2>
            </div>
        </div>
    );
}
export default ContactPage;