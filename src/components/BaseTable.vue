<template>
  <table class="table tablesorter" :class="tableClass">
    <thead :class="theadClasses">
    <slot name="columns">
      <tr>
        <th v-for="column in columns" :key="column">{{column}}</th>
      </tr>
    </slot>
    </thead>
    <tbody :class="tbodyClasses">
    <tr v-for="(item, index) in data" :key="index">
      <slot :row="item">
        <td v-for="(column, index) in columns"
            :key="index"
            v-if="hasValue(item, column)">
          {{itemValue(item, column)}}
        </td>
      </slot>
    </tr>
    </tbody>
  </table>
</template>
<script>
  export default {
    name: 'base-table',
    props: {
      columns: Array,
      data: Array,
      type: {
        type: String, // striped | hover
        default: ""
      },
      title: {
        type: String,
        default: ""
      },
      theadClasses: {
        type: String,
        default: ''
      },
      tbodyClasses: {
        type: String,
        default: ''
      },
      subTitle: {
        type: String,
        default: ""
      }
    },
    computed: {
      tableClass() {
        return this.type && `table-${this.type}`;
      }
    },
    methods: {
      hasValue(item, column) {
        return item[column.toLowerCase()] !== "undefined";
      },
      itemValue(item, column) {
        return item[column.toLowerCase()];
      }
    }
  };
</script>
<style>
</style>
