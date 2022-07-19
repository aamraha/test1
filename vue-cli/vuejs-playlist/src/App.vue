<template>
  <div>
   {{title}}
   {{greeting()}}
  </div>
</template>

<script>
export default {
  // name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title : 'Hey Aamrah',
      greeting : 'How you doing?'
    }
  }
}
</script>

<style>

</style>
