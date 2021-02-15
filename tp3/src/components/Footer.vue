<template>
    <div>
        <footer class="page-footer font-small teal pt-4">

            <!-- Footer Text -->
            <div class="container-fluid text-center ">

            <!-- Grid row -->
            <div class="row">

                <!-- Contacto  -->
                <div class="col-md-6 mt-md-0 mt-3 sombra-fnt">
                <h5 id="Contact" class="text-uppercase font-weight-bold ">Contacto</h5>

                <!-- Mail  -->
                <h6 class="text-uppercase font-weight-bold mail">
                    <i class="fas fa-envelope" style='font-size:22px'></i>
                    Mail
                    <p>
                    <a class="link fnt-smll"
                        href="mailto:ulises.cortes@institutoamemt.edu.ar">ulises.cortes@institutoamemt.edu.ar</a>
                    </p>
                    <p>
                    <a class="link fnt-smll"
                        href="mailto:octaviodesiate@institutoamemt.edu.ar">octaviodesiate@institutoamemt.edu.ar</a>
                    </p>
                </h6>
                <!-- Fin Mail  -->

                </div>
                <!-- Fin Contacto  -->

                <hr class="clearfix w-100 d-md-none pb-3">

                <!-- Redes Sociales  -->
                <div class="col-md-6 mb-md-0 mb-3 text-center sombra-fnt">
                <h5 class="text-uppercase font-weight-bold ">Redes Sociales</h5>

                <h6 class="text-uppercase font-weight-bold mail">
                    <a class="link fnt-smll" href="https://www.instagram.com/explore/tags/postres/">
                    <i class="fab fa-instagram" style='font-size:36px'></i>
                    Instragram
                    </a>
                    <p>

                    </p>
                </h6>
                </div>
                <!-- Fin Redes Sociales  -->

            </div>
            <!-- Grid row -->

            </div>
            <!-- Footer Text -->

            <!-- Copyright -->
            <div class="footer-copyright text-center bg-color-black">
            © {{ new Date().getFullYear() }} Copyright: Postres Faciles!
            </div>
            <!-- Fin Copyright -->

        </footer>
    </div>
</template>
<style>
footer {
    align-self: flex-end;
    background-color:  rgb(219, 97, 76);
    line-height: 3;
    text-align: center;
    width: 100%;
    color: white;
}
footer .social img {
    height: 40px;
    width: 40px;
    margin: 0 5px;
}
footer .mail img {
    height: 40px;
    width: 40px;

}
.link {
    color: #ffffff;
}
.link:hover {
    color: rgb(163, 75, 57);
    text-decoration: none;
}
.sombra-fnt {
    text-shadow: black 0.1em 0.1em 0.2em;
}
.fnt-smll {
    font-size: small;
}
.bg-color-black {
    background-color: rgb(131, 38, 22);
}
</style>
