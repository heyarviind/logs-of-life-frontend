<template>
  <div class="align-self-start timeline">
    <!-- Add new log -->
    <transition name="slide-fade-fast">
      <div class="logHolder mb-2" v-if="addNew" :key="addNew">
        <div class="log rounded p-3">
          <div></div>
          <div>
            
          <textarea name="" id="" rows="2" class="form-control bg-light border" placeholder="Type your life log here..." v-model="newLog.logText"></textarea>
          <small class="text-muted">{{ time() }}</small>
          <div class="mt-3">
            <button class="btn btn-success btn-sm" @click="addNewLog()">Save</button>
            <button class="btn btn-link btn-sm text-dark" @click="$emit('addNew-value', false)">Cancel</button>
          
            <div class="float-right">
            <label for="todo" class="">
              <input type="checkbox" id="todo" v-model="newLog.isTodo">&nbsp;&nbsp;Todo
            </label>
          </div>
          </div>
          </div>
        </div>
      </div>
    </transition>

    <div v-for="(logs, i) in logsData" :key="i">
      <h5 class="mb-1 mt-4 sticky-top pb-3" style="top: 56px; background-color: #fef4d9;box-shadow: rgb(254, 244, 217) 0px 4px 12px;">{{ day(logs._id) }} </h5>
      <!-- All Logs -->
      <transition-group name="slide-fade">
        <div class="logHolder mb-2" v-for="(log, i) in logs.logs" :key="i">
          <div :class="['log rounded p-3', { 'todoLog' : log.todo.isTodo }]" v-on:dblclick="showOptions === i ? showOptions = null : showOptions = i">
            <div>
              <!-- <span v-if="!log.todo.isTodo" class="emoji">{{ emojiFinder(log.logText) }}</span>
              <span v-else class="emoji">🔘</span> -->
              <!-- <img src="@/assets/icons/icons8-checklist-100.png" width="50px" alt=""> -->
            </div>
            <div>
              <!-- If todo -->
              <div v-if="log.todo.isTodo">
                <label for="">
                  <input type="checkbox">
                  <span v-html="checkForHashTags(log.logText)"></span>
                </label>
              </div>
              <div v-else v-html="checkForHashTags(log.logText)"></div>
              <small class="text-muted">{{ time(log.created) }}</small>
            </div>
          </div>
          <div></div>
          <transition name="slide-down-fade">
            <div class="py-2 ml-5" v-if="showOptions === i">
              <button class="btn btn-sm">🗑 Edit</button>
              <button class="btn btn-sm">❌ Delete</button>
            </div>
          </transition>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import axios from 'axios'
import api from '../api/'

axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

export default {
  props: ["logsData", "addNew"],
  data: () => ({
    showOptions: null,
    newLog : {
      logText: null,
      isTodo: false
    }
  }),
  methods: {
    time(t) {
      t = t || undefined
      return moment(t).format('h:mm A')
    },
    day(d) {
      d = d || undefined
      if (String(moment(d).toDate()) === String(moment().set({hour:0,minute:0,second:0,millisecond:0}).toDate())) {
        return 'Today'
      } else if (String(moment(d).toDate()) === String(moment().subtract(1, 'days').set({hour:0,minute:0,second:0,millisecond:0}).toDate())) {
        return 'Yesterday'
      } else {
        return moment(d).format("DD MMM, YYYY")
      }
    },
    checkForHashTags(string) {  
      var regex = /(?:^|\s)(?:#)([a-zA-Z\d]+)/gm;
      var match;

      while (match = regex.exec(string)) {
        string = string.replace(`#${match[1]}`, `<span class="text-primary">#${match[1]}</span>`)
      }

      return string;
    },
    emojiFinder(log) {
      const emojis = {
        '😊': ['smile', 'smiling', 'happy'],
        '😂': ["face", "cry", "tears", "weep", "happy", "happytears", "haha"],
        '🤣': ["face", "rolling", "floor", "laughing", "lol", "haha"],
        '🤑': ["face", "rich", "dollar", "money"],
        '💰': ['money', 'currency', 'earned', 'earning', 'rupee', 'rupees', 'INR', 'USD', 'bill'],
        '🧟': ["man", "male", "dracula", "undead", "walking dead"],
        '🧟‍': ["woman", "female", "undead", "walking dead", "ghost"],
        '🔑': ["lock", "door", "password", "key"],
      }

      for(const key in emojis) {
        for(const d of emojis[key]){
          if(log.indexOf(d) > -1) {
            return key
          }
        }
      }
    },
    addNewLog() {
      const vm = this;
      if (this.newLog.logText) {
        const data = {
          logText: this.newLog.logText,
          isTodo: this.newLog.isTodo
        }
        axios.post(api.addLog(), data)
          .then(res => {
            console.log(res.data)
            vm.$store.dispatch('addLog', res.data)
            vm.newLog.logText = ""
            vm.$emit('addNew-value', false)
          })
          .catch(err => {
            console.log(err)
          })
      } else {

      }
    }
  }
}
</script>

<style lang="scss">
.timeline{
  padding-bottom: 100px;
}
.logHolder{
  align-items: center;
  margin-bottom: 100px;

  .log{
    display: grid;
    grid-template-columns: 50px 1fr;
    background-color: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    color: #000;
    position: relative;

    // Green Dot
    &:before{
      content: '';
      position:absolute;
      left: 30px;
      top: calc(50% - 10px);
      background-color: #33b17c;
      border: solid 5px #fff;
      z-index: 2;
      width: 20px;
      height: 20px;
      border-radius: 50px;
    }
    
    // Green Line
    &:after{
      content: '';
      position: absolute;
      left: 38px;
      top: calc(50% + 5px);
      height: 120px;
      z-index: 1;
      width: 3px;
      background-color: #33b17c;
    }

    &.todoLog{
      background-color: #fff;

      &:before{
        background-color: #f4bb2b;
      }

      &:after{
        background-color: #f4bb2b;
      }
    }

    .emoji{
      font-size: 40px;
    }
  }

    &:last-child {
    .log {
      &:after{
        display: none;
      }
    }
  }
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}

// Yo mam

.slide-fade-fast-enter-active {
  transition: all .3s ease;
}
.slide-fade-fast-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-fast-enter, .slide-fade-fast-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

// 

.slide-down-fade-enter-active {
  transition: all .3s ease;
}
.slide-down-fade-leave-active {
  transition: all .3s ease;
}
.slide-down-fade-enter, .slide-fade-fast-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}

</style>
