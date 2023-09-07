//M0.00...1
import MGNThumbnail from '../src/assets/images/works/magnitude/thumbnail.webp'
import MGNImg1 from '../src/assets/images/works/magnitude/detail1.webp'
import MGNImg2 from '../src/assets/images/works/magnitude/detail2.webp'
import MGNImg3 from '../src/assets/images/works/magnitude/detail3.webp'
import MGNImg4 from '../src/assets/images/works/magnitude/detail4.webp'
import MGNImg5 from '../src/assets/images/works/magnitude/detail5.webp'
import MGNImg6 from '../src/assets/images/works/magnitude/detail6.webp'
import MGNImg7 from '../src/assets/images/works/magnitude/detail7.webp'
import MGNImg8 from '../src/assets/images/works/magnitude/detail8.webp'
import MGNImg9 from '../src/assets/images/works/magnitude/detail9.webp'
import MGNImg10 from '../src/assets/images/works/magnitude/detail10.webp'
import MGNImg11 from '../src/assets/images/works/magnitude/detail11.webp'
import MGNImg12 from '../src/assets/images/works/magnitude/detail12.webp'
import MGNImg13 from '../src/assets/images/works/magnitude/detail13.webp'

//water droplet sculpture
import WDSThumbnail from '../src/assets/images/works/waterDropletSculpture/thumbnail.webp'
import WDSImg1 from '../src/assets/images/works/waterDropletSculpture/detail1.webp'
import WDSImg2 from '../src/assets/images/works/waterDropletSculpture/detail2.webp'
import WDSImg3 from '../src/assets/images/works/waterDropletSculpture/detail3.webp'
import WDSImg4 from '../src/assets/images/works/waterDropletSculpture/detail4.webp'
import WDSImg5 from '../src/assets/images/works/waterDropletSculpture/detail5.webp'
import WDSImg6 from '../src/assets/images/works/waterDropletSculpture/detail6.webp'
import WDSImg7 from '../src/assets/images/works/waterDropletSculpture/detail7.webp'
import WDSImg8 from '../src/assets/images/works/waterDropletSculpture/detail8.webp'

// Pendulum Resonator
import PENDThumbnail from '../src/assets/images/works/pendulumResonator/thumbnail.webp'
import PENDImg1 from '../src/assets/images/works/pendulumResonator/detail1.webp'
import PENDImg2 from '../src/assets/images/works/pendulumResonator/detail2.webp'
import PENDImg3 from '../src/assets/images/works/pendulumResonator/detail3.webp'

export type workInfoContentType = {
  title: string;
  pageLink: string;
  thumbnailImg: string;
  year: string;
  detailImgs: string[];
  caption: string;
  notNeedLoadMoreButton?: boolean;
  youtubeUrl?: string;
}

export const workInfo:workInfoContentType[] = [
  {
    title: 'M0.00...1',
    pageLink: '/works/magnitude',
    thumbnailImg: MGNThumbnail,
    year: '2023',
    detailImgs: [MGNImg1, MGNImg2, MGNImg3, MGNImg4, MGNImg5, MGNImg6, MGNImg7, MGNImg8, MGNImg9, MGNImg10, MGNImg11, MGNImg12, MGNImg13],
    caption: `様々な揺れに気づき、「揺れ」への解像度を上げる。\n\n見慣れたモノでも、ふとしたきっかけでそのものが持つある性質が気になるときがある。\nさらに、その性質に着目して周囲をながめると、それと同じまたは近い性質をもつモノが急に意識にのぼり始めてくることがある。\n世界は変わっていないのに、自分次第で対象の見え方が変わることは、ある種の身体の優れたフレキシビリティとも言えるだろう。\n\n本作品ではモノにも人にも内在する性質の一つとして、「揺れ」を取り上げる。\n空間内には揺れることが当たり前なモノから、揺れるとは思いもよらないモノまでを配置し、大小様々に揺らしている。\nさらに、鑑賞者の身体の揺れも、新たな揺れを引き起こす動力として組み込んでいる。\n種類の異なる様々な揺れを眺めることで、次第に「揺れ」に対する解像度が高まっていく体験を創出する。`,
    youtubeUrl: 'https://www.youtube.com/embed/DQ_2ookANMc?si=RpJ0jHLA6VE2xA5K',
  },
  {
    title: '水滴の彫刻',
    pageLink: '/works/waterdropletsculpture',
    thumbnailImg: WDSThumbnail,
    year: '2023',
    detailImgs: [WDSImg1, WDSImg2, WDSImg3, WDSImg4, WDSImg5, WDSImg6, WDSImg7, WDSImg8],
    caption: `水滴が成長する過程を観察する。\n\n雨上がりの後、木々の葉や枝の先についた水滴は、太陽光に照らされ、彫刻のように綺麗だった。\n本作品では、このような水滴の美しさに着目し、それらを留め、観察するための場を用意した。\n水滴たちは近づくと、それぞれが引っ張り合い、一つになり、大きく成長していくが、集まりすぎると落ちていく。\nそんなあまりにも繊細で、儚く、脆い存在である水滴をあえて細い線で受け止めることで、水滴がもつ独自の緊張感を強調した表現を目指した。\nぎりぎりの状態を保ち続ける水滴、雨や霧により出来ては落ち、また出来る水滴。\nそれらが光を浴び、きらきらと輝く様子は実に美しい。\n水滴が繊細に移ろいゆく環境をじっくりと観察することで、もう二度とは来ないその瞬間に意識を向けることが出来るだろう。`,
    youtubeUrl: 'https://www.youtube.com/embed/HmzZXM0Lfes?si=tDkGOPAWcgDI060b',
  },
  {
    title: 'Pendulum Resonator',
    pageLink: '/works/pendulumresonator',
    thumbnailImg: PENDThumbnail,
    year: '2023',
    detailImgs: [PENDImg1, PENDImg2, PENDImg3],
    caption: `振り子の共振と運動の特性を利用した動的な出力を離れた場所で行えるシステム\n\n本研究では，ユーザーが振り子を揺らすという単純な入力で，電力なしに離れた位置にある複数の出力装置を，選択的かつ反復的に一定時間動作させ，発電や回転などの動的な出力が可能な仕組み，Pendulum Resonatorを提案する．\n\n\n\n\n発表文献：伊藤 大貴，橋田 朋子：Pendulum Resonator: 振り子の共振と運動の特性を利用した動的な出力を離れた場所で行えるシステム，インタラクション2023，pp.694-698 (2023.3)`,
    notNeedLoadMoreButton: true,
  },
]
