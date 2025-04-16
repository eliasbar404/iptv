import React, { useEffect, useState } from 'react';

const LOGOS = [
  {
    name: 'Hulu',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg'
  },
  {
    name: 'Disney+',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg'
  },
  {
    name: 'Netflix',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
  },
  {
    name: 'HBO Max',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg'
  },
  {
    name: 'ITV',
    url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/76/ITV_logo_2019.svg/1200px-ITV_logo_2019.svg.png'
  },
  {
    name: 'BBC Two',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/BBC_Two_logo_2021.svg/1280px-BBC_Two_logo_2021.svg.png'
  },
  {
    name: 'BBC One',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/BBC_One_logo_2021.svg/1280px-BBC_One_logo_2021.svg.png'
  },
  {
    name: 'Channel 4',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Channel_4_logo_2015.svg/1200px-Channel_4_logo_2015.svg.png'
  },
  {
    name: 'BBC News',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png'
  }
];

const ChannelsSlide: React.FC = () => {
  const [position, setPosition] = useState(0);
  
  useEffect(() => {
    const animation = setInterval(() => {
      setPosition((prev) => (prev - 1) % (LOGOS.length * 100));
    }, 30);

    return () => clearInterval(animation);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-white py-8">
      <div 
        className="flex items-center transition-transform duration-100 ease-linear"
        style={{ 
          transform: `translateX(${position}px)`,
          width: `${LOGOS.length * 200}px`
        }}
      >
        {[...LOGOS, ...LOGOS].map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex-shrink-0 mx-8 w-32 h-20 flex items-center justify-center"
          >
            <img
              src={logo.url}
              alt={logo.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
    </div>
  );
};

export default ChannelsSlide;