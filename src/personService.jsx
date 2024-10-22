import axios from "axios"

const baseUrl = '/api/persons'

const getAllPersons = () => {
   const request = axios.get(`${baseUrl}`)
   return request.then((response) => response.data)
}

const createPerson = newPerson => {
  const request = axios.post(`${baseUrl}`, newPerson)
  return request.then((response) => response.data)
}

const updatePerson = (oldPerson, newPerson) => {
  const request = axios.put(`${baseUrl}/${oldPerson.id}`, newPerson)
  return request.then(response=>response.data)
}

const deletePerson = id => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response=> response.status === 204 ? id : null)
}

export default { getAllPersons, createPerson, updatePerson, deletePerson }