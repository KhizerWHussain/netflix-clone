export const sliderSettingsTrending = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1440, // For very large screens
      settings: {
        slidesToShow: 5, // Show 5 movies
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 1024, // For standard large screens
      settings: {
        slidesToShow: 4, // Show 4 movies on slightly smaller screens
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
};
