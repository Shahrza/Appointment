import Swal from 'sweetalert2'

const state = {
  appointments: []
};

// Getters
const getters = {
  allAppointments: state => { 
    return state.appointments || []
  }
};


// Actions
const actions = {
  fetchAppointments({ commit }) {
    const data = JSON.parse(localStorage.getItem('appointments'))
    commit('SET_APPOINTMENTS', data);
  },
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


// Mutations
const mutations = {
  SET_APPOINTMENTS: (state, appointments) => (state.appointments = appointments),
  SET_NEW_APPOINTMENT: (state, appointment) => {
    if(!state.appointments) state.appointments = []
    localStorage.setItem('appointments', [])
    state.appointments.push(appointment)
    const parsed = JSON.stringify(state.appointments);
    localStorage.setItem('appointments', parsed);
  },
  REMOVE_APPOINTMENT: (state, id) =>{
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          const appointments = JSON.parse(localStorage.getItem('appointments'));
          const data = appointments.filter(app => app.id !== id);
          state.appointments = data
          localStorage.setItem('appointments', JSON.stringify(data))
          Swal.fire(
            'Deleted!',
            'Your appoinment has been deleted.',
            'success'
          )
        }
      })
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
