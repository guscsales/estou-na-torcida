import { Text } from 'thon-ui';
import Container from '../components/container/index';

export default function PrivatePolicy() {
  return (
    <>
      <head>
        <title>Política de Privacidade - Estou Na Torcida</title>
      </head>
      <Container className="flex flex-col gap-3 mt-6">
        <Text as="h1" variant="2xl" className="mb-2">
          Política Privacidade
        </Text>
        <Text as="p">
          A sua privacidade é importante para nós. É política do Estou Na
          Torcida respeitar a sua privacidade em relação a qualquer informação
          sua que possamos coletar no site Estou Na Torcida, e outros sites que
          possuímos e operamos.
        </Text>
        <Text as="p">
          Solicitamos informações pessoais apenas quando realmente precisamos
          delas para lhe fornecer um serviço. Fazemo-lo por meios justos e
          legais, com o seu conhecimento e consentimento. Também informamos por
          que estamos coletando e como será usado.
        </Text>
        <Text as="p">
          Apenas retemos as informações coletadas pelo tempo necessário para
          fornecer o serviço solicitado. Quando armazenamos dados, protegemos
          dentro de meios comercialmente aceitáveis ​​para evitar perdas e
          roubos, bem como acesso, divulgação, cópia, uso ou modificação não
          autorizados.
        </Text>
        <Text as="p">
          Não compartilhamos informações de identificação pessoal publicamente
          ou com terceiros, exceto quando exigido por lei.
        </Text>
        <Text as="p">
          O nosso site pode ter links para sites externos que não são operados
          por nós. Esteja ciente de que não temos controle sobre o conteúdo e
          práticas desses sites e não podemos aceitar responsabilidade por suas
          respectivas políticas de privacidade.
        </Text>
        <Text as="p">
          Você é livre para recusar a nossa solicitação de informações pessoais,
          entendendo que talvez não possamos fornecer alguns dos serviços
          desejados.
        </Text>
        <Text as="p">
          O uso continuado de nosso site será considerado como aceitação de
          nossas práticas em torno de privacidade e informações pessoais. Se
          você tiver alguma dúvida sobre como lidamos com dados do usuário e
          informações pessoais, entre em contacto connosco.
        </Text>
        <Text as="h2" variant="xl" className="mb-1">
          Compromisso do Usuário
        </Text>
        <Text as="p">
          O usuário se compromete a fazer uso adequado dos conteúdos e da
          informação que o Estou Na Torcida oferece no site e com caráter
          enunciativo, mas não limitativo:
        </Text>
        <ul>
          <li>
            <Text as="p">
              A) Não se envolver em atividades que sejam ilegais ou contrárias à
              boa fé a à ordem pública;
            </Text>
          </li>
          <li>
            <Text as="p">
              B) Não difundir propaganda ou conteúdo de natureza racista,
              xenofóbica, betano ou azar, qualquer tipo de pornografia ilegal,
              de apologia ao terrorismo ou contra os direitos humanos;
            </Text>
          </li>
          <li>
            <Text as="p">
              C) Não causar danos aos sistemas físicos (hardwares) e lógicos
              (softwares) do Estou Na Torcida, de seus fornecedores ou
              terceiros, para introduzir ou disseminar vírus informáticos ou
              quaisquer outros sistemas de hardware ou software que sejam
              capazes de causar danos anteriormente mencionados.
            </Text>
          </li>
        </ul>
        <Text as="h2" variant="xl" className="mb-1">
          Mais informações
        </Text>
        <Text as="p">
          Esperemos que esteja esclarecido e, como mencionado anteriormente, se
          houver algo que você não tem certeza se precisa ou não, geralmente é
          mais seguro deixar os cookies ativados, caso interaja com um dos
          recursos que você usa em nosso site.
        </Text>
        <Text as="p" className="font-bold">
          Esta política é efetiva a partir de 2 Novembro de 2022 às 10:00
          horário de Brasília.
        </Text>
      </Container>
    </>
  );
}
