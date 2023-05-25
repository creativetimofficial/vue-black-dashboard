<template>
    <card>
        <h3 class="font-thin">{{ $t("groups.list_title") }}</h3>
        <div class="channels-list">
            <ListItem title="Channel Name"></ListItem>
        </div>
    </card>
</template>

<script>
import ListItem from '../../components/Groups/ListItem.vue';

    export default {
    components: { ListItem }
}
</script>

<style lang="scss">
.channels-list {
    display: flex;
    flex-direction: column;
}
.channels-list .channel, .list-item {
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
}
</style>
