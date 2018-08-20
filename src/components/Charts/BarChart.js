import { Bar } from 'vue-chartjs';

export default {
  name: 'bar-chart',
  extends: Bar,
  props: {
    labels: Array,
    datasets: Array,
    data: [Array, Object],
    color: {
      type: String,
      default: ''
    },
    extraOptions: Object,
    title: {
      type: String,
      default: ''
    },
    gradientColors: {
      type: Array,
      deafault: () => ['rgba(72,72,176,0.2)', 'rgba(72,72,176,0.0)', 'rgba(119,52,169,0)'],
      validator: val =>{
        return val.length > 2;
      }
    },
  },
  mounted() {
    let fallBackColor = '#d048b6';
    let color = this.color || fallBackColor;
    const ctx = document.getElementById(this.chartId).getContext('2d');
    const gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, this.gradientColors[0]);
    gradientStroke.addColorStop(0.2, this.gradientColors[1]);
    gradientStroke.addColorStop(0, this.gradientColors[2]); //purple colors

    this.renderChart(
      {
        labels: this.labels || [],
        datasets: this.datasets
          ? this.datasets
          : [{
              label: this.title || '',
              fill: true,
              backgroundColor: gradientStroke,
              hoverBackgroundColor: gradientStroke,
              borderColor: color,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              data: this.data || []
            }]
      },
      this.extraOptions
    );
  }
};
