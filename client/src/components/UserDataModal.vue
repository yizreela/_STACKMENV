<template>
  <v-dialog v-model="dialog" max-width="600px" persistent>
    <template v-slot:activator="{ on }">
      <v-btn color="primary" v-on="on" v-if="isNew == 'true'">
        <v-icon dark>mdi-plus</v-icon>ADD PROFILE
      </v-btn>
      <v-icon v-on="on" v-if="isNew == 'false'" color="primary">edit</v-icon>
    </template>
    <v-card>
      <v-card-title class="primary">
        <span style="color: white" class="headline" v-if="isNew == 'true'">Add Profile</span>
        <span style="color: white" class="headline" v-if="isNew == 'false'">Edit Profile</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field clearable label="First Name" ref="first_name"></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field clearable label="Last Name" ref="last_name" required></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field clearable label="Email" ref="email" required></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field clearable label="City" ref="city" required></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="end">
            <v-btn color="primary" text @click="exitModal">CANCEL</v-btn>
            <v-btn
              class="primary"
              color="white"
              v-if="isNew == 'true'"
              dark
              @click="addUser"
            >ADD USER</v-btn>
            <v-btn
              class="primary"
              color="white"
              v-if="isNew == 'false'"
              dark
              @click="addUser"
            >ACCEPT</v-btn>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import PostService from "../PostService";
import { mapState, mapMutations } from "vuex";
export default {
  props: ["isNew"],
  data: () => ({
    dialog: false,
    showDialog: false
  }),
  methods: {
    ...mapMutations("profile", [
      "setCollaboratorsItemsManagement",
      "setCollaboratorsItemsManagementCurrent",
      "setNewUserName",
      "setNewUserEmail",
      "setLastName",
      "setNewUserCompanyId",
      "setNewUserStatus"
    ]),
    exitModal() {
      this.dialog = false;
    },
    async addUser() {
      await PostService.insertPost(
        this.$refs.first_name.internalValue,
        this.$refs.last_name.internalValue,
        this.$refs.email.internalValue,
        this.$refs.city.internalValue
      );

      let data = await PostService.getPost();
      this.setCollaboratorsItemsManagement(data);
    }
  }
};
</script>
