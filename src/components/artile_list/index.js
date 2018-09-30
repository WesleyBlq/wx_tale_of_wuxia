import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
// import { AtButton } from 'taro-ui'
if (process.env.TARO_ENV === "weapp") {
  require("taro-ui/dist/weapp/css/index.css")
} else if (process.env.TARO_ENV === "h5") {
  require("taro-ui/dist/h5/css/index.css")
}
import './index.scss'

import slider_image from '../../assets/images/slider.jpg'

var data = [
    {
      "title": "天王归来DLC",
    },
    {
      "title": "天王归来，龙王回归来吗？",
    },
  ];

export default class ArticleListCompoent extends Component {

  constructor() {
    super(...arguments)
    this.state = {
      item: '',
    }
  }

  componentWillMount() {
    // this.props.item = (<View className="at-row at-row__align--center" >
    //   <Image src={slider_image} className="image_item" />
    //   <View className="content_item">天王归来DLC攻略</View>
    // </View>)

    // this.setState({
    //   item: (<View className="at-row at-row__align--center" >
    //     <Image src={slider_image} className="image_item" />
    //     <View className="content_item">天王归来DLC攻略</View>
    //   </View>)
    // })
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {

    // var items = []
    // console.log(item)
    // for (let i = 0; i < 3; i++) {
    //   items.push(item)
    // }

    // var item = (<View className="at-row at-row__align--center" >
    //   <Image src={slider_image} className="image_item" />
    //   <View className="content_item">天王归来DLC攻略</View>
    // </View>)

    // for ( d in data) {
    //   (<View className="at-row at-row__align--center" >
    //     <Image src={slider_image} className="image_item" />
    //     <View className="content_item">{ d }</View>
    //   </View>)
    // }

    return (
      <View className='index' >
        {
          data.map(title => 
            <View className="at-row at-row__align--center" >
              <Image src={slider_image} className="image_item" />
              <View className="content_item">title</View>
            </View>
          )
        }
        {/* <View className="at-row at-row__align--center" >
          <Image src={slider_image } className="image_item"  />
          <View className="content_item">天王归来DLC攻略</View>
        </View> */}
        { item }
      </View>
    )
  }

  navigateTo() {
    console.log("click evnet");
    Taro.navigateTo({
      url: "../../pages/navigate_route/index",
    })
  }

  redirectTo() {
    Taro.redirectTo({
      url: "../../pages/navigate_route/index",
    })
  }
}

