<template>
  <v-container fluid>
    <v-row align="center" justify="center" no-gutters>
      <v-col cols="6">
        <v-text-field
          v-model="search"
          :dense="dense"
          :rounded="rounded"
          :solo="solo"
          :outlined="outlined"
          :autofocus="focus"
          hide-details
          :label="label"
          color="rgba(0, 0, 0, 0.5)"
        ></v-text-field>
      </v-col>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-col cols="5" @click="find">
        <v-btn color="primary">
          <v-icon dark>search</v-icon>Search
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import PostService from "../PostService";
export default {
  props: ["dense", "rounded", "solo", "outlined", "label", "focus"],
  computed: {
    ...mapState(["searchForm"]),
    search: {
      get() {
        return this.searchForm;
      },
      set(input) {
        this.setSearchForm(input);
      }
    }
  },
  methods: {
    ...mapMutations(["setSearchForm","setTotalFound"]),
    ...mapMutations("profile", [
      "setCollaboratorsItemsManagement",
      "setCollaboratorsItemsManagementCurrent",
      "setNewUserName",
      "setNewUserEmail",
      "setLastName",
      "setNewUserCompanyId",
      "setNewUserStatus"
    ]),
    async find() {
      this.posts = await PostService.getPostByParam(this.searchForm);
      this.setTotalFound(this.posts.length);
      this.setCollaboratorsItemsManagement(this.posts);
    }
  }
};
</script>
<style></style>
