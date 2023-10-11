<template>
  <div>
    <el-row type="flex" justify="end">
      <el-col :span="4">
        <el-select v-model="currentYear" @change="updateCalendar">
          <el-option v-for="item in years" :key="item" :label="item" :value="item">{{ item }}</el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select v-model="currentMonth" @change="updateCalendar">
          <el-option v-for="item in 12" :key="item" :label="item" :value="item">{{ item }}</el-option>
        </el-select>
      </el-col>
    </el-row>
    <!-- 日历 -->
    <el-calendar v-model="currentDate">
      <template slot="dateCell" slot-scope="{date}">
        <span>{{ date.getDate() }}</span>
        <span v-if="date.getDay()===6 ||date.getDay()===0">休</span>
      </template>
    </el-calendar>
  </div>
</template>

<script>
export default {
  name: 'WorkCalendar',
  data() {
    return {
      currentYear: 2022, // 当前年份
      currentMonth: 10, // 当前月份
      years: [],
      currentDate: new Date()

    }
  },
  created() {
    this.initYear()
  },
  methods: {
    initYear() {
      const data = new Date()
      this.currentYear = data.getFullYear()
      this.years = Array(11).fill(this.currentYear).map((item, index) => {
        return item - 5 + index
      })
    },
    updateCalendar() {
      this.currentDate = this.currentYear + '-' + this.currentMonth
    }
  }

}
</script>

<style scoped lang="scss">
::v-deep .el-calendar{
  .el-calendar__header{
    display: none;
  }
  .el-calendar-table td {
    border: none;
 }
}
</style>

