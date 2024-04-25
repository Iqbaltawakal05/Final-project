import { LogoutData } from "@/API/AuthAPI";
import React, { useEffect, useState } from "react";

export default function Dashboardnavbar() {
    const [activePage, setActivePage] = useState("");

     useEffect(() => {
        setActivePage(window.location.pathname);
    }, []);

    const handleLogout = async () => {
        try {
            const res = await LogoutData();
        } catch (error) {
        }
    };

    return (
        <div className="dashnav">
            <a className="dashnav-brand navbar-brand disabled" aria-disabled="true">Aven<span>ture</span></a>
            <a className={`dash-link nav-link ${activePage === "/dashboard/user" ? "active" : ""}`} href="/dashboard/user"><i class="bi bi-people-fill"></i> User</a>
            <a className={`dash-link nav-link ${activePage === "/dashboard/banner" ? "active" : ""}`} href="/dashboard/banner"><i class="bi bi-card-heading"></i> Banner</a>
            <a className={`dash-link nav-link ${activePage === "/dashboard/promo" ? "active" : ""}`} href="/dashboard/promo"><i class="bi bi-percent"></i> Promo</a>
            <a className={`dash-link nav-link ${activePage === "/dashboard/category" ? "active" : ""}`} href="/dashboard/category"><i class="bi bi-bookmarks-fill"></i> Category</a>
            <a className={`dash-link nav-link ${activePage === "/dashboard/vacations" ? "active" : ""}`} href="/dashboard/vacations"><i class="bi bi-suitcase-fill"></i> Vacations</a>
                <button className="nav-link" onClick={handleLogout}>Logout</button>
        </div>
    );
}
