<template>
  <div style="margin: 1em;padding-left: 1em;border-bottom: 1px solid;">
    <Row v-for="item in catalog.list" :key="item.id">
      <h3 style="align-self: center">
        {{item.category}}
        <Icon type="ios-arrow-forward" />
      </h3>
      <div v-for="option in item.item" :key="option.index">
        <Button type="dashed" style="margin: 0.5em;">{{ option }}</Button>
      </div>
    </Row>
  </div>
</template>

<script>
import {onMounted, reactive} from "vue";
import axios from "axios";

export default {
  name: "Catalog",
  setup(){
    let catalog = reactive({
      list: []
    })
    onMounted(() => {
      axios.get("api/catalog")
          .then((response) => {
            console.log(response.data)
            catalog.list = response.data.data
            console.log(catalog.list)
          })
          .catch((error) => {
            console.log(error)
          })
    })
    return {
      catalog
    }
  }
}
</script>

<style scoped>
.category{

}
</style>