<template>
    <Transition name="dfade">
        <div class="links-dialog" @click.self="closeModal()" v-if="value">
            <card class="dialog" v-if="value">
                <h5 class="text-center">
                    <slot name="title">

                    </slot>
                </h5>
                <label for="website">Website</label>
                <select id="website" class="form-control" placeholder="Select website" v-model="localDataLink">
                    <option v-for="website in websites" :value="website.id">{{ website.link }}</option>
                </select>
                <label for="type">Type</label>
                <select id="type" class="form-control" value="rss" v-model="localDataType">
                    <option value="rss" default>RSS</option>
                </select>

                <hr style="margin-top: 2rem; border-color: rgb(93, 93, 93); background-color: white;">
                <div class="d-flex justify-content-end" style="gap: 0.5rem;">
                    <base-button size="sm" @click="closeModal()" type="secondary">Cancel</base-button>
                    <base-button size="sm" @click="requestData()" type="primary">Apply</base-button>
                </div>
            </card>
        </div>
    </Transition>
</template>

<script>
import axios from 'axios';

export default {
    name: "links-modal",
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        method: {
            type: String,
            default: "new",
        },
        data: {
            type: Object,
            required: true,
        },
        channelId: {
            type: String,
            required: true,
        }
    },
    emits: ["input", "onClose", "data", "onSuccess"],
    data() {
        return {
            websites: [],
        }
    },
    watch: {
        value() {
            this.fetchWebsites();
        }
    },
    computed: {
        localDataLink: {
            get() {
                return this.data.website.id;
            },
            set(newVal) {
                var data = {
                    ...this.data
                }
                data.website.id = newVal;
                this.$emit("data", data);
            }
        },
        localDataType: {
            get() {
                return this.data.website.type;
            },
            set(newVal) {
                var data = {
                    ...this.data
                }
                data.website.type = newVal;
                this.$emit("data", data);
            }
        }
    },
    methods: {
        requestData() {
            if (!this.data.id) {
                axios.post(`${process.env.VUE_APP_BASE_API_URL}/links`, {
                    website: this.data.website.id,
                    link_id: this.channelId,
                }).then(res => {
                    this.closeModal();
                    this.$emit("onSuccess", res);
                })
            }
            else {
                axios.put(`${process.env.VUE_APP_BASE_API_URL}/links/${this.data.id}`, {
                    website: this.data.website.id,
                    link_id: this.channelId,
                }).then(res => {
                    this.closeModal();
                    this.$emit("onSuccess", res);
                })
            }
        },
        fetchWebsites() {
            axios.get(`${process.env.VUE_APP_BASE_API_URL}/websites`).then(res => {
                this.websites = res.data;
            })
        },
        deleteMenuExec() {
            this.closeModal();
        },
        clearData() {
            var data = {
                website: {
                    id: null,
                    type: "rss",
                },
                channel: {
                    id: null,
                }
            }
            this.$emit("data", data);
        },
        closeModal() {
            this.clearData();
            this.$emit("input", false);
            this.$emit("onClose");
        }
    }
}
</script>

<style lang="scss" scoped>
.dfade-enter-active,
.dfade-leave-active {
    transition: opacity 0.5s ease;
}

.dfade-enter,
.dfade-leave-to {
    opacity: 0;
}

.links-menu {
    margin-top: 0.5rem;
    list-style: none;
    padding: 0;
}

.links-menu .menu-item {
    width: 100%;
    padding: 1rem;
    cursor: pointer;
}

.links-menu .menu-item:hover {
    background-color: #333652;
}

.links-dialog {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    background-color: #0000004a;
}

.dialog {
    width: 30rem;
}
</style>