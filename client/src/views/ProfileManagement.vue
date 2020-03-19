<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="11">
        <v-col>
          <div class="my-4">
            <a @click="setUser(null)">
              <UserDataModal dialog="false" isNew="true" />
            </a>
          </div>
          <v-card>
            <v-container>
              <v-row justify="center" align="center">
                <v-col cols="10">
                  <SearchForm label="Enter any data" />
                </v-col>
                <v-col cols="2">
                  <span>Total Found: ({{totalFound}})</span>
                </v-col>
              </v-row>
              <v-data-table
                :headers="collaboratorTableHeaders"
                :items="collaboratorItemsManagement"
                :items-per-page="5"
              >
                <template
                  v-slot:item.first_name="{ item }"
                  style="margin:0px;padding:0px"
                  class="ma-0 pa-0"
                >
                  <v-icon>people_alt</v-icon>
                  {{item.first_name}}
                </template>
                <template
                  v-slot:item.action="{ item }"
                  style="margin:0px;padding:0px"
                  class="ma-0 pa-0"
                >
                  <a @click="setUser(item)">
                    <UserDataModal dialog="false" isNew="false" />
                  </a>
                </template>
              </v-data-table>
            </v-container>
          </v-card>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import UserDataModal from "../components/UserDataModal";
import PostService from "../PostService";
import SearchForm from "../components/SearchForm";
export default {
  components: {
    SearchForm,
    UserDataModal
  },
  data: () => ({
    posts: [],
    error: "",
    name: ""
  }),
  computed: {
    ...mapState(["totalFound"]),
    ...mapState("profile", [
      "collaboratorTableHeaders",
      "collaboratorItemsManagement",
      "collaboratorItemsManagementFilter",
      "collasboratorItemsManagementCurrent",
      "newUserData"
    ])
  },
  created() {
    this.getCollaboratorsItemsManagement();
  },
  methods: {
    ...mapMutations(["setTotalFound"]),
    ...mapMutations("profile", [
      "setCollaboratorsItemsManagement",
      "setCollaboratorsItemsManagementCurrent",
      "setNewUserName",
      "setNewUserEmail",
      "setLastName",
      "setNewUserCompanyId",
      "setNewUserStatus"
    ]),
    async getCollaboratorsItemsManagement() {
      try {
        this.posts = await PostService.getPost();
         this.setTotalFound(this.posts.length);
        this.setCollaboratorsItemsManagement(this.posts);
      } catch (err) {
        this.error = err.message;
      }
    }
  }
};
</script>