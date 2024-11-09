// src/stores/employeeStore.js
import { defineStore } from 'pinia';

export const useEmployeeStore = defineStore('employee', {
  state: () => ({
    employee: {
      name: '',
      panNumber: null,
      panImage: '',
      aadharNumber: '',
      aadharImage: '',
      accountNumber: '',
      fullAddress: '',
      familyDetails: {
        contactNumbers: []
      },
      employeeContactNumber: '',
      department: '',
      occupation: '',
      salary: null,
      joiningDate: '',
      gender: '',
    },
  }),
  actions: {
    setEmployeeData(payload) {
      this.employee = { ...this.employee, ...payload };
    },
  },
});
