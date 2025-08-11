// models/patientModel.js
let patients = [];
let idCounter = 1;

const getAllPatients = () => patients;

const getPatientById = (id) => patients.find(p => p.id === id);

const addPatient = (patientData) => {
  const newPatient = { id: idCounter++, ...patientData };
  patients.push(newPatient);
  return newPatient;
};

const updatePatient = (id, patientData) => {
  const index = patients.findIndex(p => p.id === id);
  if (index === -1) return null;
  patients[index] = { ...patients[index], ...patientData };
  return patients[index];
};

const deletePatient = (id) => {
  const index = patients.findIndex(p => p.id === id);
  if (index === -1) return null;
  return patients.splice(index, 1)[0];
};

module.exports = {
  getAllPatients,
  getPatientById,
  addPatient,
  updatePatient,
  deletePatient
};
