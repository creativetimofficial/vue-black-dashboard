<template>
  <div>

    <div class="row">
      <div class="col-12">
        <card type="chart" card-header-classes="text-left">
          <template slot="header">
            <div class="row">
              <div class="col-sm-6 text-right">
                <h5 class="card-category">Total Shipments</h5>
                <h2 class="card-title">Performance</h2>
              </div>
              <div class="col-sm-6">
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                  <label v-for="(option, index) in bigLineChart.categories"
                         :key="option"
                         class="btn btn-sm btn-primary btn-simple"
                         :class="{active: bigLineChart.activeIndex === index}"
                         :id="index">
                    <input type="radio"
                           @click="initBigChart(index)"
                           name="options" autocomplete="off"
                           :checked="bigLineChart.activeIndex === index">
                    {{option}}
                  </label>
                </div>
              </div>
            </div>
          </template>
          <div class="chart-area">
            <line-chart style="height: 100%"
                        :chart-data="bigLineChart.chartData"
                        :gradient-color="bigLineChart.gradientColors"
                        :gradient-stops="bigLineChart.gradientStops"
                        :extra-options="bigLineChart.extraOptions">
            </line-chart>
          </div>
        </card>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <card type="chart" class="text-right">
          <template slot="header">
            <h5 class="card-category">Total Shipments</h5>
            <h3 class="card-title"><i class="tim-icons icon-bell-55 text-primary"></i> 763,215</h3>
          </template>
          <div class="chart-area">
            <line-chart style="height: 100%"
                        :chart-data="purpleLineChart.chartData"
                        :gradient-color="purpleLineChart.gradientColors"
                        :gradient-stops="purpleLineChart.gradientStops"
                        :extra-options="purpleLineChart.extraOptions">
            </line-chart>
          </div>
        </card>
      </div>
      <div class="col-lg-4">
        <card type="chart" class="text-right">
          <template slot="header">
            <h5 class="card-category">Daily Sales</h5>
            <h3 class="card-title"><i class="tim-icons icon-delivery-fast text-info "></i> 3,500€</h3>
          </template>
          <div class="chart-area">
            <bar-chart style="height: 100%"
                       :chart-data="blueBarChart.chartData"
                       :gradient-color="blueBarChart.gradientColors"
                       :gradient-stops="blueBarChart.gradientStops"
                       :extra-options="blueBarChart.extraOptions">
            </bar-chart>
          </div>
        </card>
      </div>
      <div class="col-lg-4">
        <card type="chart" class="text-right">
          <template slot="header">
            <h5 class="card-category">Completed Tasks</h5>
            <h3 class="card-title"><i class="tim-icons icon-send text-success "></i> 12,100K</h3>
          </template>
          <div class="chart-area">
            <line-chart style="height: 100%"
                        :chart-data="greenLineChart.chartData"
                        :gradient-color="greenLineChart.gradientColors"
                        :gradient-stops="greenLineChart.gradientStops"
                        :extra-options="greenLineChart.extraOptions">
            </line-chart>
          </div>
        </card>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-12">
        <card type="tasks" class="text-right">
          <template slot="header">
            <h6 class="title d-inline">Tasks(5)</h6>
            <p class="card-category d-inline">today</p>
            <div class="dropdown float-left">
              <button type="button" class="btn btn-link dropdown-toggle btn-icon" data-toggle="dropdown">
                <i class="tim-icons icon-settings-gear-63"></i>
              </button>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#pablo">Action</a>
                <a class="dropdown-item" href="#pablo">Another action</a>
                <a class="dropdown-item" href="#pablo">Something else</a>
              </div>
            </div>
          </template>
          <div class="table-full-width table-responsive">
            <task-list></task-list>
          </div>
        </card>
      </div>
      <div class="col-lg-6 col-md-12">
        <card class="text-right">
          <h4 slot="header" class="card-title"> Simple Table</h4>
          <div class="table-responsive">
            <user-table></user-table>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
  import LineChart from '@/components/Charts/LineChart';
  import BarChart from '@/components/Charts/BarChart';
  import * as chartConfigs from '@/components/Charts/config';
  import TaskList from './Dashboard/TaskList';
  import UserTable from './Dashboard/UserTable';

  export default {
    components: {
      LineChart,
      BarChart,
      TaskList,
      UserTable
    },
    data() {
      return {
        bigLineChart: {
          allData: [
            [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100],
            [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120],
            [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130]
          ],
          activeIndex: 0,
          chartData: null,
          extraOptions: chartConfigs.purpleChartOptions,
          gradientColors: ['rgba(72,72,176,0.1)', 'rgba(72,72,176,0.0)', 'rgba(119,52,169,0)'],
          gradientStops: [1, 0.4, 0],
          categories: ['Accounts', 'Purchases', 'Sessions']
        },
        purpleLineChart: {
          extraOptions: chartConfigs.purpleChartOptions,
          chartData: {
            labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
            datasets: [{
              label: "Data",
              fill: true,
              borderColor: '#d048b6',
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: '#d048b6',
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: '#d048b6',
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: [80, 100, 70, 80, 120, 80],
            }]
          },
          gradientColors: ['rgba(72,72,176,0.2)', 'rgba(72,72,176,0.0)', 'rgba(119,52,169,0)'],
          gradientStops: [1, 0.2, 0],
        },
        greenLineChart: {
          extraOptions: chartConfigs.greenChartOptions,
          chartData: {
            labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV'],
            datasets: [{
              label: "My First dataset",
              fill: true,
              borderColor: '#00d6b4',
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: '#00d6b4',
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: '#00d6b4',
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: [90, 27, 60, 12, 80],
            }]
          },
          gradientColors: ['rgba(66,134,121,0.15)', 'rgba(66,134,121,0.0)', 'rgba(66,134,121,0)'],
          gradientStops: [1, 0.4, 0],
        },
        blueBarChart: {
          extraOptions: chartConfigs.barChartOptions,
          chartData: {
            labels: ['USA', 'GER', 'AUS', 'UK', 'RO', 'BR'],
            datasets: [{
              label: "Countries",
              fill: true,
              borderColor: '#1f8ef1',
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              data: [53, 20, 10, 80, 100, 45],
            }]
          },
          gradientColors: ['rgba(29,140,248,0.2)', 'rgba(29,140,248,0.0)', 'rgba(29,140,248,0)'],
          gradientStops: [1, 0.4, 0],
        }
      }
    },
    methods: {
      initBigChart(index) {
        this.bigLineChart.chartData = {
          datasets: [{
            label: "My First dataset",
            fill: true,
            borderColor: '#d346b1',
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: '#d346b1',
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: '#d346b1',
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.bigLineChart.allData[index]
          }],
          labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        }
        this.bigLineChart.activeIndex = index;
      }
    },
    mounted() {
      this.$rtl.enableRTL();
      this.initBigChart(0);
    },
    beforeDestroy() {
      this.$rtl.disableRTL();
    }
  };
</script>
<style>
</style>
