'use client';

import React from 'react';
import Container from '../container/index';
import { Button, Text } from 'thon-ui';
import WideCard from '../wide-card';
import { StickerDataContext } from '../../providers/sticker-data-providers/index';
import * as qs from 'qs';
import { format } from 'date-fns';

export default function ShareSection() {
  const isMobile = React.useMemo(() => {
    let check = false;
    (function (a) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4)
        )
      )
        check = true;
    })(navigator.userAgent);
    return check;
  }, []);
  const { stickerData } = React.useContext(StickerDataContext);

  const [loading, setLoading] = React.useState<
    'wide' | 'feed' | 'story' | null
  >(null);

  async function handleShareWide() {
    setLoading('wide');

    const params = qs.stringify({
      type: 'wide',
      ...stickerData.user,
      playerId: stickerData.player.id,
      phraseId: stickerData.phrase.id,
      ts: new Date().getTime(),
    });

    const generatorAPI = `/api/generator?${params}`;

    const response = await fetch(generatorAPI);
    const blob = await response.blob();
    const imageName = `Estou Na Torcida - ${stickerData.player.name} - ${format(
      new Date(),
      'dd-MM-yyyy HH-mm-ss'
    )}.png`;
    const filesArray = [
      new File([blob], imageName, {
        type: 'image/png',
        lastModified: new Date().getTime(),
      }),
    ];
    const shareData = {
      files: filesArray,
    };

    if (navigator.canShare && navigator.canShare(shareData)) {
      navigator.share(shareData);
    } else {
      var link = document.createElement('a');
      link.setAttribute('download', imageName);
      link.href = generatorAPI;

      document.body.appendChild(link);

      link.click();
      link.remove();
    }

    setLoading(null);
  }

  return (
    <Container className="grid sm:grid-cols-[350px_1fr] lg:grid-cols-[480px_1fr] gap-4 xl:gap-20 items-center">
      <header className="self-start">
        <Text
          as="h2"
          variant="3xl sm:4xl lg:5xl"
          className="text-emerald-700 mb-2"
        >
          Compartilhe seu sticker nas redes
        </Text>
        <Text as="p" variant="sm sm:base" className="text-gray-500 w-10/12">
          Você tem 3 tipos de stickers, um como esse ao lado outro no formato
          para feed e outro para stories.
        </Text>

        <div className="relative h-[240px] sm:hidden">
          <div className="absolute z-20 w-full opacity-50">
            <div
              className={`absolute bg-radial-green z-0
            w-[150px] h-[150px] top-[65px] right-[230px]
            sm:w-[250px] sm:h-[250px] sm:top-[0px] sm:right-[190px]
            lg:w-[300px] lg:h-[300px] lg:top-[0px] lg:right-[250px]
            2xl:w-[500px] 2xl:h-[500px] 2xl:top-[-110px] 2xl:right-[290px]`}
            />
            <div
              className={`absolute bg-radial-yellow z-10 
            w-[280px] h-[280px] top-[5px] right-[50px]
            sm:w-[370px] sm:h-[370px] sm:top-[-50px] sm:right-[30px] 
            lg:w-[420px] lg:h-[420px] lg:top-[-50px] lg:right-[30px]
            2xl:w-[740px] 2xl:h-[740px] 2xl:top-[-210px] 2xl:right-[20px]`}
            />
            <div
              className={`absolute bg-radial-blue z-0 
            w-[150px] h-[150px] top-[65px] right-[-5px]
            sm:w-[250px] sm:h-[250px] sm:top-[0px] sm:right-[-10px] 
            lg:w-[300px] lg:h-[300px] lg:top-[0px] lg:right-[0px]
            2xl:w-[500px] 2xl:h-[500px] 2xl:top-[-110px] 2xl:right-[-70px]
            `}
            />
          </div>
          <WideCard
            className="absolute left-[50%] top-[-190px] ml-[-600px] sm:ml-auto sm:top-[-200px] sm:right-[-400px] lg:right-[-320px] 2xl:right-[-260px] z-20"
            player={stickerData.player}
            user={stickerData.user}
            supportPhrase={stickerData.phrase}
          />
        </div>

        <div className="flex flex-col gap-3 mt-4 sm:w-9/12 lg:w-8/12">
          <Button variant="primary">
            {isMobile ? 'Compartilhar no' : 'Download Para o'} Feed
          </Button>
          <Button variant="primary">
            {isMobile ? 'Compartilhar nos' : 'Download Para os'} Stories
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleShareWide();
            }}
            loading={loading == 'wide'}
          >
            Download da Imagem {isMobile ? 'Acima' : 'Ao Lado'}
          </Button>
        </div>
      </header>
      <div className="relative h-[240px] hidden sm:block">
        <div className="absolute z-20 w-full opacity-50">
          <div
            className={`absolute bg-radial-green z-0
            w-[150px] h-[150px] top-[65px] right-[230px]
            sm:w-[250px] sm:h-[250px] sm:top-[0px] sm:right-[190px]
            lg:w-[300px] lg:h-[300px] lg:top-[0px] lg:right-[250px]
            2xl:w-[500px] 2xl:h-[500px] 2xl:top-[-110px] 2xl:right-[290px]`}
          />
          <div
            className={`absolute bg-radial-yellow z-10 
            w-[280px] h-[280px] top-[5px] right-[50px]
            sm:w-[370px] sm:h-[370px] sm:top-[-50px] sm:right-[30px] 
            lg:w-[420px] lg:h-[420px] lg:top-[-50px] lg:right-[30px]
            2xl:w-[740px] 2xl:h-[740px] 2xl:top-[-210px] 2xl:right-[20px]`}
          />
          <div
            className={`absolute bg-radial-blue z-0 
            w-[150px] h-[150px] top-[65px] right-[-5px]
            sm:w-[250px] sm:h-[250px] sm:top-[0px] sm:right-[-10px] 
            lg:w-[300px] lg:h-[300px] lg:top-[0px] lg:right-[0px]
            2xl:w-[500px] 2xl:h-[500px] 2xl:top-[-110px] 2xl:right-[-70px]
            `}
          />
        </div>
        <WideCard
          className="absolute left-[50%] top-[-190px] ml-[-600px] sm:ml-auto sm:top-[-200px] sm:right-[-400px] lg:right-[-320px] 2xl:right-[-260px] z-20"
          player={stickerData.player}
          user={stickerData.user}
          supportPhrase={stickerData.phrase}
        />
      </div>
    </Container>
  );
}
