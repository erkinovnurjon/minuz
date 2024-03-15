<template>
	<div>
        <b-row>
            <b-col>
                <b-card>
                    <div class="form-group form-row mb-0">
                        <label class="col-form-label col-sm-5 d-flex align-items-center" for>{{
                            $t("shortname")
                        }}</label>
                        <div class="col-sm-7">
                            <b-form-input v-model="role.ShortName"></b-form-input>
                        </div>
                    </div>
                    <div class="form-group form-row mb-0">
                        <label class="col-form-label col-sm-5 d-flex align-items-center" for>{{
                            $t("fullname")
                        }}</label>
                        <div class="col-sm-7">
                            <b-form-input v-model="role.FullName" ></b-form-input>
                        </div>
                    </div>
                </b-card>
            </b-col>
            <b-col>
                <b-card>
                    <div class="form-group form-row mb-0">
                        <label class="col-form-label col-sm-5 d-flex align-items-center" for>{{$t('isdefault')}}</label>
                        <div class="col-sm-7">
                            <b-form-checkbox v-model="role.IsDefault" name="check-button1" switch>
						      
						    </b-form-checkbox>
                        </div>
                    </div>
                    <div class="form-group form-row mb-0">
                        <label class="col-form-label col-sm-5 d-flex align-items-center" for>{{
                            $t("isadmin")
                        }}</label>
                        <div class="col-sm-7">
                            <b-form-checkbox v-model="role.IsAdmin" name="check-button" switch>
						     
						    </b-form-checkbox>
                        </div>
                    </div>
                </b-card>
            </b-col>
        </b-row>
		<b-card>
			<b-card-body>
				<b-row>
					<b-col>
						<div v-for="(value, index) in moduleList" class="row" :key="index"
							 style="padding: 3px;border:solid 1px #a4a8ab;margin-top:25px">
							<div class="form-check col-sm-12" style="margin-top: -15px;">
								<mark style="background-color: #f5f5f5">  </mark>

								<span class="form-check-label" style="color: green; ">
									<mark style="background-color: #f5f5f5"> <feather-icon  icon="CheckIcon" style="margin-right : 5px"></feather-icon>{{value.objectname }}</mark>
								</span>


							</div>

							<div v-for="(child,el) in value.modulelist" class="col-sm-3"
								 style="margin-left: 50px;padding-top: 5px" :key="child.id + el">
								<input :id="'child' + child.id" class="form-check-input"  type="checkbox"
									   :value="child.id"
									   v-model="role.ModuleIDList" @change="onChangeCheckbox(child.id)"
								>

								<label style="margin-left : 25px;color: #000;" :for="'child' + child.id" >{{child.name}}</label>
							</div>

						</div>
					</b-col>
				</b-row>
				<b-row>
					<b-col>
						<b-button variant="success" :disabled="loadingButton" @click="saveRole()"
								  class="float-right mt-5">
							<b-spinner small v-if="loadingButton"></b-spinner>
							{{ $route.params.id > 0 ? $t('Save') : $t('create') }}
						</b-button>
					</b-col>

				</b-row>

			</b-card-body>

		</b-card>
	</div>
</template>
<script>
	import HelperService from "@/services/others/helper.service";
	import RoleService from "@/services/managment/role.service";
    import { BCard,BCardHeader,BCardBody,BRow,BCol,BButton,BSpinner,BFormCheckbox,BFormInput } from 'bootstrap-vue'
    import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
	export default {
        components : { BCard,BCardHeader,BCardBody,BRow,BCol,BButton,BSpinner,BFormCheckbox,BFormInput },
		name: "CreateOrUpdateRole",
		data() {
			return {
                lang : '',
				moduleList: [],
				loadingButton: false,
				role: {
					ID: 0,
					ShortName: "",
					Modules: [],
					ModuleIDList:[],
					IsDefault : false,
					isadmin : false
				}

			}
		},
		methods: {
			backToList() {
				this.$router.push({name : 'role'})
			},
			onChangeCheckbox(id) {
				console.log()
			},
			checkValid() {
				let valid = false;
				if (
					(this.role.ShortName !== '' && this.role.ShortName !== null)
				) {
					valid = true;
				} else {
					valid = false;
				}
				return valid
			},
            makeToast(message,variant){
                this.$toast({
                    component: ToastificationContent,
                    props: {
                        title: message,
                        icon: variant == 'success' ? 'CheckSquareIcon' : 'AlertTriangleIcon',
                        variant: variant,
                    },
                })
            },
			saveRole() {
				this.loadingButton = true;
				let vm = this;
				if (this.checkValid()) {
					try {
						RoleService.Update(this.role).then(response => {
							vm.loadingButton = false;
							if (response.data.success) {
								if (this.$route.params.id) {
									vm.makeToast(vm.$t('SuccessSave'), 'success');

								} else {
									vm.makeToast(vm.$t('SuccessSave'), 'success');
								}
								setTimeout(function () {
									vm.$router.push({name : 'role'})
								}, 500)

							} else {
								vm.makeToast(vm.$t('error'), 'danger');
							}
						})
					} catch (e) {
						this.loadingButton = false;
						let response = JSON.parse(e.request.response);
						this.makeToast(response.error, 'danger');
					}
				} else {
					this.loadingButton = false;
					this.makeToast(this.$t('messages.all_field_required'),  'danger');
				}

			},
			getModules() {
				HelperService.GetModuleList(this.lang).then(response => {
					this.moduleList = response.data;
					
				})
			},
			getRole() {
				if(this.$route.params.id > 0){
					RoleService.Get(this.$route.params.id).then(response => {
						this.role = response.data;
						
					})
				}
			}
		},
		created() {
            this.lang = localStorage.getItem('locale') || 'ru'
			this.getModules();
			this.getRole();
		}
	}
</script>
<style scoped>
	legend {
		background-color: #000;
		color: #fff;
		padding: 3px 6px;
	}

	.output {
		font: 1rem 'Fira Sans', sans-serif;
	}

	input {
		margin: .4rem;
	}

</style>