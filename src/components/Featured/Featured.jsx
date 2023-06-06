import React from 'react';
import './Featured.css';
import { truncate } from '@lib/helpers';
import { AiOutlineInfoCircle } from 'react-icons/ai';

function Featured() {
  return (
    <div className="relative h-[56.25vw]">
      <video
        className="w-full h-[56.25vw] brightness-[60%]"
        autoPlay
        loop
        src="https://rr3---sn-qxaeenlz.googlevideo.com/videoplayback?expire=1686090187&ei=a11_ZM3nNNDNyQXSjrngDw&ip=196.196.53.83&id=o-ALnRhaBgStyqXlzXvWNh2CpL9dNg2EsEz7yX2TstcpBE&itag=22&source=youtube&requiressl=yes&spc=qEK7B_jYInfxgOZkOYibXG0KrIY-_Le376cSXkmbpA&vprv=1&svpuc=1&mime=video%2Fmp4&ns=uzotHHFVkw4SPhYuNisBK4gN&cnr=14&ratebypass=yes&dur=60.650&lmt=1655939832799285&fexp=24007246,24350017,24362685&beids=24350017&c=WEB&txp=4532434&n=xXBzI6afCtYycQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgZZ76DkBhGIUWBXj3CLnfmvYnjfmFfD9dWuuOFMRkv98CICsCngJH2X-_at5LErI9avu53d96fKw2IyLcl3v4uBsk&title=My%20Hero%20Academia%20Season%206%20-%20Official%20Trailer%203%20%7C%20AniTV&rm=sn-4g5err76&req_id=e0c5d10b41a5a3ee&cm2rm=sn-gwpa-w5pe7l,sn-gwpa-qxae77s&redirect_counter=3&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=yj&mip=2405:201:5c03:3042:549e:b3ae:67e6:9fcd&mm=30&mn=sn-qxaeenlz&ms=nxu&mt=1686067950&mv=m&mvi=3&pl=50&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAMbqPApPctY6hI19SuauQ0H-yZaxxcdIT3QkO34WaogdAiBM1S28-_qXvq_XmdAr3tFQm59H-EHCev43CSv43y45WQ%3D%3D"
        poster="https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABelaQlSXCG8fmtzT6msb_gJSOLWh9hJmV9lt84vY8P5ee3wxp1Hp1yfHsstB-ExKvdgP7tDCN3W3tBT5BHi6-bgvorDccPcmtOhZ.webp?r=ea1"
      ></video>
      <div className="absolute top-[30%] ml-4">
        <p
          className="
            h-full
            w-[50%]
            text-6xl
            font-bold
            drop-shadow-xl"
        >
          My Hero Academia
        </p>
        <p
          className="
            w-[40%]
            text-[14px]
            font-bold
            mt-3
            drop-shadow-xl"
        >
          A superhero-loving boy without any powers is determined to enroll in a
          prestigious hero academy and learn what it really means to be a hero.
          A superhero-loving boy without any powers is determined to enroll in a
          prestigious hero academy and learn what it really means to be a hero.
        </p>
        <div className="flex flex-row gap-3 mt-3 items-center">
          <button
            className="
            bg-white
            bg-opacity-40
            rounded-md
            py-2
            px-3
            w-auto
            text-lg
            font-bold
            flex flex-row hover:bg-opacity-20 transition"
          >
            <AiOutlineInfoCircle className="mt-1 mr-1 font-bold" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;

/* 

<header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            `This is a test description
                This is a test description
                This is a test description
                This is a test description
                This is a test description
                This is a test description
                This is a test description
                This is a test description
                This is a test description`,
            150
          )}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>*/
