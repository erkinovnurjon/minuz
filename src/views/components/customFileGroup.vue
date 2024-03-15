<template>
  <b-row>
    <b-col
      sm="12"
      md="12"
      lg="12"
      v-for="(item, index) in labels"
      :key="index"
      :class="$route.name == 'News' ? 'mt-3 mb-3' : 'mt-1'"
      v-show="labels.length != 0"
    >
      <div class="d-flex">
        <div class="mr-2" style="width: 100%">
          <b-form-file
            ref="fileManage"
            accept=".jpg, .png, .pdf"
            hidden
            plain
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
            @change="(e) => ChangeFile1(e, item)"
            class="ml-4"
          ></b-form-file>
          <b-button
            variant="primary"
            @click="changefileindex(item, index)"
            class="text-left"
          >
            <b-spinner
              small
              style="margin-right: 10px"
              v-if="fileLoading && spinnerindex == index"
            ></b-spinner>
            <feather-icon
              icon="PlusIcon"
              v-if="!fileLoading"
              style="margin-right: 10px"
            ></feather-icon>
            <span>{{ item.shortname }}</span>
          </b-button>
        </div>
        <div
          style="width: 100%"
          class="mr-2"
          v-for="(i, index) in items.filter(
            (el) => el.tablefileconfigid == item.id
          )"
          :key="index"
        >
          <custom-file-label
            v-if="i.Status != 3"
            @delete="i.Status = 3"
            @download="DownloadFile(i)"
            :content="i.attachmentfilename"
            :fileloading="DownloadLoading"
          >
          </custom-file-label>
          <!-- <b-button-group size="sm" v-if="i.Status != 3">
              <b-button @click="DownloadFile(i)" variant="primary"
                ><b-icon-download
                  v-if="DownloadLoading != i.attachmentfileid"
                ></b-icon-download>
                <b-spinner
                  small
                  v-if="DownloadLoading == i.attachmentfileid"
                ></b-spinner>
              </b-button>
              <b-button variant="primary">{{ i.attachmentfilename }}</b-button>
              <b-button @click="DeleteFile(i, index)" variant="danger"
                ><b-icon-trash v-if="DeleteLoading != i.attachmentfileid">
                  <b-spinner
                    small
                    v-if="DeleteLoading == i.attachmentfileid"
                  ></b-spinner> </b-icon-trash
              ></b-button>
            </b-button-group> -->
        </div>
      </div>
    </b-col>
  </b-row>
</template>
      <script>
import {
  BButton,
  BButtonGroup,
  BIcon,
  BRow,
  BCol,
  BFormFile,
} from "bootstrap-vue";
import FileManageService from "../../services/others/filemanage.service";
import customFileLabel from "../../views/components/customFileLabel.vue";
import axios from "axios";
export default {
  components: {
    BButton,
    BButtonGroup,
    BIcon,
    BRow,
    BCol,
    BFormFile,
    customFileLabel,
  },
  props: {
    labels: {
      type: Array,
      default: [],
    },
    items: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      DownloadLoading: false,
      DeleteLoading: false,
      fileLoading: false,
      axios,
    };
  },
  methods: {
    ChangeFile1(event, item) {
      if (event.target.files[0]) {
        this.$emit("change", event, item);
      }
    },
    changefileindex(item, index) {
      this.$refs.fileManage[index].$el.click();
    },
    DeleteFile(item, index) {
      if (item.Status == 1) {
        this.items.splice(index, 1);
      } else {
        this.items.forEach(function (el) {
          if (el.attachmentfileid == item.attachmentfileid) {
            item.Status = 3;
          }
        });
      }
      this.$emit("delete", this.items);
    },
    DownloadFile(item) {
      this.DownloadLoading = item.attachmentfileid;
      FileManageService.Get(item.attachmentfileid, 1)
        .then((res) => {
          this.DownloadLoading = false;
          this.forceFileDownload(
            res,
            item.attachmentfilename + "." + item.attachmentfileid.split(".")[1]
          );
        })
        .catch((error) => {
          this.DownloadLoading = false;
          this.makeToast(error.response.data.error, this.$t("error"), "danger");
        });
    },
    forceFileDownload(response, name) {
      var headers = response.headers;
      var blob = new Blob([response.data]);
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;

      link.setAttribute("download", name); //or any other extension
      document.body.appendChild(link);
      link.click();
    },
  },
};
</script>