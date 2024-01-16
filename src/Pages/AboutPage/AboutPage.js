import React from 'react'

const AboutPage = () => {
  return (
   <>
   <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
      <div className="container about px-lg-0">
        <div className="row g-0 mx-lg-0">
          <div className="col-lg-6 ps-lg-0" style={{ minHeight: '400px' }}>
            <div className="position-relative h-100">
              <img
                className="position-absolute img-fluid w-100 h-100"
                src="img/pasta.jpg"
                style={{ objectFit: 'cover' }}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 about-text py-5 wow fadeIn">
            <div className="p-lg-5 pe-lg-0">
              <div className="section-title text-start">
                <h1 className="display-10 mb-4" style={{ color: '#ab7442' }} >Hakkımızda</h1>
              </div>
              <p className="mb-4 pb-2">
              Lezzet Atölyesi, zengin mutfak deneyimleri sunan interaktif workshop'larıyla gastronomi tutkunlarını bir araya getiriyor. Tarihine baktığımızda, Lezzet Atölyesi, lezzetin sırlarını paylaşmak ve katılımcılara eğlenceli bir öğrenme ortamı sağlamak amacıyla kuruldu. Workshop'larımız, şeflerin rehberliğinde, özenle seçilmiş malzemelerle gerçekleşir, katılımcılara çeşitli mutfak becerilerini kazanma ve geliştirme fırsatı sunar. Bu özel deneyimler, lezzetin derinliklerine inmeyi seven herkes için unutulmaz anılar yaratma fırsatı sunar.
              </p>
              <div className="row g-4 mb-4 pb-2">
                <div className="col-sm-6 wow fadeIn">
                  <div className="d-flex align-items-center">
                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{ width: '60px', height: '60px' }}>
                    <i class="fa-solid fa-kitchen-set fa-4x" style={{ color: '#ab7442' }}></i>
                    </div>
                    <div className="ms-3">
                      <h2 className=" mb-1" data-toggle="counter-up" style={{ color: '#ab7442' }} >1258</h2>
                      <p className="fw-medium mb-0" style={{ color: 'black' }}>Workshop</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 wow fadeIn">
                  <div className="d-flex align-items-center">
                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{ width: '60px', height: '60px' }}>
                    <i class="fa-solid fa-fire-burner fa-4x"style={{ color: '#ab7442' }}></i>
                    </div>
                    <div className="ms-3">
                    <h2 className=" mb-1"  style={{ color: '#ab7442' }} >52</h2>
                      <p className="fw-medium mb-0"style={{ color: 'black' }}>Dünya Mutfağı</p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>

   </>
  )
}

export default AboutPage;