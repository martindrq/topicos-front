import { useState, useEffect } from 'react'
import axios from 'axios'

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

export const useIndicators = () => {
  const [indicators, setIndicators] = useState([])

  const getIndicators = async () => {
    const response = await axios.get(BACKEND_URL)
    setIndicators(response.data)
  }

  const addIndicatorData = async (data) => {
    await axios.post(BACKEND_URL, data)
  }

  useEffect(() => {
    getIndicators()
  }, [])

  return [indicators, addIndicatorData]
}
