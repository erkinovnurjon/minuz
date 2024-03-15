<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0" style="background-color: white">
      <!-- Brand logo-->
      <b-link
        class="brand-logo"
        style="display: flex; justify-content: center; width: 65%"
      >
        <!-- <vuexy-logo style="z-index:9999;overflow:auto;width : 120px;height:40px" /> -->
        <h2
          class="brand-text text-primary text-center"
          style="text-transform: uppercase"
        >
          O'zbekiston Respublikasi sport vazirligi
        </h2>
      </b-link>
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col lg="8" class="d-none d-lg-flex align-items-center p-5">
        <div
          class="w-100 d-lg-flex align-items-center justify-content-center px-5"
        >
          <img class="offMobile" src="../../../assets/sportMain.svg" alt="" />
          <!-- <b-img width="900px" fluid :src="imgUrl" alt="Login V2" /> -->
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Login-->
      <b-col
        lg="4"
        class="auth-bg px-2 p-lg-5 w-100"
        style="box-shadow: 5px 3px 17px #abaaaa"
      >
        <div>
          <div class="d-flex justify-content-center">
            <img
              class=""
              src="../../../assets/1-logo.png"
              style="width: 270px"
              alt=""
            />
          </div>
          <b-col
            sm="8"
            md="6"
            lg="12"
            class="px-xl-2 mx-auto"
            style="margin-top: 240px"
          >
            <div class="">
              <b-card-title
                title-tag="h2"
                class="font-weight-bold mb-1"
                style="text-transform: uppercase; margin-bottom: 25px"
              >
                {{ $t("auth") }}
              </b-card-title>
              <b-card-text class="mb-2">
                {{ $t("Sign In to your account") }}
              </b-card-text>

              <!-- form -->
              <validation-observer ref="loginValidation">
                <b-form class="auth-login-form mt-2" @submit.prevent>
                  <!-- email -->
                  <b-form-group :label="$t('username')" label-for="login-email">
                    <validation-provider
                      #default="{ errors }"
                      name="username"
                      rules="required"
                    >
                      <b-form-input
                        id="login-email"
                        v-model="login.username"
                        :state="errors.length > 0 ? false : null"
                        name="login-email"
                        :placeholder="$t('username')"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>

                  <!-- forgot password -->
                  <b-form-group>
                    <div class="d-flex justify-content-between">
                      <label for="login-password"> {{ $t("Password") }} </label>
                      <b-link :to="{ name: 'auth-forgot-password' }">
                        <small> {{ $t("ForgotPassword") }} </small>
                      </b-link>
                    </div>
                    <validation-provider
                      #default="{ errors }"
                      name="Password"
                      rules="required"
                    >
                      <b-input-group
                        class="input-group-merge"
                        :class="errors.length > 0 ? 'is-invalid' : null"
                      >
                        <b-form-input
                          id="login-password"
                          v-model="login.password"
                          :state="errors.length > 0 ? false : null"
                          class="form-control-merge"
                          :type="passwordFieldType"
                          name="login-password"
                          placeholder="············"
                        />
                        <b-input-group-append is-text>
                          <feather-icon
                            class="cursor-pointer"
                            :icon="passwordToggleIcon"
                            @click="togglePasswordVisibility"
                          />
                        </b-input-group-append>
                      </b-input-group>
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>

                  <!-- checkbox -->
                  <!-- <b-form-group>
                    <b-form-checkbox
                      id="remember-me"
                      v-model="status"
                      name="checkbox-1"
                    >
                      Remember Me
                    </b-form-checkbox>
                  </b-form-group> -->

                  <!-- submit buttons -->

                  <!-- !!!!!!!!!  LOCAL BILAN SERVER AJRATILDI -->
                  <b-row>
                    <b-col>
                      <b-button
                        type="submit"
                        v-if="isLocal"
                        variant="primary"
                        block
                        @click="validationForm"
                        :disabled="Loading"
                      >
                        <b-spinner v-if="Loading" small></b-spinner>
                        {{ $t("SignIn") }}
                      </b-button>
                      <b-button
                        v-if="!isLocal"
                        type="submit"
                        variant="primary"
                        block
                        @click="Sign"
                        :disabled="Loading"
                      >
                        <b-spinner v-if="Loading" small></b-spinner>
                        {{ $t("SignIn") }}
                      </b-button>
                    </b-col>
                    <b-col>
                      <b-button
                        @click="SignbyOneId"
                        :disabled="oneIdLoading"
                        variant="primary"
                        block
                      >
                        <b-spinner
                          small
                          class="mr-2"
                          v-if="oneIdLoading"
                        ></b-spinner>
                        {{ $t("signbyoneid") }}
                      </b-button>
                    </b-col>
                  </b-row>
                </b-form>
              </validation-observer>

              <!-- <b-card-text class="text-center mt-2">
                <span>New on our platform? </span>
                <b-link :to="{name:'page-auth-register-v2'}">
                  <span>&nbsp;Create an account</span>
                </b-link>
              </b-card-text> -->

              <!-- divider -->
              <!-- <div class="divider my-2">
                <div class="divider-text">
                  or
                </div>
              </div> -->

              <!-- social buttons -->
              <!-- <div class="auth-footer-btn d-flex justify-content-center">
                <b-button
                  variant="facebook"
                  href="javascript:void(0)"
                >
                  <feather-icon icon="FacebookIcon" />
                </b-button>
                <b-button
                  variant="twitter"
                  href="javascript:void(0)"
                >
                  <feather-icon icon="TwitterIcon" />
                </b-button>
                <b-button
                  variant="google"
                  href="javascript:void(0)"
                >
                  <feather-icon icon="MailIcon" />
                </b-button>
                <b-button
                  variant="github"
                  href="javascript:void(0)"
                >
                  <feather-icon icon="GithubIcon" />
                </b-button>
              </div> -->
              <b-modal
                v-model="sms.trusteddevice"
                hide-footer
                no-close-on-backdrop
                :title="$t('SmsCode')"
              >
                <b-alert show variant="success">
                  <p class="p-1">
                    {{
                      $t("SendSmmYourPhone", { phonenumber: sms.phoneNumber })
                    }}
                  </p>
                </b-alert>
                <b-row>
                  <b-col>
                    <label for=""> {{ $t("SmsCode") }} </label>
                    <b-form-input
                      maxlength="6"
                      v-model="sms.smscode"
                    ></b-form-input>
                  </b-col>
                </b-row>
                <b-row class="mt-2">
                  <b-col class="text-center">
                    <b-button
                      variant="danger"
                      @click="sms.trusteddevice = false"
                      class="mr-2"
                    >
                      <feather-icon icon="XIcon"> </feather-icon>
                      {{ $t("Cancel") }}
                    </b-button>
                    <b-button variant="success" @click="SignTwoFactor">
                      <b-spinner small v-if="SignTwoFactorLoading"></b-spinner>
                      <feather-icon
                        v-if="!SignTwoFactorLoading"
                        icon="CheckSquareIcon"
                      ></feather-icon>
                      {{ $t("SignIn") }}
                    </b-button>
                  </b-col>
                </b-row>
              </b-modal>
            </div>
          </b-col>
        </div>
      </b-col>
      <!-- /Login-->
    </b-row>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { ValidationProvider, ValidationObserver } from "vee-validate";
import VuexyLogo from "@core/layouts/components/Logo.vue";
import {
  BSpinner,
  BRow,
  BCol,
  BLink,
  BFormGroup,
  BFormInput,
  BInputGroupAppend,
  BInputGroup,
  BFormCheckbox,
  BCardText,
  BCardTitle,
  BImg,
  BForm,
  BButton,
  BModal,
  BAlert,
} from "bootstrap-vue";
import { required, email } from "@validations";
import { togglePasswordVisibility } from "@core/mixins/ui/forms";
import store from "@/store/index";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import AccountService from "@/services/others/account.service";
import ApiService from "@/services/api.service";
export default {
  components: {
    BRow,
    BCol,
    BLink,
    BFormGroup,
    BFormInput,
    BInputGroupAppend,
    BInputGroup,
    BFormCheckbox,
    BCardText,
    BCardTitle,
    BImg,
    BForm,
    BButton,
    VuexyLogo,
    ValidationProvider,
    BSpinner,
    ValidationObserver,
    BModal,
    BAlert,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      status: "",
      password: "",
      userEmail: "",
      sideImg: require("@/assets/images/sportMain.png"),
      // validation rulesimport store from '@/store/index'
      required,
      email,
      Loading: false,
      login: {
        username: "",
        password: "",
      },
      sms: {
        trusteddevice: false,
        phoneNumber: "",
      },
      SignTwoFactorLoading: false,
      oneIdLoading: false,
    };
  },
  created() {
    const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get("code");
    console.log(code);
    if (!!code) {
      localStorage.setItem("code", code);
    }
    const redirectUrl = urlParams.get("redirectUrl");
    const localCode = localStorage.getItem("code");
    if (localCode != "null" && localCode != null) {
      this.oneIdLoading = true;
      AccountService.OneIdLogin({
        code: localCode,
        redirectUrl: this.$clientUrl,
      })
        .then((res) => {
          this.oneIdLoading = false;
          this.$i18n.locale = res.data.user?.lang;
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          this.$store.dispatch("auth/login", res.data);
          // if(res.data.token || res.data.token != 'fake'){
          //   ApiService.setHeader();
          // }

          this.$router.push(
            this.$route.query.redirectFrom || {
              path: "/",
            }
          );
        })
        .catch((error) => {
          this.oneIdLoading = false;
          this.makeToast(error.response.data.error, "danger");
          console.log(error);
        });
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === "password" ? "EyeIcon" : "EyeOffIcon";
    },
    isLocal() {
      if (window.location.href.indexOf("http://localhost") > -1) {
        return true;
      } else {
        return false;
      }
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === "dark") {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require("@/assets/images/sportMain.png");
        return this.sideImg;
      }
      return this.sideImg;
    },
  },
  methods: {
    SignbyOneId() {
      window.location.replace(
        "https://sso.egov.uz/sso/oauth/Authorization.do?response_type=one_code&client_id=admin-qurilish_sport_uz&redirect_uri=" +
          this.$clientUrl +
          "&scope=vakansiya.edu.uz&state=testState"
      );
    },
    validationForm() {
      this.$refs.loginValidation.validate().then((success) => {
        if (success) {
          this.Loading = true;
          AccountService.Login(this.login)
            .then((res) => {
              localStorage.setItem("auth_token", res.data.token);
              localStorage.setItem("user_info", JSON.stringify(res.data.user));
              this.$router.push({ path: "/" });
              this.$store.dispatch(
                "auth/setOrganizationtype",
                res.data.user.organizationtypeid
              );
              // localStorage.setItem("auth_token", res.data.token);
              // localStorage.setItem("locale", res.data.user?.lang)
              // this.$i18n.locale = res.data.user?.lang
              // localStorage.setItem(
              //   "user_info",
              //   JSON.stringify(res.data.user)
              // );
              // this.$store.dispatch("auth/login", res.data);
              // ApiService.setHeader();
              // this.Loading = false;
              // this.$router.push("/");
            })
            .catch((error) => {
              this.Loading = false;
              this.$message(error.response);
            });
        }
      });
    },
    Sign() {
      this.$refs.loginValidation.validate().then((success) => {
        if (success) {
          this.Loading = true;
          AccountService.SignIn(this.login)
            .then((res) => {
              if (res.data.user) {
                localStorage.setItem("user", JSON.stringify(res.data.user));
                this.$store.dispatch("auth/login", res.data);
              }
              this.Loading = false;

              if (res.data.trusteddevice) {
                this.$router.push("/");
              }
              if (!res.data.trusteddevice) {
                this.sms.trusteddevice = true;
                this.sms.phoneNumber = res.data.phoneNumber;
                this.sms.smscode = "";
              }
            })
            .catch((error) => {
              this.$message(error.response);
              this.Loading = false;
            });
        }
      });
    },
    SignTwoFactor() {
      if (
        this.sms.smscode === undefined ||
        this.sms.smscode === null ||
        this.sms.smscode === ""
      ) {
        this.makeToast(this.$t("SmsCodeNotCorrect"), "danger");
        return false;
      }
      this.SignTwoFactorLoading = true;
      AccountService.SignInTwoFactor(this.sms)
        .then((res) => {
          this.SignTwoFactorLoading = false;
          if (res.data.user) {
            localStorage.setItem("user", JSON.stringify(res.data.user));
            this.$store.dispatch("auth/login", res.data);
            this.$router.push("/");
          }
        })
        .catch((error) => {
          this.$message(error.response);
          this.SignTwoFactorLoading = false;
        });
    },
    makeToast(message, variant) {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: message,
          icon: variant == "success" ? "CheckSquareIcon" : "AlertTriangleIcon",
          variant: variant,
        },
      });
    },
  },
};
</script>

<style lang="scss">
@import "@core/scss/vue/pages/page-auth.scss";
</style>
