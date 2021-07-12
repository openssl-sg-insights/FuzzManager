import _ from "lodash"; // eslint-disable-line no-unused-vars
import sweetAlert from "sweetalert"; // eslint-disable-line no-unused-vars
import { E_SERVER_ERROR, formatClientTimestamp } from "./helpers";
window.E_SERVER_ERROR = E_SERVER_ERROR;
window.formatClientTimestamp = formatClientTimestamp;

import Vue from "vue";
import VueRouter from "vue-router";
import router from "./router.js";
import CrashesList from "./components/Crashes/List.vue";
import SignaturesList from "./components/Signatures/List.vue";
import CreateOrEdit from "./components/Signatures/CreateOrEdit.vue";
import ProviderKey from "./components/ProviderKey.vue";
import FullPPCSelect from "./components/Bugs/FullPPCSelect.vue";
import BugPublicationForm from "./components/Bugs/PublicationForm.vue";
import CommentPublicationForm from "./components/Bugs/Comments/PublicationForm.vue";
import Inbox from "./components/Notifications/Inbox.vue";

Vue.use(VueRouter);

window.onload = function () {
  new Vue({
    el: "#app",
    components: {
      createoredit: CreateOrEdit,
      crasheslist: CrashesList,
      signatureslist: SignaturesList,
      providerkey: ProviderKey,
      ppcselect: FullPPCSelect,
      bugpublicationform: BugPublicationForm,
      commentpublicationform: CommentPublicationForm,
      inbox: Inbox,
    },
    router,
  });
};
