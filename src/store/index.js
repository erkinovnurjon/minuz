import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import app from './app'
import appConfig from './app-config'
import verticalMenu from './vertical-menu'
import { auth } from './auth.module'
import {abilityPlugin, ability as appAbility} from './ability'
import storage from './storage'
export const ability = appAbility;
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
		storage({
			storedKeys: ['rules'],
			destroyOn: ['auth/logoutSuccess']
		}),
		abilityPlugin
	],
  modules: {
    auth,
    app,
    appConfig,
    verticalMenu
  },
  state: {
    GroupSheetFilter:{},
    AssessmentCriteriaFilter: {},
    // PageNumber: {},
    storestatusid: 0,
  },
  strict: process.env.DEV,
})
