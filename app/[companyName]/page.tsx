"use client"
import { usePathname } from "next/navigation";
import { data } from "../data";

export default function Company() {
    const path = usePathname();
    var companyID = path.slice(1);
    const companyData = data.find(dados => dados.id == companyID);
    var urlParts = companyData?.website.split('com/');

    var site = urlParts[1];

    return (
        <div className="absolute flex-col">
            <div className="ml-[10%] lg:ml-[20%] mt-[-65px] w-[80%] lg:w-[60%]">
                <div className="flex flex-row rounded-md" id="card">
                    <div className="flex min-w-32 min-h-32 items-center rounded-bl" style={{ backgroundColor: companyData?.logoBackground }}>
                        <img className="mx-auto" src={companyData?.logo} alt="" />
                    </div>

                    <div className="flex flex-row items-center justify-between p-6 w-full">
                        <div>
                            {companyData?.company}
                            <p className="text-sm" style={{ color: "#6E8098" }}>{site}.com</p>
                        </div>
                        <button className="w-32 h-10 rounded" id="companyButtonSite">{companyData?.company} site</button>
                    </div>

                </div>
                <div className=" flex flex-row justify-between items-center relative rounded-t-md p-10 mt-20" id="card">
                    <div>
                        <div className="flex flex-row items-baseline text-sm" style={{ color: "#6E8098" }}>
                            <p>{companyData?.postedAt}</p>
                            <div className="h-1 w-1 rounded-full ml-3" style={{ backgroundColor: "#6E8098" }}></div>
                            <p className="ml-3">{companyData?.contract}</p>
                        </div>
                        <p className="mt-2 text-2xl">{companyData?.position}</p>
                        <p className="mt-2 text-sm" style={{ color: "#5964E0" }}>{companyData?.location}</p>
                    </div>
                    <button className="rounded h-10 w-32 text-center" style={{ backgroundColor: "#5964E0" }}>Apply Now</button>
                </div>
                <div id="card" className="p-10 mb-20 rounded-b">
                    <div style={{ color: "#9DAEC2" }}>
                        {companyData?.description}
                    </div>
                    <div className="mt-10">
                        <p className="text-2xl mb-6">Requirements</p>
                        <p className="text-sm mb-10" style={{ color: "#9DAEC2" }}>{companyData?.requirements.content}</p>
                        {companyData?.requirements.items.map((items) => (
                            <div className="text-sm mt-4 flex flex-row items-center" style={{ color: "#9DAEC2" }} key={items}><div className="min-h-1 min-w-1 ml-4 mr-4 rounded" style={{ backgroundColor: "#5964E0" }}></div><p>{items}</p></div>
                        ))}
                    </div>
                    <div className="mb-4">
                        <p className="text-2xl mt-14 mb-6">What You Will Do</p>
                        <p className="text-sm mb-10" style={{ color: "#9DAEC2" }}>{companyData?.role.content}</p>
                        {companyData?.role.items.map((items, num) => (
                            <div className="text-sm mt-4 flex flex-row items-center" style={{ color: "#9DAEC2" }} key={items}><p className="ml-4 mr-4" style={{ color: "#5964E0" }}>{num + 1}</p><p>{items}</p></div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="h-20 w-full flex flex-row justify-between items-center pl-[20%] pr-[20%]" id="card">
                <div className="flex flex-col">
                    <p className="text-lg">{companyData?.position}</p>
                    <p className="text-sm" style={{color:"#9DAEC2"}}>So Digital Inc.</p>
                </div>
                <button className="p-2 rounded" id="" style={{backgroundColor:"#5964E0"}}>Apply Now</button>
            </div>
        </div>
    );
}