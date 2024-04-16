"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";


interface IUploadedFile {
    url: string;
}

interface IDashboardContext {
    medicalRecord: IUploadedFile | null;
    setMedicalRecord: (file: IUploadedFile | null) => void;
    guidelinesFile: IUploadedFile | null;
    setGuidelinesFile: (file: IUploadedFile | null) => void;
    documentationProvided: boolean;
    setDocumentationProvided: ( arg0: boolean) => void;
}

const INITIAL_STATE: IDashboardContext = {
    medicalRecord: null,
    setMedicalRecord: () => {},
    guidelinesFile: null,
    setGuidelinesFile: () => {},
    documentationProvided: false,
    setDocumentationProvided: () => {},
};


export const DashboardContext = createContext(INITIAL_STATE);



export function DashboardProvider({ children }: { children: ReactNode }) { 
    const [medicalRecord, setMedicalRecord] = useState<IUploadedFile | null>(null);
    const [guidelinesFile, setGuidelinesFile] = useState<IUploadedFile | null>(null);
    const [documentationProvided, setDocumentationProvided] = useState<boolean>(false);
    
    const value = { medicalRecord, setMedicalRecord, guidelinesFile, setGuidelinesFile, documentationProvided,setDocumentationProvided }; 

    return (
        <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>
    );
}

export function useDashboard() { 
    const context = useContext(DashboardContext);
    return context;
}