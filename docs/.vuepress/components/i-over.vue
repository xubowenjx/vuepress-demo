<style scoped>
.hide {
        display: none;
    }
    div.container {
        position: relative;
        width: 200px;
        height: 200px;
        top: 100px;
        left: 200px;
        display:inline-block;
    }
    div.box {
        display: inline-block;
        width: 100%;
        height: 100%;
        border: 1px solid #de4ffd;
        position: relative;
        line-height: 200px;
        text-align: center;
        transition: color 0.5s ease;
    }
    div.popover {
        position: absolute;
        width: 100%;
        height: 100%;
        line-height: 200px;
        vertical-align: middle;
        top: -1000px;
        border: 1px solid #de4ffd;
        background-color: rgba(86, 61, 124, 0.1);
        text-align: center;
        transform: translate3d(0, -100px, 0);/**-100决定了能看见的位移距离*/
        transition: transform 0.5s ease;
    }

    div.container:hover>div.popover {
        display: inline-block;
        transform: translate3d(0, 0, 0);
        top: 0;
    }

    div.container:hover>div.box {
        color: #efefef;
    }
</style>

<template>
  <div class="container">
      <div class="box" id="box">
        <slot name="box"/>
      </div>
      <div class="popover" id="popover">
        <slot name="popover"/>
      </div>
  </div>
</template>
<script>
export default {
  name: 'i-over',
  data(){
    return {

    }
  }
}
</script>

