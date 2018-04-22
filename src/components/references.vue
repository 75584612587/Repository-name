<template>
  <div class="hello">
    <h1>{{ var1 }}</h1> <!--Display contents of variable on a page-->
    <h2 @click="$router.push('/home')">Essential Links</h2> <!-- linking to another page -->
    <input v-model="inputString"> <!--binding variable to another source-->
    <div @mouseover="test()">callingafunction</div> <!-- calling  a function located in template -->
    <div v-for="person in form">
      {{ person.name }} is a {{ person.gender }},
      and {{ getPronoun(person.gender) }} hobbies are:
      <span v-for="hobby in person.hobbies">
        {{ hobby }}
      </span>
    </div>
    <div v-if="status === true"> on </div>
    <div v-else-if="status === false"> off </div>
    <button @click="status = !status"> toggle on/off </button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  mounted () {
    console.log('hello world') // display on console log
    console.log(this.var1) // "this." is required to referance variable/function located in script
    this.test() // this is how to call a function inside the script 
  },
  methods: {
    test () {
      console.log('function')
      console.log(this.inputString)
      this.var1 = this.var1 + this.inputString
    },
    getPronoun (gender) {
      if (gender === 'boy') {
        return 'his'
      } else if (gender === 'girl') {
        return 'her'
      }
    }
  },
  data () {
    return {
      var1: 'Welcome to Your Vue.js App',
      inputString: '',
      status: false,
      form:
      [
        {
          name: 'todd',
          gender: 'boy',
          hobbies: [
            'gaming',
            'playing violin'
          ]
        },
        {
          name: 'silvia',
          gender: 'girl',
          hobbies: [
            'singing',
            'dancing'
          ]
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
