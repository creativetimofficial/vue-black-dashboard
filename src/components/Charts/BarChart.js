import { Bar, mixins } from 'vue-chartjs';

export default {
  name: 'bar-chart',
  extends: Bar,
  mixins: [mixins.reactiveProp],
  props: {
    extraOptions: Object,
    gradientColors: {
      type: Array,
      default: () => ['rgba(72,72,176,0.2)', 'rgba(72,72,176,0.0)', 'rgba(119,52,169,0)'],
      validator: val =>{
        return val.length > 2;
      }
    },
    gradientStops: {
      type: Array,
      default: () => [1, 0.4, 0],
      validator: val =>{
        return val.length > 2;
      }
    }
  },
  methods: {
    updateGradients() {
      const ctx = document.getElementById(this.chartId).getContext('2d');
      const gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(this.gradientStops[0], this.gradientColors[0]);
      gradientStroke.addColorStop(this.gradientStops[1], this.gradientColors[1]);
      gradientStroke.addColorStop(this.gradientStops[2], this.gradientColors[2]);
      if(this.chartData){
        this.chartData.datasets.forEach(set => {
          set.backgroundColor = gradientStroke;
        });
      }
    }
  },
  mounted() {
    this.updateGradients();
    this.renderChart(
      this.chartData,
      this.extraOptions
    );
  },
  watch: {
    chartData(newVal, oldVal) {
      this.updateGradients();
      if(oldVal === null) {
        this.renderChart(
          this.chartData,
          this.extraOptions
        );
      }
    }
  }
};
