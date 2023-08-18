const content = {
    "wow-arc": [
      "GtL1huin9EE",
      "ikC4pdT9SSo",
      "GtL1huin9EE",
      "ikC4pdT9SSo"
    ],
    "major-sponsor":[
        "https://www.funcage.com/blog/wp-content/uploads/2014/11/Adidas-550x365.png",
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/05/Toyota-logo.png?auto=format&q=60&fit=max&w=930",
        "https://logos-world.net/wp-content/uploads/2021/03/Lamborghini-Logo.png"
    ],
    "minor-sponsor":[
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtaeGbAHwfa3BHx2ZKM1ig-Wni3cbBwajuqdNjR0DV&s",


    ]
  };

  const iframeContainer = document.querySelector('.contents-wowarc');
  const majorSponsorContainer = document.querySelector('.major-content');
  const minorSponsorContainer = document.querySelector('.minor-content');


content["wow-arc"].forEach(videoId => {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.title = 'YouTube video player';
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;

    iframeContainer.appendChild(iframe);
  });


  content["major-sponsor"].forEach(img_src => {
    const img = document.createElement('img');
    img.src = `${img_src}`;
    img.alt = `${img_src}`;
    majorSponsorContainer.appendChild(img);
  });

  content["minor-sponsor"].forEach(img_src => {
    const img = document.createElement('img');
    img.src = `${img_src}`;
    img.alt = `${img_src}`;
    minorSponsorContainer.appendChild(img);
  });