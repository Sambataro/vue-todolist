
  // creo un template con vue.component da generare per ogni memo aggiunta
  // utilizzando @click $emit(remove) sul button che comunica al padre li di cancellare quando l'utente clicca su X
  Vue.component('todo-note', {
    template: '\
      <li>\
        {{ note }}\
        <button class="delete" @click="$emit(\'remove\')"><i class="far fa-times-circle"></i></button>\
      </li>\
    ',
    // utilizzo props per avere un attributo personalizzato e utilizzarlo piu volte in LI {{note}}
    props: ['note']
  })

  new Vue({
  el: '#todo-list',
  data: {
    newNote: '',
    notes: [
      {
        i: 1,
        note: 'creare una lista di cose da fare e mostrarla in pagina con Vue',
      },
      {
        i: 2,
        note: 'aggiungere un campo di input e un pulsante per aggiungere nuove cose da fare alla lista;',
      },
      {
        i: 3,
        note: 'cancellare un item dalla lista, al click sulla relativa icona '
      },
      {
        i: 4,
        note: 'consultare la documentazione ufficiale '
      }
    ],
    newTodoIndex: 5
  },
  methods: {
    addNewNote: function () {
      this.notes.push({
        i: this.newTodoIndex++,
        note: this.newNote
      })
      this.newNote = ''
    }
  }
})
