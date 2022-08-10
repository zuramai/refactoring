import DefaultTheme from 'vitepress/theme'
import './tailwind.css'
import './custom.css'
import Tabs from '../../../components/Tabs/Tabs.vue'

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component('Tabs', Tabs)
    }
}