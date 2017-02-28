const scenedata = {
  "_id": "585b346a788041000bd4080b",
  "id": "d111d3e0c7ea11e6924d19a2bd49b0f2",
  "code": "4X1Ff9p",
  "createTime": 1482372202527,
  "industry": "fa167b2f-3691-467a-4f05-08d422f61e35",
  "purpose": "e75ab64a-f149-4712-a141-08d422f61e33",
  "name": "圣诞节快乐！Happy~",
  "status": 3,
  "sendstatus": 0,
  "image": "/cdn/21/7a/6fb8dccc92342abb28b00b2a8677.jpg",
  "pageMode": 1,
  "updateTime": 1483595413153,
  "publishTime": 1482482349671,
  "bgAudio": {
    "musicName": "倍儿爽-激情节奏.mp3",
    "musicSrc": "http://180.76.183.226/upload/files/music/other/dfe357d200e0353e6b74e56dd05fdc39.mp3",
    "id": "56ab517ef4ec63201042cce6",
    "url": "http://180.76.183.226/upload/files/music/other/29a04dcebbefadc9c84899f5fcc6fa62.mp3",
    "name": "喜气洋洋-喜庆节日.mp3"
  },
  "description": "",
  "sort": 0,
  "deleteTime": null,
  "count": {
    "view": 217,
    "eleCount": {}
  },
  "showPageNo": false,
  "play": {
    "loop": true,
    "auto": false,
    "interval": 3
  },
  "share": {
    "showCount": true,
    "bindDomain": true,
    "mode": 1
  },
  "applyTemplate": 0,
  "applyCase": 0,
  "type": 0,
  "fonts": [],
  "grid": {
    "gridVisable": false,
    "color": "rgba(150, 150, 150, 0.2)",
    "guideVisable": true,
    "snapVisable": true
  },
  "trailerLabel": {
    "type": 1,
    "style": 1
  },
  "weixinAuth": 0,
  "pages": [
    {
      "id": 520,
      "name": "第1页",
      "num": 1,
      "pageOption": {
        "longPage": false,
        "pageSize": 800,
        "banTurnPage": false,
        "turnPageMode": 2
      },
      "pageBackground": {
        "color": "",
        "image": "/cdn/ae/05/510d77ee9c9a8f80208e1066c025.png"
      },
      "elements": [
        {
          'id': 18276,
          // 元素名称
          'name': 'sound element',
          // 元素类型
          'type': 15,
          'sound': null,
          // 元素内部的内容，可能是一段html
          'content': 'sound element',
          // 显示/隐藏
          'visible': true,
          // 锁定
          'lock': false,
          // 元素样式，样式名用小驼峰命名
          'css': {
            'top': '357px',
            'left': '76px',
            'width': '120px',
            'height': '40px',
            'zIndex': 99999
          },
          contentCss: {

          },
          'properties': {
            musicSrc: '',
            musicType: 0,
            buttonText: 'sound element'
          }
        },
        {
          'id': 1876,
          // 元素名称
          'name': 'link element',
          // 元素类型
          'type': 12,
          'sound': null,
          // 元素内部的内容，可能是一段html
          'content': 'link element',
          // 显示/隐藏
          'visible': true,
          // 锁定
          'lock': false,
          // 元素样式，样式名用小驼峰命名
          'css': {
            'top': '457px',
            'left': '176px',
            'width': '120px',
            'height': '40px',
            'zIndex': 100
          },
          contentCss: {

          },
          'properties': {
            linkType: 0,
            buttonText: '点击购买',
            outLink: 'https://www.baidu.com/',
            pageLink: 1,
            buttonStyle: {
              'fontSize': '16px',
              'color': '#fff',
              'backgroundColor': '#ffba02'
            }
          }
        },
        {
          'id': 13103,
          // 元素名称
          'name': 'select form element',
          // 元素类型
          'type': 10,
          'sound': null,
          // 元素内部的内容，可能是一段html
          'content': 'select form element',
          // 显示/隐藏
          'visible': true,
          // 锁定
          'lock': false,
          // 元素样式，样式名用小驼峰命名
          'css': {
            'top': '334px',
            'left': '45px',
            'width': '200px',
            'height': '148px',
            'zIndex': 60
          },
          contentCss: {
            'backgroundColor': 'rgba(255, 186, 2, 1)'
          },
          'properties': {
            title: '选项表单标题',
            options: [{
              text: '选项1',
              selected: true 
            },{
              text: '选项2',
              selected: false
            },{
              text: '选项3',
              selected: false
            }],
            required: true,
            multiSelect: false,
            titleColor: 'rgba(255, 255, 255, 1)',
            optionStyle: {
              'color': '#666',
              'backgroundColor': 'rgba(255, 186, 2, 1)'
            }
          }
        },
        {
          'id': 13108,
          // 元素名称
          'name': 'contact form element',
          // 元素类型
          'type': 9,
          'sound': null,
          // 元素内部的内容，可能是一段html
          'content': 'contact form element',
          // 显示/隐藏
          'visible': true,
          // 锁定
          'lock': false,
          // 元素样式，样式名用小驼峰命名
          'css': {
            'top': '383px',
            'left': '22px',
            'width': '205px',
            'height': '173px',
            'zIndex': 50
          },
          contentCss: {
            'padding': '20px',
            'color': '',
            'backgroundColor': '#fff',
            'borderRadius': '4px'
          },
          'properties': {
            formData: [
              {fieldName: 'name', data: '', required: false},
              {fieldName: 'tel', data: '', required: false},
              {fieldName: 'email', data: '', required: true}
            ],
            inputStyle: {
              'borderColor': 'rgba(214,46,46,1)'
            },
            feedbackMsg: 'ok'
          }
        },
        {
          'id': 13109,
          // 元素名称
          'name': 'button form element',
          // 元素类型
          'type': 8,
          'sound': null,
          // 元素内部的内容，可能是一段html
          'content': 'button form element',
          // 显示/隐藏
          'visible': true,
          // 锁定
          'lock': false,
          // 元素外层样式，样式名用小驼峰命名
          'css': {
            padding: 0,
            'top': '352px',
            'left': '170px',
            'zIndex': 40,
            'width': '110px',
            'height': '36px',
            'opacity': 1
          },
          contentCss: {
            'fontSize': '16px',
            'lineHeight': '36px',
            'color': '',
            'borderRadius': '4px',
            'borderRadiusPerc': 0,
            'backgroundColor': '',
            'boxShadow': '0px 0px 0px rgba(0,0,0,0.5)',
            'boxShadowDirection': 0,
            'boxShadowSize': 0
          },
          'properties': {
            formId: 520,
            buttonName: '提交',
            info: '获得红包',
            outLink: 'http://baidu.com',
            buttonStyle: {
              'fontSize': '16px',
              'color': '#fff',
              'backgroundColor': '#ffba02'
            }
          }
        },
        {
          'id': 13111,
          // 元素名称
          'name': 'input form element',
          // 元素类型
          'type': 7,
          'sound': null,
          // 元素内部的内容，可能是一段html
          'content': 'input form element',
          // 显示/隐藏
          'visible': true,
          // 锁定
          'lock': false,
          // 元素样式，样式名用小驼峰命名
          'css': {
            'top': '500px',
            'left': '18px',
            'width': '220px',
            'height': '36px',
            'zIndex': 10
          },
          contentCss: {
            'color': ''
          },
          'properties': {
            name: 'email',
            data: 'xuanjiu@qq.com',
            required: true,
            style: {
              borderColor: '#d7d7d7'
            }
          }
        },
        {
          'id': 13113,
          // 元素名称
          'name': 'video element',
          // 元素类型
          'type': 5,
          'sound': null,
          // 元素内部的内容，可能是一段html
          'content': 'video element',
          // 显示/隐藏
          'visible': true,
          // 锁定
          'lock': false,
          // 元素样式，样式名用小驼峰命名
          'css': {
            'top': '460px',
            'left': '100px',
            'width': '100px',
            'height': '70px',
            'zIndex': 6
          },
          contentCss: {
            'color': '',
            'backgroundColor': '#010101',
            'borderRadius': ''
          },
          properties: {
            iframe: '<iframe height=498 width=510 src="http://player.youku.com/embed/XMTc2NDU0MzY5Ng=="' +
            ' frameborder=0 "allowfullscreen"></iframe>',
            iconColor: '#d9d9d9',
            iconBackColor: '#6c6c6c'
          }
        },
        {
          'id': 13112,
          // 元素名称
          'name': 'carousel form element',
          // 元素类型
          'type': 3,
          'sound': null,
          // 元素内部的内容，可能是一段html
          'content': 'carousel form element',
          // 显示/隐藏
          'visible': true,
          // 锁定
          'lock': false,
          // 元素样式，样式名用小驼峰命名
          'css': {
            'top': '460px',
            'left': '100px',
            'width': '100px',
            'height': '70px',
            'text-align': 'center',
            'z-Index': 5
            /*'overflow': 'hidden'*/
          },
          contentCss: {
            'width': '100%',
            'height': '100%',
            'overflow': 'hidden',
            'color': ''
          },
          'properties': {
            autoPlay: true,
            playInterval: 2,
            transition: 'zoom',
            pictures: ['../assets/img/123_11.png', '../assets/img/123_06.png', '../assets/img/qr-code.png'],
            carouseElementStyle: {
              'width': '100%',
              'height': '100%'
            }
          },
          // 事件触发
          'event': [{name: '显示/隐藏', code: '1'}]
        },
        {
          'id': 888,
          // 元素名称
          'name': 'text element',
          // 元素类型
          'type': 1,
          'sound': null,
          // 元素内部的内容，可能是一段html
          'content': 'text element',
          // 显示/隐藏
          'visible': true,
          // 锁定
          'lock': false,
          // 元素样式，样式名用小驼峰命名
          'css': {
            'top': '417px',
            'left': '130px',
            'width': '300px',
            'height': '32px'
          },
          contentCss: {

          },
          properties: {
            textStyle: {
              color: '#333',
              fontSize: '20px',
              lineHeight: 1.6,
              textAlign: 'left',
              fontWeight: 700,
              fontFamily: ''
            }
          }
        },
        {
          'id': 797,
          // 元素名称
          'name': 'shape element',
          // 元素类型
          'type': 4,
          'sound': null,
          // 元素内部的内容，可能是一段html
          'content': null,
          // 显示/隐藏
          'visible': true,
          // 锁定
          'lock': false,
          // 元素外层 .element-container 的样式，样式名用小驼峰命名
          'css': {
            'top': '100px',
            'left': '42px',
            'zIndex': 4,
            'width': '100px',
            'height': '100px',
            'opacity': 1,
            'color': '#676767',
            'paddingBottom': 0,
            'paddingTop': 0,
            'lineHeight': 1,
            'borderRadius': '0px',
            'transform': 'rotateZ(0deg)',
            'borderRadiusPerc': 0,
            'borderBottomRightRadius': '0px',
            'borderBottomLeftRadius': '0px',
            'borderTopRightRadius': '0px',
            'borderTopLeftRadius': '0px',
            'boxShadow': '0px 0px 0px rgba(0,0,0,0.5)',
            'boxShadowDirection': 0,
            'boxShadowSize': 0
          },
          // 元素中层 .element-content 的样式，样式名用小驼峰命名
          'contentCss': {
            'backgroundColor': '',
            'borderWidth': 0,
            'borderStyle': 'solid',
            'borderColor': 'rgba(0,0,0,1)',
            'rotateZ': 78
          },
          // 元素特性，这里每类元素特性，每类元素里属性都不同
          'properties': {
            'svg': '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" xml:space="preserve" preserveAspectRatio="xMidYMid" viewBox="0 0 44 44"><g x="0" y="0" width="44" height="44"><path d="M23.984,2.000 C25.587,2.000 27.094,2.624 28.227,3.757 C30.566,6.097 30.566,9.903 28.227,12.243 L15.984,24.485 L3.742,12.243 C1.402,9.903 1.402,6.097 3.742,3.757 C4.875,2.624 6.382,2.000 7.984,2.000 C9.587,2.000 11.094,2.624 12.227,3.757 L14.570,6.100 L15.984,7.515 L17.399,6.100 L19.742,3.757 C20.875,2.624 22.382,2.000 23.984,2.000 M23.984,0.000 C21.937,0.000 19.890,0.781 18.327,2.343 L15.984,4.686 L13.641,2.343 C12.079,0.781 10.032,0.000 7.984,0.000 C5.937,0.000 3.890,0.781 2.327,2.343 C-0.797,5.467 -0.797,10.533 2.327,13.657 L15.984,27.314 L29.641,13.657 C32.765,10.533 32.765,5.467 29.641,2.343 C28.079,0.781 26.032,0.000 23.984,0.000 L23.984,0.000 Z" fill="#ff0000" fill-rule="evenodd"/></g></svg>'
          },
          // 动画
          'animate': [
            {
              "type": 26,
              "direction": 3,
              "duration": 5,
              "delay": 0.5,
              "countNum": 2,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(淡入)"
            }
          ],
          // 事件触发
          'event': []
        }
        ,
        {
          'id': 856559,
          // 元素名称
          'name': 'map element',
          // 元素类型
          'type': 14,
          'sound': null,
          // 元素内部的内容，可能是一段html
          'content': 'map element',
          // 显示/隐藏
          'visible': true,
          // 锁定
          'lock': false,
          // 元素样式，样式名用小驼峰命名
          'css': {
            'top': '0px',
            'left': '0px',
            'width': '260px',
            'height': '260px',
            "zIndex": 100,
          },
          contentCss: {

          },
          'properties': {
            currentCity: {
              center: {
                lng: 112.94,
                lat: 28.18
              },
              level: 12
            }
          },
          'animate': [
            {
              "type": 26,
              "direction": 3,
              "duration": 5,
              "delay": 0.5,
              "countNum": 6,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(淡入)"
            }
          ],
        },
        {
          'id': 10439,
          // 元素名称
          'name': 'score form element',
          // 元素类型
          'type': 11,
          'sound': null,
          // 元素内部的内容，可能是一段html
          'content': 'score form element',
          // 显示/隐藏
          'visible': true,
          // 锁定
          'lock': false,
          // 元素样式，样式名用小驼峰命名
          'css': {
            'top': '260px',
            'left': '0px',
            'width': '240px',
            'height': '100px',
            "zIndex": 99,
          },
          contentCss: {
            'backgroundColor': '#fff',
            'color': '#666',
            'textAlign': 'center',
            'borderRadius': '4px'
          },
          'properties': {
            iconType: 0,
            title: '评分标题',
            iconStyle: {
              color: '#ffba01',
              iconSize: 0
            }
          }
        },
        {
          "id": 31799,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "-22px",
            "left": "119px",
            "width": "200px",
            "height": "302px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "5s",
            "WebkitAnimationDelay": "0.5s",
            "WebkitAnimationIterationCount": 1,
            "MozAnimationDuration": "5s",
            "MozAnimationDelay": "0.5s",
            "MozAnimationIterationCount": 1
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/fe/65/b182c8e366d8959053dd32dc0d8d.png",
            "size": 94888,
            "originalWidth": 320,
            "originalHeight": 480
          },
          "isActive": false,
          "__isEdit": false,
          "__containerLeft": 216.5,
          "__containerTop": 217,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 374,
          "__originTop": -5,
          "animate": [
            {
              "type": 26,
              "direction": 3,
              "duration": 5,
              "delay": 0.5,
              "countNum": 10,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(淡入)"
            }
          ],
          "animationClass": [
            "animated",
            "fadeIn"
          ],
          "__lastAnimationPromise": {}
        },
        {
          "id": 68238,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "-21px",
            "left": "0px",
            "width": "194px",
            "height": "261px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "5s",
            "WebkitAnimationDelay": "0.5s",
            "WebkitAnimationIterationCount": 1,
            "MozAnimationDuration": "5s",
            "MozAnimationDelay": "0.5s",
            "MozAnimationIterationCount": 1
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/bc/d4/128ecdaef9a9cda61dbebe9e73dc.png",
            "size": 86429,
            "originalWidth": 320,
            "originalHeight": 480
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 0,
          "__originTop": 1,
          "__containerLeft": 97.5,
          "__containerTop": 218,
          "animate": [
            {
              "type": 26,
              "direction": 3,
              "duration": 5,
              "delay": 0.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(淡入)"
            }
          ],
          "animationClass": [
            "animated",
            "fadeIn"
          ],
          "__lastAnimationPromise": {}
        },
        {
          "id": 29229,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "184px",
            "left": "13px",
            "width": "299px",
            "height": "37px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "1s",
            "WebkitAnimationDelay": "1.5s",
            "WebkitAnimationIterationCount": 1,
            "MozAnimationDuration": "1s",
            "MozAnimationDelay": "1.5s",
            "MozAnimationIterationCount": 1
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/d3/84/6f39332220136af04d8f7afaf843.png",
            "size": 28907,
            "originalWidth": 299,
            "originalHeight": 37
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__originLeft": 10,
          "__originTop": 201,
          "__isOriginRecord": false,
          "__containerLeft": 110.5,
          "__containerTop": 423,
          "animate": [
            {
              "type": 63,
              "direction": 3,
              "duration": 1,
              "delay": 1.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(放大进入)"
            }
          ],
          "animationClass": [
            "animated",
            "zoomIn"
          ],
          "__lastAnimationPromise": {},
          "__originWidth": 299,
          "__originHeight": 37
        },
        {
          "id": 54860,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "310px",
            "left": "204px",
            "width": "21px",
            "height": "22.3125px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "3s",
            "WebkitAnimationDelay": "4s",
            "WebkitAnimationIterationCount": 1,
            "MozAnimationDuration": "3s",
            "MozAnimationDelay": "4s",
            "MozAnimationIterationCount": 1
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/a8/76/e82a93b629716e852bb96050d39e.png",
            "size": 17612,
            "originalWidth": 32,
            "originalHeight": 34
          },
          "isActive": false,
          "__isEdit": false,
          "__containerLeft": 301.5,
          "__containerTop": 549,
          "__originalZIndex": 1,
          "__originLeft": 196,
          "__originTop": 314,
          "__isOriginRecord": false,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 4,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [
            "animated",
            "fadeInDownBig"
          ],
          "__lastAnimationPromise": {},
          "__originWidth": 32,
          "__originHeight": 34
        },
        {
          "id": 29884,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "242px",
            "left": "125px",
            "width": "45px",
            "height": "35.294117647058826px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "3s",
            "WebkitAnimationDelay": "3.5s",
            "WebkitAnimationIterationCount": 1,
            "MozAnimationDuration": "3s",
            "MozAnimationDelay": "3.5s",
            "MozAnimationIterationCount": 1
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 344.74488129694225,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/90/f3/574f6b7ba7753438dffad5c8b95b.png",
            "size": 17997,
            "originalWidth": 51,
            "originalHeight": 41
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 125,
          "__originTop": 244,
          "__originWidth": 51,
          "__originHeight": 40,
          "__containerLeft": 222.5,
          "__containerTop": 481,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 3.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [
            "animated",
            "fadeInDownBig"
          ],
          "__lastAnimationPromise": {}
        },
        {
          "id": 66156,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "317px",
            "left": "15px",
            "width": "59px",
            "height": "54px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "1s",
            "WebkitAnimationDelay": "2s",
            "WebkitAnimationIterationCount": 1,
            "MozAnimationDuration": "1s",
            "MozAnimationDelay": "2s",
            "MozAnimationIterationCount": 1
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/a2/f3/92bb10cbf182e1a2cf9aa0e53195.png",
            "size": 21417,
            "originalWidth": 59,
            "originalHeight": 54
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 5,
          "__originTop": 318,
          "__containerLeft": 112.5,
          "__containerTop": 556,
          "animate": [
            {
              "type": 30,
              "direction": 3,
              "duration": 1,
              "delay": 2,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(左方淡入2)"
            }
          ],
          "animationClass": [
            "animated",
            "fadeInLeftBig"
          ],
          "__lastAnimationPromise": {}
        },
        {
          "id": 32679,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "379px",
            "left": "-1px",
            "width": "322px",
            "height": "107px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "0.5s",
            "WebkitAnimationDelay": "3s",
            "WebkitAnimationIterationCount": 1,
            "MozAnimationDuration": "0.5s",
            "MozAnimationDelay": "3s",
            "MozAnimationIterationCount": 1
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/3f/c3/5602cba269f4b9d5c86d9608b226.png",
            "size": 15891,
            "originalWidth": 320,
            "originalHeight": 107
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": -1,
          "__originTop": 379,
          "__originWidth": 322,
          "__originHeight": 107,
          "__containerLeft": 96.5,
          "__containerTop": 618,
          "animate": [
            {
              "type": 33,
              "direction": 3,
              "duration": 0.5,
              "delay": 3,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入)"
            }
          ],
          "animationClass": [
            "animated",
            "fadeInUp"
          ],
          "__lastAnimationPromise": {}
        },
        {
          "id": 60138,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "418px",
            "left": "229px",
            "width": "70px",
            "height": "61px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "1s",
            "WebkitAnimationDelay": "3s",
            "WebkitAnimationIterationCount": 1,
            "MozAnimationDuration": "1s",
            "MozAnimationDelay": "3s",
            "MozAnimationIterationCount": 1
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/3d/14/148b9deca216e7cc7dec054fe81d.png",
            "size": 19886,
            "originalWidth": 70,
            "originalHeight": 61
          },
          "isActive": false,
          "__isEdit": false,
          "__containerLeft": 326.5,
          "__containerTop": 657,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 229,
          "__originTop": 418,
          "animate": [
            {
              "type": 33,
              "direction": 3,
              "duration": 1,
              "delay": 3,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入)"
            }
          ],
          "animationClass": [
            "animated",
            "fadeInUp"
          ],
          "__lastAnimationPromise": {}
        },
        {
          "id": 2803,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "424px",
            "left": "26px",
            "width": "36px",
            "height": "40px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "1s",
            "WebkitAnimationDelay": "3.5s",
            "WebkitAnimationIterationCount": 1,
            "MozAnimationDuration": "1s",
            "MozAnimationDelay": "3.5s",
            "MozAnimationIterationCount": 1
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/87/cb/39bd74cb7cf8806a97b63f234d4c.png",
            "size": 17950,
            "originalWidth": 36,
            "originalHeight": 40
          },
          "isActive": false,
          "__isEdit": false,
          "__containerLeft": 123.5,
          "__containerTop": 663,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 26,
          "__originTop": 424,
          "animate": [
            {
              "type": 33,
              "direction": 3,
              "duration": 1,
              "delay": 3.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入)"
            }
          ],
          "animationClass": [
            "animated",
            "fadeInUp"
          ],
          "__lastAnimationPromise": {}
        },
        {
          "id": 22993,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "407px",
            "left": "54px",
            "width": "53px",
            "height": "59px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "1s",
            "WebkitAnimationDelay": "3.5s",
            "WebkitAnimationIterationCount": 1,
            "MozAnimationDuration": "1s",
            "MozAnimationDelay": "3.5s",
            "MozAnimationIterationCount": 1
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/96/ed/8fbb4eb037a93673ce8b81160078.png",
            "size": 20601,
            "originalWidth": 53,
            "originalHeight": 59
          },
          "isActive": false,
          "__isEdit": false,
          "__containerLeft": 151.5,
          "__containerTop": 646,
          "__originalZIndex": 1,
          "__originLeft": 54,
          "__originTop": 407,
          "__isOriginRecord": false,
          "animate": [
            {
              "type": 33,
              "direction": 3,
              "duration": 1,
              "delay": 3.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入)"
            }
          ],
          "animationClass": [
            "animated",
            "fadeInUp"
          ],
          "__lastAnimationPromise": {}
        },
        {
          "id": 67980,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "430px",
            "left": "203px",
            "width": "42px",
            "height": "47px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "1s",
            "WebkitAnimationDelay": "3s",
            "WebkitAnimationIterationCount": 1,
            "MozAnimationDuration": "1s",
            "MozAnimationDelay": "3s",
            "MozAnimationIterationCount": 1
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/c4/c8/1aaf97ae76e59b9c445d019c28ed.png",
            "size": 18754,
            "originalWidth": 42,
            "originalHeight": 47
          },
          "isActive": false,
          "__isEdit": false,
          "__containerLeft": 300.5,
          "__containerTop": 669,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 203,
          "__originTop": 426,
          "animate": [
            {
              "type": 33,
              "direction": 3,
              "duration": 1,
              "delay": 3,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入)"
            }
          ],
          "animationClass": [
            "animated",
            "fadeInUp"
          ],
          "__lastAnimationPromise": {}
        },
        {
          "id": 49833,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "24px",
            "left": "61px",
            "width": "33px",
            "height": "33px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "4s",
            "WebkitAnimationDelay": "3.5s",
            "WebkitAnimationIterationCount": 1,
            "MozAnimationDuration": "4s",
            "MozAnimationDelay": "3.5s",
            "MozAnimationIterationCount": 1
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 61,
          "__originTop": 24,
          "__containerLeft": 158.5,
          "__containerTop": 263,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 4,
              "delay": 3.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [
            "animated",
            "fadeInDownBig"
          ],
          "__lastAnimationPromise": {},
          "__originWidth": 36,
          "__originHeight": 36
        },
        {
          "id": 88169,
          "name": "image element副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "100px",
            "left": "20px",
            "width": "34px",
            "height": "34px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "5s",
            "WebkitAnimationDelay": "2s",
            "WebkitAnimationIterationCount": 1,
            "MozAnimationDuration": "5s",
            "MozAnimationDelay": "2s",
            "MozAnimationIterationCount": 1
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 20,
          "__originTop": 100,
          "__containerLeft": 117.5,
          "__containerTop": 339,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 5,
              "delay": 2,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [
            "animated",
            "fadeInDownBig"
          ],
          "__lastAnimationPromise": {},
          "__originWidth": 52,
          "__originHeight": 52
        },
        {
          "id": 89523,
          "name": "image element副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "366px",
            "left": "252px",
            "width": "41px",
            "height": "41px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "4.5s",
            "WebkitAnimationDelay": "2s",
            "WebkitAnimationIterationCount": 1,
            "MozAnimationDuration": "4.5s",
            "MozAnimationDelay": "2s",
            "MozAnimationIterationCount": 1
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 265,
          "__originTop": 359,
          "__containerLeft": 349.5,
          "__containerTop": 605,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 4.5,
              "delay": 2,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [
            "animated",
            "fadeInDownBig"
          ],
          "__lastAnimationPromise": {},
          "__originWidth": 52,
          "__originHeight": 52
        },
        {
          "id": 16329,
          "name": "image element副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "408px",
            "left": "114px",
            "width": "46px",
            "height": "46px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "5s",
            "WebkitAnimationDelay": "4s",
            "WebkitAnimationIterationCount": 1,
            "MozAnimationDuration": "5s",
            "MozAnimationDelay": "4s",
            "MozAnimationIterationCount": 1
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 114,
          "__originTop": 410,
          "__containerLeft": 211.5,
          "__containerTop": 647,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 5,
              "delay": 4,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [
            "animated",
            "fadeInDownBig"
          ],
          "__lastAnimationPromise": {},
          "__originWidth": 52,
          "__originHeight": 52
        },
        {
          "id": 91452,
          "name": "image element副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "237px",
            "left": "235px",
            "width": "32px",
            "height": "32px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "4s",
            "WebkitAnimationDelay": "2s",
            "WebkitAnimationIterationCount": 1,
            "MozAnimationDuration": "4s",
            "MozAnimationDelay": "2s",
            "MozAnimationIterationCount": 1
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 235,
          "__originTop": 237,
          "__containerLeft": 332.5,
          "__containerTop": 476,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 4,
              "delay": 2,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [
            "animated",
            "fadeInDownBig"
          ],
          "__lastAnimationPromise": {},
          "__originWidth": 52,
          "__originHeight": 52
        },
        {
          "id": 32265,
          "name": "image element副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "240px",
            "left": "28px",
            "width": "27px",
            "height": "27px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "4s",
            "WebkitAnimationDelay": "1s",
            "WebkitAnimationIterationCount": 1,
            "MozAnimationDuration": "4s",
            "MozAnimationDelay": "1s",
            "MozAnimationIterationCount": 1
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 28,
          "__originTop": 240,
          "__containerLeft": 125.5,
          "__containerTop": 479,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 4,
              "delay": 1,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [
            "animated",
            "fadeInDownBig"
          ],
          "__lastAnimationPromise": {},
          "__originWidth": 27,
          "__originHeight": 27
        },
        {
          "id": 9821,
          "name": "image element副本副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "94px",
            "left": "272px",
            "width": "27px",
            "height": "27px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "4s",
            "WebkitAnimationDelay": "3s",
            "WebkitAnimationIterationCount": 1,
            "MozAnimationDuration": "4s",
            "MozAnimationDelay": "3s",
            "MozAnimationIterationCount": 1
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 272,
          "__originTop": 94,
          "__containerLeft": 369.5,
          "__containerTop": 333,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 4,
              "delay": 3,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [
            "animated",
            "fadeInDownBig"
          ],
          "__lastAnimationPromise": {},
          "__originWidth": 52,
          "__originHeight": 52
        },
        {
          "id": 31256,
          "name": "image element副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "9px",
            "left": "231px",
            "width": "50px",
            "height": "50px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "4s",
            "WebkitAnimationDelay": "3.5s",
            "WebkitAnimationIterationCount": 1,
            "MozAnimationDuration": "4s",
            "MozAnimationDelay": "3.5s",
            "MozAnimationIterationCount": 1
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 189,
          "__originTop": 5,
          "__containerLeft": 328.5,
          "__containerTop": 248,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 4,
              "delay": 3.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [
            "animated",
            "fadeInDownBig"
          ],
          "__lastAnimationPromise": {},
          "__originWidth": 34,
          "__originHeight": 34
        },
        {
          "id": 12794,
          "name": "image element副本副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "404px",
            "left": "185px",
            "width": "21px",
            "height": "21px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "4s",
            "WebkitAnimationDelay": "3s",
            "WebkitAnimationIterationCount": 1,
            "MozAnimationDuration": "4s",
            "MozAnimationDelay": "3s",
            "MozAnimationIterationCount": 1
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 369,
          "__originTop": 428,
          "__containerLeft": 282.5,
          "__containerTop": 643,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 4,
              "delay": 3,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [
            "animated",
            "fadeInDownBig"
          ],
          "__lastAnimationPromise": {},
          "__originWidth": 32,
          "__originHeight": 32
        },
        {
          "id": 53219,
          "name": "image element副本副本副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "396px",
            "left": "9px",
            "width": "21px",
            "height": "21px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "3s",
            "WebkitAnimationDelay": "4s",
            "WebkitAnimationIterationCount": 1,
            "MozAnimationDuration": "3s",
            "MozAnimationDelay": "4s",
            "MozAnimationIterationCount": 1
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 9,
          "__originTop": 424,
          "__containerLeft": 106.5,
          "__containerTop": 635,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 4,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [
            "animated",
            "fadeInDownBig"
          ],
          "__lastAnimationPromise": {},
          "__originWidth": 32,
          "__originHeight": 32
        },
        {
          "id": 37640,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "8px",
            "left": "78px",
            "width": "167px",
            "height": "170.58369098712447px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "1s",
            "WebkitAnimationDelay": "0.5s",
            "WebkitAnimationIterationCount": 1,
            "MozAnimationDuration": "1s",
            "MozAnimationDelay": "0.5s",
            "MozAnimationIterationCount": 1
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/a7/32/4b57eb2e340c9a0fb790b42ba708.png",
            "size": 68533,
            "originalWidth": 233,
            "originalHeight": 238
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 72,
          "__originTop": 8,
          "__originWidth": 233,
          "__originHeight": 238,
          "__containerLeft": 175.5,
          "__containerTop": 247,
          "animate": [
            {
              "type": 63,
              "direction": 3,
              "duration": 1,
              "delay": 0.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(放大进入)"
            }
          ],
          "animationClass": [
            "animated",
            "zoomIn"
          ],
          "__lastAnimationPromise": {}
        },
        {
          "id": 24043,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "267px",
            "left": "43px",
            "width": "243px",
            "height": "36px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "1s",
            "WebkitAnimationDelay": "2s",
            "WebkitAnimationIterationCount": 1,
            "MozAnimationDuration": "1s",
            "MozAnimationDelay": "2s",
            "MozAnimationIterationCount": 1
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/c7/ca/8bf91b64f7421567a43eb0614c9c.png",
            "size": 17864,
            "originalWidth": 243,
            "originalHeight": 36
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 43,
          "__originTop": 270,
          "__containerLeft": 140.5,
          "__containerTop": 506,
          "animate": [
            {
              "type": 63,
              "direction": 3,
              "duration": 1,
              "delay": 2,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(放大进入)"
            }
          ],
          "animationClass": [
            "animated",
            "zoomIn"
          ],
          "__lastAnimationPromise": {}
        },
        {
          "id": 93796,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "325px",
            "left": "76px",
            "width": "189px",
            "height": "35px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "1s",
            "WebkitAnimationDelay": "2.5s",
            "WebkitAnimationIterationCount": 1,
            "MozAnimationDuration": "1s",
            "MozAnimationDelay": "2.5s",
            "MozAnimationIterationCount": 1
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/3a/80/a4a7482962ab5e479e2a93b3b8e2.png",
            "size": 17545,
            "originalWidth": 189,
            "originalHeight": 35
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 76,
          "__originTop": 325,
          "__containerLeft": 173.5,
          "__containerTop": 564,
          "animate": [
            {
              "type": 63,
              "direction": 3,
              "duration": 1,
              "delay": 2.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(放大进入)"
            }
          ],
          "animationClass": [
            "animated",
            "zoomIn"
          ],
          "__lastAnimationPromise": {}
        },
        {
          "id": 13798,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "287px",
            "left": "123px",
            "width": "54px",
            "height": "439.2972972972973px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "0.5s",
            "WebkitAnimationDelay": "3s",
            "WebkitAnimationIterationCount": 1,
            "MozAnimationDuration": "0.5s",
            "MozAnimationDelay": "3s",
            "MozAnimationIterationCount": 1
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 90,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/09/27/251091e3dae8fab61c3b27ab094e.png",
            "size": 15196,
            "originalWidth": 42,
            "originalHeight": 308
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__originLeft": 123,
          "__originTop": 287,
          "__isOriginRecord": false,
          "__originWidth": 37,
          "__originHeight": 301,
          "__containerLeft": 220.5,
          "__containerTop": 526,
          "animate": [
            {
              "type": 33,
              "direction": 3,
              "duration": 0.5,
              "delay": 3,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入)"
            }
          ],
          "animationClass": [
            "animated",
            "fadeInUp"
          ],
          "__lastAnimationPromise": {}
        }
      ]
    },
    {
      "id": 3278,
      "name": "第1页",
      "num": 1,
      "pageOption": {
        "longPage": false,
        "pageSize": 486,
        "banTurnPage": false,
        "turnPageMode": 1
      },
      "pageBackground": {
        "color": "",
        "image": "/cdn/ae/05/510d77ee9c9a8f80208e1066c025.png"
      },
      "elements": [
        {
          "id": 58518,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": true,
          "css": {
            "top": "-23px",
            "left": "119px",
            "width": "200px",
            "height": "302px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/fe/65/b182c8e366d8959053dd32dc0d8d.png",
            "size": 94888,
            "originalWidth": 320,
            "originalHeight": 480
          },
          "isActive": false,
          "__isEdit": false,
          "__containerLeft": 618.5,
          "__containerTop": 179.5,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 119,
          "__originTop": 0,
          "animate": [
            {
              "type": 26,
              "direction": 3,
              "duration": 5,
              "delay": 0.5,
              "countNum": 5,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(淡入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 200,
          "__originHeight": 302
        },
        {
          "id": 58226,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": true,
          "css": {
            "top": "-22px",
            "left": "0px",
            "width": "194px",
            "height": "261px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/bc/d4/128ecdaef9a9cda61dbebe9e73dc.png",
            "size": 86429,
            "originalWidth": 320,
            "originalHeight": 480
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 0,
          "__originTop": 1,
          "__containerLeft": 499.5,
          "__containerTop": 180.5,
          "animate": [
            {
              "type": 26,
              "direction": 3,
              "duration": 5,
              "delay": 0.5,
              "countNum": 5,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(淡入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 194,
          "__originHeight": 261
        },
        {
          "id": 31397,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "379px",
            "left": "-1px",
            "width": "322px",
            "height": "107px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/3f/c3/5602cba269f4b9d5c86d9608b226.png",
            "size": 15891,
            "originalWidth": 320,
            "originalHeight": 107
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": -1,
          "__originTop": 379,
          "__originWidth": 322,
          "__originHeight": 107,
          "__containerLeft": 498.5,
          "__containerTop": 581.5,
          "animate": [
            {
              "type": 33,
              "direction": 3,
              "duration": 0.5,
              "delay": 1,
              "countNum": 5,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 53504,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "418px",
            "left": "229px",
            "width": "70px",
            "height": "61px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/3d/14/148b9deca216e7cc7dec054fe81d.png",
            "size": 19886,
            "originalWidth": 70,
            "originalHeight": 61
          },
          "isActive": false,
          "__isEdit": false,
          "__containerLeft": 728.5,
          "__containerTop": 620.5,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 229,
          "__originTop": 418,
          "animate": [
            {
              "type": 33,
              "direction": 3,
              "duration": 1,
              "delay": 2,
              "countNum": 5,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 61941,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "424px",
            "left": "26px",
            "width": "36px",
            "height": "40px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/87/cb/39bd74cb7cf8806a97b63f234d4c.png",
            "size": 17950,
            "originalWidth": 36,
            "originalHeight": 40
          },
          "isActive": false,
          "__isEdit": false,
          "__containerLeft": 525.5,
          "__containerTop": 626.5,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 26,
          "__originTop": 424,
          "animate": [
            {
              "type": 33,
              "direction": 3,
              "duration": 1,
              "delay": 2.5,
              "countNum": 5,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 40863,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "407px",
            "left": "54px",
            "width": "53px",
            "height": "59px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/96/ed/8fbb4eb037a93673ce8b81160078.png",
            "size": 20601,
            "originalWidth": 53,
            "originalHeight": 59
          },
          "isActive": false,
          "__isEdit": false,
          "__containerLeft": 553.5,
          "__containerTop": 609.5,
          "__originalZIndex": 1,
          "__originLeft": 54,
          "__originTop": 407,
          "__isOriginRecord": false,
          "animate": [
            {
              "type": 33,
              "direction": 3,
              "duration": 1,
              "delay": 2.5,
              "countNum": 5,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 82720,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "430px",
            "left": "203px",
            "width": "42px",
            "height": "47px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/c4/c8/1aaf97ae76e59b9c445d019c28ed.png",
            "size": 18754,
            "originalWidth": 42,
            "originalHeight": 47
          },
          "isActive": false,
          "__isEdit": false,
          "__containerLeft": 702.5,
          "__containerTop": 632.5,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 203,
          "__originTop": 430,
          "animate": [
            {
              "type": 33,
              "direction": 3,
              "duration": 1,
              "delay": 2,
              "countNum": 5,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 63712,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "24px",
            "left": "61px",
            "width": "33px",
            "height": "33px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 61,
          "__originTop": 24,
          "__containerLeft": 560.5,
          "__containerTop": 226.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 4,
              "delay": 3.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 33,
          "__originHeight": 33
        },
        {
          "id": 50292,
          "name": "image element副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "100px",
            "left": "20px",
            "width": "34px",
            "height": "34px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 20,
          "__originTop": 100,
          "__containerLeft": 519.5,
          "__containerTop": 302.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 5,
              "delay": 4,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 52,
          "__originHeight": 52
        },
        {
          "id": 26517,
          "name": "image element副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "289px",
            "left": "7px",
            "width": "46px",
            "height": "46px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 0,
          "__originTop": 323,
          "__containerLeft": 506.5,
          "__containerTop": 491.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 5,
              "delay": 4,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 52,
          "__originHeight": 52
        },
        {
          "id": 62240,
          "name": "image element副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "429px",
            "left": "166px",
            "width": "32px",
            "height": "32px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 164,
          "__originTop": 427,
          "__containerLeft": 665.5,
          "__containerTop": 631.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 4,
              "delay": 3.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 52,
          "__originHeight": 52
        },
        {
          "id": 54423,
          "name": "image element副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "147px",
            "left": "122px",
            "width": "27px",
            "height": "27px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 132,
          "__originTop": 178,
          "__containerLeft": 621.5,
          "__containerTop": 349.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 4,
              "delay": 4,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 27,
          "__originHeight": 27
        },
        {
          "id": 73412,
          "name": "image element副本副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "94px",
            "left": "272px",
            "width": "27px",
            "height": "27px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 272,
          "__originTop": 94,
          "__containerLeft": 771.5,
          "__containerTop": 296.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 4,
              "delay": 3.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 27,
          "__originHeight": 27
        },
        {
          "id": 86112,
          "name": "image element副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "5px",
            "left": "189px",
            "width": "50px",
            "height": "50px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 189,
          "__originTop": 5,
          "__containerLeft": 688.5,
          "__containerTop": 207.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 4,
              "delay": 3.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 34,
          "__originHeight": 34
        },
        {
          "id": 21553,
          "name": "image element副本副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "320px",
            "left": "258px",
            "width": "21px",
            "height": "21px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 261,
          "__originTop": 309,
          "__containerLeft": 757.5,
          "__containerTop": 522.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 4,
              "delay": 3,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 32,
          "__originHeight": 32
        },
        {
          "id": 72423,
          "name": "image element副本副本副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "424px",
            "left": "9px",
            "width": "21px",
            "height": "21px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 9,
          "__originTop": 424,
          "__containerLeft": 508.5,
          "__containerTop": 626.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 4,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 32,
          "__originHeight": 32
        },
        {
          "id": 95118,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "400px",
            "left": "104px",
            "width": "71px",
            "height": "57.4264705882353px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 26.760599153348842,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/0c/4f/f383f7ba40557c2678711350585f.png",
            "size": 98928,
            "originalWidth": 275,
            "originalHeight": 225
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 100,
          "__originTop": 388,
          "__containerLeft": 603.5,
          "__containerTop": 602.5,
          "animate": [
            {
              "type": 63,
              "direction": 3,
              "duration": 2,
              "delay": 4,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(放大进入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 68,
          "__originHeight": 55
        },
        {
          "id": 79979,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "17px",
            "left": "105px",
            "width": "89px",
            "height": "78.97183098591549px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/fd/06/c1c73466ae3ee7f78fd5553afc53.png",
            "size": 75646,
            "originalWidth": 213,
            "originalHeight": 189
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 105,
          "__originTop": 35,
          "__originWidth": 89,
          "__originHeight": 78,
          "__containerLeft": 604.5,
          "__containerTop": 219.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 3.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 88547,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "2px",
            "left": "-22px",
            "width": "87px",
            "height": "69.39884393063583px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/f7/bc/fb52e52737b4d600bdcdde17a979.png",
            "size": 39619,
            "originalWidth": 173,
            "originalHeight": 138
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": -22,
          "__originTop": 20,
          "__originWidth": 87,
          "__originHeight": 69,
          "__containerLeft": 477.5,
          "__containerTop": 204.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 2.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 99033,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "102px",
            "left": "60px",
            "width": "47px",
            "height": "38.52459016393443px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/cc/59/52fb7cd58be6061aa1a2607c5dae.png",
            "originalWidth": 77,
            "originalHeight": 64
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 60,
          "__originTop": 120,
          "__originWidth": 47,
          "__originHeight": 38,
          "__containerLeft": 559.5,
          "__containerTop": 304.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 2,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 70976,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "67px",
            "left": "190px",
            "width": "70px",
            "height": "57.46268656716418px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/28/fc/787bdb1f0e08be1379b13f97b23f.png",
            "size": 80588,
            "originalWidth": 245,
            "originalHeight": 202
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originWidth": 70,
          "__originHeight": 57,
          "__originLeft": 190,
          "__originTop": 85,
          "__containerLeft": 689.5,
          "__containerTop": 269.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 4,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 7985,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "-18px",
            "left": "235px",
            "width": "1px",
            "height": "90px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/f2/41/5cba3ff7a072ad81f4336a892bc0.png",
            "originalWidth": 1,
            "originalHeight": 288
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__containerLeft": 734.5,
          "__containerTop": 184.5,
          "__originLeft": 235,
          "__originTop": 0,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 4,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 1,
          "__originHeight": 90
        },
        {
          "id": 117,
          "name": "image element副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "-17px",
            "left": "158px",
            "width": "1px",
            "height": "60px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/f2/41/5cba3ff7a072ad81f4336a892bc0.png",
            "originalWidth": 1,
            "originalHeight": 288
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__containerLeft": 657.5,
          "__containerTop": 185.5,
          "__originLeft": 158,
          "__originTop": 1,
          "__originWidth": 1,
          "__originHeight": 60,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 3.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 14518,
          "name": "image element副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "-18px",
            "left": "91px",
            "width": "1px",
            "height": "125px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/f2/41/5cba3ff7a072ad81f4336a892bc0.png",
            "originalWidth": 1,
            "originalHeight": 288
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__containerLeft": 590.5,
          "__containerTop": 184.5,
          "__originLeft": 91,
          "__originTop": 0,
          "__originWidth": 1,
          "__originHeight": 125,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 2,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 45566,
          "name": "image element副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "-18px",
            "left": "40px",
            "width": "1px",
            "height": "30px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/f2/41/5cba3ff7a072ad81f4336a892bc0.png",
            "originalWidth": 1,
            "originalHeight": 288
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__containerLeft": 539.5,
          "__containerTop": 184.5,
          "__originLeft": 40,
          "__originTop": 0,
          "__originWidth": 1,
          "__originHeight": 30,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 2.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 48023,
          "name": "image element副本副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "145px",
            "left": "251px",
            "width": "27px",
            "height": "27px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 265,
          "__originTop": 163,
          "__containerLeft": 750.5,
          "__containerTop": 347.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 4,
              "delay": 4,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 27,
          "__originHeight": 27
        },
        {
          "id": 48318,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "21px",
            "left": "264px",
            "width": "45px",
            "height": "65.76923076923077px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/56/a2/a696f435b018dfb111b40097152a.png",
            "size": 35337,
            "originalWidth": 89,
            "originalHeight": 248
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 264,
          "__originTop": 39,
          "__originWidth": 45,
          "__originHeight": 65,
          "__containerLeft": 763.5,
          "__containerTop": 223.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 1.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 50691,
          "name": "image element副本副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "119px",
            "left": "171px",
            "width": "27px",
            "height": "27px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 122,
          "__originTop": 127,
          "__containerLeft": 670.5,
          "__containerTop": 321.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 4,
              "delay": 4,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 27,
          "__originHeight": 27
        },
        {
          "id": 41511,
          "name": "image element副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "-18px",
            "left": "297px",
            "width": "1px",
            "height": "40px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/f2/41/5cba3ff7a072ad81f4336a892bc0.png",
            "originalWidth": 1,
            "originalHeight": 288
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__containerLeft": 796.5,
          "__containerTop": 184.5,
          "__originLeft": 297,
          "__originTop": 0,
          "__originWidth": 1,
          "__originHeight": 40,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 1.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 1846,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "294px",
            "left": "69px",
            "width": "188px",
            "height": "29px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/3d/85/054b6d8663408f1f8d47c39a49ba.png",
            "originalWidth": 188,
            "originalHeight": 29
          },
          "isActive": false,
          "__isEdit": false,
          "__containerLeft": 568.5,
          "__containerTop": 496.5,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 69,
          "__originTop": 310,
          "animate": [
            {
              "type": 2,
              "direction": 3,
              "duration": 1,
              "delay": 4,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(弹入)"
            },
            {
              "type": 12,
              "direction": 3,
              "duration": 0.5,
              "delay": 0,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 1,
              "__title": "强调动画(摇摆)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 34845,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "180px",
            "left": "26px",
            "width": "257px",
            "height": "88px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/2b/4d/2513c5f44feda0bfbbc93ab691c8.png",
            "originalWidth": 257,
            "originalHeight": 88
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 31,
          "__originTop": 195,
          "__containerLeft": 525.5,
          "__containerTop": 382.5,
          "animate": [
            {
              "type": 63,
              "direction": 3,
              "duration": 1,
              "delay": 2.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(放大进入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 51227,
          "name": "image element副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "280px",
            "left": "275px",
            "width": "52px",
            "height": "41.74647887323943px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 26.760599153348842,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/0c/4f/f383f7ba40557c2678711350585f.png",
            "size": 98928,
            "originalWidth": 275,
            "originalHeight": 225
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 275,
          "__originTop": 280,
          "__containerLeft": 774.5,
          "__containerTop": 482.5,
          "animate": [
            {
              "type": 63,
              "direction": 3,
              "duration": 2,
              "delay": 4,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(放大进入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 52,
          "__originHeight": 41
        },
        {
          "id": 36315,
          "name": "image element副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "139px",
            "left": "6px",
            "width": "52px",
            "height": "41.74647887323943px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 26.760599153348842,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/0c/4f/f383f7ba40557c2678711350585f.png",
            "size": 98928,
            "originalWidth": 275,
            "originalHeight": 225
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 21,
          "__originTop": 157,
          "__containerLeft": 505.5,
          "__containerTop": 341.5,
          "animate": [
            {
              "type": 63,
              "direction": 3,
              "duration": 2,
              "delay": 4,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(放大进入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 71,
          "__originHeight": 57
        },
        {
          "id": 51623,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "360px",
            "left": "19px",
            "width": "240px",
            "height": "17px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/b7/64/ce773eb80e597d00a8b19efb6749.png",
            "originalWidth": 240,
            "originalHeight": 17
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 36,
          "__originTop": 375,
          "__containerLeft": 518.5,
          "__containerTop": 562.5,
          "animationClass": [],
          "animate": [
            {
              "type": 2,
              "direction": 3,
              "duration": 1,
              "delay": 5.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(弹入)"
            }
          ],
          "__lastAnimationPromise": {}
        },
        {
          "id": 17988,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "345px",
            "left": "259px",
            "width": "52px",
            "height": "46.526315789473685px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 342.99714736124264,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/eb/6b/de38afad13ed91730b9968c202ff.png",
            "originalWidth": 598,
            "originalHeight": 545
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originWidth": 57,
          "__originHeight": 51,
          "__originLeft": 261,
          "__originTop": 361,
          "__containerLeft": 758.5,
          "__containerTop": 547.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 1,
              "delay": 6,
              "countNum": 1,
              "count": null,
              "__tableCss": "",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            },
            {
              "type": 10,
              "direction": 3,
              "duration": 1,
              "delay": 0,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 1,
              "__title": "强调动画(摇动)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 74577,
          "name": "image element副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "287px",
            "left": "113px",
            "width": "54px",
            "height": "439.2972972972973px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 90,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/09/27/251091e3dae8fab61c3b27ab094e.png",
            "size": 15196,
            "originalWidth": 42,
            "originalHeight": 308
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__originLeft": 115,
          "__originTop": 288,
          "__isOriginRecord": false,
          "__originWidth": 37,
          "__originHeight": 301,
          "__containerLeft": 612.5,
          "__containerTop": 489.5,
          "animate": [
            {
              "type": 33,
              "direction": 3,
              "duration": 0.5,
              "delay": 1,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入)"
            }
          ]
        }
      ]
    },
    {
      "id": 7967,
      "name": "第1页",
      "num": 1,
      "pageOption": {
        "longPage": false,
        "pageSize": 486,
        "banTurnPage": false,
        "turnPageMode": 1
      },
      "pageBackground": {
        "color": "",
        "image": "/cdn/ae/05/510d77ee9c9a8f80208e1066c025.png"
      },
      "elements": [
        {
          "id": 69014,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "-24px",
            "left": "119px",
            "width": "200px",
            "height": "302px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/fe/65/b182c8e366d8959053dd32dc0d8d.png",
            "size": 94888,
            "originalWidth": 320,
            "originalHeight": 480
          },
          "isActive": false,
          "__isEdit": false,
          "__containerLeft": 618.5,
          "__containerTop": 178.5,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 119,
          "__originTop": 0,
          "animate": [
            {
              "type": 26,
              "direction": 3,
              "duration": 5,
              "delay": 0.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(淡入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 200,
          "__originHeight": 302
        },
        {
          "id": 48635,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "-23px",
            "left": "0px",
            "width": "194px",
            "height": "261px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/bc/d4/128ecdaef9a9cda61dbebe9e73dc.png",
            "size": 86429,
            "originalWidth": 320,
            "originalHeight": 480
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 0,
          "__originTop": 1,
          "__containerLeft": 499.5,
          "__containerTop": 179.5,
          "animate": [
            {
              "type": 26,
              "direction": 3,
              "duration": 5,
              "delay": 0.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(淡入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 194,
          "__originHeight": 261
        },
        {
          "id": 35776,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "379px",
            "left": "-1px",
            "width": "322px",
            "height": "107px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/3f/c3/5602cba269f4b9d5c86d9608b226.png",
            "size": 15891,
            "originalWidth": 320,
            "originalHeight": 107
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": -1,
          "__originTop": 379,
          "__originWidth": 322,
          "__originHeight": 107,
          "__containerLeft": 498.5,
          "__containerTop": 581.5,
          "animate": [
            {
              "type": 33,
              "direction": 3,
              "duration": 0.5,
              "delay": 1,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 41073,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "418px",
            "left": "229px",
            "width": "70px",
            "height": "61px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/3d/14/148b9deca216e7cc7dec054fe81d.png",
            "size": 19886,
            "originalWidth": 70,
            "originalHeight": 61
          },
          "isActive": false,
          "__isEdit": false,
          "__containerLeft": 728.5,
          "__containerTop": 620.5,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 229,
          "__originTop": 418,
          "animate": [
            {
              "type": 33,
              "direction": 3,
              "duration": 1,
              "delay": 2,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 59019,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "424px",
            "left": "26px",
            "width": "36px",
            "height": "40px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/87/cb/39bd74cb7cf8806a97b63f234d4c.png",
            "size": 17950,
            "originalWidth": 36,
            "originalHeight": 40
          },
          "isActive": false,
          "__isEdit": false,
          "__containerLeft": 525.5,
          "__containerTop": 626.5,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 26,
          "__originTop": 424,
          "animate": [
            {
              "type": 33,
              "direction": 3,
              "duration": 1,
              "delay": 2.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 54032,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "407px",
            "left": "54px",
            "width": "53px",
            "height": "59px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/96/ed/8fbb4eb037a93673ce8b81160078.png",
            "size": 20601,
            "originalWidth": 53,
            "originalHeight": 59
          },
          "isActive": false,
          "__isEdit": false,
          "__containerLeft": 553.5,
          "__containerTop": 609.5,
          "__originalZIndex": 1,
          "__originLeft": 54,
          "__originTop": 407,
          "__isOriginRecord": false,
          "animate": [
            {
              "type": 33,
              "direction": 3,
              "duration": 1,
              "delay": 2.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 61204,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "430px",
            "left": "203px",
            "width": "42px",
            "height": "47px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/c4/c8/1aaf97ae76e59b9c445d019c28ed.png",
            "size": 18754,
            "originalWidth": 42,
            "originalHeight": 47
          },
          "isActive": false,
          "__isEdit": false,
          "__containerLeft": 702.5,
          "__containerTop": 632.5,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 203,
          "__originTop": 430,
          "animate": [
            {
              "type": 33,
              "direction": 3,
              "duration": 1,
              "delay": 2,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 96613,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "24px",
            "left": "61px",
            "width": "33px",
            "height": "33px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 61,
          "__originTop": 24,
          "__containerLeft": 560.5,
          "__containerTop": 226.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 4,
              "delay": 3.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 33,
          "__originHeight": 33
        },
        {
          "id": 93778,
          "name": "image element副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "100px",
            "left": "20px",
            "width": "34px",
            "height": "34px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 20,
          "__originTop": 100,
          "__containerLeft": 519.5,
          "__containerTop": 302.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 5,
              "delay": 4,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 52,
          "__originHeight": 52
        },
        {
          "id": 63586,
          "name": "image element副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "408px",
            "left": "177px",
            "width": "32px",
            "height": "32px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 177,
          "__originTop": 408,
          "__containerLeft": 676.5,
          "__containerTop": 610.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 4,
              "delay": 3.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 52,
          "__originHeight": 52
        },
        {
          "id": 41344,
          "name": "image element副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "149px",
            "left": "7px",
            "width": "27px",
            "height": "27px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 3,
          "__originTop": 167,
          "__containerLeft": 506.5,
          "__containerTop": 351.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 4,
              "delay": 4,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 27,
          "__originHeight": 27
        },
        {
          "id": 3267,
          "name": "image element副本副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "94px",
            "left": "272px",
            "width": "27px",
            "height": "27px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 272,
          "__originTop": 94,
          "__containerLeft": 771.5,
          "__containerTop": 296.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 4,
              "delay": 3.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 52,
          "__originHeight": 52
        },
        {
          "id": 58458,
          "name": "image element副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "5px",
            "left": "189px",
            "width": "50px",
            "height": "50px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 189,
          "__originTop": 5,
          "__containerLeft": 688.5,
          "__containerTop": 207.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 4,
              "delay": 3.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 34,
          "__originHeight": 34
        },
        {
          "id": 34217,
          "name": "image element副本副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "343px",
            "left": "286px",
            "width": "21px",
            "height": "21px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 162,
          "__originTop": 332,
          "__containerLeft": 785.5,
          "__containerTop": 545.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 4,
              "delay": 3,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 32,
          "__originHeight": 32
        },
        {
          "id": 19756,
          "name": "image element副本副本副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "424px",
            "left": "9px",
            "width": "21px",
            "height": "21px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 9,
          "__originTop": 424,
          "__containerLeft": 508.5,
          "__containerTop": 626.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 4,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 32,
          "__originHeight": 32
        },
        {
          "id": 88982,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "-19px",
            "left": "235px",
            "width": "1px",
            "height": "90px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/f2/41/5cba3ff7a072ad81f4336a892bc0.png",
            "originalWidth": 1,
            "originalHeight": 288
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__containerLeft": 734.5,
          "__containerTop": 183.5,
          "__originLeft": 235,
          "__originTop": 0,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 4,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 50836,
          "name": "image element副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "-18px",
            "left": "158px",
            "width": "1px",
            "height": "60px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/f2/41/5cba3ff7a072ad81f4336a892bc0.png",
            "originalWidth": 1,
            "originalHeight": 288
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__containerLeft": 657.5,
          "__containerTop": 184.5,
          "__originLeft": 158,
          "__originTop": 1,
          "__originWidth": 1,
          "__originHeight": 60,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 3.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 1964,
          "name": "image element副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "-19px",
            "left": "91px",
            "width": "1px",
            "height": "125px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/f2/41/5cba3ff7a072ad81f4336a892bc0.png",
            "originalWidth": 1,
            "originalHeight": 288
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__containerLeft": 590.5,
          "__containerTop": 183.5,
          "__originLeft": 91,
          "__originTop": 0,
          "__originWidth": 1,
          "__originHeight": 110,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 2,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 82975,
          "name": "image element副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "-19px",
            "left": "40px",
            "width": "1px",
            "height": "30px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/f2/41/5cba3ff7a072ad81f4336a892bc0.png",
            "originalWidth": 1,
            "originalHeight": 288
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__containerLeft": 539.5,
          "__containerTop": 183.5,
          "__originLeft": 40,
          "__originTop": 0,
          "__originWidth": 1,
          "__originHeight": 30,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 2.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 72213,
          "name": "image element副本副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "156px",
            "left": "103px",
            "width": "27px",
            "height": "27px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 112,
          "__originTop": 163,
          "__containerLeft": 602.5,
          "__containerTop": 358.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 4,
              "delay": 4,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 27,
          "__originHeight": 27
        },
        {
          "id": 88551,
          "name": "image element副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "-19px",
            "left": "297px",
            "width": "1px",
            "height": "40px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/f2/41/5cba3ff7a072ad81f4336a892bc0.png",
            "originalWidth": 1,
            "originalHeight": 288
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__containerLeft": 796.5,
          "__containerTop": 183.5,
          "__originLeft": 297,
          "__originTop": 0,
          "__originWidth": 1,
          "__originHeight": 40,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 1.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 80799,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "60px",
            "left": "193px",
            "width": "66px",
            "height": "59.37349397590362px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/fb/16/dae524856f0a2ffe819c963ccf94.png",
            "size": 97615,
            "originalWidth": 249,
            "originalHeight": 224
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 277,
          "__originTop": 250,
          "__originWidth": 249,
          "__originHeight": 224,
          "__containerLeft": 692.5,
          "__containerTop": 262.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 4,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 18655,
          "name": "image element副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "71px",
            "left": "57px",
            "width": "53px",
            "height": "47.37878787878788px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/fb/16/dae524856f0a2ffe819c963ccf94.png",
            "size": 97615,
            "originalWidth": 249,
            "originalHeight": 224
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 57,
          "__originTop": 118,
          "__originWidth": 66,
          "__originHeight": 59,
          "__containerLeft": 556.5,
          "__containerTop": 273.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 2,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 63560,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "20px",
            "left": "120px",
            "width": "73px",
            "height": "100.6896551724138px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/c2/0b/574131af53cab40e4ef37878f81b.png",
            "size": 49314,
            "originalWidth": 129,
            "originalHeight": 182
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 124,
          "__originTop": 39,
          "__originWidth": 87,
          "__originHeight": 120,
          "__containerLeft": 619.5,
          "__containerTop": 222.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 3.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 60806,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "17px",
            "left": "265px",
            "width": "44px",
            "height": "63.84313725490197px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/99/13/ea7c87d5b545934c7e2a6d96e48f.png",
            "size": 22059,
            "originalWidth": 51,
            "originalHeight": 74
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 261,
          "__originTop": 36,
          "__containerLeft": 764.5,
          "__containerTop": 219.5,
          "__originWidth": 51,
          "__originHeight": 74,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 1.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 56228,
          "name": "image element副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "9px",
            "left": "6px",
            "width": "48px",
            "height": "68.72727272727273px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/99/13/ea7c87d5b545934c7e2a6d96e48f.png",
            "size": 22059,
            "originalWidth": 51,
            "originalHeight": 74
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 7,
          "__originTop": 28,
          "__containerLeft": 505.5,
          "__containerTop": 211.5,
          "__originWidth": 44,
          "__originHeight": 63,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 2.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 94467,
          "name": "carousel form element",
          "type": 3,
          "sound": null,
          "content": "carousel form element",
          "visible": true,
          "lock": false,
          "css": {
            "top": "227px",
            "left": "53px",
            "width": "218px",
            "height": "146px",
            "textAlign": "center",
            "zIndex": 1,
            "opacity": 1,
            "padding": 0,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "width": "100%",
            "height": "100%",
            "overflow": "hidden",
            "backgroundColor": "transparent",
            "borderStyle": "solid",
            "borderColor": "rgba(255,255,255,1)",
            "borderWidth": "2px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "autoPlay": true,
            "playInterval": 2,
            "transition": "fadeAndSlide",
            "pictures": [
              "/cdn/39/85/2b18b7c94723e146ae46ce7ee8bd.jpg",
              "/cdn/9b/aa/dd5f7e20136894756ba5af3c6e01.png",
              "/cdn/ed/e4/31a143d18f4e42e03554c9d7b91b.jpg",
              "/cdn/66/59/58627710125d98341f8581a7eac6.png",
              "/cdn/42/8a/371a037e22799967aa04728e28ab.jpg",
              "/cdn/d7/ed/4ee995ff42a187823563af26f57d.png"
            ]
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__originLeft": 53,
          "__originTop": 248,
          "__isOriginRecord": false,
          "__containerLeft": 552.5,
          "__containerTop": 429.5,
          "__originWidth": 218,
          "__originHeight": 152,
          "animate": [
            {
              "type": 63,
              "direction": 3,
              "duration": 3,
              "delay": 4,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(放大进入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 68437,
          "name": "image element副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "334px",
            "left": "1px",
            "width": "46px",
            "height": "46px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 7,
          "__originTop": 335,
          "__containerLeft": 500.5,
          "__containerTop": 536.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 5,
              "delay": 4,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 52,
          "__originHeight": 52
        },
        {
          "id": 50629,
          "name": "image element副本副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "143px",
            "left": "203px",
            "width": "27px",
            "height": "27px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 214,
          "__originTop": 159,
          "__containerLeft": 702.5,
          "__containerTop": 345.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 4,
              "delay": 4,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 27,
          "__originHeight": 27
        },
        {
          "id": 31363,
          "name": "image element副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "128px",
            "left": "260px",
            "width": "52px",
            "height": "41.74647887323943px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 317.26050191114126,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/0c/4f/f383f7ba40557c2678711350585f.png",
            "size": 98928,
            "originalWidth": 275,
            "originalHeight": 225
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 254,
          "__originTop": 156,
          "__containerLeft": 759.5,
          "__containerTop": 330.5,
          "animate": [
            {
              "type": 63,
              "direction": 3,
              "duration": 2,
              "delay": 6,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(放大进入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 71,
          "__originHeight": 57
        },
        {
          "id": 71362,
          "name": "image element副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "397px",
            "left": "114px",
            "width": "52px",
            "height": "41.74647887323943px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 26.760599153348842,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/0c/4f/f383f7ba40557c2678711350585f.png",
            "size": 98928,
            "originalWidth": 275,
            "originalHeight": 225
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 107,
          "__originTop": 401,
          "__containerLeft": 613.5,
          "__containerTop": 599.5,
          "animate": [
            {
              "type": 63,
              "direction": 3,
              "duration": 2,
              "delay": 6,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(放大进入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 71,
          "__originHeight": 57
        },
        {
          "id": 19221,
          "name": "image element副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "289px",
            "left": "127px",
            "width": "54px",
            "height": "439.2972972972973px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 90,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/09/27/251091e3dae8fab61c3b27ab094e.png",
            "size": 15196,
            "originalWidth": 42,
            "originalHeight": 308
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__originLeft": 113,
          "__originTop": 726,
          "__isOriginRecord": false,
          "__originWidth": 37,
          "__originHeight": 301,
          "__containerLeft": 626.5,
          "__containerTop": 491.5,
          "animate": [
            {
              "type": 33,
              "direction": 3,
              "duration": 0.5,
              "delay": 1,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 27973,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "190px",
            "left": "72px",
            "width": "221px",
            "height": "68px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/26/ee/b0b65829f89f71dbb407c2568585.png",
            "originalWidth": 221,
            "originalHeight": 17
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 72,
          "__originTop": 190,
          "__containerLeft": 571.5,
          "__containerTop": 392.5,
          "animate": [
            {
              "type": 2,
              "direction": 3,
              "duration": 1,
              "delay": 8,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(弹入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 221,
          "__originHeight": 17
        },
        {
          "id": 46682,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "163px",
            "left": "11px",
            "width": "54px",
            "height": "58.09090909090909px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 351.55680907082336,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/d5/4b/97f440cdc154394dfa4131fc5854.png",
            "originalWidth": 203,
            "originalHeight": 219
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__originLeft": 11,
          "__originTop": 170,
          "__isOriginRecord": false,
          "__originWidth": 66,
          "__originHeight": 71,
          "__containerLeft": 510.5,
          "__containerTop": 365.5,
          "animate": [
            {
              "type": 2,
              "direction": 3,
              "duration": 1,
              "delay": 6.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(弹入)"
            },
            {
              "type": 11,
              "direction": 3,
              "duration": 1,
              "delay": 0,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 1,
              "__title": "强调动画(摇头)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        }
      ]
    },
    {
      "id": 2594,
      "name": "第1页",
      "num": 1,
      "pageOption": {
        "longPage": false,
        "pageSize": 486,
        "banTurnPage": false,
        "turnPageMode": 1
      },
      "pageBackground": {
        "color": "",
        "image": "/cdn/ae/05/510d77ee9c9a8f80208e1066c025.png"
      },
      "elements": [
        {
          "id": 45265,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "-19px",
            "left": "119px",
            "width": "200px",
            "height": "302px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/fe/65/b182c8e366d8959053dd32dc0d8d.png",
            "size": 94888,
            "originalWidth": 320,
            "originalHeight": 480
          },
          "isActive": false,
          "__isEdit": false,
          "__containerLeft": 618.5,
          "__containerTop": 183.5,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 119,
          "__originTop": 0,
          "animate": [
            {
              "type": 26,
              "direction": 3,
              "duration": 5,
              "delay": 0.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(淡入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 200,
          "__originHeight": 302
        },
        {
          "id": 83015,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "-18px",
            "left": "0px",
            "width": "194px",
            "height": "261px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/bc/d4/128ecdaef9a9cda61dbebe9e73dc.png",
            "size": 86429,
            "originalWidth": 320,
            "originalHeight": 480
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 0,
          "__originTop": 1,
          "__containerLeft": 499.5,
          "__containerTop": 184.5,
          "animate": [
            {
              "type": 26,
              "direction": 3,
              "duration": 5,
              "delay": 0.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(淡入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 194,
          "__originHeight": 261
        },
        {
          "id": 45068,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "379px",
            "left": "-1px",
            "width": "322px",
            "height": "107px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/3f/c3/5602cba269f4b9d5c86d9608b226.png",
            "size": 15891,
            "originalWidth": 320,
            "originalHeight": 107
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": -1,
          "__originTop": 379,
          "__originWidth": 322,
          "__originHeight": 107,
          "__containerLeft": 498.5,
          "__containerTop": 581.5,
          "animate": [
            {
              "type": 33,
              "direction": 3,
              "duration": 0.5,
              "delay": 1,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 69423,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "418px",
            "left": "229px",
            "width": "70px",
            "height": "61px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/3d/14/148b9deca216e7cc7dec054fe81d.png",
            "size": 19886,
            "originalWidth": 70,
            "originalHeight": 61
          },
          "isActive": false,
          "__isEdit": false,
          "__containerLeft": 728.5,
          "__containerTop": 620.5,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 229,
          "__originTop": 418,
          "animate": [
            {
              "type": 33,
              "direction": 3,
              "duration": 1,
              "delay": 2,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 43359,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "424px",
            "left": "26px",
            "width": "36px",
            "height": "40px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/87/cb/39bd74cb7cf8806a97b63f234d4c.png",
            "size": 17950,
            "originalWidth": 36,
            "originalHeight": 40
          },
          "isActive": false,
          "__isEdit": false,
          "__containerLeft": 525.5,
          "__containerTop": 626.5,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 26,
          "__originTop": 424,
          "animate": [
            {
              "type": 33,
              "direction": 3,
              "duration": 1,
              "delay": 2.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 7398,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "407px",
            "left": "54px",
            "width": "53px",
            "height": "59px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/96/ed/8fbb4eb037a93673ce8b81160078.png",
            "size": 20601,
            "originalWidth": 53,
            "originalHeight": 59
          },
          "isActive": false,
          "__isEdit": false,
          "__containerLeft": 553.5,
          "__containerTop": 609.5,
          "__originalZIndex": 1,
          "__originLeft": 54,
          "__originTop": 407,
          "__isOriginRecord": false,
          "animate": [
            {
              "type": 33,
              "direction": 3,
              "duration": 1,
              "delay": 2.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 19823,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "430px",
            "left": "203px",
            "width": "42px",
            "height": "47px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/c4/c8/1aaf97ae76e59b9c445d019c28ed.png",
            "size": 18754,
            "originalWidth": 42,
            "originalHeight": 47
          },
          "isActive": false,
          "__isEdit": false,
          "__containerLeft": 702.5,
          "__containerTop": 632.5,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 203,
          "__originTop": 430,
          "animate": [
            {
              "type": 33,
              "direction": 3,
              "duration": 1,
              "delay": 2,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 67901,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "24px",
            "left": "61px",
            "width": "33px",
            "height": "33px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 61,
          "__originTop": 24,
          "__containerLeft": 560.5,
          "__containerTop": 226.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 4,
              "delay": 3.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 33,
          "__originHeight": 33
        },
        {
          "id": 5338,
          "name": "image element副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "100px",
            "left": "20px",
            "width": "34px",
            "height": "34px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 20,
          "__originTop": 100,
          "__containerLeft": 519.5,
          "__containerTop": 302.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 5,
              "delay": 4,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 52,
          "__originHeight": 52
        },
        {
          "id": 51914,
          "name": "image element副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "371px",
            "left": "-1px",
            "width": "46px",
            "height": "46px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 2,
          "__originTop": 340,
          "__containerLeft": 498.5,
          "__containerTop": 573.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 5,
              "delay": 4,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 52,
          "__originHeight": 52
        },
        {
          "id": 60844,
          "name": "image element副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "429px",
            "left": "166px",
            "width": "32px",
            "height": "32px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 164,
          "__originTop": 427,
          "__containerLeft": 665.5,
          "__containerTop": 631.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 4,
              "delay": 3.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 52,
          "__originHeight": 52
        },
        {
          "id": 91607,
          "name": "image element副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "173px",
            "left": "31px",
            "width": "27px",
            "height": "27px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 121,
          "__originTop": 157,
          "__containerLeft": 530.5,
          "__containerTop": 375.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 4,
              "delay": 4,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 27,
          "__originHeight": 27
        },
        {
          "id": 57969,
          "name": "image element副本副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "94px",
            "left": "272px",
            "width": "27px",
            "height": "27px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 272,
          "__originTop": 94,
          "__containerLeft": 771.5,
          "__containerTop": 296.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 4,
              "delay": 3.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 52,
          "__originHeight": 52
        },
        {
          "id": 71689,
          "name": "image element副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "5px",
            "left": "189px",
            "width": "50px",
            "height": "50px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 189,
          "__originTop": 5,
          "__containerLeft": 688.5,
          "__containerTop": 207.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 4,
              "delay": 3.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 34,
          "__originHeight": 34
        },
        {
          "id": 33907,
          "name": "image element副本副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "377px",
            "left": "233px",
            "width": "21px",
            "height": "21px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 258,
          "__originTop": 320,
          "__containerLeft": 732.5,
          "__containerTop": 579.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 4,
              "delay": 3,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 32,
          "__originHeight": 32
        },
        {
          "id": 62575,
          "name": "image element副本副本副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "424px",
            "left": "9px",
            "width": "21px",
            "height": "21px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 9,
          "__originTop": 424,
          "__containerLeft": 508.5,
          "__containerTop": 626.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 4,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 32,
          "__originHeight": 32
        },
        {
          "id": 23847,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "373px",
            "left": "105px",
            "width": "71px",
            "height": "57.4264705882353px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 26.760599153348842,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/0c/4f/f383f7ba40557c2678711350585f.png",
            "size": 98928,
            "originalWidth": 275,
            "originalHeight": 225
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 106,
          "__originTop": 370,
          "__containerLeft": 604.5,
          "__containerTop": 575.5,
          "animate": [
            {
              "type": 63,
              "direction": 3,
              "duration": 2,
              "delay": 4,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(放大进入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 68,
          "__originHeight": 55
        },
        {
          "id": 59552,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "20px",
            "left": "105px",
            "width": "89px",
            "height": "78.97183098591549px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/fd/06/c1c73466ae3ee7f78fd5553afc53.png",
            "size": 75646,
            "originalWidth": 213,
            "originalHeight": 189
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 105,
          "__originTop": 35,
          "__originWidth": 213,
          "__originHeight": 189,
          "__containerLeft": 604.5,
          "__containerTop": 222.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 3.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 80226,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "5px",
            "left": "-22px",
            "width": "87px",
            "height": "69.39884393063583px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/f7/bc/fb52e52737b4d600bdcdde17a979.png",
            "size": 39619,
            "originalWidth": 173,
            "originalHeight": 138
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": -22,
          "__originTop": 20,
          "__originWidth": 173,
          "__originHeight": 138,
          "__containerLeft": 477.5,
          "__containerTop": 207.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 2.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 54955,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "106px",
            "left": "60px",
            "width": "47px",
            "height": "38.52459016393443px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/cc/59/52fb7cd58be6061aa1a2607c5dae.png",
            "originalWidth": 77,
            "originalHeight": 64
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 60,
          "__originTop": 121,
          "__originWidth": 61,
          "__originHeight": 50,
          "__containerLeft": 559.5,
          "__containerTop": 308.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 2,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 96242,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "70px",
            "left": "190px",
            "width": "70px",
            "height": "57.46268656716418px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/28/fc/787bdb1f0e08be1379b13f97b23f.png",
            "size": 80588,
            "originalWidth": 245,
            "originalHeight": 202
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originWidth": 67,
          "__originHeight": 55,
          "__originLeft": 190,
          "__originTop": 85,
          "__containerLeft": 689.5,
          "__containerTop": 272.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 4,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 63358,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "-15px",
            "left": "235px",
            "width": "1px",
            "height": "90px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/f2/41/5cba3ff7a072ad81f4336a892bc0.png",
            "originalWidth": 1,
            "originalHeight": 288
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__containerLeft": 734.5,
          "__containerTop": 187.5,
          "__originLeft": 235,
          "__originTop": 0,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 4,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 37594,
          "name": "image element副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "-14px",
            "left": "158px",
            "width": "1px",
            "height": "60px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/f2/41/5cba3ff7a072ad81f4336a892bc0.png",
            "originalWidth": 1,
            "originalHeight": 288
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__containerLeft": 657.5,
          "__containerTop": 188.5,
          "__originLeft": 158,
          "__originTop": 1,
          "__originWidth": 1,
          "__originHeight": 60,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 3.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 12047,
          "name": "image element副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "-15px",
            "left": "91px",
            "width": "1px",
            "height": "125px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/f2/41/5cba3ff7a072ad81f4336a892bc0.png",
            "originalWidth": 1,
            "originalHeight": 288
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__containerLeft": 590.5,
          "__containerTop": 187.5,
          "__originLeft": 91,
          "__originTop": 0,
          "__originWidth": 1,
          "__originHeight": 110,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 2,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 81696,
          "name": "image element副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "-15px",
            "left": "40px",
            "width": "1px",
            "height": "30px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/f2/41/5cba3ff7a072ad81f4336a892bc0.png",
            "originalWidth": 1,
            "originalHeight": 288
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__containerLeft": 539.5,
          "__containerTop": 187.5,
          "__originLeft": 40,
          "__originTop": 0,
          "__originWidth": 1,
          "__originHeight": 30,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 2.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 15275,
          "name": "image element副本副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "158px",
            "left": "254px",
            "width": "27px",
            "height": "27px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 254,
          "__originTop": 157,
          "__containerLeft": 753.5,
          "__containerTop": 360.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 4,
              "delay": 4,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 27,
          "__originHeight": 27
        },
        {
          "id": 5758,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "24px",
            "left": "264px",
            "width": "45px",
            "height": "65.76923076923077px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/56/a2/a696f435b018dfb111b40097152a.png",
            "size": 35337,
            "originalWidth": 89,
            "originalHeight": 248
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 260,
          "__originTop": 35,
          "__originWidth": 39,
          "__originHeight": 57,
          "__containerLeft": 763.5,
          "__containerTop": 226.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 1.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 94271,
          "name": "image element副本副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "134px",
            "left": "195px",
            "width": "27px",
            "height": "27px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 171,
          "__originTop": 128,
          "__containerLeft": 694.5,
          "__containerTop": 336.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 4,
              "delay": 4,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 27,
          "__originHeight": 27
        },
        {
          "id": 31474,
          "name": "image element副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "-15px",
            "left": "297px",
            "width": "1px",
            "height": "40px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/f2/41/5cba3ff7a072ad81f4336a892bc0.png",
            "originalWidth": 1,
            "originalHeight": 288
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__containerLeft": 796.5,
          "__containerTop": 187.5,
          "__originLeft": 91,
          "__originTop": 125,
          "__originWidth": 1,
          "__originHeight": 110,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 1.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 20559,
          "name": "image element副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "346px",
            "left": "272px",
            "width": "52px",
            "height": "41.74647887323943px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 26.760599153348842,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/0c/4f/f383f7ba40557c2678711350585f.png",
            "size": 98928,
            "originalWidth": 275,
            "originalHeight": 225
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 274,
          "__originTop": 278,
          "__containerLeft": 771.5,
          "__containerTop": 548.5,
          "animate": [
            {
              "type": 63,
              "direction": 3,
              "duration": 2,
              "delay": 4,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(放大进入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 52,
          "__originHeight": 41
        },
        {
          "id": 31187,
          "name": "image element副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "288px",
            "left": "108px",
            "width": "54px",
            "height": "439.2972972972973px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 90,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/09/27/251091e3dae8fab61c3b27ab094e.png",
            "size": 15196,
            "originalWidth": 42,
            "originalHeight": 308
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__originLeft": 106,
          "__originTop": 413,
          "__isOriginRecord": false,
          "__originWidth": 37,
          "__originHeight": 301,
          "__containerLeft": 607.5,
          "__containerTop": 490.5,
          "animate": [
            {
              "type": 33,
              "direction": 3,
              "duration": 0.5,
              "delay": 1,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 99742,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "120px",
            "left": "137px",
            "width": "52px",
            "height": "60px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/be/4c/681de5f985c3c9cced90713c4c76.png",
            "originalWidth": 211,
            "originalHeight": 230
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 132,
          "__originTop": 144,
          "__originWidth": 52,
          "__originHeight": 55,
          "__containerLeft": 636.5,
          "__containerTop": 322.5,
          "animate": [
            {
              "type": 63,
              "direction": 3,
              "duration": 1,
              "delay": 4,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(放大进入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 21792,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "188px",
            "left": "22px",
            "width": "286px",
            "height": "53px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/00/e5/603fcecf1df5ebe289ccdd589987.png",
            "originalWidth": 286,
            "originalHeight": 53
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__originLeft": 22,
          "__originTop": 210,
          "__isOriginRecord": false,
          "__containerLeft": 521.5,
          "__containerTop": 390.5,
          "animate": [
            {
              "type": 63,
              "direction": 3,
              "duration": 1,
              "delay": 4.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(放大进入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 32715,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "266px",
            "left": "9px",
            "width": "301px",
            "height": "89px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/cf/9a/e3996d34a238019fa996837276b2.png",
            "size": 20068,
            "originalWidth": 301,
            "originalHeight": 89
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 19,
          "__originTop": 270,
          "__containerLeft": 508.5,
          "__containerTop": 468.5,
          "animate": [
            {
              "type": 63,
              "direction": 3,
              "duration": 1,
              "delay": 5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(放大进入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        }
      ]
    },
    {
      "id": 8660,
      "name": "第1页",
      "num": 1,
      "pageOption": {
        "longPage": false,
        "pageSize": 486,
        "banTurnPage": false,
        "turnPageMode": 1
      },
      "pageBackground": {
        "color": "",
        "image": "/cdn/ae/05/510d77ee9c9a8f80208e1066c025.png"
      },
      "elements": [
        {
          "id": 18875,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": true,
          "css": {
            "top": "-19px",
            "left": "119px",
            "width": "200px",
            "height": "302px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/fe/65/b182c8e366d8959053dd32dc0d8d.png",
            "size": 94888,
            "originalWidth": 320,
            "originalHeight": 480
          },
          "isActive": false,
          "__isEdit": false,
          "__containerLeft": 618.5,
          "__containerTop": 183.5,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 119,
          "__originTop": 0,
          "animate": [
            {
              "type": 26,
              "direction": 3,
              "duration": 5,
              "delay": 0.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(淡入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 200,
          "__originHeight": 302
        },
        {
          "id": 29500,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": true,
          "css": {
            "top": "-18px",
            "left": "0px",
            "width": "194px",
            "height": "261px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/bc/d4/128ecdaef9a9cda61dbebe9e73dc.png",
            "size": 86429,
            "originalWidth": 320,
            "originalHeight": 480
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 0,
          "__originTop": 1,
          "__containerLeft": 499.5,
          "__containerTop": 184.5,
          "animate": [
            {
              "type": 26,
              "direction": 3,
              "duration": 5,
              "delay": 0.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(淡入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 194,
          "__originHeight": 261
        },
        {
          "id": 33937,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "379px",
            "left": "-1px",
            "width": "322px",
            "height": "107px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/3f/c3/5602cba269f4b9d5c86d9608b226.png",
            "size": 15891,
            "originalWidth": 320,
            "originalHeight": 107
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": -1,
          "__originTop": 379,
          "__originWidth": 322,
          "__originHeight": 107,
          "__containerLeft": 498.5,
          "__containerTop": 581.5,
          "animate": [
            {
              "type": 33,
              "direction": 3,
              "duration": 0.5,
              "delay": 1,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 49023,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "19px",
            "left": "26px",
            "width": "33px",
            "height": "33px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 34,
          "__originTop": 19,
          "__containerLeft": 525.5,
          "__containerTop": 221.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 4,
              "delay": 0,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 33,
          "__originHeight": 33
        },
        {
          "id": 50064,
          "name": "image element副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "404px",
            "left": "146px",
            "width": "32px",
            "height": "32px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 162,
          "__originTop": 405,
          "__containerLeft": 645.5,
          "__containerTop": 606.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 4,
              "delay": 2,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 52,
          "__originHeight": 52
        },
        {
          "id": 2870,
          "name": "image element副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "-3px",
            "left": "231px",
            "width": "50px",
            "height": "50px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 231,
          "__originTop": -3,
          "__containerLeft": 730.5,
          "__containerTop": 199.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 6,
              "delay": 1.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 34,
          "__originHeight": 34
        },
        {
          "id": 21077,
          "name": "image element副本副本副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "424px",
            "left": "9px",
            "width": "21px",
            "height": "21px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 9,
          "__originTop": 424,
          "__containerLeft": 508.5,
          "__containerTop": 626.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 2,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 21,
          "__originHeight": 21
        },
        {
          "id": 74575,
          "name": "image element副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "287px",
            "left": "121px",
            "width": "54px",
            "height": "439.2972972972973px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 90,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/09/27/251091e3dae8fab61c3b27ab094e.png",
            "size": 15196,
            "originalWidth": 42,
            "originalHeight": 308
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__originLeft": 541,
          "__originTop": -306,
          "__isOriginRecord": false,
          "__originWidth": 37,
          "__originHeight": 301,
          "__containerLeft": 620.5,
          "__containerTop": 489.5,
          "animate": [
            {
              "type": 33,
              "direction": 3,
              "duration": 0.5,
              "delay": 1,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 66115,
          "name": "shape element",
          "type": 4,
          "sound": null,
          "content": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "390px",
            "left": "257px",
            "zIndex": 1,
            "width": "16px",
            "height": "16px",
            "opacity": 1,
            "padding": 0,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "svg": "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"100%\" height=\"100%\" viewBox=\"0 0 64 64\" enable-background=\"new 0 0 64 64\" xml:space=\"preserve\" preserveAspectRatio=\"none\">\n<g>\n  <path d=\"M44.274,39.25L64,24H40L32,0l-8,24H0l19.75,15.188L12,64l20.032-15.36L52.016,64L44.274,39.25z\" fill=\"rgba(248,248,5,1)\"></path>\n</g>\n</svg>",
            "svgColor": "rgba(248,248,5,1)"
          },
          'animate': [
            {
              "type": 26,
              "direction": 3,
              "duration": 5,
              "delay": 0.5,
              "countNum": 2,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(淡入)"
            }
          ],
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__originLeft": 257,
          "__originTop": 390,
          "__isOriginRecord": false,
          "__originWidth": 33,
          "__originHeight": 33,
          "__containerLeft": 756.5,
          "__containerTop": 592.5,
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 45860,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "282px",
            "left": "32px",
            "width": "258px",
            "height": "39px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/41/bd/72fafc67bcb5ecae3f0244613bec.png",
            "originalWidth": 258,
            "originalHeight": 39
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__originLeft": 32,
          "__originTop": 281,
          "__isOriginRecord": false,
          "__containerLeft": 531.5,
          "__containerTop": 484.5,
          "animate": [
            {
              "type": 63,
              "direction": 3,
              "duration": 1.5,
              "delay": 2.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(放大进入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 73605,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "70px",
            "left": "65px",
            "width": "195px",
            "height": "195px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/4d/65/e88e9d8a317d138f6a5f4090bd71.png",
            "originalWidth": 195,
            "originalHeight": 195
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__originLeft": 0,
          "__originTop": 60,
          "__isOriginRecord": false,
          "__containerLeft": 564.5,
          "__containerTop": 272.5,
          "animate": [
            {
              "type": 2,
              "direction": 3,
              "duration": 1,
              "delay": 1,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(弹入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 68866,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "121px",
            "left": "78px",
            "width": "169px",
            "height": "143px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/7a/c3/e6979a323ec1ab80c7a8c5838617.png",
            "size": 49521,
            "originalWidth": 169,
            "originalHeight": 143
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__originLeft": 78,
          "__originTop": 136,
          "__isOriginRecord": false,
          "__containerLeft": 577.5,
          "__containerTop": 323.5,
          "__originWidth": 169,
          "__originHeight": 143,
          "animate": [
            {
              "type": 63,
              "direction": 3,
              "duration": 1,
              "delay": 2,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(放大进入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 53787,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "329px",
            "left": "113px",
            "width": "94px",
            "height": "47.95918367346939px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/05/d7/b02d75c9a0e154eab6fba94e0b55.png",
            "size": 17436,
            "originalWidth": 129,
            "originalHeight": 66
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 113,
          "__originTop": 329,
          "__originWidth": 98,
          "__originHeight": 50,
          "__containerLeft": 612.5,
          "__containerTop": 531.5,
          "animate": [
            {
              "type": 63,
              "direction": 3,
              "duration": 1.5,
              "delay": 3,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(放大进入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 71474,
          "name": "image element",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "406px",
            "left": "239px",
            "width": "56px",
            "height": "67.78947368421052px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/17/d6/b5adc48f7f0bd3f31b884fe997bf.png",
            "size": 59413,
            "originalWidth": 181,
            "originalHeight": 232
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__originLeft": 243,
          "__originTop": 365,
          "__isOriginRecord": false,
          "__originWidth": 19,
          "__originHeight": 23,
          "__containerLeft": 738.5,
          "__containerTop": 608.5,
          "animate": [
            {
              "type": 33,
              "direction": 3,
              "duration": 2,
              "delay": 1,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 51880,
          "name": "image element副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "414px",
            "left": "50px",
            "width": "42px",
            "height": "50.04255319148936px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/17/d6/b5adc48f7f0bd3f31b884fe997bf.png",
            "size": 59413,
            "originalWidth": 181,
            "originalHeight": 232
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__originLeft": 50,
          "__originTop": 414,
          "__isOriginRecord": false,
          "__originWidth": 47,
          "__originHeight": 56,
          "__containerLeft": 549.5,
          "__containerTop": 616.5,
          "animate": [
            {
              "type": 33,
              "direction": 3,
              "duration": 2,
              "delay": 1.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 10351,
          "name": "shape element副本",
          "type": 4,
          "sound": null,
          "content": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "395px",
            "left": "61px",
            "zIndex": 1,
            "width": "16px",
            "height": "16px",
            "opacity": 1,
            "padding": 0,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "svg": "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"100%\" height=\"100%\" viewBox=\"0 0 64 64\" enable-background=\"new 0 0 64 64\" xml:space=\"preserve\" preserveAspectRatio=\"none\">\n<g>\n  <path d=\"M44.274,39.25L64,24H40L32,0l-8,24H0l19.75,15.188L12,64l20.032-15.36L52.016,64L44.274,39.25z\" fill=\"rgba(248,248,5,1)\"></path>\n</g>\n</svg>",
            "svgColor": "rgba(248,248,5,1)"
          },
          "animate": [
            {
              "type": 33,
              "direction": 3,
              "duration": 2,
              "delay": 1.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入)"
            }
          ],
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__originLeft": 61,
          "__originTop": 395,
          "__isOriginRecord": false,
          "__originWidth": 33,
          "__originHeight": 33,
          "__containerLeft": 560.5,
          "__containerTop": 597.5,
          "animationClass": [],
          "__lastAnimationPromise": {}
        },
        {
          "id": 51339,
          "name": "image element副本副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "200px",
            "left": "31px",
            "width": "27px",
            "height": "27px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 31,
          "__originTop": 200,
          "__containerLeft": 530.5,
          "__containerTop": 402.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 4,
              "delay": 1.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 27,
          "__originHeight": 27
        },
        {
          "id": 23886,
          "name": "image element副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "98px",
            "left": "34px",
            "width": "34px",
            "height": "34px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 19,
          "__originTop": 101,
          "__containerLeft": 533.5,
          "__containerTop": 300.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 6,
              "delay": 1.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 52,
          "__originHeight": 52
        },
        {
          "id": 84300,
          "name": "image element副本副本副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "98px",
            "left": "223px",
            "width": "27px",
            "height": "27px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 223,
          "__originTop": 98,
          "__containerLeft": 722.5,
          "__containerTop": 300.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 4,
              "delay": 1.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 52,
          "__originHeight": 52
        },
        {
          "id": 23402,
          "name": "image element副本副本副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "191px",
            "left": "278px",
            "width": "27px",
            "height": "27px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 42.95459151111277,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 278,
          "__originTop": 192,
          "__containerLeft": 777.5,
          "__containerTop": 393.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 4,
              "delay": 1.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 27,
          "__originHeight": 27
        },
        {
          "id": 6412,
          "name": "image element副本副本副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "364px",
            "left": "286px",
            "width": "21px",
            "height": "21px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 286,
          "__originTop": 364,
          "__containerLeft": 785.5,
          "__containerTop": 566.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 6,
              "delay": 2,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 32,
          "__originHeight": 32
        },
        {
          "id": 57873,
          "name": "image element副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "128px",
            "left": "162px",
            "width": "19px",
            "height": "19px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 162,
          "__originTop": 128,
          "__containerLeft": 661.5,
          "__containerTop": 330.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 7,
              "delay": 4,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 34,
          "__originHeight": 34
        },
        {
          "id": 93800,
          "name": "image element副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "178px",
            "left": "81px",
            "width": "15px",
            "height": "15px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 81,
          "__originTop": 178,
          "__containerLeft": 580.5,
          "__containerTop": 380.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 5,
              "delay": 0,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 15,
          "__originHeight": 15
        },
        {
          "id": 21969,
          "name": "image element副本副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "163px",
            "left": "125px",
            "width": "15px",
            "height": "15px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 127,
          "__originTop": 110,
          "__containerLeft": 624.5,
          "__containerTop": 365.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 5,
              "delay": 4,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 15,
          "__originHeight": 15
        },
        {
          "id": 89238,
          "name": "image element副本副本副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "222px",
            "left": "173px",
            "width": "15px",
            "height": "15px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 173,
          "__originTop": 222,
          "__containerLeft": 672.5,
          "__containerTop": 424.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 5,
              "delay": 1,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 19,
          "__originHeight": 19
        },
        {
          "id": 38654,
          "name": "image element副本副本副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "96px",
            "left": "125px",
            "width": "21px",
            "height": "21px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 34.114472945341255,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 125,
          "__originTop": 96,
          "__containerLeft": 624.5,
          "__containerTop": 298.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 6,
              "delay": 1,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 30,
          "__originHeight": 30
        },
        {
          "id": 64936,
          "name": "image element副本副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "345px",
            "left": "56px",
            "width": "15px",
            "height": "15px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 56,
          "__originTop": 345,
          "__containerLeft": 555.5,
          "__containerTop": 547.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 5,
              "delay": 0,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 15,
          "__originHeight": 15
        },
        {
          "id": 83941,
          "name": "image element副本副本副本副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "243px",
            "left": "109px",
            "width": "21px",
            "height": "21px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 109,
          "__originTop": 243,
          "__containerLeft": 608.5,
          "__containerTop": 445.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 2,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 32,
          "__originHeight": 32
        },
        {
          "id": 94678,
          "name": "image element副本副本副本副本副本副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "159px",
            "left": "229px",
            "width": "21px",
            "height": "21px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 229,
          "__originTop": 159,
          "__containerLeft": 728.5,
          "__containerTop": 361.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 3,
              "delay": 0,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 32,
          "__originHeight": 32
        },
        {
          "id": 17476,
          "name": "image element副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "38px",
            "left": "168px",
            "width": "33px",
            "height": "33px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": "",
            "cursor": "pointer"
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 0,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 168,
          "__originTop": 38,
          "__containerLeft": 667.5,
          "__containerTop": 240.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 4,
              "delay": 3,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 33,
          "__originHeight": 33
        },
        {
          "id": 7839,
          "name": "image element副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "339px",
            "left": "227px",
            "width": "28px",
            "height": "28px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 26.31264849478883,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 227,
          "__originTop": 339,
          "__containerLeft": 726.5,
          "__containerTop": 541.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 5,
              "delay": 3,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 34,
          "__originHeight": 34
        },
        {
          "id": 32187,
          "name": "image element副本副本副本",
          "type": 2,
          "sound": null,
          "visible": true,
          "lock": false,
          "css": {
            "top": "266px",
            "left": "202px",
            "width": "28px",
            "height": "28px",
            "opacity": 1,
            "padding": 0,
            "zIndex": 1,
            "WebkitAnimationDuration": "",
            "WebkitAnimationDelay": "",
            "WebkitAnimationIterationCount": "",
            "MozAnimationDuration": "",
            "MozAnimationDelay": "",
            "MozAnimationIterationCount": ""
          },
          "contentCss": {
            "backgroundColor": "transparent",
            "borderStyle": "none",
            "borderColor": "rgba(85,85,85,1)",
            "borderWidth": "0px",
            "borderRadius": "0px",
            "rotateZ": 26.31264849478883,
            "boxShadow": {
              "color": "transparent",
              "x": 0,
              "y": 0,
              "vague": 0,
              "extension": 0,
              "inset": false
            },
            "cursor": "pointer"
          },
          "properties": {
            "src": "/cdn/e5/54/9d14717bd083ea785a39bc3ba30a.png",
            "size": 21154,
            "originalWidth": 56,
            "originalHeight": 56
          },
          "isActive": false,
          "__isEdit": false,
          "__originalZIndex": 1,
          "__isOriginRecord": false,
          "__originLeft": 202,
          "__originTop": 266,
          "__containerLeft": 701.5,
          "__containerTop": 468.5,
          "animate": [
            {
              "type": 28,
              "direction": 3,
              "duration": 5,
              "delay": 1.5,
              "countNum": 1,
              "count": null,
              "__tableCss": "on",
              "__currentTabIndex": 0,
              "__title": "进入动画(上方淡入2)"
            }
          ],
          "animationClass": [],
          "__lastAnimationPromise": {},
          "__originWidth": 34,
          "__originHeight": 34
        }
      ]
    }
  ],
  "createUser": "ffe45300-c583-11e6-9e38-e75807afd41c",
  "organizationid": "6684535d-b386-4510-33b6-08d422fd527d",
  "classify": "116"
}

export default scenedata;