import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';

import './_MainPage.css';

const ListItemWrapper = (props) => {
  return (
    <li className={`list-item-wrapper ${props.className || ''}`}>
      {props.children}
    </li>
  );
};

const Child = (props) => {
  return <div>{props.children}</div>;
};

//const calcWidth = (width) => (width > 800 ? Math.floor(width / 2) : width);
const calcWidth = (width) => 600;
const calcHeight = (width) => calcWidth(width) * 0.65;

const MainPage = (props) => {
  //return <div className="main-page">MAIN PAGE</div>;

  const [windowSize, setWindowSize] = useState({
    width: calcWidth(window.innerWidth),
    height: calcHeight(window.innerWidth),
  });

  // handleResize 함수를 debounce로 감싸고, 시간을 설정합니다
  // 1000ms = 1sec
  const handleResize = debounce(() => {
    setWindowSize({
      width: calcWidth(window.innerWidth),
      height: calcHeight(window.innerWidth),
    });
  }, 500);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      // cleanup
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const ListItem = (props) => {
    return (
      <div
        className="list-item"
        id={props.id}
        // style={{ width: windowSize.width, height: windowSize.height }}
        style={{ width: windowSize.width }}
      >
        <div className="description">{/* <span className="bar"></span> */}</div>
        {props.children}
        <div
          class="list-item__image"
          style={{
            backgroundImage: `url(${props.imageUrl})`,
          }}
        ></div>
      </div>
    );
  };

  const imageUrl = 'https://picsum.photos/id/211/1200/1200';
  const myList = (
    <ul className="list-container">
      <ListItemWrapper>
        <ListItem imageUrl={imageUrl}>
          {/* <img src="https://picsum.photos/id/211/1200/1200" alt="" srcset="" /> */}
        </ListItem>
      </ListItemWrapper>
      <ListItemWrapper>
        <ListItem>2</ListItem>
      </ListItemWrapper>
      <ListItemWrapper>
        <ListItem>3-1</ListItem>
        <ListItem>3-2</ListItem>
      </ListItemWrapper>
      <ListItemWrapper>
        <ListItem>4-1</ListItem>
        <ListItem>4-2</ListItem>
      </ListItemWrapper>
    </ul>
  );

  const MyImage = (imageurl, w = 1000, h = 1000) => {
    //const imageurl = `https://picsum.photos/id/${id}/${w}/${h}`;
    //const imageurl = `https://picsum.photos/id/${id}/500/500`;
    return (
      <div
        className="imageWrapper"
        style={{ width: w, height: Math.floor(w * 0.55) }}
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

  const images = {
    guitar:
      'https://github.com/Maetel/chtpage-images/blob/master/guitar1.jpg?raw=true',
    piano:
      'https://github.com/Maetel/chtpage-images/blob/master/piano1.jpg?raw=true',
    studio:
      'https://github.com/Maetel/chtpage-images/blob/master/studio1.jpg?raw=true',
    sing: 'https://github.com/Maetel/chtpage-images/blob/master/sing1.jpg?raw=true',
  };

  const bootstrap = (
    <div className="container-fluid">
      <div class="row row-cols-2">
        <div class="col">{MyImage(images.studio, _width())}</div>
        <div class="col">{MyImage(images.sing, _width())}</div>
        <div class="col">{MyImage(images.guitar, _width())}</div>
        <div class="col">{MyImage(images.piano, _width())}</div>
      </div>
    </div>
  );

  return bootstrap;
  // return myList;
};

export default MainPage;

/*
<ul className="list-item__container">
      <li className="list-item__main">item1</li>
      <li className="list-item__sub">item2</li>
      <li className="list-item__sub">item3</li>
      <li className="list-item__sub">item4</li>
      <li className="list-item__sub">item5</li>
      <li className="list-item__sub">item11</li>
      <li className="list-item__sub">item22</li>
      <li className="list-item__sub">item33</li>
      <li className="list-item__small">item44</li>
      <li className="list-item__small">item45</li>
    </ul>

.list-item__container {
    margin : 0px;
    padding : 0px;
    width:100%;
    max-width: 100%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    display:flex;
    flex-direction: row;
    list-style-type: none;
}

.list-item__main {
    min-width: 400px;
    flex: 2 0 0;
    background-color: blue;
}

.list-item__sub {
    min-width: 200px;
    flex: 1 0 0;
    background-color: blueviolet;
}
.list-item__small {
    min-width: 200px;;
    flex: 1 0 0;
    background-color: gray;
}

*/
