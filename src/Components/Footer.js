import React from 'react'



const Footer = () => {
  return (
    <>
      <div class="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4">Adres</h4>
                    <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>İstanbul,Türkiye</p>
                    <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+123 456 789 </p>
                    <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com
                    </p>
                    <div class="d-flex pt-2">
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4">Workshoplar</h4>
                    <a class="btn btn-link" href="" style={{ textDecoration: 'none' }}>Viski & Dine</a>
                    <a class="btn btn-link" href="" style={{ textDecoration: 'none' }}>Vejeteryan Lezzetler</a>
                    <a class="btn btn-link" href="" style={{ textDecoration: 'none' }}>Taze Makarna</a>
                    <a class="btn btn-link" href="" style={{ textDecoration: 'none' }}>İtalyan Mutfağı</a>
                    <a class="btn btn-link" href="" style={{ textDecoration: 'none' }}>Fransız Mutfağı</a>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4">Eğitimlerimiz</h4>
                    <a class="btn btn-link" href="" style={{ textDecoration: 'none' }}>Profesyonel Aşçılık</a>
                    <a class="btn btn-link" href="" style={{ textDecoration: 'none' }}>Profesyonel Pastacılık ve Ekmekçilik</a>
                    <a class="btn btn-link" href="" style={{ textDecoration: 'none' }}>Profesyonel Bar ve Miksoloji Eğitim Programı</a>
                    
                   
                </div>
                
            </div>
        </div>
        <div class="container">
            <div class="copyright">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a class="border-bottom" href="#" style={{ textDecoration: 'none' }}>Lezzet Atölyesi</a>, Tüm Hakları Saklıdır.
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer;