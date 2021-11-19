import { useState, useEffect } from 'react'
import indicatorsService from "../services/indicators";
import areasService from "../services/areas";
import authService from "../services/auth";
import companiesService from "../services/companies";
import usersService from "../services/users";

export const useIndicators = () => {
  const [indicators, setIndicators] = useState([])
  const [indicatorsValues, setIndicatorsValues] = useState([])

  const getIndicators = async () => {
    const response = await indicatorsService.getIndicators();
    setIndicators(response.data)
  }
  
  const getIndicatorsValues = async () => {
    const response = await indicatorsService.getIndicatorsValues();
    setIndicatorsValues(response.data)
  }

  const addIndicator = async (data) => {
    const response = await indicatorsService.addIndicator(data);
    return response
  }

  const addIndicatorValue = async (data) => {
    await indicatorsService.addIndicatorValue(data);
  }

  const editIndicator = async (data) => {
    const response = await indicatorsService.editIndicator(data);
    return response
  }

  const editIndicatorValue = async (data) => {
    const response = await indicatorsService.editIndicatorValue(data);
    return response
  }

  const deleteIndicator = async (data) => {
    const response = await indicatorsService.deleteIndicator(data);
    return response
  }

  const deleteIndicatorValue = async (data) => {
    const response = await indicatorsService.deleteIndicatorValue(data);
    return response
  }

  useEffect(() => {
    getIndicators()
    getIndicatorsValues()
  }, [])

  return [indicators, indicatorsValues, addIndicator, addIndicatorValue, editIndicator, editIndicatorValue, deleteIndicator, deleteIndicatorValue]
}

export const useAreas = () => {

  const [areas, setAreas] = useState([])

  const getAreas = async () => {
    const response = await areasService.getAreas();
    setAreas(response.data)
  }

  const addArea = async (data) => {
    const response = await areasService.addArea(data);
    return response
  }

  const editArea = async (data) => {
    const response = await areasService.editArea(data);
    return response
  }

  const deleteArea = async (data) => {
    const response = await areasService.deleteArea(data);
    return response
  }

  useEffect(() => {
    getAreas()
  }, [])

  return [areas, addArea, editArea, deleteArea]
}

export const useAuth = () => {

  const register = async (data) => {
    const response = await authService.register(data);
    return response
  }

  const login = async (data) => {
    const response = await authService.login(data);
    return response
  }

  return [register, login]
}

export const useCompanies = () => {

  const [companies, setCompanies] = useState([])

  const getCompanies = async () => {
    const response = await companiesService.getCompanies();
    setCompanies(response.data)
  }

  const addCompany = async (data) => {
    const response = await companiesService.addCompany(data);
    return response
  }

  const editCompany = async (data) => {
    const response = await companiesService.editCompany(data);
    return response
  }

  const deleteCompany = async (data) => {
    const response = await companiesService.deleteCompany(data);
    return response
  }

  useEffect(() => {
    getCompanies()
  }, [])

  return [companies, addCompany, editCompany, deleteCompany]
}

export const useUsers = () => {

  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await usersService.getUsers();
    setUsers(response.data)
  }

  const addUser = async (data) => {
    const response = await usersService.addUser(data);
    return response
  }

  const deleteUser = async (data) => {
    const response = await usersService.deleteUser(data);
    return response
  }

  useEffect(() => {
    getUsers()
  }, [])

  return [users, addUser, deleteUser]
}