import { useState, useEffect } from 'react'
import indicatorsService from "../services/indicators";
import areasService from "../services/areas";

export const useIndicators = () => {
  const [indicators, setIndicators] = useState([])
  const [indicatorsValues, setIndicatorsValues] = useState([])

  const getIndicators = async () => {
    const response = await indicatorsService.getIndicators();
    setIndicators(response)
  }
  
  const getIndicatorsValues = async () => {
    const response = await indicatorsService.getIndicatorsValues();
    setIndicatorsValues(response)
  }

  const addIndicator = async (data) => {
    await indicatorsService.addIndicator(data);
  }

  const addIndicatorValue = async (data) => {
    await indicatorsService.addIndicatorValue(data);
  }

  useEffect(() => {
    getIndicators()
    getIndicatorsValues()
  }, [])

  return [indicators, indicatorsValues, addIndicator, addIndicatorValue]
}

export const useAreas = () => {

  const [areas, setAreas] = useState([])

  const getAreas = async () => {
    const response = await areasService.getAreas();
    setAreas(response)
  }

  useEffect(() => {
    getAreas()
  }, [])

  return [areas]
}
