<template>
    <div class="my-card ">
        <div class="row mx-5 align-items-center">
            <div class="col-md-12">
                <h1 class=" my-text text-start card-title ">Alerta <br> Máxima <br> Sistemas</h1>
            </div>
        </div>
        <div class="row text-black mx-5 align-items-center">
            <div class="text-white col-md-12 text-end align-middle pb-2">
                <a href="#" class="my-social "><i class="fa-brands fa-tiktok"></i></a>
                <a href="#" class="my-social "><i class="fa-brands fa-linkedin"></i></a>
                <a href="#" class="my-social "><i class="fa-brands fa-facebook"></i></a>
                <a href="#" class="my-social "><i class="fa-brands fa-instagram"></i></a>
            </div>
        </div>

    </div>
</template>
<style scoped>
.my-card {
    border-top-left-radius: 0%;
    border-top-right-radius: 0%;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    background: url(../assets/logo.png), linear-gradient(315deg, #0d0d0d, #274f73, #0f698c, #75b8bf, #f2f2f2);
    padding-top: 150px;
    background-position: center center;
    background-repeat: no-repeat;
    box-shadow: 2px 1px 15px #f2f2f2;
}

.my-social {
    font-size: 2em;
    text-decoration: none;
    color: #f2f2f2;
    text-shadow: 2px 2px 10px #0d0d0d;
    margin-left: 30px;
}

.my-social:hover {
    color: #0d0d0d;
    text-shadow: 2px 2px 10px #f2f2f2;
    transition: 0.3s;
}

.my-text {
    color: #f2f2f2;
    text-shadow: 2px 2px 10px #000000;
    font-size: 6vw;
}
</style>