<template>
  <div>
    <Catalog></Catalog>
    <Row v-if="bangumis.list.length <= 0" align="center"
         style="border-bottom: 1px solid;margin: 1em;padding: 1em;">
      暂无数据
    </Row>
    <Grid :col="5" :border="false" padding="10px">
      <GridItem v-for="item in bangumis.list" :key="item.id">
        <Card>
          <div style="text-align:center">
            <img style="width: 100%;height: 274px" :src="item.cover" :alt="item.title">
            <p style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">
              {{ item.title }}
            </p>
            <p style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;color: red;">
              {{ item.part }}
            </p>
          </div>
        </Card>
      </GridItem>
    </Grid>
    <Page
        style="display: flex;justify-content: center;margin-top: 1em;"
        v-model="bangumis.pageNum"
        :total="bangumis.total"
        :page-size="bangumis.pageSize"
        @on-change="change"
        show-total
    />
  </div>
</template>

<script>
import {onMounted,onUpdated, reactive,watch} from "vue";
import axios from "axios";
import Catalog from '../Catalog'

export default {
  name: "Bangumi",
  components: {
    Catalog
  },
  setup() {
    let bangumis = reactive({
      total: 0,
      pageNum: 1,
      pageSize: 20,
      list: []
    })

    const axios = require('axios');
    /*axios分页查询请求*/
    function requestBangumi(){
      axios.get('api/bangumi',{
        params: {
          pageNum: bangumis.pageNum - 1,
          pageSize: bangumis.pageSize
        },
        timeout: 1000
      })
          .then((response) => {
            bangumis.list = response.data.data.list
            bangumis.total = response.data.data.total
            // console.log(bangumis.list)
          })
          .catch((error) => {
            console.log(error)
          })
    }

    onMounted(() => {
      requestBangumi()
    })

    return {
      bangumis,
      change(){
        requestBangumi()
      }
    }
  }
}
</script>

<style scoped>

</style>