import { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Helmet } from 'react-helmet';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import SwiperCore, { Pagination, Autoplay } from 'swiper/core';
import {
  MENU_DATA,
  COLLECTION,
  JOIN_US_DATA,
  BANNERS
} from '../../utils/index';
import './index.scss';
import menuIcon from '../../res/menu.png';
import cancelIcon from '../../res/cancel.png';
import logoHome1 from '../../res/logoHome1.png';
import miniAppQrCode from '../../res/miniAppQrCode.jpg';

SwiperCore.use([Autoplay, Pagination]);

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
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
    if(COLLECTION[id].length === 0) return;
    if (id === 'm5') {
      return (
        <div className="footerView">
          <div className="miniAppView">
            <img
              src={miniAppQrCode}
              className="miniAppQrCodeImg"
              alt="miniAppQrCodeImg"
            />
            <div className="miniAppQrCodeDesc">扫码进入小程序购买</div>
          </div>
          <div className="joinUsView">
            {JOIN_US_DATA.map((item, index) => {
              return (
                <div
                  className="iconView"
                  key={index}
                  onClick={() => {
                    window.location.href = item.link;
                  }}
                >
                  <img src={item.icon} alt={'icon'} className="iconImg" />
                </div>
              );
            })}
          </div>
        </div>
      )
    };
    return (
      <div className={'produceBox'}>
        {COLLECTION[id].map((item, index) => {
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

  renderFooter = () => {
    return (
      <div className={'footerBox'}>
        <div className={'footerText'}>
          @2021 紫钧建筑设计（北京）有限公司京ICP备2021023278号
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
            >
              {BANNERS.map((item, index) => {
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
