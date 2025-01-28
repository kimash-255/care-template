import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script src="/assets/js/jquery-3.7.1.min.js" async></script>
        {/* General metadata */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />

        {/* Favicon */}
        <link
          rel="icon"
          type="image/x-icon"
          href="/assets/img/logo/favicon.png"
        />

        {/* Stylesheets */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/all-fontawesome.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
        {/* Scripts */}
        {/* <script
          data-cfasync="false"
          src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
          async
        ></script> */}

        <script src="/assets/js/jquery.easing.min.js" async></script>
        <script src="/assets/js/jquery.appear.min.js" async></script>
        <script src="/assets/js/jquery.nice-select.min.js" async></script>
        <script src="/assets/js/modernizr.min.js" async></script>
        <script src="/assets/js/bootstrap.bundle.min.js" async></script>
        <script src="/assets/js/imagesloaded.pkgd.min.js" async></script>
        <script src="/assets/js/jquery.magnific-popup.min.js" async></script>
        <script src="/assets/js/isotope.pkgd.min.js" async></script>
        <script src="/assets/js/owl.carousel.min.js" async></script>
        <script src="/assets/js/counter-up.js" async></script>
        <script src="/assets/js/wow.min.js" async></script>
        <script src="/assets/js/main.js" async></script>
      </body>
    </Html>
  );
}
