<template>
  <div class="pagination">
    <div class="prev"><a  href="#" v-if="!(this.currentPage == 1)" @click="changePage(prevPage)">&lt;&lt;</a></div>
    <div class="pageControl">
      <ul>
        <li v-for="(page,index) in pages" @click="changePage(page)" :key="index">
          <a hfer="#" :class="{currentPage: currentPage == page}">
          {{page}}
          </a>
        </li>
      </ul>
    </div>
    <div class="next"><a href="#" v-if="!(this.currentPage === this.totalPages)" @click="changePage(nextPage)">&gt;&gt;</a></div>

  </div>
</template>

<script>
export default {
  name: 'Pagination',

  model: {
    prop: 'currentPage',
    event: 'pageChanged'
  },
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    totalUsers: {
      type: Number,
      default: 0
    },
    currentUsersShown: {
      type: Number,
      required: true
    },
    pageRange: {
      type: Number,
      default: 2
    }
  },
  computed: {
    pages() {
      var pages = []
      for (var i = this.rangeStart; i <= this.rangeEnd; i++) {
        pages.push(i)
      }
      return pages
    },
    nextPage() {
      return this.currentPage + 1
    },
    prevPage() {
      return this.currentPage - 1
    },
    totalPages() {
      return Math.ceil(this.totalUsers / this.currentUsersShown)
    },
    rangeStart() {
      var start = this.currentPage - this.pageRange
      return start < 1 ? 1 : start
    },
    rangeEnd() {
      var end = this.currentPage + this.pageRange
      return end > this.totalPages ? this.totalPages : end
    }
  },
  methods: {
    changePage: function(page) {
      this.$emit('pageChanged', page)
    }
  }
}
</script>
<style scoped>
* {
  box-sizing: border-box;
}

body {
  background-color: #f5f6f7;
  display: flex;
  justify-content: center;
  padding: 120px 0 80px;
}

.pagination {
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: start;
  margin: 30px auto 30px;
  padding: 0 15px;
  max-width: 1280px;
}

.prev,
.next {
  width: 70px;
}
.pagination a,
.pagination span {
  display: block;
  text-align: center;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 300;
  line-height: 42px;
  height: 44px;
  color: #999;
  font-size: 18px;
}
.pagination a {
  padding: 0 20px;
  max-width: 160px;
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid #ccc;
  text-decoration: none;
  margin: 0 6px;
  transition: all 0.2s ease-in-out;
}
.pagination a.currentPage {
  border-color: #ea4c89;
  color: #ea4c89;
}
@media (hover) {
  .pagination a:hover {
    border-color: #ea4c89;
    color: #ea4c89;
  }
}
.pageControl {
  display: flex;
  justify-content: start;
}
.pageControl ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.pageControl li {
  display: inline-block;
}
</style>
