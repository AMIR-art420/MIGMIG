export default function Home() {
  return (
    <main>

      {/* Header */}
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">

                <a href="/" className="logo">
                  <img
                    src="/assets/images/logo.png"
                    alt="MIGMIG Games"
                    style={{ width: "158px" }}
                  />
                </a>

                <ul className="nav">
                  <li>
                    <a href="/" className="active">
                      خانه
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      فروشگاه
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      جزئیات محصول
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      تماس با ما
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      ورود
                    </a>
                  </li>
                </ul>

                <a className="menu-trigger">
                  <span>منو</span>
                </a>

              </nav>
            </div>
          </div>
        </div>
      </header>


      {/* Banner */}
      <div className="main-banner">
        <div className="container">

          <div className="row">

            <div className="col-lg-6 align-self-center">

              <div className="caption header-text">

                <h6>
                  به MIGMIG Games خوش آمدید
                </h6>

                <h2>
                  بهترین سایت بازی تا کنون
                </h2>

                <p>
                  تیم MIGMIG games یک مجموعه برای علاقه‌مندان به بازی‌های ویدیویی است.
                </p>


                <div className="search-input">

                  <form>
                    <input
                      type="text"
                      placeholder="چیزی تایپ کنید..."
                    />

                    <button>
                      جستجو
                    </button>

                  </form>

                </div>


              </div>

            </div>


            <div className="col-lg-4 offset-lg-2">

              <div className="right-image">

                <img
                  src="/assets/images/banner-image.jpg"
                  alt=""
                />

                <span className="price">
                  30,000
                </span>

                <span className="offer">
                  -40%
                </span>

              </div>

            </div>


          </div>

        </div>
      </div>



      {/* Features */}
      <div className="features">

        <div className="container">

          <div className="row">


            <Feature 
              image="featured-01.png"
              title="ذخیره سازی رایگان"
            />


            <Feature 
              image="featured-02.png"
              title="کاربر بیشتر"
            />


            <Feature 
              image="featured-03.png"
              title="پاسخ آماده"
            />


            <Feature 
              image="featured-04.png"
              title="طرح بندی آسان"
            />


          </div>

        </div>

      </div>


    </main>
  );
}



function Feature({image,title}) {
  return (
    <div className="col-lg-3 col-md-6">

      <a href="#">

        <div className="item">

          <div className="image">

            <img
              src={`/assets/images/${image}`}
              alt=""
              style={{maxWidth:"44px"}}
            />

          </div>


          <h4>
            {title}
          </h4>


        </div>

      </a>

    </div>
  );
}
