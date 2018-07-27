<template>
  <img :src="src" :alt="alt">
</template>
<script>
export default {
  props:{
    src:{
      type:String,
      required:true
    },
    alt:{
      type:String,
      default:''
    }
  },
  data(){
    return {

    }
  },
  mounted () {
    
  }
}
</script>

