
import DashNav from "../components/DashNav";
import SideBar from "../components/SideBar";

function DashboardLayout({ children }) {
    return (
        <div className="flex w-full h-screen">
            <div className="w-[30%]  bg-slate-800"><SideBar/></div>
            <div className="w-full ">
                <div className="border-b bg-slate-300"><DashNav/></div>
           <div className="bg-slate-100 h-[90%]"> {children}</div>
        
        </div>
        </div>
    );
}

export default DashboardLayout;