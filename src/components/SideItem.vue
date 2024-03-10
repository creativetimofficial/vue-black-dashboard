<template>
    <div>
        <div class="sideBar_item" :class="{'current-item': currentItem === true}">
            <i :class="iconClass"></i>
            <a href="#">{{ sideText }}</a>
        </div>
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
        currentItem:{
            type: Boolean,
            required: true,
        }
    } 
}
</script>

<style scoped>

.sideBar_item{
    display: flex;
    align-items: center;
    padding: 0 0 0 10px;
    margin-left: 50px;
    height: 40px;
    width: auto;
}

.sideBar_item:hover{
    background-color: #d6d6d6e6;
    height: 40px;
    border-radius: 10px 0 0 10px;
    width: 200%;
}

.sideBar_item i{
    font-size: 1.2em;
    margin: 0 15px 0 0;
}

.sideBar_item a{
    color: black;
}

.current-item{
    background-color: #D6D6D6;
    border-radius: 10px 0 0 10px;
    width: 200%;
}

</style>