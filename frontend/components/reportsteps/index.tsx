
type stepProps = {
    step: any;
};

export default function Reportsteps({ step }: stepProps) {

    return (
        <>
            <div className="rounded overflow-hidden shadow-lg m-10 p-5" key={step}>
                <div>
                    <h3 className="font-extrabold text-2xl">{step.question}</h3>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="p-2">
                            <ul className="list-disc px-2">
                                {step.options.map((option, index) => (
                                    <li className={option.selected ? 'bg-blue-500' : ''} key={'option' + index}>
                                        <span className="font-extrabold">{option?.key}.</span>{option.text}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {step.logic &&
                            <div className="p-2 text-sm">
                                <h3 className="font-extrabold">Logic: </h3>
                                <ul className="list-disc p-2">
                                    {step.logic.map((logic, index) => (
                                        <li className={logic.selected ? 'bg-blue-500' : ''} key={'logic' + index}>
                                            {logic.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        }
                    </div>
                </div>
                <div className="p-2">
                    <div className="font-extrabold">Reasoning: </div>
                    <div className="p2 text-xs">{step.reasoning}</div>
                </div>
                {step.evidence.map((evidence, index) => (
                    <div className="p-2" key={index}>
                        <div className="text-xs">
                            {evidence.content}
                            <div>
                                <a className="px-1 underline text-blue-600 hover:text-blue-800 visited:text-blue-600">{evidence.pdf_name}</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>)

}