<template>
  <div class="root">
      <table>
        <thead>
          <th v-for="(h,index) in thead" :key="h.name">{{h.text}}</th>
        </thead>
        <tbody>
          <tr v-for="(data,index) in tbody" :key="index">
            <td v-for="(h1,idx) in thead" :key="index+idx">{{data[h1.name]}}</td>
          </tr>
        </tbody>
      </table>
  </div>
</i-table>
</template>
<script>
export default {
  name: "i-table",
  props: {
    heads: {
      type: Array,
      required: true
    },
    body: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      thead: this.heads,
      tbody: this.body
    };
  }
};
</script>

