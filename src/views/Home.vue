<template>
  <div>
    <div class="footer p-3 text-center" style="box-shadow: rgb(254, 244, 217) 0px -4px 12px; z-index: 9999;">
      <button class="btn"><img src="@/assets/icons/correct.svg" width="24px" alt=""></button>
      <button class="btn"><img src="@/assets/icons/star.svg" width="24px" alt=""></button>
      <button class="btn btn-success px-4" @click="addNew=true">New Log</button>
    </div>
    <div class="py-2 px-3 fixed-top container" style="background-color: #fef4d9;">
      <h2 class="font-weight-bold h4"><img src="@/assets/logo.svg" class="mr-2" width="30px" alt=""> Your Life Logs</h2>
    </div>
    <br>
    <timeline
      class="timeline"
      :logsData="$store.state.logs"
      :addNew="addNew"
      @addNew-value="(e) => addNew = e"
    />

  </div>
</template>

<script>
import api from '../api/'
import axios from 'axios'

import Timeline from '@/components/Timeline'

axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

export default {
  name: "Home",
  components: {
    Timeline
  },
  data: () => ({
    logs: null,
    addNew: false
  }),
  mounted() {
    const vm = this;
    //Get the user data
    axios.get(api.logs())
      .then(res => {
        vm.$store.dispatch('setLogs', res.data)
      })
      .catch(err => {
        console.log(err.response.body)
      })
  },
  methods: {

  }
}
</script>

<style>
.timeline{
  margin-top: 40px;
}
.footer{
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0; 
  right: 0;
  z-index: 1;
  background-color: #fef4d9;
}
</style>
