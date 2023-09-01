import VoidageThumbnail from '../src/assets/images/news/voidage/thumbnail.webp'

export const newsInfo = [
  {
    title:'東京大学制作展2023EXTRA VOIDAGE' ,
    pageLink: '/news/voidage',
    thumbnailImg: VoidageThumbnail,
    year: '2023',
    explanation: '東京大学制作展EXTRA2023 VOIDAGEにてプロデューサーを勤めました。\nまた、本展覧会では「水滴の彫刻」を展示しました。',
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
]

export type newsInfoContentType = typeof newsInfo[0];