<template>
    <card>
        <h3 class="font-thin">{{ $t("accounts.list_title") }}</h3>
        <div class="accounts-list">
            <ListItem title="John Doe"
                      img="https://steamuserimages-a.akamaihd.net/ugc/782985807872552587/6B73164454CA29768BE5C23048D2037EEF2BD57C/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
                      active=true
            ></ListItem>
            <ListItem title="Angry Wolf"
                      img="https://i.pinimg.com/236x/45/38/22/4538227abf1a77b128a98324bdb7cd7d.jpg"

            ></ListItem>
        </div>
    </card>
</template>

<script>
import ListItem from '../../components/Accounts/ListItem.vue';

    export default {
    components: { ListItem }
}
</script>

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
.account-icon img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
}
.account .account-body {
    display: flex;
    gap: 1rem;
    list-style: none;
    padding: 0;
    margin: 0;
}
</style>
