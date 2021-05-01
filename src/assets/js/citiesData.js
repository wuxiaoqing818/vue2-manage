//二级联动
const data = [{
  value: "全部",
  label: "全部",
  children: [{
    value: "全部",
    label: "全部"
  }]
},
{
  value: "北京",
  label: "北京",
  children: [{
    value: "全部",
    label: "全部"
  },
  {
    value: "东城区",
    label: "东城区"
  },
  {
    value: "西城区",
    label: "西城区"
  },
  {
    value: "崇文区",
    label: "崇文区"
  },
  {
    value: "宣武区",
    label: "宣武区"
  },
  {
    value: "朝阳区",
    label: "朝阳区"
  },
  {
    value: "丰台区",
    label: "丰台区"
  },
  {
    value: "石景山区",
    label: "石景山区"
  },
  {
    value: "海淀区",
    label: "海淀区"
  },
  {
    value: "门头沟区",
    label: "门头沟区"
  },
  {
    value: "房山区",
    label: "房山区"
  },
  {
    value: "通州区",
    label: "通州区"
  },
  {
    value: "顺义区",
    label: "顺义区"
  },
  {
    value: "昌平区",
    label: "昌平区"
  },
  {
    value: "大兴区",
    label: "大兴区"
  },
  {
    value: "怀柔区",
    label: "怀柔区"
  },
  {
    value: "平谷区",
    label: "平谷区"
  },
  {
    value: "密云县",
    label: "密云县"
  },
  {
    value: "延庆县",
    label: "延庆县"
  }
  ]
},
{
  value: "天津",
  label: "天津",
  children: [{
    value: "全部",
    label: "全部"
  },
  {
    value: "和平区",
    label: "和平区"
  },
  {
    value: "河东区",
    label: "河东区"
  },
  {
    value: "河西区",
    label: "河西区"
  },
  {
    value: "南开区",
    label: "南开区"
  },
  {
    value: "河北区",
    label: "河北区"
  },
  {
    value: "红桥区",
    label: "红桥区"
  },
  {
    value: "塘沽区",
    label: "塘沽区"
  },
  {
    value: "汉沽区",
    label: "汉沽区"
  },
  {
    value: "大港区",
    label: "大港区"
  },
  {
    value: "东丽区",
    label: "东丽区"
  },
  {
    value: "西青区",
    label: "西青区"
  },
  {
    value: "津南区",
    label: "津南区"
  },
  {
    value: "北辰区",
    label: "北辰区"
  },
  {
    value: "武清区",
    label: "武清区"
  },
  {
    value: "宝坻区",
    label: "宝坻区"
  },
  {
    value: "宁河县",
    label: "宁河县"
  },
  {
    value: "静海县",
    label: "静海县"
  },
  {
    value: "蓟县",
    label: "蓟县"
  }
  ]
},
{
  value: "上海",
  label: "上海",
  children: [{
    value: "全部",
    label: "全部"
  },
  {
    value: "黄浦区",
    label: "黄浦区"
  },
  {
    value: "卢湾区",
    label: "卢湾区"
  },
  {
    value: "徐汇区",
    label: "徐汇区"
  },
  {
    value: "长宁区",
    label: "长宁区"
  },
  {
    value: "静安区",
    label: "静安区"
  },
  {
    value: "普陀区",
    label: "普陀区"
  },
  {
    value: "闸北区",
    label: "闸北区"
  },
  {
    value: "虹口区",
    label: "虹口区"
  },
  {
    value: "闵行区",
    label: "闵行区"
  },
  {
    value: "宝山区",
    label: "宝山区"
  },
  {
    value: "嘉定区",
    label: "嘉定区"
  },
  {
    value: "浦东新区",
    label: "浦东新区"
  },
  {
    value: "金山区",
    label: "金山区"
  },
  {
    value: "松江区",
    label: "松江区"
  },
  {
    value: "青浦区",
    label: "青浦区"
  },
  {
    value: "奉贤区",
    label: "奉贤区"
  },
  {
    value: "崇明县",
    label: "崇明县"
  },
  {
    value: "杨浦区",
    label: "杨浦区"
  }
  ]
},
{
  value: "重庆",
  label: "重庆",
  children: [{
    value: "全部",
    label: "全部"
  },
  {
    value: "重庆",
    label: "重庆"
  }
  ]
},
{
  value: "河北",
  label: "河北",
  children: [{
    value: "全部",
    label: "全部"
  },
  {
    value: "石家庄",
    label: "石家庄"
  },
  {
    value: "保定",
    label: "保定"
  },
  {
    value: "承德",
    label: "承德"
  },
  {
    value: "沧州",
    label: "沧州"
  },
  {
    value: "衡水",
    label: "衡水"
  },
  {
    value: "邯郸",
    label: "邯郸"
  },
  {
    value: "廊坊",
    label: "廊坊"
  },
  {
    value: "秦皇岛",
    label: "秦皇岛"
  },
  {
    value: "唐山",
    label: "唐山"
  },
  {
    value: "邢台",
    label: "邢台"
  },
  {
    value: "张家口",
    label: "张家口"
  },
  ]
},
{
  value: "山西",
  label: "山西",
  children: [{
    value: "全部",
    label: "全部"
  },
  {
    value: "太原",
    label: "太原"
  },
  {
    value: "长治",
    label: "长治"
  },
  {
    value: "大同",
    label: "大同"
  },
  {
    value: "晋城",
    label: "晋城"
  },
  {
    value: "晋中",
    label: "晋中"
  },
  {
    value: "临汾",
    label: "临汾"
  },
  {
    value: "吕梁",
    label: "吕梁"
  },
  {
    value: "朔州",
    label: "朔州"
  },
  {
    value: "忻州",
    label: "忻州"
  },
  {
    value: "阳泉",
    label: "阳泉"
  },
  {
    value: "运城",
    label: "运城"
  }
  ]
},
{
  value: "辽宁",
  label: "辽宁",
  children: [{
    value: "全部",
    label: "全部"
  },
  {
    value: "沈阳",
    label: "沈阳"
  },
  {
    value: "鞍山",
    label: "鞍山"
  },
  {
    value: "本溪",
    label: "本溪"
  },
  {
    value: "朝阳",
    label: "朝阳"
  },
  {
    value: "大连",
    label: "大连"
  },
  {
    value: "丹东",
    label: "丹东"
  },
  {
    value: "抚顺",
    label: "抚顺"
  },
  {
    value: "阜新",
    label: "阜新"
  },
  {
    value: "葫芦岛",
    label: "葫芦岛"
  },
  {
    value: "锦州",
    label: "锦州"
  },
  {
    value: "辽阳",
    label: "辽阳"
  },
  {
    value: "盘锦",
    label: "盘锦"
  },
  {
    value: "铁岭",
    label: "铁岭"
  },
  {
    value: "营口",
    label: "营口"
  }
  ]
},
{
  value: "吉林",
  label: "吉林",
  children: [{
    value: "全部",
    label: "全部"
  },
  {
    value: "长春",
    label: "长春"
  },
  {
    value: "白山",
    label: "白山"
  },
  {
    value: "白城",
    label: "白城"
  },
  {
    value: "吉林",
    label: "吉林"
  },
  {
    value: "辽源",
    label: "辽源"
  },
  {
    value: "四平",
    label: "四平"
  },
  {
    value: "松原",
    label: "松原"
  },
  {
    value: "通化",
    label: "通化"
  },
  {
    value: "延吉",
    label: "延吉"
  }
  ]
},
{
  value: "黑龙江",
  label: "黑龙江",
  children: [{
    value: "全部",
    label: "全部"
  },
  {
    value: "哈尔滨",
    label: "哈尔滨"
  },
  {
    value: "大庆",
    label: "大庆"
  },
  {
    value: "大兴安岭",
    label: "大兴安岭"
  },
  {
    value: "鹤岗",
    label: "鹤岗"
  },
  {
    value: "黑河",
    label: "黑河"
  },
  {
    value: "佳木斯",
    label: "佳木斯"
  },
  {
    value: "鸡西",
    label: "鸡西"
  },
  {
    value: "牡丹江",
    label: "牡丹江"
  },
  {
    value: "齐齐哈尔",
    label: "齐齐哈尔"
  },
  {
    value: "七台河",
    label: "七台河"
  },
  {
    value: "双鸭山",
    label: "双鸭山"
  },
  {
    value: "绥化",
    label: "绥化"
  },
  {
    value: "伊春",
    label: "伊春"
  }
  ]
},
{
  value: "江苏",
  label: "江苏",
  children: [{
    value: "全部",
    label: "全部"
  },
  {
    value: "南京",
    label: "南京"
  },
  {
    value: "常州",
    label: "常州"
  },
  {
    value: "淮安",
    label: "淮安"
  },
  {
    value: "连云港",
    label: "连云港"
  },
  {
    value: "南通",
    label: "南通"
  },
  {
    value: "苏州",
    label: "苏州"
  },
  {
    value: "宿迁",
    label: "宿迁"
  },
  {
    value: "秦州",
    label: "秦州"
  },
  {
    value: "无锡",
    label: "无锡"
  },
  {
    value: "徐州",
    label: "徐州"
  },
  {
    value: "盐城",
    label: "盐城"
  },
  {
    value: "扬州",
    label: "扬州"
  },
  {
    value: "镇江",
    label: "镇江"
  }
  ]
},
{
  value: "浙江",
  label: "浙江",
  children: [{
    value: "全部",
    label: "全部"
  },
  {
    value: "杭州",
    label: "杭州"
  }, {
    value: "湖州",
    label: "湖州"
  }, {
    value: "嘉兴",
    label: "嘉兴"
  }, {
    value: "金华",
    label: "金华"
  }, {
    value: "丽水",
    label: "丽水"
  }, {
    value: "宁波",
    label: "宁波"
  }, {
    value: "衢州",
    label: "衢州"
  }, {
    value: "绍兴",
    label: "绍兴"
  }, {
    value: "台州",
    label: "台州"
  }, {
    value: "温州",
    label: "温州"
  }, {
    value: "舟山",
    label: "舟山"
  }
  ]
},
{
  value: "安徽",
  label: "安徽",
  children: [{
    value: "全部",
    label: "全部"
  },
  {
    value: "合肥",
    label: "合肥"
  }, {
    value: "安庆",
    label: "安庆"
  }, {
    value: "毫州",
    label: "毫州"
  }, {
    value: "蚌埠",
    label: "蚌埠"
  }, {
    value: "滁州",
    label: "滁州"
  }, {
    value: "巢湖",
    label: "巢湖"
  }, {
    value: "池州",
    label: "池州"
  }, {
    value: "阜阳",
    label: "阜阳"
  }, {
    value: "淮北",
    label: "淮北"
  }, {
    value: "淮南",
    label: "淮南"
  }, {
    value: "黄山站",
    label: "黄山站"
  }, {
    value: "六安",
    label: "六安"
  }, {
    value: "马鞍山",
    label: "马鞍山"
  }, {
    value: "宿州",
    label: "宿州"
  }, {
    value: "铜陵",
    label: "铜陵"
  }, {
    value: "芜湖",
    label: "芜湖"
  }, {
    value: "宣城",
    label: "宣城"
  }
  ]
},
{
  value: "福建",
  label: "福建",
  children: [{
    value: "全部",
    label: "全部"
  },
  {
    value: "福州",
    label: "福州"
  }, {
    value: "龙岩",
    label: "龙岩"
  }, {
    value: "南平",
    label: "南平"
  }, {
    value: "宁德",
    label: "宁德"
  }, {
    value: "莆田",
    label: "莆田"
  }, {
    value: "泉州",
    label: "泉州"
  }, {
    value: "三明",
    label: "三明"
  }, {
    value: "厦门",
    label: "厦门"
  }, {
    value: "漳州",
    label: "漳州"
  }
  ]
},
{
  value: "江西",
  label: "江西",
  children: [{
    value: "全部",
    label: "全部"
  },
  {
    value: "南昌",
    label: "南昌"
  }, {
    value: "抚州",
    label: "抚州"
  }, {
    value: "赣州",
    label: "赣州"
  }, {
    value: "九江",
    label: "九江"
  }, {
    value: "景德镇",
    label: "景德镇"
  }, {
    value: "吉安",
    label: "吉安"
  }, {
    value: "萍乡",
    label: "萍乡"
  }, {
    value: "上饶",
    label: "上饶"
  }, {
    value: "新余",
    label: "新余"
  }, {
    value: "鹰潭",
    label: "鹰潭"
  }, {
    value: "宜春",
    label: "宜春"
  }
  ]
},
{
  value: "山东",
  label: "山东",
  children: [{
    value: "全部",
    label: "全部"
  },
  {
    value: "济南",
    label: "济南"
  }, {
    value: "滨州",
    label: "滨州"
  }, {
    value: "东营",
    label: "东营"
  }, {
    value: "德州",
    label: "德州"
  }, {
    value: "菏泽",
    label: "菏泽"
  }, {
    value: "济宁",
    label: "济宁"
  }, {
    value: "莱芜",
    label: "莱芜"
  }, {
    value: "临沂",
    label: "临沂"
  }, {
    value: "聊城",
    label: "聊城"
  }, {
    value: "青岛",
    label: "青岛"
  }, {
    value: "日照",
    label: "日照"
  }, {
    value: "泰安",
    label: "泰安"
  }, {
    value: "潍坊",
    label: "潍坊"
  }, {
    value: "威海",
    label: "威海"
  }, {
    value: "烟台",
    label: "烟台"
  }, {
    value: "淄博",
    label: "淄博"
  }, {
    value: "枣庄",
    label: "枣庄"
  }
  ]
},
{
  value: "河南",
  label: "河南",
  children: [{
    value: "全部",
    label: "全部"
  },
  {
    value: "郑州",
    label: "郑州"
  }, {
    value: "安阳",
    label: "安阳"
  }, {
    value: "鹤壁",
    label: "鹤壁"
  }, {
    value: "焦作",
    label: "焦作"
  }, {
    value: "济源",
    label: "济源"
  }, {
    value: "开封",
    label: "开封"
  }, {
    value: "洛阳",
    label: "洛阳"
  }, {
    value: "漯河",
    label: "漯河"
  }, {
    value: "南阳",
    label: "南阳"
  }, {
    value: "濮阳",
    label: "濮阳"
  }, {
    value: "平顶山",
    label: "平顶山"
  }, {
    value: "三门峡",
    label: "三门峡"
  }, {
    value: "商丘",
    label: "商丘"
  }, {
    value: "新乡",
    label: "新乡"
  }, {
    value: "许昌",
    label: "许昌"
  }, {
    value: "信阳",
    label: "信阳"
  }, {
    value: "周口",
    label: "周口"
  }, {
    value: "驻马店",
    label: "驻马店"
  }
  ]
},
{
  value: "湖北",
  label: "湖北",
  children: [{
    value: "全部",
    label: "全部"
  },
  {
    value: "武汉",
    label: "武汉"
  }, {
    value: "鄂州",
    label: "鄂州"
  }, {
    value: "恩施",
    label: "恩施"
  }, {
    value: "黄石",
    label: "黄石"
  }, {
    value: "黄冈",
    label: "黄冈"
  }, {
    value: "荆州",
    label: "荆州"
  }, {
    value: "荆门",
    label: "荆门"
  }, {
    value: "潜江",
    label: "潜江"
  }, {
    value: "十堰",
    label: "十堰"
  }, {
    value: "随州",
    label: "随州"
  }, {
    value: "神农架",
    label: "神农架"
  }, {
    value: "天门",
    label: "天门"
  }, {
    value: "襄阳",
    label: "襄阳"
  }, {
    value: "孝感",
    label: "孝感"
  }, {
    value: "咸宁",
    label: "咸宁"
  }, {
    value: "仙桃",
    label: "仙桃"
  }, {
    value: "宜昌",
    label: "宜昌"
  }
  ]
},
{
  value: "湖南",
  label: "湖南",
  children: [{
    value: "全部",
    label: "全部"
  },
  {
    value: "长沙",
    label: "长沙"
  }, {
    value: "常德",
    label: "常德"
  }, {
    value: "郴州",
    label: "郴州"
  }, {
    value: "衡阳",
    label: "衡阳"
  }, {
    value: "怀化",
    label: "怀化"
  }, {
    value: "吉首",
    label: "吉首"
  }, {
    value: "娄底",
    label: "娄底"
  }, {
    value: "黔阳",
    label: "黔阳"
  }, {
    value: "邵阳",
    label: "邵阳"
  }, {
    value: "湘潭",
    label: "湘潭"
  }, {
    value: "岳阳",
    label: "岳阳"
  }, {
    value: "益阳",
    label: "益阳"
  }, {
    value: "永州",
    label: "永州"
  }, {
    value: "株洲",
    label: "株洲"
  }, {
    value: "张家界",
    label: "张家界"
  }
  ]
},
{
  value: "广东",
  label: "广东",
  children: [{
    value: "全部",
    label: "全部"
  },
  {
    value: "广州",
    label: "广州"
  }, {
    value: "潮州",
    label: "潮州"
  }, {
    value: "东莞",
    label: "东莞"
  }, {
    value: "佛山",
    label: "佛山"
  }, {
    value: "河源",
    label: "河源"
  }, {
    value: "惠州",
    label: "惠州"
  }, {
    value: "江门",
    label: "江门"
  }, {
    value: "揭阳",
    label: "揭阳"
  }, {
    value: "梅州",
    label: "梅州"
  }, {
    value: "茂名",
    label: "茂名"
  }, {
    value: "清远",
    label: "清远"
  }, {
    value: "深圳",
    label: "深圳"
  }, {
    value: "汕头",
    label: "汕头"
  }, {
    value: "韶关",
    label: "韶关"
  }, {
    value: "汕尾",
    label: "汕尾"
  }, {
    value: "阳江",
    label: "阳江"
  }, {
    value: "云浮",
    label: "云浮"
  }, {
    value: "珠海",
    label: "珠海"
  }, {
    value: "中山",
    label: "中山"
  }, {
    value: "湛江",
    label: "湛江"
  }, {
    value: "肇庆",
    label: "肇庆"
  }
  ]
},
{
  value: "甘肃",
  label: "甘肃",
  children: [{
    value: "全部",
    label: "全部"
  },
  {
    value: "兰州",
    label: "兰州"
  }, {
    value: "白银",
    label: "白银"
  }, {
    value: "定西",
    label: "定西"
  }, {
    value: "合作",
    label: "合作"
  }, {
    value: "金昌",
    label: "金昌"
  }, {
    value: "酒泉",
    label: "酒泉"
  }, {
    value: "嘉峪关",
    label: "嘉峪关"
  }, {
    value: "临夏",
    label: "临夏"
  }, {
    value: "平凉",
    label: "平凉"
  }, {
    value: "庆阳",
    label: "庆阳"
  }, {
    value: "天水",
    label: "天水"
  }, {
    value: "武威",
    label: "武威"
  }, {
    value: "武都",
    label: "武都"
  }, {
    value: "张掖",
    label: "张掖"
  }
  ]
},
{
  value: "四川",
  label: "四川",
  children: [{
    value: "全部",
    label: "全部"
  },
  {
    value: "成都",
    label: "成都"
  }, {
    value: "阿贝",
    label: "阿贝"
  }, {
    value: "巴中",
    label: "巴中"
  }, {
    value: "德阳",
    label: "德阳"
  }, {
    value: "达州",
    label: "达州"
  }, {
    value: "广元",
    label: "广元"
  }, {
    value: "广安",
    label: "广安"
  }, {
    value: "甘孜",
    label: "甘孜"
  }, {
    value: "泸州",
    label: "泸州"
  }, {
    value: "乐山",
    label: "乐山"
  }, {
    value: "凉山",
    label: "凉山"
  }, {
    value: "绵阳",
    label: "绵阳"
  }, {
    value: "眉山",
    label: "眉山"
  }, {
    value: "内江",
    label: "内江"
  }, {
    value: "南充",
    label: "南充"
  }, {
    value: "攀枝花",
    label: "攀枝花"
  }, {
    value: "遂宁",
    label: "遂宁"
  }, {
    value: "宜宾",
    label: "宜宾"
  }, {
    value: "雅安",
    label: "雅安"
  }, {
    value: "自贡",
    label: "自贡"
  }, {
    value: "资阳",
    label: "资阳"
  }
  ]
},
{
  value: "贵州",
  label: "贵州",
  children: [{
    value: "全部",
    label: "全部"
  },
  {
    value: "贵阳",
    label: "贵阳"
  }, {
    value: "安顺",
    label: "安顺"
  }, {
    value: "毕节",
    label: "毕节"
  }, {
    value: "都匀",
    label: "都匀"
  }, {
    value: "凯里",
    label: "凯里"
  }, {
    value: "六盘水",
    label: "六盘水"
  }, {
    value: "晴隆",
    label: "晴隆"
  }, {
    value: "铜仁",
    label: "铜仁"
  }, {
    value: "兴义",
    label: "兴义"
  }, {
    value: "遵义",
    label: "遵义"
  }
  ]
},
{
  value: "海南",
  label: "海南",
  children: [{
    value: "全部",
    label: "全部"
  },
  {
    value: "海口",
    label: "海口"
  }, {
    value: "白沙",
    label: "白沙"
  }, {
    value: "保亭",
    label: "保亭"
  }, {
    value: "澄迈",
    label: "澄迈"
  }, {
    value: "昌江",
    label: "昌江"
  }, {
    value: "儋州",
    label: "儋州"
  }, {
    value: "定安",
    label: "定安"
  }, {
    value: "东方",
    label: "东方"
  }, {
    value: "临高",
    label: "临高"
  }, {
    value: "陵水",
    label: "陵水"
  }, {
    value: "乐东",
    label: "乐东"
  }, {
    value: "南沙岛",
    label: "南沙岛"
  }, {
    value: "琼海",
    label: "琼海"
  }, {
    value: "琼中",
    label: "琼中"
  }, {
    value: "三亚",
    label: "三亚"
  }, {
    value: "屯昌",
    label: "屯昌"
  }, {
    value: "五指山",
    label: "五指山"
  }, {
    value: "文昌",
    label: "文昌"
  }, {
    value: "万宁",
    label: "万宁"
  }, {
    value: "西沙",
    label: "西沙"
  }
  ]
},
{
  value: "云南",
  label: "云南",
  children: [{
    value: "全部",
    label: "全部"
  },
  {
    value: "昆明",
    label: "昆明"
  }, {
    value: "保山",
    label: "保山"
  }, {
    value: "楚雄",
    label: "楚雄"
  }, {
    value: "大理",
    label: "大理"
  }, {
    value: "德宏",
    label: "德宏"
  }, {
    value: "红河",
    label: "红河"
  }, {
    value: "景洪",
    label: "景洪"
  }, {
    value: "丽江",
    label: "丽江"
  }, {
    value: "临沧",
    label: "临沧"
  }, {
    value: "怒江",
    label: "怒江"
  }, {
    value: "曲靖",
    label: "曲靖"
  }, {
    value: "思茅",
    label: "思茅"
  }, {
    value: "文山",
    label: "文山"
  }, {
    value: "香格里拉",
    label: "香格里拉"
  }, {
    value: "玉溪",
    label: "玉溪"
  }, {
    value: "昭通",
    label: "昭通"
  }
  ]
},
{
  value: "青海",
  label: "青海",
  children: [{
    value: "全部",
    label: "全部"
  },
  {
    value: "西宁",
    label: "西宁"
  }, {
    value: "果洛",
    label: "果洛"
  }, {
    value: "海东",
    label: "海东"
  }, {
    value: "海南",
    label: "海南"
  }, {
    value: "海北",
    label: "海北"
  }, {
    value: "海西",
    label: "海西"
  }, {
    value: "黄南",
    label: "黄南"
  }, {
    value: "玉树",
    label: "玉树"
  }
  ]
},
{
  value: "陕西",
  label: "陕西",
  children: [{
    value: "全部",
    label: "全部"
  },
  {
    value: "西安",
    label: "西安"
  }, {
    value: "宝康",
    label: "宝康"
  }, {
    value: "宝鸡",
    label: "宝鸡"
  }, {
    value: "陈仓",
    label: "陈仓"
  }, {
    value: "汉中",
    label: "汉中"
  }, {
    value: "商洛",
    label: "商洛"
  }, {
    value: "铜川",
    label: "铜川"
  }, {
    value: "渭南",
    label: "渭南"
  }, {
    value: "咸阳",
    label: "咸阳"
  }, {
    value: "延安",
    label: "延安"
  }, {
    value: "榆林",
    label: "榆林"
  }
  ]
},
{
  value: "广西壮族自治区",
  label: "广西壮族自治区",
  children: [{
    value: "全部",
    label: "全部"
  },
  {
    value: "南宁",
    label: "南宁"
  }, {
    value: "北海",
    label: "北海"
  }, {
    value: "白色",
    label: "白色"
  }, {
    value: "崇左",
    label: "崇左"
  }, {
    value: "防城港",
    label: "防城港"
  }, {
    value: "桂林",
    label: "桂林"
  }, {
    value: "贵港",
    label: "贵港"
  }, {
    value: "贺州",
    label: "贺州"
  }, {
    value: "河池",
    label: "河池"
  }, {
    value: "柳州",
    label: "柳州"
  }, {
    value: "来宾",
    label: "来宾"
  }, {
    value: "钦州",
    label: "钦州"
  }, {
    value: "梧州",
    label: "梧州"
  }, {
    value: "玉林",
    label: "玉林"
  }
  ]
},
{
  value: "西藏自治区",
  label: "西藏自治区",
  children: [{
    value: "全部",
    label: "全部"
  },
  {
    value: "拉萨",
    label: "拉萨"
  }, {
    value: "阿里",
    label: "阿里"
  }, {
    value: "昌都",
    label: "昌都"
  }, {
    value: "林芝",
    label: "林芝"
  }, {
    value: "那曲",
    label: "那曲"
  }, {
    value: "日喀则",
    label: "日喀则"
  }, {
    value: "山南",
    label: "山南"
  }
  ]
},
{
  value: "宁夏回族自治区",
  label: "宁夏回族自治区",
  children: [{
    value: "全部",
    label: "全部"
  },
  {
    value: "银川",
    label: "银川"
  }, {
    value: "固原",
    label: "固原"
  }, {
    value: "石嘴山",
    label: "石嘴山"
  }, {
    value: "吴忠",
    label: "吴忠"
  }, {
    value: "中卫",
    label: "中卫"
  }
  ]
},
{
  value: "新疆维吾尔自治区",
  label: "新疆维吾尔自治区",
  children: [{
    value: "全部",
    label: "全部"
  },
  {
    value: "乌鲁木齐",
    label: "乌鲁木齐"
  }, {
    value: "阿克苏",
    label: "阿克苏"
  }, {
    value: "阿图什",
    label: "阿图什"
  }, {
    value: "阿勒泰",
    label: "阿勒泰"
  }, {
    value: "阿拉尔",
    label: "阿拉尔"
  }, {
    value: "博乐",
    label: "博乐"
  }, {
    value: "昌吉",
    label: "昌吉"
  }, {
    value: "哈密",
    label: "哈密"
  }, {
    value: "和田",
    label: "和田"
  }, {
    value: "克拉玛依",
    label: "克拉玛依"
  }, {
    value: "喀什",
    label: "喀什"
  }, {
    value: "库尔勒",
    label: "库尔勒"
  }, {
    value: "石河子",
    label: "石河子"
  }, {
    value: "吐鲁番",
    label: "吐鲁番"
  }, {
    value: "塔城",
    label: "塔城"
  }, {
    value: "伊宁",
    label: "伊宁"
  }
  ]
},
{
  value: "内蒙古自治区",
  label: "内蒙古自治区",
  children: [{
    value: "全部",
    label: "全部"
  },
  {
    value: "呼和浩特",
    label: "呼和浩特"
  },
  {
    value: "阿拉善左旗",
    label: "阿拉善左旗"
  },
  {
    value: "包头",
    label: "包头"
  },
  {
    value: "赤峰",
    label: "赤峰"
  },
  {
    value: "鄂尔多斯",
    label: "鄂尔多斯"
  },
  {
    value: "呼伦贝尔",
    label: "呼伦贝尔"
  },
  {
    value: "集宁",
    label: "集宁"
  },
  {
    value: "临河",
    label: "临河"
  },
  {
    value: "通辽",
    label: "通辽"
  },
  {
    value: "乌兰浩特",
    label: "乌兰浩特"
  },
  {
    value: "乌海",
    label: "乌海"
  },
  {
    value: "锡林浩特",
    label: "锡林浩特"
  }
  ]
},
{
  value: "澳门特别行政区",
  label: "澳门特别行政区",
  children: [{
    value: "全部",
    label: "全部"
  },
  {
    value: "澳门",
    label: "澳门"
  }
  ]
},
{
  value: "香港特别行政区",
  label: "香港特别行政区",
  children: [{
    value: "全部",
    label: "全部"
  },
  {
    value: '香港',
    label: "香港"
  }
  ]
},
{
  value: "台湾",
  label: "台湾",
  children: [{
    value: "全部",
    label: "全部"
  },
  {
    value: "台湾",
    label: "台湾"
  }
  ]
}
]

export default {
  data: data
}
