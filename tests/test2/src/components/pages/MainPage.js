import { difference } from 'lodash';
import React, { useState, useEffect } from 'react';

import './MainPage.css';

const images = {
  guitar:
    'https://github.com/Maetel/chtpage-images/blob/master/guitar1.jpg?raw=true',
  piano:
    'https://github.com/Maetel/chtpage-images/blob/master/piano1.jpg?raw=true',
  studio:
    'https://github.com/Maetel/chtpage-images/blob/master/studio1.jpg?raw=true',
  sing: 'https://github.com/Maetel/chtpage-images/blob/master/sing1.jpg?raw=true',
  sing2:
    'https://github.com/Maetel/chtpage-images/blob/master/sing2.jpg?raw=true',
  random: 'https://picsum.photos/id/211/1200/1200',
};

const getImageOf = (str) =>
  `https://github.com/Maetel/chtpage-images/blob/master/${str}.jpg?raw=true`;

const ContentWrapper = (props) => {
  const ratio = 0.55;
  const isVertical = props.isVertical;
  const w = props.width;
  const h = isVertical ? Math.floor(w * 2 * ratio) : Math.floor(w * ratio);
  // const h = Math.floor(w * ratio);
  return (
    <div
      className={`content-wrapper`}
      style={{
        ...props.style,
        flexDirection: isVertical ? 'column' : 'row',
      }}
    >
      {props.children}
    </div>
  );
};

const ContentHolder = (props) => {
  return (
    <div
      className="content-holder"
      style={{ ...props.style }}
      // style={{ width: w, height: Math.floor(w * 0.55) }}
    >
      <span className="image-indicator"></span>
      <div
        className="image-small"
        style={{
          backgroundImage: `url(${props.imageurl})`,
        }}
      ></div>
      <div className="image-detail">
        <a>자세히 보기</a>
      </div>
    </div>
  );
};

const MainPage = (props) => {
  const MyImage = (imageurl, w = 1000, h = 1000) => {
    return (
      <div
        className="content-holder"
        // style={{ width: w, height: Math.floor(w * 0.55) }}
      >
        <span className="image-indicator"></span>
        <div
          className="myimage"
          style={{
            backgroundImage: `url(${imageurl})`,
          }}
        ></div>
        <div className="details">
          <a>자세히 보기</a>
        </div>
      </div>
    );
  };

  const _width = () =>
    window.innerWidth > 960
      ? Math.floor(window.innerWidth / 2)
      : window.innerWidth;
  const ratio = 0.55;
  const [width, setWidth] = useState(_width());
  const [height, setHeight] = useState(_width() * ratio);
  useEffect(() => {
    const setSize = () => {
      const w =
        window.innerWidth > 960
          ? Math.floor(window.innerWidth / 2)
          : window.innerWidth;
      setWidth(w);
      setHeight(w * ratio);
    };
    // console.log(width);
    window.addEventListener('resize', setSize);
    return () => window.removeEventListener('resize', setSize);
  });

  const bootstrap = (
    <div className="container-fluid">
      <div class="row row-cols-2">
        {/* <div class="col">{MyImage(images.studio, _width())}</div>
        <div class="col">{MyImage(images.sing, _width())}</div>
        <div class="col">{MyImage(images.guitar, _width())}</div>
        <div class="col">{MyImage(images.piano, _width())}</div> */}
        <div className="col">
          <ContentWrapper style={{ width: width, height: height }}>
            <ContentHolder imageurl={getImageOf('studio1')} />
          </ContentWrapper>
        </div>
        <div className="col">
          <ContentWrapper style={{ width: width, height: height }}>
            <ContentHolder imageurl={getImageOf('sing1')} />
            <ContentWrapper
              style={{ flex: 1, width: width / 4, height: height }}
              isVertical
            >
              <ContentHolder imageurl={getImageOf('guitar1')} />
              <ContentHolder imageurl={getImageOf('studio2')} />
            </ContentWrapper>
          </ContentWrapper>
        </div>
        <div className="col">
          <ContentWrapper style={{ width: width, height: height * 0.7 }}>
            <ContentHolder imageurl={getImageOf('guitar2')} />
          </ContentWrapper>
        </div>
        <div className="col">
          <ContentWrapper style={{ width: width, height: height * 0.7 }}>
            <ContentHolder imageurl={getImageOf('piano1')} />
          </ContentWrapper>
        </div>
      </div>
    </div>
  );

  return bootstrap;
  // return myList;
};

export default MainPage;
