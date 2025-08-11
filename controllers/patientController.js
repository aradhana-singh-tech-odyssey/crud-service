// controllers/patientController.js
const patientModel = require('../models/patientModel');

exports.getAll = (req, res) => {
  res.json(patientModel.getAllPatients());
};

exports.getById = (req, res) => {
  const id = parseInt(req.params.id);
  const patient = patientModel.getPatientById(id);
  if (!patient) return res.status(404).json({ message: 'Patient not found' });
  res.json(patient);
};

exports.create = (req, res) => {
  const newPatient = patientModel.addPatient(req.body);
  res.status(201).json(newPatient);
};

exports.update = (req, res) => {
  const id = parseInt(req.params.id);
  const updated = patientModel.updatePatient(id, req.body);
  if (!updated) return res.status(404).json({ message: 'Patient not found' });
  res.json(updated);
};

exports.delete = (req, res) => {
  const id = parseInt(req.params.id);
  const deleted = patientModel.deletePatient(id);
  if (!deleted) return res.status(404).json({ message: 'Patient not found' });
  res.json(deleted);
};
