<script setup>
import BrandBandComponent from "../components/BrandBandComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import CardComponent from "@/components/CardComponent.vue";
</script>

<template>
  <div style="transform: translateY(-5%);">
    <HeaderComponent class="header-component" />
    <BrandBandComponent class="mt-5 brand-band-component" title="Confían en nosotros">
      <template #slide-content>
        <a target="_blank" href="https://www.abogados.or.cr/"><img src="../assets/colegio-abog.webp" alt="" height="50"
            width="auto">
        </a>
        <a target="_blank" href="https://coopesa.com/">
          <img src="../assets/coopesa.webp" alt="" height="50" width="auto">
        </a>
        <a target="_blank" href="https://correos.go.cr/">
          <img src="../assets/correos.svg" alt="" height="50" width="auto">
        </a>
        <a target="_blank" href="https://www.dhl.com/cr-es/home.html">
          <img src="../assets/dhl.webp" alt="" height="50" width="auto">
        </a>
        <a target="_blank" href="https://www.inciensa.sa.cr/">
          <img src="../assets/inciensa.webp" alt="" height="50" width="auto">
        </a>
        <a target="_blank" href="https://www.ins-cr.com/">
          <img src="../assets/ins.webp" alt="" height="50" width="auto">
        </a>
        <a target="_blank" href="https://www.panasonic.com/pa/">
          <img src="../assets/panasonic.webp" alt="" height="50" width="auto">
        </a>
        <a target="_blank" href="https://pj.poder-judicial.go.cr/">
          <img src="../assets/poderjudicial.webp" alt="" height="50" width="auto">
        </a>
        <a target="_blank" href="https://www.recope.go.cr/">
          <img src="../assets/recope.webp" alt="" height="50" width="auto">
        </a>
      </template>
      <template #slide-content2>
        <a target="_blank" href="https://www.abogados.or.cr/"><img src="../assets/colegio-abog.webp" alt="" height="50"
            width="auto">
        </a>
        <a target="_blank" href="https://coopesa.com/">
          <img src="../assets/coopesa.webp" alt="" height="50" width="auto">
        </a>
        <a target="_blank" href="https://correos.go.cr/">
          <img src="../assets/correos.svg" alt="" height="50" width="auto">
        </a>
        <a target="_blank" href="https://www.dhl.com/cr-es/home.html">
          <img src="../assets/dhl.webp" alt="" height="50" width="auto">
        </a>
        <a target="_blank" href="https://www.inciensa.sa.cr/">
          <img src="../assets/inciensa.webp" alt="" height="50" width="auto">
        </a>
        <a target="_blank" href="https://www.ins-cr.com/">
          <img src="../assets/ins.webp" alt="" height="50" width="auto">
        </a>
        <a target="_blank" href="https://www.panasonic.com/pa/">
          <img src="../assets/panasonic.webp" alt="" height="50" width="auto">
        </a>
        <a target="_blank" href="https://pj.poder-judicial.go.cr/">
          <img src="../assets/poderjudicial.webp" alt="" height="50" width="auto">
        </a>
        <a target="_blank" href="https://www.recope.go.cr/">
          <img src="../assets/recope.webp" alt="" height="50" width="auto">
        </a>
      </template>
    </BrandBandComponent>
    <div class="container-fluid mt-5">
      <div class="row d-md-flex d-block justify-content-center align-items-stretch g-3">
        <div class="col-md-5 col-12">
          <CardComponent class="card-pilares h-100 w-100">
            <template #card-content>
              <div class="my-pilar">
                <i class=" fa-solid fa-solar-panel">
                </i>
                <p class="my-text">Energía limpia</p>
              </div>
            </template>
          </CardComponent>
        </div>
        <div class="col-md-2 col-12">
          <CardComponent class="card-pilares h-100 w-100">
            <template #card-content>
              <div class="my-pilar">
                <i class="fa-solid fa-shield-halved">
                </i>
                <p class="my-text">Seguridad</p>
              </div>
            </template>
          </CardComponent>
        </div>
        <div class="col-md-5 col-12">
          <div class="row justify-content-center align-items-stretch">
            <div class="col-12">
              <CardComponent class="card-pilares mb-3">
                <template #card-content>
                  <div class="my-pilar">
                    <i class="fa-solid fa-fire-extinguisher">
                    </i>
                    <p class="my-text">Contra incendios</p>
                  </div>
                </template>
              </CardComponent>
            </div>
          </div>
          <div class="row d-md-flex d-block justify-content-center align-items-stretch g-3">
            <div class="col-md-6 col-12">
              <CardComponent class="card-pilares h-100">
                <template #card-content>
                  <div class="my-pilar">
                    <i class="fa-solid fa-plug-circle-check">
                    </i>
                    <p class="my-text">Electricidad</p>
                  </div>

                </template>
              </CardComponent>
            </div>
            <div class="col-md-6 col-12">
              <CardComponent class="card-pilares h-100 my-md-0 mb-3">
                <template #card-content>
                  <div class="my-pilar">
                    <i class="fa-solid fa-door-open">
                    </i>
                    <p class="my-text">Portones</p>
                  </div>
                </template>
              </CardComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt-5">
      <div class="row d-md-flex d-block justify-content-center align-items-stretch text-center">
        <div class="col-12">
          <CardComponent class="card-component h-100 w-100" title="Misión"></CardComponent>
        </div>
      </div>
      <div class="row d-md-flex d-block justify-content-center align-items-stretch g-3 mt-md-0 mt-0 text-center">
        <div class="col-md-4 col-12">
          <CardComponent class="card-component h-100 w-100" title="Innovación tecnológica"></CardComponent>
        </div>
        <div class="col-md-8 col-12">
          <div class="row d-md-flex d-block justify-content-center mt-md-0 mt-3  gx-3 align-items-stretch">
            <div class="col-md-6 col-12">
              <CardComponent class="card-component h-100 w-100" title="Excelencia"></CardComponent>
            </div>
            <div class="col-md-6 col-12 mt-md-0 mt-3">
              <CardComponent class="card-component h-100 w-100" title="Transparencia"></CardComponent>
            </div>
          </div>
          <div class="row mt-3 justify-content-center align-items-stretch">
            <div class="col-12">
              <CardComponent class="card-component h-100 w-100" title="Satisfacción del cliente"></CardComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt-5">
      <div class="row d-md-flex d-block justify-content-center align-items-stretch text-center g-3">
        <div class="col-md-4 col-12">
          <div class="row d-md-flex d-block justify-content-center align-items-stretch text-center">
            <div class="col-12">
              <CardComponent class="card-component h-100 w-100" title="Contacto"></CardComponent>
            </div>
          </div>
          <div class="row d-md-flex d-block justify-content-center align-items-stretch text-center mt-3 ">
            <div class="col-12">
              <CardComponent class="card-component h-100 w-100">
                <template #card-content>
                  <iframe class="w-100 rounded-4"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4043235.780128833!2d-87.58315560764741!3d8.25568173958119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f92e56221acc925%3A0x6254f72535819a2b!2sCosta%20Rica!5e0!3m2!1ses!2scr!4v1709336562931!5m2!1ses!2scr"
                    width="600" height="250" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                </template>
              </CardComponent>
            </div>
          </div>
        </div>
        <div class="col-md-8 col-12">
          <CardComponent class="card-component h-100 w-100" title="Get in touch"></CardComponent>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.my-pilar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}


.my-text {
  font-size: 2.5rem;
  align-items: center;
  justify-content: center;
  display: flex;
  color: #f2f2f2;
  text-shadow: 2px 2px 10px #0d0d0d;
}

i {
  font-size: 5rem;
  align-items: center;
  justify-content: center;
  display: flex;
  color: #f2f2f2;
  text-shadow: 2px 2px 10px #0d0d0d;
}

.card-pilares {
  background-color: rgba(242, 242, 242, 0.04);
  border: 1px solid #f2f2f2;
  backdrop-filter: blur(5px);
  border-radius: 20px;
}

.card-component {
  background-color: rgba(242, 242, 242, 0.04);
  border: 1px solid #f2f2f2;
  backdrop-filter: blur(5px);
  color: #f2f2f2;
  text-shadow: 2px 2px 10px #0d0d0d;
  border-radius: 20px;
}

#map {
  height: 400px;
  width: 100%;
}

.card-pilares:hover {
  background-color: rgba(142, 196, 42, 0.04);
  border: 1px solid #f2f2f2;
  transition: 0.7s;

  i {
    color: #d2d1d4;
    transition: 0.7s;
  }
}
</style>
