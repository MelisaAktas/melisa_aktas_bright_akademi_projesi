import React from 'react'

const ContactPage = () => {
  return (
    <>
      
{/*       
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">İletişim</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a className="text-white" href="#">Anasayfa</a></li>
              <li className="breadcrumb-item text-white active" aria-current="page">İletişim</li>
            </ol>
          </nav>
        </div>
      </div>  
      

      
     
  
      {/* Page Header End */}
      
      {/* Contact Start */}
      <div className="container-fluid bg-light overflow-hidden px-lg-0" style={{ margin: '6rem 0' }}>
        <div className="container contact px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 contact-text py-5 wow fadeIn" data-wow-delay="0.5s">
              <div className="p-lg-5 ps-lg-0">
                <div className="section-title text-start">
                  <h1 className="display-5 mb-4">İletişim</h1>
                </div>
                <p className="mb-4">"Lezzet Atölyesi Workshopları ile unutulmaz bir mutfak deneyimi yaşamak ister misiniz? Bizimle iletişime geçin, sizin için özel tasarlanmış workshoplarımız hakkında bilgi alın. Lezzet dolu anlar için bize ulaşın!" </p>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="name" placeholder="İsminiz" />
                        <label htmlFor="name">İsminiz</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="email" className="form-control" id="email" placeholder="Email Adresiniz" />
                        <label htmlFor="email">Email Adresiniz</label>
                      </div>
                    </div>
                    
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className="form-control" placeholder="Notunuz" id="message" style={{ height: '100px' }}></textarea>
                        <label htmlFor="message">Notunuz...</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">Gönder</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 pe-lg-0" style={{ minHeight: '400px' }}>
              <div className="position-relative h-100">
                <iframe
                  className="position-absolute w-100 h-100"
                  style={{ objectFit: 'cover' }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12770685.69936124!2d24.53571365831647!3d38.6064793612906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b0155c964f2671%3A0x40d9dbd42a625f2a!2zVMO8cmtpeWU!5e0!3m2!1str!2str!4v1703204330736!5m2!1str!2str"
                  width="600"
                  height="450"
                
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  frameBorder="0"
                
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    
    </>
  )
}

export default ContactPage;