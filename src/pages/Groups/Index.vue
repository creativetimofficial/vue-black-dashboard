<template>
    <div class="detailed-version">
        <card class="detailed-card">
            <h3 class="font-thin">Detailed card</h3>
            <div class="row">
                <div class="col">
                    <base-input v-model="data.label" :disabled="isFormDisabled" label="Channel Label"
                        placeholder="Labeled title of telegram channel" type="text"></base-input>
                </div>
                <div class="col">
                    <base-input v-model="data.telegram_id" :disabled="isFormDisabled" label="Telegram ID"
                        placeholder="ID of telegram channel" type="text"></base-input>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <base-input v-model="data.limit" :disabled="isFormDisabled" label="Limit"
                        placeholder="Limit of sending posts per day" type="number"></base-input>
                </div>
                <div class="col">
                    <base-input v-model="data.interval" :disabled="isFormDisabled" label="Interval"
                        placeholder="How long should be break" type="number"></base-input>
                </div>
                <div class="col">
                    <base-input v-model="data.posts_left" label="Posts Left" value="0" type="number" disabled></base-input>
                </div>
            </div>
            <div v-if="!isFormDisabled" class="row">
                <div class="col">
                    <label class="form-label">Start Time</label>
                    <vue-timepicker class="form-timepicker-group w-100" manual-input v-model="data.start_time"></vue-timepicker>
                </div>
                <div v-if="['view', 'edit'].includes(state)" class="col">
                    <label class="form-label">Last Time</label>
                    <base-input base-type="text" disabled :value="data.last_time"></base-input>
                </div>
            </div>
            <div class="d-flex mt-3" style="gap: 1rem;">
                <template v-if="['new', 'edit'].includes(state)">
                    <base-button size="sm" type="success" @click="submitForm()">Submit</base-button>
                    <base-button size="sm" type="danger" @click="$router.push('/groups')">Cancel</base-button>
                </template>
                <template v-else>
                    <base-button @click="$router.push('/groups')" size="sm" type="secondary">Go Back</base-button>
                </template>
            </div>
        </card>

        <card v-if="this.state !== 'new'" class="links-card">
            <div class="d-flex">
                <h3 class="font-thin">Links card</h3>
                <base-button @click="linksModal = true" :disabled="isFormDisabled" type="primary" class="ml-auto" size="sm" icon>
                    <i class="tim-icons icon-simple-add"></i>
                </base-button>
            </div>
            <base-table :data="links" :columns="linksColumns">
                <template slot="columns">
                    <th class="text-center">ID</th>
                    <th>Website URL</th>
                    <th>Type</th>
                </template>
                <template slot-scope="{row}">
                    <td class="text-center">{{ row.id }}</td>
                    <td><a :href="row.website.link">{{ row.website.link }}</a></td>
                    <td>{{ row.website.type }}</td>
                    <td class="td-actions text-right d-flex" style="gap: 0.5rem;">
                        <base-button :disabled="isFormDisabled" type="success" @click="selectLink(row)" size="sm" icon>
                            <i class="tim-icons icon-settings"></i>
                        </base-button>
                        <base-button :disabled="isFormDisabled" type="danger" size="sm" icon>
                            <i class="tim-icons icon-simple-remove"></i>
                        </base-button>
                    </td>
                </template>
            </base-table>
        </card>
        <LinksModal @onSuccess="linksSuccess()" v-model="linksModal" :channel-id="data.id"
            @data="(newData) => selectedLink = newData" :data="selectedLink">
            <template #title>
                <h4 class="text-center">
                    <template v-if="selectedLink">
                        Add new link
                    </template>
                    <template v-else>
                        Edit existing link
                    </template>
                </h4>
            </template>
        </LinksModal>
    </div>
</template>

<script>
import axios from "axios";
import VueTimepicker from 'vue2-timepicker';
import 'vue2-timepicker/dist/VueTimepicker.css';
import Success from './NotificationTemplates/Success.vue';
import BaseTable from '../../components/BaseTable.vue';
import LinksModal from "../../components/Groups/LinksModal.vue";


export default {
    name: "group-detailed",
    components: {
        VueTimepicker,
        BaseTable,
        LinksModal
    },
    data() {
        return {
            // States: "new" | "edit" | "view"
            state: "new",
            data: {
                id: null,
                label: "",
                telegram_id: "",
                limit: 5,
                interval: null,
                posts_left: 0,
                last_time: 0,
            },
            linksColumns: ["id", "website_url", "type", "actions"],
            links: [],
            selectedLink: {
                id: null,
                website: {
                    link: "",
                    type: "rss",
                    id: null,
                },
                channel: {
                    id: null,
                },
            },
            linksModal: false,
        }
    },
    computed: {
        isFormDisabled() {
            return this.state === "view"
        }
    },
    methods: {
        submitForm() {
            this.data.start_time = `${this.data.start_time["HH"]}:${this.data.start_time["mm"]}`;
            this.data.last_time = 0;
            if (this.state === "edit") {
                axios.put(`${process.env.VUE_APP_BASE_API_URL}/channels/${this.data.id}`, this.data).then(res => {
                    this.$notify({
                        component: Success,
                        icon: "tim-icons icon-bell-55",
                        horizontalAlign: 'right',
                        verticalAlign: 'top',
                        type: "success",
                        content: "Test",
                        timeout: 0
                    });
                    this.fetchData(this.data.id);
                })
            }
            else if (this.state === "new") {
                axios.post(`${process.env.VUE_APP_BASE_API_URL}/channels/`, this.data).then(res => {
                    this.$notify({
                        component: Success,
                        icon: "tim-icons icon-bell-55",
                        horizontalAlign: 'right',
                        verticalAlign: 'top',
                        type: "success",
                        content: "Test",
                        timeout: 0
                    });
                    this.$router.push(`/groups/${res.data.__data__.id}`)
                })
            }
        },
        fetchData(DetailID) {
            axios.get(`${process.env.VUE_APP_BASE_API_URL}/channels/${DetailID}`).then(res => {
                this.data = res.data;

            }).catch(() => {
                location.href = "/404";
            })
        },
        fetchLinks(DetailID) {
            axios.get(`${process.env.VUE_APP_BASE_API_URL}/channels/links/${DetailID}`).then(res => {
                this.links = res.data.map(item => {
                    return {
                        id: item.id,
                        website: item.website,
                        channel: item.channel
                    }
                });
            })
        },
        selectLink(row) {
            this.selectedLink.website = row.website;
            this.selectedLink.channel = row.channel;
            this.selectedLink.id = row.id;
            this.linksModal = true;
        },
        linksSuccess() {
            this.$notify({
                component: Success,
                icon: "tim-icons icon-bell-55",
                horizontalAlign: 'right',
                verticalAlign: 'top',
                type: "success",
                content: "Test",
                timeout: 0
            });
            this.fetchLinks(this.data.id);
        }
    },
    mounted() {
        const DetailID = this.$route.params.group_id;
        const isEdit = this.$route.query.editMode;
        const editTrueStates = ["true", "on", "yes", "y", "t"];

        if (!DetailID) {
            this.state = "new";
            return;
        }
        if (isEdit && editTrueStates.includes(isEdit)) {
            this.state = "edit";
        }
        else {
            this.state = "view";
        }

        this.fetchData(DetailID);
        this.fetchLinks(DetailID);
    }
}
</script>

<style lang="scss">
.form-timepicker-group input {
    width: 100% !important;
    outline: none;
    padding: 10px 18px 10px 18px !important;
    border-color: #2b3553 !important;
    border-radius: 0.4285rem;
    font-size: 0.7500000025rem;
    -webkit-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
    transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
    display: block;
    width: 100%;
    height: calc(2.249999625rem + 2px);
    padding: 0.5rem 0.7rem;
    font-size: 0.875rem;
    line-height: 1.428571;
    color: rgba(255, 255, 255, 0.8);
    background-color: transparent;
    background-clip: padding-box;
    border: 1px solid #cad1d7;
    border-radius: 0.25rem;
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.form-timepicker-group input:focus {
    border-color: var(--primary) !important;
}

.form-timepicker-group .dropdown {
    background-color: #2b3553;
}

.form-timepicker-group li {
    color: white !important;
}
</style>