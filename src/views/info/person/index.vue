<template>
  <div>
    <b-card>
      <div class="m-2">
        <b-row>
          <b-col
            cols="12"
            md="6"
            class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
          >
            <b-button
              style="margin-left: 10px"
              variant="primary"
              :to="{ name: 'Editperson', params: { id: 0 } }"
            >
              <i class="uil uil-plus"></i> {{ $t("Add") }}
            </b-button>
          </b-col>
          <b-col cols="12" md="4">
            <b-input-group click="Refresh" class="text-right">
              <b-form-input
                v-model="filter.search"
                :placeholder="$t('search')"
              />
              <b-input-group-append>
                <b-button @click="Refresh" variant="primary">
                  <i class="uil uil-search"></i> {{ $t("search") }}
                </b-button>
              </b-input-group-append>
            </b-input-group>
          </b-col>
        </b-row>
      </div>
      <div class="mt-4">
        <b-table
          ref="refInvoiceListTable"
          :items="Data"
          responsive
          :fields="fields"
          primary-key="id"
          sticky-header="65vh"
          no-border-collapse
          :busy="isBusy"
          show-empty
          :empty-text="$t('NotFound')"
          class="position-relative"
          @sort-changed="SortChange"
        >
          <template #cell(state)="{ item }">
            <span
              :class="
                item.stateId == 1
                  ? 'badge rounded-pill bg-success'
                  : item.stateId == 2
                  ? 'badge rounded-pill bg-danger'
                  : 'badge rounded-pill bg-primary'
              "
            >
              {{ item.state }}
            </span>
          </template>
          <template #cell(actions)="{ item }">
            <div class="text-center">
              <b-link
                :id="'tooltip-edit' + item.id"
                style="margin-right: 5px"
                :to="{ name: 'Editperson', params: { id: item.id } }"
                v-b-tooltip.hover.top="$t('edit')"
              >
                <feather-icon icon="EditIcon"></feather-icon>
              </b-link>
              <b-link
                @click="$refs['DeleteModal' + item.id].show()"
                style="margin-right: 5px"
                v-b-tooltip.hover.top="$t('Delete')"
              >
                <feather-icon icon="Trash2Icon"></feather-icon>
              </b-link>
            </div>
            <b-modal
              :ref="'DeleteModal' + item.id"
              :cancel-title="$t('Cancel')"
              :ok-title="$t('Accept')"
              cancel-variant="danger"
              ok-variant="success"
              @ok="Delete(item)"
            >
              <template #modal-title>
                {{ $t("Delete") }}
                <b-spinner v-if="DeleteLoading" small></b-spinner>
              </template>
              <b-card-text>
                <h5>ID : {{ item.id }}</h5>
                <h5>{{ $t("WantDelete") }}</h5>
              </b-card-text>
            </b-modal>
          </template>
          <template v-slot:table-busy>
            <div
              class="text-center text-primary my-2"
              style="vertical-align: middle"
            >
              <b-spinner class="align-middle mr-2"></b-spinner>
              <strong>{{ $t("Loading") }}</strong>
            </div>
          </template>
        </b-table>
      </div>
      <div class="mx-2 mb-2">
        <b-row>
          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-start"
          >
            <v-select
              v-model="filter.pageSize"
              :options="filter.perPageOptions"
              :clearable="false"
              @input="Refresh"
              class="per-page-selector d-inline-block ml-50 mr-1"
              style="margin-left: 5px"
            />
            <span class="text-muted"
              >{{ $t("Showing") }} {{ firstNumber }} {{ $t("to") }}
              {{ lastNumber }} {{ $t("of") }} {{ filter.totalRows }}
              {{ $t("entries") }}</span
            >
          </b-col>
          <!-- Pagination -->
          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-end"
          >
            <b-pagination
              v-model="filter.page"
              :total-rows="filter.totalRows"
              :per-page="filter.pageSize"
              first-number
              last-number
              @input="Refresh"
              class="mb-0 mt-1 mt-sm-0"
              prev-class="prev-item"
              next-class="next-item"
            >
              <template #prev-text>
                <!-- <feather-icon icon="ChevronLeftIcon" size="18" /> -->
              </template>
              <template #next-text>
                <!-- <feather-icon icon="ChevronRightIcon" size="18" /> -->
              </template>
            </b-pagination>
          </b-col>
        </b-row>
      </div>
    </b-card>
  </div>
</template>

<script>
import PersonService from "@/services/info/person.service";

import {
  BButton,
  BPagination,
  BTable,
  BCol,
  VBTooltip,
  VBModal,
  BRow,
  BSpinner,
  BCard,
  BTooltip,
  BBadge,
  BInputGroup,
  BFormInput,
  BInputGroupAppend,
  BLink,
  BModal,
} from "bootstrap-vue";
export default {
  components: {
    BButton,
    BPagination,
    BTable,
    BCol,
    BRow,
    BSpinner,
    BCard,
    BTooltip,
    BBadge,
    BInputGroup,
    BFormInput,
    BInputGroupAppend,
    BLink,
    BModal,
  },
  directives: {
    "b-tooltip": VBTooltip,
    "b-modal": VBModal,
  },
  data() {
    return {
      isBusy: false,
      filter: {
        search: "",
        sortBy: "",
        orderType: "asc",
        page: 1,
        pageSize: 20,
        perPageOptions: [10, 20, 50, 100],
        totalRows: 0,
      },
      loading: false,
      Data: [],
      fields: [
        {
          key: "id",
          label: this.$t("id"),
          thClass: "text-center",
          tdClass: "text-center",
          sortable: true,
        },
        {
          key: "nameLatin",
          label: this.$t("nameLatin"),
          thClass: "text-center",
          tdClass: "text-right",
          sortable: true,
        },
        {
          key: "birthDate",
          label: this.$t("birthDate"),
          thClass: "text-center",
          sortable: true,
        },
        {
          key: "citizenship",
          label: this.$t("citizenship"),
          thClass: "text-center",
          sortable: true,
        },
        {
          key: "nationality",
          label: this.$t("nationality"),
          thClass: "text-center",
          sortable: true,
        },
        {
          key: "passport",
          label: this.$t("passport"),
          thClass: "text-center",
          sortable: true,
        },
        {
          key: "pinfl",
          label: this.$t("pinfl"),
          thClass: "text-center",
          sortable: true,
        },
        {
          key: "state",
          label: this.$t("state"),
          thClass: "text-center",
          tdClass: "text-center",
          sortable: true,
        },
        {
          key: "actions",
          label: this.$t("actions"),
          thClass: "text-center",
          tdClass: "text-center",
        },
      ],
      DeleteLoading: false,
    };
  },
  computed: {
    firstNumber() {
      return (this.filter.page - 1) * this.filter.pageSize + 1;
    },
    lastNumber() {
      if (this.filter.totalRows < this.filter.pageSize) {
        return this.filter.totalRows;
      } else {
        if (this.filter.page * this.filter.pageSize > this.filter.totalRows) {
          return this.filter.totalRows;
        } else {
          return this.filter.page * this.filter.pageSize;
        }
      }
    },
  },
  created() {
    this.Refresh();
  },
  methods: {
    SortChange(data) {
      this.filter.sortBy = data.sortBy;
      this.filter.orderType = data.sortDesc ? "desc" : "asc";
      this.Refresh();
    },
    Delete(item) {
      this.DeleteLoading = true;
      PersonService.Delete(item.id)
        .then((res) => {
          this.DeleteLoading = false;
          this.Refresh();
          this.makeToast(this.$t("DeleteSuccess"), "success");
        })
        .catch((error) => {
          this.DeleteLoading = false;
          this.$message(error.response);
        });
    },

    OpenDeleteModal(item) {
      this.$bvModal.show("DeleteModal" + item.id);
    },
    Edit(item) {
      this.$router.push({ path: "/info/person/edit/" + item.id });
    },
    Refresh() {
      this.isBusy = true;
      PersonService.GetList(this.filter).then((res) => {
        this.Data = res.data.rows;
        this.filter.totalRows = res.data.total;
        this.isBusy = false;
      });
    },
  },
};
</script>

<style>
.position-relative thead {
  background-color: #5b73e8;
  color: white;
}
</style>
