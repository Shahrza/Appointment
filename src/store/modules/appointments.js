const state = {
  appointments: []
};

const getters = {
  allAppointments: state => {
    if (localStorage.getItem('appointments')) {
      try {
        state.appointments = JSON.parse(localStorage.getItem('appointments'));
      } catch(e) {
        localStorage.removeItem('appointments');
      }
    }
  }
};

const actions = {
  addAppointment({commit}, form){
    const data = {...form, completed: false};
    commit('SET_NEW_APPOINTMENT', data)
  },
  checkComplete({commit}, data){
    commit('COMPLETE_APPOINTMENT', data)
  },
  deleteAppointment({commit}, id){
    commit('REMOVE_APPOINTMENT', id);
  },
};

const mutations = {
  SET_NEW_APPOINTMENT: (state, appointment) => {
    state.appointments.push(appointment);
    const parsed = JSON.stringify(state.appointments);
    localStorage.setItem('appointments', parsed);
  },
  REMOVE_APPOINTMENT: (state, id) =>{
    const appointments = JSON.parse(localStorage.getItem('appointments'));
    const data = appointments.filter(app => app.id !== id);
    localStorage.setItem('appointments', JSON.stringify(data))
  },
  COMPLETE_APPOINTMENT: (state, updApp) => {
    let data = JSON.parse(localStorage.getItem('appointments'));
    const index = data.findIndex(app => app.id === updApp.id);
    if (index !== -1) {
      data.splice(index, 1, updApp);
      const str = JSON.stringify(data);
      localStorage.setItem('appointments', str);
    }
  }
};


export default {
  state,
  getters,
  actions,
  mutations
}
