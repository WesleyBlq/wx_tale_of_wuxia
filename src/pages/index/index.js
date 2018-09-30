import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image} from '@tarojs/components'
import { Swiper, SwiperItem, } from '@tarojs/components'
import { AtList, AtListItem } from "taro-ui"
import './index.scss'

import slider_image from '../../assets/images/slider.jpg'
import ArticleList from '../../components/artile_list'

var util = require('../../utils/util');

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () {
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Swiper
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay>
          <SwiperItem>
            <Image src={ slider_image } className="slider"></Image>
          </SwiperItem>
        </Swiper>
        <View className="" ><ArticleList className="articles" style="{background-color: red;}" ></ArticleList></View>
        
      </View>
    )
  }
}

