import { useState } from "react";

export function useForm(steps) {
    const [currentStep, setCurrentStep] = useState(0);//Passo inicial é o zero;

    function changeStep(indexEtapa, eventButtons) {
        if (eventButtons) eventButtons.preventDefault();

        if (indexEtapa < 0 || indexEtapa >= steps.length) return;//Não permite o incerir um indice menor do que temos nas etapas;

        setCurrentStep(indexEtapa);

    };//Function para trocar as etapas;

    return {
        changeStep,
        currentStep,
        currentComponent: steps[currentStep],//Acessa o componeent a partir do indice;
        isLastStep: currentStep + 1 === steps.length ? true : false,//Verifica se estamos na ultima etapa;
        isFirstStep: currentStep === 0 ? true : false
    }
};//Recebe o componente das etapas como parametro;