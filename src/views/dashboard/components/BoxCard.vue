<template>
  <div>
    <el-card>
      <div class="card-img">
        <img style="width: 100%" src="../../../assets/egg.png" />
      </div>
      <div v-for="item in progressOptions" :key="item.label">
        <span>{{item.label}}</span>
        <el-progress :percentage="item.value"></el-progress>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'BoxCard',

  props: {
  },

  data () {
    return {
      progressOptions: [
        {
          label: 'Vue',
          value: 70
        },
        {
          label: 'Javascript',
          value: 50
        },
        {
          label: 'Css',
          value: 60
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.card-img {
  transition: all .2s;
  &:hover {
    transform: scale(1.3);
    filter: contrast(200%);
  }
}
</style>
