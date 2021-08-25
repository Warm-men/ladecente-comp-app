
import menuIcon from '../res/menu.png';
import cancelIcon from '../res/cancel.png';
import b1 from '../res/b1.jpg';
import b2 from '../res/b2.jpg';
import b3 from '../res/banner3.png';
import b4 from '../res/b4.jpg';
import b5 from '../res/banner4.png';
import c1 from '../res/banner6.png';
import footerIcon from '../res/footerIcon.png';
import banner1 from '../res/banner1.png';
import banner5 from '../res/banner5.png';
import banner6 from '../res/banner6.png';
import banner7 from '../res/banner7.jpg';
import produceImg0 from '../res/p7.jpg';
import instagram from '../res/icons_instagram.png';
import weibo from '../res/icons_weibo.png';
import xiaohongshu from '../res/xiaohongshu.png';

const MENU_DATA = [
  { name: '首页', id: '', extra: null },
  { name: 'L7FZ特供系列', id: 'm1', extra: null },
  { name: 'LADECENTE复兴运动系列', id: 'm2', extra: null },
  { name: 'Life Depth 配饰系列', id: 'm3', extra: null },
  { name: 'PERSONA艺术家合作系列', id: 'm4', extra: null },
  { name: '关于我们', id: 'm5', extra: null },
];


const PRODUCES0 = [
  {
    des: 'L7FZ特供系列，作为不同应用场景的特定人群而定制的服装供应，涵盖了机构，企业，以及特殊人群；品牌理念是时尚作业，舒适着衣。运用大量环保面料以及服务闭环，定位企业形象供应商，规定购买数量，80件起开售。',
    img: produceImg0,
  },
  {
    des: '',
    img: banner5,
  },
];

const PRODUCES1 = [
  {
    des: 'LADECENTE复兴运动系列，灵感源自对当代宅文化的观察，试图用复古时兴的方式倡导Fit辣妹的概念，唤起当代人对时尚健康的意识。“接受自己，热爱自己。”',
    img: b1,
  },
  {
    des: '',
    img: b2,
  },
  {
    des: '',
    img: b3,
  },
  {
    des: '',
    img: b4,
  },
  {
    des: '',
    img: b5,
  },
];

const PRODUCES2 = [
  {
    des: 'Life Depth 配饰系列，敬请期待！',
    img: c1,
  },
];

const PRODUCES3 = [
  {
    des: `谢王萍<br/>1995年出生于安徽省黄山市。<br/>现就读于日本神户艺术工科大学大学院综合艺术设计专业插画方向。<br/>LADECENTE与谢王萍的PERSONA作品的合作款系列，表达主基调“隐秘人格”，不论是艺术家作品本身的蓝调应用，抑或是设计师的面料采用，都结合超现实主义表达人类内心的孤独感和神秘感。`,
    img: banner7,
  },
];

const PRODUCES4 = [
  {
    des: ``,
    img: footerIcon,
  },
];

const COLLECTION = {
  m1: PRODUCES0,
  m2: PRODUCES1,
  m3: PRODUCES2,
  m4: PRODUCES3,
  m5: PRODUCES4,
};

const BANNERS = [
  {
    img: banner1,
    label: 'LADECENTE复兴运动系列',
  },
  {
    img: banner5,
    label: 'L7FZ特供系列',
  },
  {
    img: banner6,
    label: 'Life Depth 配饰系列',
  },
  {
    img: banner7,
    label: 'PERSONA艺术家合作系列',
  },
];

const JOIN_US_DATA = [
  {
    id: 'ins',
    icon: instagram,
    name: 'Ins',
    link: 'https://instagram.com/ladecenteofficial?utm_medium=copy_link',
  },
  {
    id: 'weibo',
    icon: weibo,
    name: '微博',
    link: 'https://m.weibo.cn/u/2380421314',
  },
  {
    id: 'xiao',
    icon: xiaohongshu,
    name: '小红书',
    link: 'https://www.xiaohongshu.com/user/profile/5cadfdf1000000001000c1b9',
  },
];

export {
  MENU_DATA,
  COLLECTION,
  JOIN_US_DATA,
  BANNERS
}