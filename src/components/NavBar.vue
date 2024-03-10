<template>
    <div class="page">
        
            <div class="logo-icons-container">
                
                <a href="/" class="logoimg"><img src="/src/icons/LogoLoginForm.png" class="Logo" alt="Avito"></a>
                    <nav class="mainnav">
                        <a class="nav-link messages" aria-current="page" href="#"><i class="pi pi-envelope" style="font-size: 1.5rem"></i></a>

                        <a class="nav-link notifi" href="#"><i class="pi pi-bell" style="font-size: 1.5rem"></i></a>

                        <a class="nav-link profile" aria-disabled="true"><i class="pi pi-user" style="font-size: 1.5rem"></i></a>
                </nav>
            </div>
       
        <div class="mainconteiner">

        </div>
    </div>
</template>

<style scoped>
* {
    margin:0;
    padding: 0;
    box-sizing: border-box;
}
.page{
    weight:100%;
    height: 100vh;
}
.logo-icons-container {
    position:fixed;
    width: 100%;
    padding:15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
    background: white;
    
}
.logoimg{
    text-decoration: none;
    color:black;
    font-weight: 600;
    font-size:23.18px;
    display: flex;
    margin-left:100px;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 600;
}
.mainnav{
    display: flex;
    position:relative;
}
.nav-link {
    margin-right: 20px;
}
.mainconteiner{
    position: absolute;
    top: 60px; 
    right: 0;
    left:290px;
    width: calc(100% - 100px);
    height: 100%; 
    background-color: #D6D6D6;
    border-radius: 20px 20px 0px 0px;
}
</style>