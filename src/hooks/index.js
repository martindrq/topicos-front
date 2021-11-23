import { useState, useEffect, useContext } from 'react'
import indicatorsService from "../services/indicators";
import areasService from "../services/areas";
import authService from "../services/auth";
import companiesService from "../services/companies";
import usersService from "../services/users";
import { UserContext } from '../App'

export const useIndicators = (token) => {
  const [indicators, setIndicators] = useState([])
  const [indicatorsValues, setIndicatorsValues] = useState([])

  const getIndicators = async () => {
    const response = await indicatorsService.getIndicators(token);
    setIndicators(response.data)
  }
  
  const getIndicatorsValues = async () => {
    const response = await indicatorsService.getIndicatorsValues(token);
    setIndicatorsValues(response.data)
  }

  const addIndicator = async (data) => {
    const response = await indicatorsService.addIndicator(data, token);
    return response
  }

  const addIndicatorValue = async (data) => {
    await indicatorsService.addIndicatorValue(data, token);
  }

  const editIndicator = async (data) => {
    const response = await indicatorsService.editIndicator(data, token);
    return response
  }

  const editIndicatorValue = async (data) => {
    const response = await indicatorsService.editIndicatorValue(data, token);
    return response
  }

  const deleteIndicator = async (data) => {
    const response = await indicatorsService.deleteIndicator(data, token).catch(() => {
      throw new Error("No se puede eliminar este indicador debido a que tiene valores asociados.") // FIXME: this could be not an error, just a 500 code
    });
    return response
  }

  const deleteIndicatorValue = async (data) => {
    const response = await indicatorsService.deleteIndicatorValue(data, token);
    return response
  }

  useEffect(() => {
    getIndicators()
    getIndicatorsValues()
  }, [])

  return [indicators, indicatorsValues, addIndicator, addIndicatorValue, editIndicator, editIndicatorValue, deleteIndicator, deleteIndicatorValue]
}

export const useAreas = (token) => {

  const [areas, setAreas] = useState([])

  const getAreas = async () => {
    const response = await areasService.getAreas(token);
    setAreas(response.data)
  }

  const addArea = async (data) => {
    const response = await areasService.addArea(data, token);
    return response
  }

  const editArea = async (data) => {
    const response = await areasService.editArea(data, token);
    return response
  }

  const deleteArea = async (data) => {
    const response = await areasService.deleteArea(data, token).catch(() => {
      throw new Error("No se puede eliminar esta area debido a que tiene indicadores asociados.") // FIXME: this could be not an error, just a 500 code
    });
    return response
  }

  useEffect(() => {
    getAreas()
  }, [])

  return [areas, addArea, editArea, deleteArea]
}

export const useAuth = () => {

  const activate = async (data, token) => {
    const response = await authService.activate(data, token);
    return response
  }

  const login = async (data) => {
    const response = await authService.login(data);
    return response
  }

  return [activate, login]
}

export const useCompanies = (token) => {

  const [companies, setCompanies] = useState([])

  const getCompanies = async () => {
    const response = await companiesService.getCompanies(token);
    setCompanies(response.data)
  }

  const addCompany = async (data) => {
    const response = await companiesService.addCompany(data, token);
    return response
  }

  const editCompany = async (data) => {
    const response = await companiesService.editCompany(data, token);
    return response
  }

  const deleteCompany = async (data) => {
    const response = await companiesService.deleteCompany(data, token).catch(() => {
      throw new Error("No se puede eliminar esta empresa debido a que tiene usuarios asociados.") // FIXME: this could be not an error, just a 500 code
    });
    return response
  }

  useEffect(() => {
    getCompanies()
  }, [])

  return [companies, addCompany, editCompany, deleteCompany]
}

export const useUsers = (token) => {

  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await usersService.getUsers(token);
    setUsers(response.data)
  }

  const addUser = async (data) => {
    const response = await usersService.addUser(data, token);
    return response
  }

  const deleteUser = async (data) => {
    const response = await usersService.deleteUser(data, token);
    return response
  }

  useEffect(() => {
    getUsers()
  }, [])

  return [users, addUser, deleteUser]
}

export const useReports = (token) => {

  const [report, setReport] = useState([]);
  const [loadingReport, setLoadingReport] = useState([]);
  const companyId = 1; // FIXME: use useContext
  
  const generateReport = async (indicatorsIds, from, to) => {
    setLoadingReport(true);
    const response = await Promise.all(indicatorsIds.map(i => indicatorsService.getIndicatorsValues(token, companyId, i, from, to)));
    setReport(response.map(r => r.data));
    setLoadingReport(false);
  }
  return [report, loadingReport, generateReport];
}

export const useUserContext = () => {
  return useContext(UserContext)
}

export const useNotify = () => {

  const [notifyIndicators, setNotifyIndicators] = useState([])
  const [amountNotifyIndicators, setAmountNotifyIndicators] = useState([])

  const getNotifyIndicators = async () => {
    const response = await indicatorsService.getNotifyIndicators();
    setNotifyIndicators(response.data)    
  }

  const getAmountNotifyIndicators = async () => {
    const response = await indicatorsService.getAmountNotifyIndicators();
    setAmountNotifyIndicators(response.data)    
  }

  useEffect(() => {
    getNotifyIndicators()
    getAmountNotifyIndicators()
  }, [])

  return [notifyIndicators, amountNotifyIndicators]
}