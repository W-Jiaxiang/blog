<template>
  <div>
    <Navigate></Navigate>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigate from '@/components/Navigate'

export default {
  name: 'App',
  components: {
    Navigate
  }
}
</script>
