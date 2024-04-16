"use client";

import { useDashboard } from "@/context/dashboard-context";
import GuidelinesUpload from "@/components/guidelines-upload";
import MedicalRecordUpload from "@/components/medical-record-upload";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Stepper from "@/components/stepper"

export const revalidate = 0;

export default function DashboardRoot() {
	const router = useRouter();
	const CASE_ID = "case_891a_6fbl_87d1_4326";
	const { guidelinesFile, medicalRecord, documentationProvided, setDocumentationProvided } = useDashboard();
	const steps=['upload medical records','Upload Guidelines']
	// Do not allow the User to upload a Guidelines file until a Medical Record has been uploaded. 
	const handleContinue = () => {
		router.push(`/dashboard/case/${CASE_ID}`)
	}

	useEffect(
		() => {
			if (guidelinesFile?.url != null && medicalRecord?.url != null) {
				setDocumentationProvided(true)
			}
		}, [medicalRecord, guidelinesFile]
	)


	return (
		<>
		<div className="p-3">
			<Stepper step={1} totalSteps={steps} />
		</div>
		<div className="w-full flex flex-col justify-center items-center h-screen">
	
			<div className="w-full flex flex-row gap-2 items-center">
				<MedicalRecordUpload />
				<GuidelinesUpload/>
			</div>
			<div className="w-full py-4 flex flex-row justify-center">
				{documentationProvided && (<button
					className="bg-green-600 font-medium text-white py-2 px-4 rounded"
					onClick={handleContinue}
				>
					Continue
				</button>)}
			</div>
		</div>
		</>
	)
}
