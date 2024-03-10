<template>
    <div class="sideBar_item">
        <i :class="iconClass"></i>
        <a href="#">{{ sideText }}</a>
    </div>
</template>

<script>
export default {
    props: {
        sideText: {
            type: String,
            required: true,
        },
        iconClass: {
            type: String,
            required: true,
        },
    } 
}
</script>

<style scoped>

.sideBar_item{
    display: flex;
    align-items: center;
}

.sideBar_item i{
    font-size: 1.2em;
    margin: 0 15px 0 0;
}

.sideBar_item a{
    color: black;
}

</style>