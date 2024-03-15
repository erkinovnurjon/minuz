import { useUtils as useI18nUtils } from '@core/libs/i18n'
import { useUtils as useAclUtils } from '@core/libs/acl'

const { t } = useI18nUtils()
const { canViewVerticalNavMenuHeader } = useAclUtils()

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  render(h) {
    const span = h('span', {class : this.isVisible(this.item.visible) ? 'd-none' : ''}, t(this.item.header))
    const icon = h('feather-icon', { props: { icon: 'MoreHorizontalIcon', size: '18' } })
    // if (canViewVerticalNavMenuHeader(this.item)) {
      return h('li', { class: 'navigation-header text-truncate' }, [span, icon])
    // }
    return h()
  },
  methods : {
    isVisible(arr){
      var bool = null
      for(let i=0; i < arr.length; i++){
        if(arr[i] === true) return false
        bool = bool || this.$can(arr[i], 'permissions')
      }
      return !bool
    },
  }
}
