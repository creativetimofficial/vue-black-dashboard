<template>
    <div class="channel list-item">
        <div class="channel-icon">
            <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1664f761b63%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1664f761b63%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22110.203125%22%20y%3D%2297.35%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                alt="ChannelName">
        </div>
        <div class="channel-body">
            <h4 class="font-medium p-0 m-0 pb-2">{{ title }}</h4>
            <ul class="channel-statistic">
                <li class="statistic-item text-muted">5 posts left</li>
                <li class="statistic-item text-muted">0 posts published</li>
                <li class="statistic-item text-muted">5 website sources</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "list-item",
    props: {
        title: {
            type: String,
            required: true,
        },
        data: {
            type: Array,
        }
    }
}
</script>

<style lang="scss" scoped></style>