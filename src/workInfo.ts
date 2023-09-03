//M0.00...1
const MGNThumbnail = '/public/images/works/magnitude/thumbnail.webp'
const MGNImg1 = '/public/images/works/magnitude/detail1.webp'
const MGNImg2 = '/public/images/works/magnitude/detail2.webp'
const MGNImg3 = '/public/images/works/magnitude/detail3.webp'
const MGNImg4 = '/public/images/works/magnitude/detail4.webp'
const MGNImg5 = '/public/images/works/magnitude/detail5.webp'
const MGNImg6 = '/public/images/works/magnitude/detail6.webp'
const MGNImg7 = '/public/images/works/magnitude/detail7.webp'
const MGNImg8 = '/public/images/works/magnitude/detail8.webp'
const MGNImg9 = '/public/images/works/magnitude/detail9.webp'
const MGNImg10 = '/public/images/works/magnitude/detail10.webp'
const MGNImg11 = '/public/images/works/magnitude/detail11.webp'
const MGNImg12 = '/public/images/works/magnitude/detail12.webp'
const MGNImg13 = '/public/images/works/magnitude/detail13.webp'

//water droplet sculpture
const WDSThumbnail = '/public/images/works/waterDropletSculpture/thumbnail.webp'
const WDSImg1 = '/public/images/works/waterDropletSculpture/detail2.webp'
const WDSImg2 = '/public/images/works/waterDropletSculpture/detail3.webp'
const WDSImg3 = '/public/images/works/waterDropletSculpture/detail4.webp'
const WDSImg4 = '/public/images/works/waterDropletSculpture/detail5.webp'
const WDSImg5 = '/public/images/works/waterDropletSculpture/detail6.webp'
const WDSImg6 = '/public/images/works/waterDropletSculpture/detail7.webp'
const WDSImg7 = '/public/images/works/waterDropletSculpture/detail8.webp'
const WDSImg8 = '/public/images/works/waterDropletSculpture/detail9.webp'

// Pendulum Resonator
const PENDThumbnail = '/public/images/works/pendulumResonator/thumbnail.webp'
const PENDImg1 = '/public/images/works/pendulumResonator/detail1.webp'
const PENDImg2 = '/public/images/works/pendulumResonator/detail2.webp'
const PENDImg3 = '/public/images/works/pendulumResonator/detail3.webp'

export const workInfo = [
  {
    title: 'M0.00...1',
    pageLink: '/works/magnitude',
    thumbnailImg: MGNThumbnail,
    year: '2023',
    detailImgs: [MGNImg1, MGNImg2, MGNImg3, MGNImg4, MGNImg5, MGNImg6, MGNImg7, MGNImg8, MGNImg9, MGNImg10, MGNImg11, MGNImg12, MGNImg13],
    caption: `見慣れたモノでも、ふとしたきっかけでそのものが持つある性質が気になるときがある。\nさらに、その性質に着目して周囲をながめると、それと同じまたは近い性質をもつモノが急に意識にのぼり始めてくることがある。\n世界は変わっていないのに、自分次第で対象の見え方が変わることは、ある種の身体の優れたフレキシビリティとも言えるだろう。\n\n本作品ではモノにも人にも内在する性質の一つとして、「揺れ」を取り上げる。\n空間内には揺れることが当たり前なモノから、揺れるとは思いもよらないモノまでを配置し、大小様々に揺らしている。\nさらに、鑑賞者の身体の揺れも、新たな揺れを引き起こす動力として組み込んでいる。\n種類の異なる様々な揺れを眺めることで、次第に「揺れ」に対する解像度が高まっていく体験を創出する。
`
  },
  {
    title: '水滴の彫刻',
    pageLink: '/works/waterdropletsculpture',
    thumbnailImg: WDSThumbnail,
    year: '2023',
    detailImgs: [WDSImg1, WDSImg2, WDSImg3, WDSImg4, WDSImg5, WDSImg6, WDSImg7, WDSImg8],
    caption: `雨上がりの後、木々の葉や枝の先についた水滴は、太陽光に照らされ、彫刻のように綺麗だった。\n本作品では、このような水滴の美しさに着目し、それらを留め、観察するための場を用意した。\n水滴たちは近づくと、それぞれが引っ張り合い、一つになり、大きく成長していくが、集まりすぎると落ちていく。\nそんなあまりにも繊細で、儚く、脆い存在である水滴をあえて細い線で受け止めることで、水滴がもつ独自の緊張感を強調した表現を目指した。\nぎりぎりの状態を保ち続ける水滴、雨や霧により出来ては落ち、また出来る水滴。\nそれらが光を浴び、きらきらと輝く様子は実に美しい。\n水滴が繊細に移ろいゆく環境をじっくりと観察することで、もう二度とは来ないその瞬間に意識を向けることが出来るだろう。`
  },
  {
    title: 'Pendulum Resonator',
    pageLink: '/works/pendulumresonator',
    thumbnailImg: PENDThumbnail,
    year: '2023',
    detailImgs: [PENDImg1, PENDImg2, PENDImg3],
    caption: `振り子の共振と運動の特性を利用した動的な出力を離れた場所で行えるシステム\n\n本研究では，ユーザーが振り子を揺らすという単純な入力で，電力なしに離れた位置にある複数の出力装置を，選択的かつ反復的に一定時間動作させ，発電や回転などの動的な出力が可能な仕組み，Pendulum Resonatorを提案する．\n\n\n\n\n発表文献：伊藤 大貴，橋田 朋子：Pendulum Resonator: 振り子の共振と運動の特性を利用した動的な出力を離れた場所で行えるシステム，インタラクション2023，pp.694-698 (2023.3)`
  },
]

export type workInfoContentType = typeof workInfo[0];
