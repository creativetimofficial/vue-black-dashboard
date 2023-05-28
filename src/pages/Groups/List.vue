<template>
    <div>
        <card>
            <h3 class="font-thin">{{ $t("groups.list_title") }}</h3>
            <div class="channels-list">
                <ListItem v-for="channel in allChannels" :key="channel.id" :title="channel?.label || channel.telegram_id"
                    :data="channel" @channelSelected="channelSelectOptions"></ListItem>

            </div>
        </card>
        <ActionsModal @delete="deleteChannel()" :data="selectedChannel" v-model="actionsModalIsActive">
            <template #title>
                <h4>{{ selectedChannel?.label || selectedChannel.telegram_id }}</h4>
            </template>
        </ActionsModal>
    </div>
</template>

<script>
import ActionsModal from '../../components/Groups/ActionsModal.vue';
import ListItem from '../../components/Groups/ListItem.vue';
import axios from "axios";

export default {
    components: { ListItem, ActionsModal },
    data() {
        return {
            selectedChannel: null,
            actionsModalIsActive: false,
            allChannels: [],
        }
    },
    mounted() {
        this.fetchChannels();
    },
    methods: {
        fetchChannels() {
            axios.get(`${process.env.VUE_APP_BASE_API_URL}/channels`).then(res => {
                this.allChannels = res.data;
            })
        },
        channelSelectOptions(channel) {
            this.selectedChannel = channel;
            this.actionsModalIsActive = !this.actionsModalIsActive;
        },
        deleteChannel() {
            axios.delete(`${process.env.VUE_APP_BASE_API_URL}/channels/${this.selectedChannel.id}`).then(res => {
                this.fetchChannels();
            })
        }
    }
}
</script>

<style lang="scss">
.channels-list {
    display: flex;
    flex-direction: column;
}

.channels-list .channel,
.list-item {
    display: flex;
    gap: 1rem;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
}

.list-item:hover {
    background-color: #333652;
}

.channel-icon {
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.channel-icon img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
}
.channel .channel-body .channel-statistic {
    display: flex;
    gap: 1rem;
    list-style: none;
    padding: 0;
    margin: 0;
}</style>
