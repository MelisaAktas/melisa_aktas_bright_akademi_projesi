
import React from 'react'



const HomePage = () => {
  return (
    <>
     <>
     <div className="container-fluid p-0 pb-5">
      <div className="owl-carousel header-carousel position-relative">
        <div className="owl-carousel-item position-relative">
          <img className="img-fluid" src="img/slider1.jpg" alt="" style={{ width: '100%', height: '100%' }} />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(53, 53, 53, .7)' }}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-lg-8 text-center">
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">HOŞ GELDİNİZ! </h5>
                  <h1 className="display-3 text-white animated slideInDown mb-4">Lezzet Atölyesi</h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-2">"Lezzet Atölyesi, gastronomi tutkunlarına, profesyonel şefler eşliğinde benzersiz yemek deneyimleri sunan bir kulüp ve workshop platformudur."</p>
                  {/* <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Diğer Carousel item'ları da buraya ekleyebilirsiniz */}
      </div>
    </div>
  
    </>
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5">
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                    <div class="d-flex align-items-center justify-content-between mb-2">
                        <div class="d-flex align-items-center justify-content-center bg-light" >
                        <i class="fa-solid fa-utensils fa-4x " style={{ color: '#ab7442' }}></i>
                        </div>
                        <h1 class="display-1 text-gray mb-0">01</h1>
                    </div>
                    <h5>Lezzet dolu 10 yıl</h5>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                    <div class="d-flex align-items-center justify-content-between mb-2">
                        <div class="d-flex align-items-center justify-content-center bg-light" >
                        < i class="fa-solid fa-burger fa-4x" style={{ color: '#ab7442' }}></i>
                        </div>
                        <h1 class="display-1 text-gray mb-0">02</h1>
                    </div>
                    <h5>Uzman mutfak ekibi</h5>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                    <div class="d-flex align-items-center justify-content-between mb-2">
                        <div class="d-flex align-items-center justify-content-center bg-light" >
                        <i class="fa-solid fa-pizza-slice fa-4x" style={{ color: '#ab7442' }}></i>
                        </div>
                        <h1 class="display-1 text-gray mb-0">03</h1>
                    </div>
                    <h5>Yaratıcı ve lezzetli tarifler</h5>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                    <div class="d-flex align-items-center justify-content-between mb-2">
                        <div class="d-flex align-items-center justify-content-center bg-light" >
                        < i class="fa-solid fa-cheese fa-4x"  style={{ color: '#ab7442' }}></i>
                        </div>
                        <h1 class="display-1 text-gray mb-0">04</h1>
                    </div>
                    <h5>Mutfakta keyifli anlar</h5>
                </div>
            </div>
        </div>
    </div>


  
 

{/* About start */}
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

    {/* Eğitimler Hakkında */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="section-title text-center">
          <h1 className="display-2 mb-5">Workshoplar</h1>
        </div>
        <div className="row g-4">
          <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="img/viski.png" />
              </div>
              <div className="p-4 text-center border border-5 border-light border-top-0">
                <h4 className="mb-3">Viski & Dine</h4>
                
                <p><i class="fa-regular  fa-calendar-days fa-2x" style={{ color: '#5b5b5d' }}></i> 20 Ocak,Cumartesi</p>
                <p><i class="fa-regular fa-clock fa-2x" style={{ color: '#5b5b5d' }}></i> 19:00-22:00</p>
                
               

              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeInUp">
            <div className="service-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="img/vejeteryan.png"  />
              </div>
              <div className="p-4 text-center border border-5 border-light border-top-0">
                <h4 className="mb-3">Vejeteryan Lezzetler</h4>

                <p><i class="fa-regular  fa-calendar-days fa-2x" style={{ color: '#5b5b5d' }}></i> 24 Ocak,Perşembe</p>
                <p><i class="fa-regular fa-clock fa-2x" style={{ color: '#5b5b5d' }}></i> 19:00-22:00</p>
                

              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeInUp" >
            <div className="service-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="/img/makarna.png" />
              </div>
              <div className="p-4 text-center border border-5 border-light border-top-0">
                <h4 className="mb-3">Taze Makarna</h4>

                <p><i class="fa-regular  fa-calendar-days fa-2x" style={{ color: '#5b5b5d' }}></i> 17 Ocak,Çarşamba</p>
                <p><i class="fa-regular fa-clock fa-2x" style={{ color: '#5b5b5d' }}></i> 19:00-22:00</p>
                


              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeInUp" >
            <div className="service-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="img/italyan.png"  />
              </div>
              <div className="p-4 text-center border border-5 border-light border-top-0">
                <h4 className="mb-3">İtalyan Mutfağı</h4>

                <p><i class="fa-regular  fa-calendar-days fa-2x" style={{ color: '#5b5b5d' }}></i> 23 Ocak,Salı</p>
                <p><i class="fa-regular fa-clock fa-2x" style={{ color: '#5b5b5d' }}></i> 19:00-22:00</p>
               


              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeInUp">
            <div className="service-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="/img/fransız.png"  />
              </div>
              <div className="p-4 text-center border border-5 border-light border-top-0">
                <h4 className="mb-3">Fransız Mutfağı</h4>
                
                <p><i class="fa-regular  fa-calendar-days fa-2x" style={{ color: '#5b5b5d' }}></i> 18 Ocak,Perşembe</p>
                <p><i class="fa-regular fa-clock fa-2x" style={{ color: '#5b5b5d' }}></i> 19:00-22:00</p>

              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeInUp" >
            <div className="service-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="/img/1y1k.png" alt="Kar Tutucu" />
              </div>
              <div className="p-4 text-center border border-5 border-light border-top-0">
                <h4 className="mb-3">1 Yemek 1 Kokteyl</h4>
                
                <p><i class="fa-regular  fa-calendar-days fa-2x" style={{ color: '#5b5b5d' }}></i> 27 Ocak,Cumartesi</p>
                <p><i class="fa-regular fa-clock fa-2x" style={{ color: '#5b5b5d' }}></i> 19:00-22:00</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 

    {/* Bize Ulaşın */}
    <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
      <div className="container quote px-lg-0">
        <div className="row g-0 mx-lg-0">
          <div className="col-lg-6 ps-lg-0" style={{ minHeight: '400px' }}>
            <div className="position-relative h-100">
              <img className="position-absolute img-fluid w-100 h-100" src="img/contact2.jpg" style={{ objectFit: 'cover' }} alt="" />
            </div>
          </div>
          <div className="col-lg-6 quote-text py-5 wow fadeIn" >
            <div className="p-lg-5 pe-lg-0">
              <div className="section-title text-start">
                <h1 className="display-5 mb-4">Bize Ulaşın</h1>
              </div>
              <p className="mb-7 pb-5">"Lezzet Atölyesi Workshopları ile unutulmaz bir mutfak deneyimi yaşamak ister misiniz? Bizimle iletişime geçin, sizin için özel tasarlanmış workshoplarımız hakkında bilgi alın. Lezzet dolu anlar için bize ulaşın!"</p>
              <form>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <input type="text" className="form-control border-0" placeholder="İsminiz" style={{ height: '55px' }} />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input type="email" className="form-control border-0" placeholder="Email Adresiniz" style={{ height: '55px' }} />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input type="text" className="form-control border-0" placeholder="Telefon Numaranız" style={{ height: '55px' }} />
                  </div>
                  <div className="col-12">
                    <textarea className="form-control border-0" placeholder="Notunuz..."></textarea>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-dark w-100 py-3" type="submit">Gönder</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Eğitimler */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="section-title text-center">
          <h1 className="display-5 mb-5">Eğitimlerimiz</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6 wow fadeInUp">
            <div className="team-item">
              <div className="overflow-hidden position-relative">
                <img className="img-fluid" src="img/proascı.png" alt="" />
                <div className="team-social">
                  <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                </div>
              </div>
              <div className="text-center border border-5 border-light border-top-0 p-4">
                <h5 className="mb-0">Profesyonel Aşçılık</h5>
                <small>Profesyonel mutfak süreçlerindeki tüm temel bilgi ve pratik eğitimin verildiği bu kapsamlı mutfak eğitimi, aşçılık üzerine kariyer yapmak isteyen öğrenciler, kendi işini yapmak isteyen girişimciler, yemek yapmayı seven ve mutfakta bir şeyler yapmanın doğru yolunu öğrenmek isteyen tüm katılımcılar için uygundur.</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp">
            <div className="team-item">
              <div className="overflow-hidden position-relative">
                <img className="img-fluid" src="img/propasta.png" alt="" />
                <div className="team-social">
                  <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                </div>
              </div>
              <div className="text-center border border-5 border-light border-top-0 p-4">
                <h5 className="mb-0">Profesyonel Pastacılık ve Ekmekçilik</h5>
                <small>Profesyonel pastacılık ve ekmekçilik üzerine kariyer yapmak isteyen öğrenciler, kendi işini yapmak isteyen girişimciler ve mutfakta bir şeyler yapmanın doğru yolunu öğrenmek isteyen farklı eğitim ve mesleki geçmişlerden gelen tüm katılımcılar için uygundur. </small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp">
            <div className="team-item">
              <div className="overflow-hidden position-relative">
                <img className="img-fluid" src="img/prokahve.png" alt="" />
                <div className="team-social">
                  <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                </div>
              </div>
              <div className="text-center border border-5 border-light border-top-0 p-4">
                <h5 className="mb-0">Barista Eğitimi:Temel & Uzmanlık</h5>
                <small>Onlarca yıllık bilgi, araştırma ve gerçek dünya deneyimine dayanan SCA Specialty Coffee Association’un SCA tarafından yetkilendirilmiş eğitmenimiz tarafından verilecek eğitim programları, kahve endüstrisinde başarılı bir kariyer oluşturmanıza yardımcı olmak için tasarlanmıştır.</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp">
            <div className="team-item">
              <div className="overflow-hidden position-relative">
                <img className="img-fluid" src="img/probar.png" alt="" />
                <div className="team-social">
                  <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                </div>
              </div>
              <div className="text-center border border-5 border-light border-top-0 p-4">
                <h5 className="mb-0">Profesyonel Bar ve Miksoloji Eğitim Programı</h5>
                <small>USLA Profesyonel Bar ve Miksoloji Eğitimi, barmenlik mesleğini tüm detaylarıyla öğrenmek ve bar servisi konusunda uzmaklaşmak isteyen öğrenciler ve bar ve içki servisi alanında ihtiyacı olan nitelikli iş gücünü karşılamak isteyen işletmeler için hazırlanmıştır.</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 

     
    </>
  )
}

export default HomePage;
