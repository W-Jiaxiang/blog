<template>
  <List item-layout="vertical" border="true" style="width: 70%;margin: auto;" header="我的文章">
    <ListItem v-for="item in articles.list" :key="item.id">
      <ListItemMeta style="display: flex;" :avatar="item.avatar" :title="item.title" :description="item.description" />
      <div v-html="item.content" />
      <template #action>
        <li>
          {{ item.releaseDate }}
        </li>
        <li>
          <Icon type="ios-thumbs-up-outline" />
          {{ item.like}}
        </li>
        <li>
          <Icon type="ios-chatbubbles-outline" />
          0
        </li>
      </template>
      <template #extra>
        <img src="https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large" style="width: 280px">
      </template>
    </ListItem>
  </List>
</template>

<script>
import {onMounted, reactive} from "vue";
import axios from "axios";

export default {
  name: "Article",
  setup(){
    let articles = reactive({
      list: []
    })

    onMounted(() => {
      axios.get('api/article')
          .then((response) => {
            console.log(response.data)
            articles.list = response.data.data
            // console.log(bangumis.list)
          })
          .catch((error) => {
            console.log(error)
          })
    })
    return {
      articles
    }

  }
}
</script>

<style scoped>
/* 显示两行 */
div {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>