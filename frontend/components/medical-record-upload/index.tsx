"use client";

import { useDashboard } from "@/context/dashboard-context";
import classNames from "classnames";
import { useState } from "react";
import { FaCheck, FaSpinner } from "react-icons/fa";

enum Style {
    Disabled,
    Button,
    Spinner,
    SuccessMessage,
}

export default function MedicalRecordUpload() {
    const { medicalRecord, setMedicalRecord } = useDashboard();
    const [style,setStyle] = useState(Style.Button)

    const handleClick = () => {
        setStyle(Style.Spinner)
        setTimeout(() => {
            setMedicalRecord({ url: "/assets/medical-record.pdf" });
            setStyle(Style.SuccessMessage)
        }, 3000)
    }
    return(
        <div className="w-1/2 h-64 border border-4 border-gray-200 border-dashed rounded flex flex-row items-center justify-center">
            {style == Style.Spinner && (<span><FaSpinner/></span>)}
            {style == Style.Button && (<button  onClick={handleClick} className="text-white font-medium py-2 px-4 rounded border border-2 bg-blue-500 border-blue-500"><span>Simulate Medical Record Upload</span></button>)}
            {style == Style.SuccessMessage  && (
                    <span className="font-medium text-green-600 flex flex-row gap-1 items-center">
                        <FaCheck /> 
                        <span>Medical Record Uploaded</span>
                    </span>)}
        </div>
    )
}