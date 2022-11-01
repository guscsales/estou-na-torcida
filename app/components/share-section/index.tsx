import Container from '../container/index';
import { Button, Text } from 'thon-ui';
import WideCard from '../wide-card';

export default function ShareSection() {
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
        <div className="flex flex-col gap-2 mt-4 sm:w-9/12 lg:w-8/12">
          <Button variant="primary">Compartilhar no Feed</Button>
          <Button variant="primary">Compartilhar nos Stories</Button>
          <Button variant="primary">Enviar no WhatsApp</Button>
          <Button variant="primary">Fazer Download</Button>
        </div>
      </header>
      <div className="relative h-[240px]">
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
          player={{ id: 'neymar-jr', name: 'Neymar Jr' }}
          user={{
            id: '',
            email: '',
            name: 'Gustavo Sales',
            pictureURL: '/images/gus.jpeg',
          }}
          supportPhrase={{ id: '', phrase: 'Vai Brasil! Rumo ao Hexa!' }}
        />
      </div>
    </Container>
  );
}
