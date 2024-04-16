"use client"
import { useEffect, useState } from "react"
import Stepper from "@/components/stepper"
import Reportsteps from "@/components/reportsteps"
export default function CaseResult() {
	const [report, updateReport] = useState({})
	const [actualStep, setActualStep] = useState(1)
	const steps = ['submitted', 'processing', 'completed']

	useEffect(
		() => {
			fetch('http://127.0.0.1:8000/report/1')
				.then(response => response.json())
				.then(data => updateReport(data))
				.catch(error => console.error(error));

			setTimeout(
				() => {
					fetch('http://127.0.0.1:8000/report/2')
						.then(response => response.json())
						.then(data => updateReport(data))
						.catch(error => console.error(error));
					setActualStep(2)
				}, 10000)


			setTimeout(
				() => {
					fetch('http://127.0.0.1:8000/report/3')
						.then(response => response.json())
						.then(data => updateReport(data))
						.catch(error => console.error(error));
					setActualStep(3)
				}, 30000)
		}

		, [])

	return (
		<>
			<div className="p-3">
				<Stepper step={actualStep} totalSteps={steps} />
			</div>

			<div className="rounded overflow-hidden shadow-lg">

				<div className="px-6 py-4">
					<div className="font-bold text-xl mb-2">	{report?.case_id && <h1 className="mb-4 font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">CASE<span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600"> {report?.case_id}</span></h1>}
					</div>
					<div className="text-gray-700 text-base">
						{report?.procedure_name && <div>Procedure : <span className="font-extrabold">{report?.procedure_name}</span></div>}

						{report?.summary && <div className="p-2">
							<h2>Summary</h2>
							<div>{report?.summary}</div>
						</div>}
					</div>
				</div>
				<div className="px-6 pt-4 pb-2">
					{report?.cpt_codes && <div>Current Procedural Terminology (CPT): <span>{report?.cpt_codes.map((cpt) => <a className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2' href={`https://www.aapc.com/codes/cpt-codes/${cpt}`} key={'key'+cpt}>{cpt}</a>)}</span></div>}
				</div>
			</div>


			{report?.steps && report?.steps.map(step => <Reportsteps step={step} key={step.question}/>)}

		</>
	)
}
