<template>
    <div class="navBar">
        <a class="navBar-logo"><img src="@/icons/LogoLoginForm.png" alt="Avito">Avito</a>
        <nav>
            <a class="nav-link messages" aria-current="page" href="#"><i class="pi pi-envelope"></i></a>

            <a class="nav-link notification" href="#"><i class="pi pi-bell"></i></a>

            <a class="nav-link profile" aria-disabled="true"><i class="pi pi-user"></i></a>
        </nav>
    </div>
</template>

<style scoped>

.navBar {
    margin: 0 50px;
    padding:15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navBar-logo{
    font-size: 24px;
    color: #000;
    cursor: default;
}

.navBar-logo img{
    height: 20px;
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