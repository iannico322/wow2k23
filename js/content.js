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
        "https://logos-world.net/wp-content/uploads/2021/03/Lamborghini-Logo.png",
        "https://th.bing.com/th/id/R.6ae9acb98ab14721b1b6173c2e50e8ae?rik=FQLc0A3HL0ZO6w&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2018%2f02%2fFerrari-Logo.png&ehk=JGcrkV8HIaNS66DH%2fyxzterrnb5vmcdXVAL2Ohd9UHk%3d&risl=&pid=ImgRaw&r=0"
    ],
    "minor-sponsor":[
        "https://th.bing.com/th/id/R.c5adac6e3622630cdcab9771cd51494c?rik=azpkvwmB%2fN7dLw&riu=http%3a%2f%2f120.28.218.189%3a8042%2fassets%2ffrappe%2fimages%2fgaisano_logo.png&ehk=j8ZrTbd3Mtn1m418iSt7Q1ohBIEh%2fTX43usvkn7GNlI%3d&risl=&pid=ImgRaw&r=0",
        "https://th.bing.com/th/id/R.8e6eda901d261fcd1aa687244b654311?rik=TM%2bja0K%2b2ghZkw&riu=http%3a%2f%2fwhatshappening.com.ph%2fuploads%2f2017%2f03%2f03%2f1488505995.jpg&ehk=2LFP%2bAD7UeMt4is8ZpewZpvsuxy7AtJISwAkpnTrO0s%3d&risl=&pid=ImgRaw&r=0",
        "https://2.bp.blogspot.com/-k_eEyq2aiu0/WY0im8XcDQI/AAAAAAAAATE/mx9dI8DoYPU4hfBY5DUtsRD3UgA58xTXgCLcBGAs/s1600/SM%2BLogo.png",
        "https://th.bing.com/th/id/R.c5adac6e3622630cdcab9771cd51494c?rik=azpkvwmB%2fN7dLw&riu=http%3a%2f%2f120.28.218.189%3a8042%2fassets%2ffrappe%2fimages%2fgaisano_logo.png&ehk=j8ZrTbd3Mtn1m418iSt7Q1ohBIEh%2fTX43usvkn7GNlI%3d&risl=&pid=ImgRaw&r=0",
        "https://th.bing.com/th/id/R.8e6eda901d261fcd1aa687244b654311?rik=TM%2bja0K%2b2ghZkw&riu=http%3a%2f%2fwhatshappening.com.ph%2fuploads%2f2017%2f03%2f03%2f1488505995.jpg&ehk=2LFP%2bAD7UeMt4is8ZpewZpvsuxy7AtJISwAkpnTrO0s%3d&risl=&pid=ImgRaw&r=0",

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