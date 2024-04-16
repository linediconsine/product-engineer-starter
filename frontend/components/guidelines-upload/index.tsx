"use client";

import { useDashboard } from "@/context/dashboard-context";
import React, { useState, useEffect } from "react";
import { FaCheck, FaSpinner } from "react-icons/fa";

enum Style {
    Disabled,
    Button,
    Spinner,
    SuccessMessage,
}
export default function GuidelinesUpload() {
    const { guidelinesFile, setGuidelinesFile, medicalRecord } = useDashboard();
    const [isLoading, setLoading] = useState(false) //
    const [style,setStyle] = useState(Style.Disabled)
    
    // Guidlines can be uploaded only after medical record are provideded
    useEffect(
        ()=>{
            if(medicalRecord != null){
                setStyle(Style.Button)
            }
        }
        ,[medicalRecord])

    const handleClick = () => {
        setStyle(Style.Spinner)
        setTimeout(() => {
            setGuidelinesFile({ url: "/assets/guidelines.pdf" });
            setStyle(Style.SuccessMessage)
        }, 3000)
    }
    
    return (
        <div className="w-1/2 h-64 border border-4 border-gray-200 border-dashed rounded flex flex-row items-center justify-center">
            
            {style == Style.Disabled && (<button  onClick={handleClick} className="bg-gray-300 px-4 py-2 rounded-md cursor-not-allowed opacity-50"><span>Simulate Guidelines Upload</span></button>)}
            {style == Style.Spinner && (<span><FaSpinner/></span>)}
            {style == Style.Button && (<button  onClick={handleClick} className="text-white font-medium py-2 px-4 rounded border border-2 bg-orange-500 border-orange-500"><span>Simulate Guidelines Upload</span></button>)}
            {style == Style.SuccessMessage  && (
                    <span className="font-medium text-green-600 flex flex-row gap-1 items-center">
                        <FaCheck /> 
                        <span>Guidelines File Uploaded</span>
                    </span>)}
        </div>
    )
}