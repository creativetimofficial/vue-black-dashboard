import DemoBlock from './demo-block/demo-block'
import * as Components from '@/components/index'
import LineChart from '@/components/Charts/LineChart'
import BarChart from '@/components/Charts/BarChart'
import Dashboard from '@/plugins/blackDashboard'
import VueClipboard from 'vue-clipboard2'
import './docs.css'
import './doc_styles.scss'
import getElements from './utils/get-sidebar-elements';

export default ({
                  Vue, // the version of Vue being used in the VuePress app
                  options, // the options for the root Vue instance
                  router, // the router instance for the app
                  siteData
                }) => {
  Vue.use(Dashboard)
  Vue.use(VueClipboard);
  Vue.component('demo-block', DemoBlock);
  Vue.component(LineChart.name, LineChart);
  Vue.component(BarChart.name, BarChart);
  let componentEntries = Object.entries(Components);
  for(let [name, component] of componentEntries) {
    Vue.component(component.name || name, component)
  }
  Vue.prototype.$docs = Object.values(Components);
  let docComponents = getElements(componentEntries);
  siteData.themeConfig.sidebar = siteData.themeConfig.sidebar.concat(docComponents);
}
