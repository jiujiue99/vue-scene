<template>
  <div class="phone-pagination">
    <a class="goto-page go-previous hover" @click="handlePrePage"><i
        class="b-icon b-previous-p"></i></a>
    <div class="cur-page">{{currentPageIndex + 1}} / {{pages.length}}</div>
    <a class="goto-page go-next hover" @click="handleNextPage"><i
        class="b-icon b-next-p"></i></a>
  </div>
</template>

<script>
import {
    mapGetters
  } from 'vuex';

export default {
  computed: {
    ...mapGetters(['VueEventBus', 'currentPageIndex', 'pages']),
    handlePrePage(){
      return _.throttle(() => {
        this.VueEventBus.$emit('btnTurnPage', { opt: 'pre' });
      }, 500);
    },
    handleNextPage(){
      return _.throttle(() => {
        if(this.pages[this.currentPageIndex].pageOption.banTurnPage){
          return;
        }
        this.VueEventBus.$emit('btnTurnPage', { opt: 'next' });
      }, 500);
    },
  }
}
</script>
