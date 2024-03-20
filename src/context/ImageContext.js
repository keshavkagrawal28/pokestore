import { createContext, useCallback } from 'react';
import cherish from './../assets/cherish.png';
import dive from './../assets/dive.png';
import dream from './../assets/dream.png';
import fast from './../assets/fast.png';
import friend from './../assets/friend.png';
import great from './../assets/great.png';
import gs from './../assets/gs.png';
import heavy from './../assets/heavy.png';
import koraidon from './../assets/koraidon.png';
import Level from './../assets/Level.png';
import love from './../assets/love.png';
import lure from './../assets/lure.png';
import luxury from './../assets/luxury.png';
import master from './../assets/master.png';
import mewtwo from './../assets/mewtwo.png';
import miraidon from './../assets/miraidon.png';
import moon from './../assets/moon.png';
import nest from './../assets/nest.png';
import net from './../assets/net.png';
import park from './../assets/park.png';
import poke from './../assets/poke.png';
import quick from './../assets/quick.png';
import premier from './../assets/premier.png';
import repeat from './../assets/repeat.png';
import safari from './../assets/safari.png';
import sport from './../assets/sport.png';
import strange from './../assets/strange.png';
import timer from './../assets/timer.png';
import ultra from './../assets/ultra.png';

export const ImageContext = createContext();

export const ImageContextProvider = ({ children }) => {
  const getImgById = useCallback((id) => {
    const imgData = [
      {
        id: '1',
        path: cherish,
      },
      {
        id: '2',
        path: dive,
      },
      {
        id: '3',
        path: dream,
      },
      {
        id: '4',
        path: fast,
      },
      {
        id: '5',
        path: friend,
      },
      {
        id: '6',
        path: great,
      },
      {
        id: '7',
        path: gs,
      },
      {
        id: '8',
        path: heavy,
      },
      {
        id: '9',
        path: koraidon,
      },
      {
        id: '10',
        path: Level,
      },
      {
        id: '11',
        path: love,
      },
      {
        id: '12',
        path: lure,
      },
      {
        id: '13',
        path: luxury,
      },
      {
        id: '14',
        path: master,
      },
      {
        id: '15',
        path: mewtwo,
      },
      {
        id: '16',
        path: miraidon,
      },
      {
        id: '17',
        path: moon,
      },
      {
        id: '18',
        path: nest,
      },
      {
        id: '19',
        path: net,
      },
      {
        id: '20',
        path: park,
      },
      {
        id: '21',
        path: poke,
      },
      {
        id: '22',
        path: quick,
      },
      {
        id: '23',
        path: premier,
      },
      {
        id: '24',
        path: repeat,
      },
      {
        id: '25',
        path: safari,
      },
      {
        id: '26',
        path: sport,
      },
      {
        id: '27',
        path: strange,
      },
      {
        id: '28',
        path: timer,
      },
      {
        id: '29',
        path: ultra,
      },
      {
        id: '29',
        path: '',
      },
    ];
    return imgData.find((i) => i.id === id).path;
  }, []);

  return (
    <ImageContext.Provider value={{ getImgById }}>
      {children}
    </ImageContext.Provider>
  );
};
