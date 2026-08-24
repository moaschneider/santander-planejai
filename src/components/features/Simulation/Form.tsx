import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { type SimulationFormData, simulationFormSteps } from '@/data/simulation'
import { useSimulationStorage } from '@/hooks/useSimulationStorage'

import { FormStep } from './FormStep'
import { StepProgress } from './Progress'

export const SimulationForm = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [formData, setFormData] = useState<SimulationFormData>(
    {} as SimulationFormData,
  )
  const totalSteps = simulationFormSteps.length
  const currentStep = simulationFormSteps[currentStepIndex]
  const { saveFormData } = useSimulationStorage()

  const navigate = useNavigate()

  const handleNextStep = (value: string) => {
    const updatedFormData = { ...formData, [currentStep.id]: value }
    setFormData(updatedFormData)

    if (currentStepIndex + 1 > totalSteps - 1) {
      saveFormData(updatedFormData)
      void navigate('/resultado')
      return
    }

    setCurrentStepIndex((prev) => prev + 1)
  }

  const handlePreviousStep = () => {
    setCurrentStepIndex((prev) => Math.max(prev - 1, 0))
  }

  return (
    <>
      <StepProgress
        currentStep={currentStepIndex + 1}
        totalSteps={totalSteps}
      />
      <FormStep
        key={currentStep.id}
        {...currentStep}
        onBack={handlePreviousStep}
        onNext={handleNextStep}
      />
    </>
  )
}
