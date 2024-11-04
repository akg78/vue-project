import { defineStore } from 'pinia';

export const useBillStore = defineStore('billStore', {
  state: () => ({
    billNo: 'BILL-1730134719669-888',
    dealerName: 'Harshit',
    itemName: 'Cotton',
    quantity: 40,
    weight: 25,
    pal: 4,
    dhami: 2.5,
    pricePerUnit: 33,
    paymentStatus: 'Paid',
    totalPayment: 1320,
    paid: 320,
    due: 1000
  }),
  getters: {
    calculateTotalPayment(state) {
      return state.quantity * state.pricePerUnit;
    },
    calculateDue(state) {
      return this.calculateTotalPayment - state.paid;
    }
  },
  actions: {
    updatePaidAmount(amount) {
      this.paid = amount;
      this.due = this.calculateDue;
      this.updatePaymentStatus();
    },
    updatePaymentStatus() {
      const paidPercentage = (this.paid / this.totalPayment) * 100;
      if (paidPercentage >= 100) {
        this.paymentStatus = 'Paid';
      } else if (paidPercentage >= 50) {
        this.paymentStatus = 'Partially Paid';
      } else {
        this.paymentStatus = 'Due';
      }
    },
    computeTotalAndDue() {
      this.totalPayment = this.calculateTotalPayment;
      this.due = this.calculateDue;
      this.updatePaymentStatus();
    }
  }
});
