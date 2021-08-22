import { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Helmet } from 'react-helmet';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import SwiperCore, { Pagination, Autoplay } from 'swiper/core';

import './index.css';
import menuIcon from '../../res/menu.png';
import cancelIcon from '../../res/cancel.png';
import b1 from '../../res/b1.jpg';
import b2 from '../../res/b2.jpg';
import b3 from '../../res/banner3.png';
import b4 from '../../res/b4.jpg';
import b5 from '../../res/banner4.png';
import c1 from '../../res/banner6.png';
import footerIcon from '../../res/footerIcon.png';

import logo from '../../res/logo.png';
import banner1 from '../../res/banner1.png';
import banner5 from '../../res/banner5.png';
import banner6 from '../../res/banner6.png';
import banner7 from '../../res/banner7.jpg';
import logoHome1 from '../../res/logoHome1.png';

import produceImg0 from '../../res/p7.jpg';

SwiperCore.use([Autoplay, Pagination]);

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
    des: 'LADECENTE 特供系列，作为不同应用场景的特定人群而定制的服装供应，涵盖了机构，企业，以及特殊人群；品牌理念是时尚作业，舒适着衣。运用大量环保面料以及服务闭环，定位企业形象供应商，规定购买数量，80件起开售。',
    img: produceImg0,
  },
  {
    des: '',
    img: banner5,
  },
];

const PRODUCES1 = [
  {
    des: 'LADECENTE 复兴运动系列，灵感源自对当代宅文化的观察，试图用复古时兴的方式倡导Fit辣妹的概念，唤起当代人对时尚健康的意识。“接受自己，热爱自己。”',
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

const collection = {
  m1: PRODUCES0,
  m2: PRODUCES1,
  m3: PRODUCES2,
  m4: PRODUCES3,
  m5: PRODUCES4,
};

const banners = [
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

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      showMenuIcon: true,
      menuId: '',
    };
  }

  renderHeader = () => {
    return (
      <div className={'headerContainer'}>
        {MENU_DATA.map((item, index) => {
          return (
            <div
              key={index}
              className={'headItem'}
              onClick={() => this.handleClickMenu(item)}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    );
  };

  renderProduceImg = (id) => {
    if (collection[id].length === 0) return;
    // let newData = [...PRODUCES_IMAGES];
    return (
      <div className={'produceBox'}>
        {collection[id].map((item, index) => {
          return (
            <div className="itemBox">
              {item.des ? (
                <div
                  dangerouslySetInnerHTML={{ __html: item.des }}
                  className="itemDes"
                />
              ) : null}
              <img
                key={index}
                src={item.img}
                className="produceImage"
                alt="produceImage"
              />
            </div>
          );
        })}
      </div>
    );
  };

  slideChange = (a) => {};

  renderFooter = () => {
    return (
      <div className={'footerBox'}>
        <div className={'footerText'}>
          @2021 紫钧建筑设计（北京）有限公司{' '}
          <a href="http://">京ICP备2021023278号</a>
        </div>
        <div className={'footerText'}>深圳市前海深港合作区前湾一路1号A栋</div>
      </div>
    );
  };

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu,
    });
  };

  handleClickMenu = (item) => {
    this.toggleMenu();
    this.setState({ menuId: item.id });
  };

  render() {
    const { showMenu, menuId } = this.state;
    return (
      <div className={'homeContainer'}>
        <Helmet>
          <title>Renewed Projects</title>
        </Helmet>
        {showMenu ? this.renderHeader() : null}
        <div onClick={this.toggleMenu} className={'menuIconContainer'}>
          <img
            src={showMenu ? cancelIcon : menuIcon}
            className="menuIcon"
            alt="menu"
          />
          <img src={logoHome1} className="logoHome" alt="menu" />
        </div>
        {menuId && this.renderProduceImg(menuId)}
        {!menuId ? (
          <div className="swiperWrap">
            <Swiper
              pagination={{
                dynamicBullets: true,
                currentClass: 'activeP',
              }}
              className="mySwiper"
              ref={(refs) => (this.swiperRefs = refs)}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              loop={true}
              onSlideChange={this.slideChange}
            >
              {banners.map((item, index) => {
                return (
                  <SwiperSlide className="sliderItem" key={index}>
                    <img
                      src={item.img}
                      className="sliderItemImg"
                      alt={'banner'}
                    />
                    <div className="itemLabel">{item.label}</div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        ) : null}

        {this.renderFooter()}
      </div>
    );
  }
}
