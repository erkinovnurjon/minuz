// import Vue from 'vue'
// import VueI18n from 'vue-i18n'

// Vue.use(VueI18n)
// function loadLocaleMessages() {
//   const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
//   const messages = {}
//   locales.keys().forEach(key => {
//     const matched = key.match(/([A-Za-z0-9-_]+)\./i)
//     if (matched && matched.length > 1) {
//       const locale = matched[1]
//       messages[locale] = locales(key)
//     }
//   })
//   return messages
// }
// export default new VueI18n({
//   locale: localStorage.getItem('locale') || 'uz_latn',
//   fallbackLocale: 'uz_latn',
//   messages: loadLocaleMessages(),
// })


import Vue from "vue";
import VueI18n from "vue-i18n";

import uz_latn from "./locales/uz_latn.json";
import uz_cyrl from "./locales/uz_cyrl.json";
import ru from "./locales/ru.json";
// import uzLang from "element-ui/lib/locale/lang/uz-UZ";
// import ruLang from "element-ui/lib/locale/lang/ru-RU";

Vue.use(VueI18n);
// uzLang.el.select = {
//   loading: "Yuklanmoqda",
//   noMatch: "Mos ma'lumot yo'q",
//   noData: "Ma'lumot yo'q",
//   placeholder: "Tanlang",
// };
const locale = localStorage.getItem("locale") || "uz_cyrl";

const messages = {
  uz_latn: {
    ...uz_latn,
    // ...uzLang,
  },
  uz_cyrl: {
    ...uz_cyrl,
  },
  ru: {
    ...ru,
    // ...ruLang,
  },
};

const i18n = new VueI18n({
  locale,
  messages,
});

export default i18n;

