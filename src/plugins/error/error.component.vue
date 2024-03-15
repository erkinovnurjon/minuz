<template>
  <div>
      <b-modal   v-model="visible" size="xl"  hide-footer header-bg-variant="danger" > 
          <template #modal-title>
              <b class="text-white">error</b>
          </template>
        <b-row>
            <b-col>
                <b> *title : </b> <span> {{ data.error }}  </span>
            </b-col>
        </b-row>
        <b-row class="mt-1">
            <b-col>
                <b-button variant="outline-primary" size="sm" @click="collapse = !collapse"> detail  <feather-icon icon="ChevronsRightIcon"></feather-icon> </b-button>
            </b-col>
            <b-col class="text-right">
                <b-button variant="success" @click="Copy" size="sm"> <feather-icon icon="CopyIcon"></feather-icon> Copy </b-button>
            </b-col>
        </b-row>
        <b-row class="mt-2">
            <b-col>
                <b-collapse  v-model="collapse">
                    <b-card style="overflow-y:scroll;height:calc(100vh - 230px)">
                       <span ref="text"> <pre>  {{ data.error }} </pre> </span> 
                    </b-card>
                </b-collapse>
            </b-col>
        </b-row>
      </b-modal>
  </div>
</template>

<script>
import { BModal,BRow,BCol,BCollapse,BCard,BButton } from 'bootstrap-vue'
export default {
    name : 'ErrorMessage',
    components : {BModal,BRow,BCol,BCollapse,BCard,BButton},
    props : {
        visible : {
            type : Boolean,
            default : false
        },
        data : {
            type : Object,
            default : () => {}
        }
    },
    data(){
        return{
            collapse : false
        }
    },
    created(){
    },
    methods:{
        Copy(){
            navigator.clipboard.writeText(this.data.detail)
            this.$notification("SuccessCopy",'success')
        }
    }
}
</script>

<style>

</style>
