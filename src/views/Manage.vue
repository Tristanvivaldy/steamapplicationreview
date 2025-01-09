<template>
  <div class="p-12">
    <div class="flex justify-center items-center text-2xl font-bold">
      Manage Application Steam
    </div>
    <v-table class="mt-10">
      <thead class="font-extrabold text-lg">
        <tr>
          <th class="text-left">App Id</th>
          <th class="text-left">App Name</th>
          <th class="text-left">Created Date</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody v-if="items.length > 0">
        <tr v-for="item in items" :key="item.name">
          <td>{{ item.app_id }}</td>
          <td>{{ item.app_name }}</td>
          <td>{{ item.created_date }}</td>
          <td>
            <v-btn variant="plain" @click="deleteApp(item.guid)">
              <DeleteIcon />
            </v-btn>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr class="text-lg font-semibold">
          <td colspan="4" class="text-center">Tidak ada Aplikasi</td>
        </tr>
      </tbody>
    </v-table>
    <div class="flex justify-center items-center mt-10">
      <div
        class="py-3 px-10 rounded-lg text-white bg-darkBrown hover:bg-semiLightBrown hover:transition hover:duration-200 cursor-pointer"
        @click="dialog = true"
      >
        Add Application
      </div>
      <v-dialog v-model="dialog" width="auto">
        <v-form>
          <v-card width="400" title="Add Application">
            <template v-slot:text>
              <div v-if="isLoading">Loading..</div>
              <div v-else>
                <v-select
                  v-model="selected_app_id"
                  :items="list_applications"
                  item-title="text"
                  label="Select Application"
                ></v-select>
              </div>
            </template>
            <template v-slot:actions>
              <v-btn color="red" text="Cancel" @click="dialog = false"></v-btn>
              <v-btn color="blue" text="Add" @click="addApps()"></v-btn>
            </template>
          </v-card>
        </v-form>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import DeleteIcon from "../assets/icon/DeleteIcon.vue";
export default {
  name: "ManageApplicationPage",
  components: { DeleteIcon },
  computed: {
    selected_app() {
      return this.list_applications.find(
        (app) => app.value === this.selected_app_id
      );
    },
  },
  data() {
    return {
      dialog: false,
      isLoading: true,
      selected_app_id: null,
      items: [],
      list_applications: [],
      admin_guid: JSON.parse(
        atob(
          localStorage
            .getItem("token")
            .split(".")[1]
            .replace("-", "+")
            .replace("_", "/")
        )
      ).guid,
    };
  },
  mounted() {
    this.fetchDataSteam();
    this.getSteamApps();
  },
  methods: {
    fetchDataSteam() {
      Axios.get(`http://localhost:8080/steam`)
        .then((response) => {
          this.items = response.data.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getSteamApps() {
      this.isLoading = true;
      Axios.get(`http://localhost:8080/steam/get_api`)
        .then((response) => {
          this.list_applications = response.data.data
            .filter((app) => app.name !== "")
            .map((app) => ({
              text: app.name,
              value: app.appid,
            }));
          this.isLoading = false;
        })
        .catch((error) => {
          console.error(error);
          this.isLoading = false;
        });
    },
    addApps() {
      Axios.post(`http://localhost:8080/steam`, {
        admin_guid: this.admin_guid,
        app_id: this.selected_app.value.toString(),
        app_name: this.selected_app.text,
      })
        .then((_) => {
          this.dialog = false;
          this.fetchDataSteam();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    deleteApp(guid) {
      Axios.delete(`http://localhost:8080/steam/${guid}`)
        .then((_) => {
          this.fetchDataSteam();
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style>
</style>