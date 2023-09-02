//sushi tech
import SushiThumbnail from '../src/assets/images/news/sushitech/thumbnail.webp'

// 東大制作展extra
import VoidageThumbnail from '../src/assets/images/news/voidage/thumbnail.webp'

export type newsInfoContentType = {
  title: string;
  pageLink: string;
  thumbnailImg?: string;
  year: string;
  explanation: string;
  internalRelatedLink?: [{title:string, link:string}];
  externalRelatedLink?: [{title:string, link:string}];
}

export type newsInfoType = newsInfoContentType[];


export const newsInfo:newsInfoType = [
  {
    title:'わたしのからだは心になる？展' ,
    pageLink: '/news/sushi',
    thumbnailImg: SushiThumbnail,
    year: '2023',
    explanation: '東京都のメディアアート×テクノロジー新拠点SusHi Tech Squareにて開催されている第一期展覧会「わたしのからだは心になる？」展の特別展示の一つとして、「M0.00...1」を出展しています。',
    internalRelatedLink: [
        {
        title: 'M0.00...1',
        link: '/works/magnitude',
      },
    ],
    externalRelatedLink: [
        {
        title: 'わたしのからだは心になる？展',
        link: 'https://sushitech-real.metro.tokyo.lg.jp/first/',
      },
    ],
  },
  {
    title:'東京大学制作展EXTRA2023 VOIDAGE' ,
    pageLink: '/news/voidage',
    thumbnailImg: VoidageThumbnail,
    year: '2023',
    explanation: '東京大学制作展EXTRA2023 VOIDAGEにてプロデューサーを務めました。\nまた、本展覧会では「水滴の彫刻」を展示しました。',
    internalRelatedLink: [
        {
        title: '水滴の彫刻',
        link: '/works/waterdropletsculpture',
      },
    ],
    externalRelatedLink: [
        {
        title: '東京大学制作展EXTRA2023 VOIDAGE',
        link: 'https://www.iiiexhibition.com/',
      },
    ],
  },
  {
    title:'情報処理学会INTERACTION 2023' ,
    pageLink: '/news/interaction2023',
    year: '2023',
    explanation: '情報処理学会INTERACTION2023にて「Pendulum Resonator」のインタラクティブ発表を行いました。',
    internalRelatedLink: [
        {
        title: 'Pendulum Resonator',
        link: '/works/pendulumresonator',
      },
    ],
    externalRelatedLink: [
        {
        title: '情報処理学会INTERACTION2023',
        link: 'https://www.interaction-ipsj.org/2023/',
      },
    ],
  },
]
