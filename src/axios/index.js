import { useState, useEffect } from 'react'
import axios from 'axios'

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

export const useIndicators = () => {
  const [indicators, setIndicators] = useState([])
  const [indicatorsValues, setIndicatorsValues] = useState([])

  const getIndicators = async () => {
    const response = await axios.get(BACKEND_URL + '/indicators', {
      headers: {
        'Content-Type': 'application/json'
      }})
    setIndicators(response)
  }
  
  const getIndicatorsValues = async () => {
    const response = await axios.get(BACKEND_URL + '/indicators_values', {
      headers: {
        'Content-Type': 'application/json'
      }})
    setIndicatorsValues(response)
  }

  const addIndicator = async (data) => {
    await axios.post(BACKEND_URL + '/indicator/create', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  const addIndicatorValue = async (data) => {
    await axios.post(BACKEND_URL + '/indicator/new_value', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  useEffect(() => {
    getIndicators()
    getIndicatorsValues()
  }, [])

  return [indicators, indicatorsValues, addIndicator, addIndicatorValue]
}
