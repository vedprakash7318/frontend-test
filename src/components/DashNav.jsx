import React from "react";


function DashNav() {
    return (
        <div className="px-4 py-1 flex justify-between items-center">
            <div>DashBoard</div>
            <div className="flex justify-center items-center gap-1">
                <div className="w-8 h-8 rounded-full bg-slate-300"></div>
            <div className="px-2">
                <p>Rustam</p>
                <p className="text-xs">admin</p>
            </div>
            <button className="bg-pink-500 px-2 py-1 rounded text-white">Logout</button>
            
        </div>
        </div>
    );
}

export default DashNav;