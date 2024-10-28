import { useState, useEffect } from 'react';

const useSteps = (steps) => {
    const [stepElements, setStepElements] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (steps && Array.isArray(steps) && steps.length > 0) {
            const elements = steps.map((step) => ({
                id: step.stepNumber,
                name: `${step.stepDescription}`
            }));
            setStepElements(elements);
            setErrorMessage('');
        } else {
            setStepElements([]);
            setErrorMessage('No steps available');
        }
    }, [steps]);

    return { stepElements, errorMessage }
}

export default useSteps;