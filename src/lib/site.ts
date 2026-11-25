import logoMark from "@/assets/salv-logo-mark.png.asset.json";
import artAmericaJuventude from "@/assets/america-mg-x-juventude.webp.asset.json";
import artCapim from "@/assets/capim-fc-x-g3x.webp.asset.json";
import artChelsea from "@/assets/chelsea-x-luton.webp.asset.json";
import artCorinthiansFutsal from "@/assets/corinthians-x-palmeiras-futsal.webp.asset.json";
import artCorinthiansTaubate from "@/assets/corinthians-x-taubate.webp.asset.json";
import artGremio from "@/assets/gremio-x-sao-paulo.webp.asset.json";
import artPalmeirasSp from "@/assets/palmeiras-x-sao-paulo.webp.asset.json";
import artReferencia from "@/assets/referencia-x-penha.webp.asset.json";
import artSantos from "@/assets/santos-matchday.webp.asset.json";

export const BEHANCE = "https://www.behance.net/salvdesign2";
export const WHATSAPP = "https://wa.me/5511921908975";
export const PHONE = "(11) 92190-8975";
export const LOGO = logoMark.url;

export type Art = {
  src: string;
  w: number;
  h: number;
  title: string;
  category: string;
};

export const arts: Art[] = [
  { src: artSantos.url, w: 1080, h: 1920, title: "Santos FC · Brasileirão Série A", category: "Matchday" },
  { src: artGremio.url, w: 1080, h: 1920, title: "Grêmio × São Paulo · Sub-17", category: "Matchday" },
  { src: artPalmeirasSp.url, w: 1080, h: 1920, title: "Palmeiras × São Paulo · Paulistão", category: "Matchday" },
  { src: artChelsea.url, w: 1080, h: 1920, title: "Chelsea × Luton Town · League Cup", category: "Matchday" },
  { src: artCorinthiansTaubate.url, w: 1080, h: 1920, title: "Corinthians × Taubaté · Futsal", category: "Matchday" },
  { src: artCorinthiansFutsal.url, w: 1080, h: 1920, title: "Corinthians × Palmeiras · FPFS", category: "Matchday" },
  { src: artAmericaJuventude.url, w: 1080, h: 1920, title: "América-MG × Juventude · Série B", category: "Matchday" },
  { src: artReferencia.url, w: 1080, h: 1920, title: "Referência FC × Penha · Paulista Cup", category: "Matchday" },
  { src: artCapim.url, w: 1080, h: 1920, title: "Capim FC × G3X FC · Arena Trident", category: "Matchday" },
];

export const services = [
  {
    name: "Artes de jogo",
    desc: "Matchdays do atleta, prontos para postar no dia da partida.",
  },
  {
    name: "Posts e flyers",
    desc: "Artes para redes sociais, eventos e campanhas do atleta.",
  },
  {
    name: "Pacote para agências",
    desc: "Artes em série para o elenco da sua agência, com padrão visual e entrega rápida.",
  },
  {
    name: "Assessoria digital",
    desc: "Presença online organizada: conteúdo, agenda e visual coeso para atleta e agência.",
  },
];
