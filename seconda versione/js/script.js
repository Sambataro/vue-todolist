// seconda versione

var root = new Vue({
  el: '#todo-list',
    data: {
  inputUser: '',
  list: [
    "riposare gli occhi",
    "fare pause regolari",
    "fare passeggiata",
    "leggere un libro",
  ],
},

  methods: {
  deleteNote: function(index) {
    this.list.splice(index, 1)
  },

  addNote: function () {
    var newNote = this.inputUser;
    if (newNote == "") {
      alert("Inserire una nota")
    } else {
      this.list.push(newNote);
      this.inputUser = '';
    }

  }

 }

});
