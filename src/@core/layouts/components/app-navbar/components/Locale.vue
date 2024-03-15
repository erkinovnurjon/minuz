<template>
  <b-nav-item-dropdown
    id="dropdown-grouped"
    variant="link"
    class="dropdown-language"
    right
  >
    <template #button-content>
      <!-- <b-img
        :src="currentLocale.img"
        height="14px"
        width="22px"
        :alt="currentLocale.locale"
      /> -->
      <span class="ml-50 text-body">{{ currentLocale.name }}</span>
    </template>
    <b-dropdown-item
      v-for="localeObj in locales"
      :key="localeObj.locale"
      @click="ChangeLang(localeObj)"
    >
      <!-- <b-img
        :src="localeObj.img"
        height="14px"
        width="22px"
        :alt="localeObj.locale"
      /> -->
      <span class="ml-50">{{ localeObj.name }}</span>
    </b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
import { BNavItemDropdown, BDropdownItem, BImg } from 'bootstrap-vue'
import AccountService from '@/services/others/account.service'

export default {
  components: {
    BNavItemDropdown,
    BDropdownItem,
    BImg,
  },
  // ! Need to move this computed property to comp function once we get to Vue 3
  computed: {
    currentLocale() {
      return this.locales.find(l => l.locale === this.$i18n.locale)
    },
  },
  methods:{
    ChangeLang(item){
      this.$i18n.locale = item.locale
      localStorage.setItem('locale',item.locale)
      AccountService.SetUserLanguage({ lang : item.locale }).then(res => {
          window.location.reload()
      })
      

    }
  },
  setup() {
    /* eslint-disable global-require */
    const locales = [
      {
        locale: 'uz_cyrl',
        name: 'Ўзбек тили',
      },
      {
        locale: 'uz_latn',
        name: "O'zbek tili",
      },
      {
        locale: 'ru',
        name: 'Русский язык',
      },
    ]

    return {
      locales,
    }
  },
}
</script>

<style>

</style>
