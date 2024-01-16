import React from 'react'


const Header = () => {
  return (
    <>
      <div class="container-fluid bg-light p-0">
        <div class="row gx-0 d-none d-lg-flex">
            <div class="col-lg-7 px-5 text-start">
                <div class="h-100 d-inline-flex align-items-center py-3 me-4">
                    <small class="fa fa-map-marker-alt text-dark me-2"></small>
                    <small>İstanbul, Türkiye</small>
                </div>
                <div class="h-100 d-inline-flex align-items-center py-3">
                    <small class="far fa-clock text-dark me-2"></small>
                    <small>Pazartesi-Cuma : 19:00-22:00</small>
                </div>
            </div>
            <div class="col-lg-5 px-5 text-end">
                <div class="h-100 d-inline-flex align-items-center py-3 me-4">
                    <small class="fa fa-phone-alt text-dark me-2"></small>
                    <small>+123 456 789</small>
                </div>
                <div class="h-100 d-inline-flex align-items-center">
                    <a class="btn btn-sm-square bg-white text-dark me-1" href=""><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-sm-square bg-white text-dark me-1" href=""><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-sm-square bg-white text-dark me-1" href=""><i class="fab fa-linkedin-in"></i></a>
                    <a class="btn btn-sm-square bg-white text-dark me-0" href=""><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>

    <nav  class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
    <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h2 class="m-0 text-primary"></h2>
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto p-4 p-lg-0">
          <a href="/" class="nav-item nav-link active" aria-current="page">ANASAYFA</a>
                <a href="/about" class="nav-item nav-link">HAKKIMIZDA</a>
                <a href="/trainings" class="nav-item nav-link">EĞİTİMLER</a>
                <a href="/trainers" class="nav-item nav-link">EĞİTMENLER</a>
                <a href="/contact" class="nav-item nav-link">İLETİŞİM</a>
          </div>
        </div>
    </nav>
    
    

    
    </>
  )
}

export default Header;