export default {
    namespaced: true,
    strict: true,
    state: {
        collaboratorTableHeaders: [
            {
                text: "UserName",
                align: "left",
                sortable: true,
                value: "first_name"
            },
            {
                text: "Email",
                align: "left",
                value: "email",
                sortable: true
            },
            {
                text: "City",
                align: "left",
                value: "city",
                sortable: true,

            },
            {
                text: "Actions",
                align: "center",
                value: "action",
                sortable: false
            },
            
            {
                text: "fullNameWithoutSpaces",
                align: ' d-none',
                value: "fullNameWithoutSpaces",
                sortable: false,
                visible: false
            }
        ],
        collaboratorItemsManagement: [],
        collaboratorItemsManagementCurrent: {
            id: "",
            email: "",
            name: "",
            lastname: "",
            orders: "",
            status: "",
            companyId: 1
        },
        newUserData: {
            email: "",
            lastname: "",
            name: "",
            companyId: 0,
            status: true
        },
    },
    mutations: {
        setNewUserName(state, payload) {
            state.newUserData.name = payload;
        },
        setLastName(state, payload) {
            state.newUserData.lastname = payload;
        },
        setNewUserEmail(state, payload) {
            state.newUserData.email = payload;
        },
        setNewUserCompanyId(state, payload) {
            state.newUserData.companyId = payload;
        },
        setNewUserStatus(state, payload) {
            state.newUserData.status = payload;
        },
        setCollaboratorsItemsManagement(state, payload) {
            state.collaboratorItemsManagement.splice(0, state.collaboratorItemsManagement.length);
            for (let i = 0; i < payload.length; i++) {
                state.collaboratorItemsManagement.push({
                    id: payload[i].id,
                    first_name: (payload[i].last_name != null ? payload[i].last_name : "") + " " + payload[i].first_name,
                    email: payload[i].email,
                    city: payload[i].city,
                });
            }
        },
        setCollaboratorsItemsManagementCurrent(state, payload) {
            state.collaboratorItemsManagementCurrent.id = payload != null ? payload.id : "";
            state.collaboratorItemsManagementCurrent.email = payload != null ? payload.email : "";
            state.collaboratorItemsManagementCurrent.name = payload != null ? payload.name : "";
            state.collaboratorItemsManagementCurrent.lastname = payload != null ? payload.lastname : "";
            state.collaboratorItemsManagementCurrent.orders = payload != null ? payload.orders : "";
            state.collaboratorItemsManagementCurrent.status = payload != null ? payload.status : false;
            state.collaboratorItemsManagementCurrent.companyId = payload != null ? payload.companyId : 1;
        }
    }
};