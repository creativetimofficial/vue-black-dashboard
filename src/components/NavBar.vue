<template>
    <div class="navBar">
        <nav>
            <a class="nav-link messages" aria-current="page" href="#"><i class="pi pi-comment"></i></a>

            <a class="nav-link notification" href="#"><i class="pi pi-bell"></i></a>

            <a class="nav-link profile" aria-disabled="true"><i class="pi pi-user"></i></a>
        </nav>
    </div>
</template>

<style scoped>

.navBar {
    background-color: #e4e4e4;
    padding:15px;
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
}

.navBar nav{
    display: flex;
}

.nav-link {
    margin-right: 20px;
    cursor: pointer;
}

.nav-link i{
    font-size: 1.5rem;
}

</style>