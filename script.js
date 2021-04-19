Vue.component("namemess", {
  props: ["real", "code"],
  data: function () {
    return {
      change: this.real
    };
  },
  methods: {
    nameChange: function () {
      if (this.change === this.real) {
        this.change = this.code;
      } else {
        this.change = this.real;
      }
    }
  },
  template: '<div v-on:click="nameChange()">{{change}}</div>'
});
var subForm = new Vue({
  el: "#subForm",
  data: {
    submit: "",
    textField: "",
    email: "",
    mess: "",
    mess2: "",
    list: [
      { name: "Protagonist", codename: "Joker" },
      { name: "Anne", codename: "Panther" },
      { name: "Ryuji", codename: "Skull" }
    ]
  },
  watch: {
    textField: function () {
      if (this.textField.length < 2) {
        this.mess = "Name needs to have at least 2 characters";
      } else {
        this.mess = "";
      }
    },
    email: function () {
      if (!this.validEmail(this.email)) {
        this.mess2 = "Email needs to be formatted as example@domain.xxx";
      } else {
        this.mess2 = "";
      }
    },
    submit:function(){
      if(this.textField.length < 2){
        this.submit= "Not Submitted"
      }
      else{
        this.submit= "Submitted"
      }
    }
  },
  methods: {
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
});