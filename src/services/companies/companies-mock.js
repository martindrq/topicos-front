import companiesMock from "../../mock-data/companies.json";

const companiesService = {
  getCompanies: async function () {
    return { data: companiesMock };
  },
  addCompany: async function (data) {
    return {...data, id: 4};
  },
  editCompany: async function (data) {
    return data;
  },
  deleteCompany: async function (data) {
    return {};
  },
};

export default companiesService;
