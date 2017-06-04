new Vue({
  el: "#exercise",
  data: {
    value: "initial"
  },
  methods: {
    showAlert: function(){
      alert("Button clicked")
    },
    getVal: function(){
      this.value = event.target.value;
    }
  }
});
