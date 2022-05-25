const checkPhone = (rule, value, callback) => {
  console.log(value)
  const phoneReg = /^((13|14|15|16|17|18|19)[0-9]{1}\d{8})$/
  if (!value) 
    return callback(new Error("电话号码不能为空"))

  setTimeout(() => {
    if (!Number.isInteger(+value) || !phoneReg.test(value)) 
      callback(new Error("请输入正确的手机号!"))

    callback()
  }, 400)
}
const rule1 = {require: true, message: '请输入！', trigger: 'blur'}
const rule2 = {max: 32, message: '超出长度！', trigger: 'blur'}
export const rules = {
  driver:             [rule1, rule2],
  contact:            [{...rule1, validator: checkPhone}, rule2],
  vehicle:            [rule1, rule2],
  loadTime:           [rule1, rule2],
  departure:          [rule1, rule2],
  departureDatetime:  [rule1, rule2],
  destination:        [rule1, rule2],
  description:        [rule1],
  productQRCode:      [rule1],
  productName:        [rule1, rule2],
  originPlace:        [rule1, rule2],
  specification:      [rule1, rule2],
}

export const ruleForm = {
  // 车辆信息
  driver: Math.random().toFixed(3)+"范振南",
  contact: "18824143496",
  vehicle: "粤V5655",
  // 物流信息
  departure: "广东湛江",
  destination: "广东广州",
  departureDatetime: null,
  loadTime: null,
  description: "物流信息描述内容",
  // 产品信息
  productQRCode: '',
  productName: "生蚝",
  originPlace: "湛江",
  specification: "特等品",
}

export const address = [
  {
    "value": "广东","label": "广东",
    "children": [
      { "value": "广州","label": "广州", },
      { "value": "深圳","label": "深圳", },
      { "value": "东莞","label": "东莞", },
      { "value": "中山","label": "中山", },
      { "value": "潮州","label": "潮州", },
      { "value": "揭阳","label": "揭阳", },
      { "value": "云浮","label": "云浮", },
      { "value": "珠海","label": "珠海", },
      { "value": "汕头","label": "汕头", },
      { "value": "韶关","label": "韶关", },
      { "value": "佛山","label": "佛山", },
      { "value": "江门","label": "江门", },
      { "value": "湛江","label": "湛江", },
      { "value": "茂名","label": "茂名", },
      { "value": "肇庆","label": "肇庆", },
      { "value": "惠州","label": "惠州", },
      { "value": "梅州","label": "梅州", },
      { "value": "汕尾","label": "汕尾", },
      { "value": "河源","label": "河源", },
      { "value": "阳江","label": "阳江", },
      { "value": "清远","label": "清远", }
    ]
  },
  {
    "value": "北京","label": "北京",
    "children": [
      { "value": "东城区","label": "东城区" },
      { "value": "西城区","label": "西城区" },
      { "value": "崇文区","label": "崇文区" },
      { "value": "宣武区","label": "宣武区" },
      { "value": "朝阳区","label": "朝阳区" },
      { "value": "丰台区","label": "丰台区" },
      { "value": "石景山区","label": "石景山区" },
      { "value": "海淀区","label": "海淀区" },
      { "value": "门头沟区","label": "门头沟区" },
      { "value": "房山区","label": "房山区" },
      { "value": "通州区","label": "通州区" },
      { "value": "顺义区","label": "顺义区" },
      { "value": "昌平区","label": "昌平区" },
      { "value": "大兴区","label": "大兴区" },
      { "value": "平谷区","label": "平谷区" },
      { "value": "怀柔区","label": "怀柔区" },
      { "value": "密云县","label": "密云县" },
      { "value": "延庆县","label": "延庆县" },
    ]
  },
  {
    "value": "天津","label": "天津",
    "children": [
      { "value": "和平区","label": "和平区" },
      { "value": "河东区","label": "河东区" },
      { "value": "河西区","label": "河西区" },
      { "value": "南开区","label": "南开区" },
      { "value": "河北区","label": "河北区" },
      { "value": "红桥区","label": "红桥区" },
      { "value": "塘沽区","label": "塘沽区" },
      { "value": "汉沽区","label": "汉沽区" },
      { "value": "大港区","label": "大港区" },
      { "value": "东丽区","label": "东丽区" },
      { "value": "西青区","label": "西青区" },
      { "value": "津南区","label": "津南区" },
      { "value": "北辰区","label": "北辰区" },
      { "value": "武清区","label": "武清区" },
      { "value": "宝坻区","label": "宝坻区" },
      { "value": "宁河县","label": "宁河县" },
      { "value": "静海县","label": "静海县" },
      { "value": "蓟县","label": "蓟县" },
    ]
  },
  {
    "value": "河北","label": "河北",
    "children": [
      { "value": "石家庄","label": "石家庄", },
      { "value": "唐山","label": "唐山", },
      { "value": "秦皇岛","label": "秦皇岛", },
      { "value": "邯郸","label": "邯郸", },
      { "value": "邢台","label": "邢台", },
      { "value": "保定","label": "保定", },
      { "value": "张家口","label": "张家口", },
      { "value": "承德","label": "承德", },
      { "value": "沧州","label": "沧州", },
      { "value": "廊坊","label": "廊坊", },
      { "value": "衡水","label": "衡水", }
    ]
  },
  {
    "value": "山西","label": "山西",
    "children": [
      { "value": "太原","label": "太原", },
      { "value": "大同","label": "大同", },
      { "value": "阳泉","label": "阳泉", },
      { "value": "长治","label": "长治", },
      { "value": "晋城","label": "晋城", },
      { "value": "朔州","label": "朔州", },
      { "value": "忻州","label": "忻州", },
      { "value": "吕梁","label": "吕梁", },
      { "value": "晋中","label": "晋中", },
      { "value": "临汾","label": "临汾", },
      { "value": "运城","label": "运城", }
    ]
  },
  {
    "value": "内蒙古","label": "内蒙古",
    "children": [
      { "value": "呼和浩特","label": "呼和浩特", },
      { "value": "包头","label": "包头", },
      { "value": "乌海","label": "乌海", },
      { "value": "赤峰","label": "赤峰", },
      { "value": "呼伦贝尔","label": "呼伦贝尔", },
      { "value": "兴安盟","label": "兴安盟", },
      { "value": "通辽","label": "通辽", },
      { "value": "锡林郭勒盟","label": "锡林郭勒盟", },
      { "value": "乌兰察布盟","label": "乌兰察布盟", },
      { "value": "伊克昭盟","label": "伊克昭盟", },
      { "value": "巴彦淖尔盟","label": "巴彦淖尔盟", },
      { "value": "阿拉善盟","label": "阿拉善盟", }
    ]
  },
  {
    "value": "辽宁","label": "辽宁",
    "children": [
      { "value": "沈阳","label": "沈阳", },
      { "value": "大连","label": "大连", },
      { "value": "鞍山","label": "鞍山", },
      { "value": "抚顺","label": "抚顺", },
      { "value": "本溪","label": "本溪", },
      { "value": "丹东","label": "丹东", },
      { "value": "锦州","label": "锦州", },
      { "value": "营口","label": "营口", },
      { "value": "阜新","label": "阜新", },
      { "value": "辽阳","label": "辽阳", },
      { "value": "盘锦","label": "盘锦", },
      { "value": "铁岭","label": "铁岭", },
      { "value": "朝阳","label": "朝阳", },
      { "value": "葫芦岛","label": "葫芦岛", },
      { "value": "其他","label": "其他", }
    ]
  },
  {
    "value": "吉林","label": "吉林",
    "children": [
      { "value": "长春","label": "长春", },
      { "value": "吉林","label": "吉林", },
      { "value": "四平","label": "四平", },
      { "value": "辽源","label": "辽源", },
      { "value": "通化","label": "通化", },
      { "value": "白山","label": "白山", },
      { "value": "松原","label": "松原", },
      { "value": "白城","label": "白城", },
      { "value": "延边朝鲜族自治州","label": "延边朝鲜族自治州", },
      { "value": "其他","label": "其他", }
    ]
  },
  {
    "value": "黑龙江","label": "黑龙江",
    "children": [
      { "value": "哈尔滨","label": "哈尔滨", },
      { "value": "齐齐哈尔","label": "齐齐哈尔", },
      { "value": "鹤岗","label": "鹤岗", },
      { "value": "双鸭山","label": "双鸭山", },
      { "value": "鸡西","label": "鸡西", },
      { "value": "大庆","label": "大庆", },
      { "value": "伊春","label": "伊春", },
      { "value": "牡丹江","label": "牡丹江", },
      { "value": "佳木斯","label": "佳木斯", },
      { "value": "七台河","label": "七台河", },
      { "value": "黑河","label": "黑河", },
      { "value": "绥化","label": "绥化", },
      { "value": "大兴安岭地区","label": "大兴安岭地区", },
      { "value": "其他","label": "其他", }
    ]
  },
  {
    "value": "上海","label": "上海",
    "children": [
      { "value": "黄浦区","label": "黄浦区" },
      { "value": "卢湾区","label": "卢湾区" },
      { "value": "徐汇区","label": "徐汇区" },
      { "value": "长宁区","label": "长宁区" },
      { "value": "静安区","label": "静安区" },
      { "value": "普陀区","label": "普陀区" },
      { "value": "闸北区","label": "闸北区" },
      { "value": "虹口区","label": "虹口区" },
      { "value": "杨浦区","label": "杨浦区" },
      { "value": "宝山区","label": "宝山区" },
      { "value": "闵行区","label": "闵行区" },
      { "value": "嘉定区","label": "嘉定区" },
      { "value": "松江区","label": "松江区" },
      { "value": "金山区","label": "金山区" },
      { "value": "青浦区","label": "青浦区" },
      { "value": "南汇区","label": "南汇区" },
      { "value": "奉贤区","label": "奉贤区" },
      { "value": "浦东新区","label": "浦东新区" },
      { "value": "崇明县","label": "崇明县" },
      { "value": "其他","label": "其他" }
    ]
  },
  {
    "value": "江苏","label": "江苏",
    "children": [
      { "value": "南京","label": "南京", },
      { "value": "苏州","label": "苏州", },
      { "value": "无锡","label": "无锡", },
      { "value": "常州","label": "常州", },
      { "value": "镇江","label": "镇江", },
      { "value": "南通","label": "南通", },
      { "value": "泰州","label": "泰州", },
      { "value": "扬州","label": "扬州", },
      { "value": "盐城","label": "盐城", },
      { "value": "连云港","label": "连云港", },
      { "value": "徐州","label": "徐州", },
      { "value": "淮安","label": "淮安", },
      { "value": "宿迁","label": "宿迁", },
      { "value": "其他","label": "其他", }
    ]
  },
  {
    "value": "浙江","label": "浙江",
    "children": [
      { "value": "杭州","label": "杭州", },
      { "value": "宁波","label": "宁波", },
      { "value": "温州","label": "温州", },
      { "value": "嘉兴","label": "嘉兴", },
      { "value": "湖州","label": "湖州", },
      { "value": "绍兴","label": "绍兴", },
      { "value": "金华","label": "金华", },
      { "value": "衢州","label": "衢州", },
      { "value": "舟山","label": "舟山", },
      { "value": "台州","label": "台州", },
      { "value": "丽水","label": "丽水", },
      { "value": "其他","label": "其他", }
    ]
  },
  {
    "value": "安徽","label": "安徽",
    "children": [
      { "value": "合肥","label": "合肥", },
      { "value": "芜湖","label": "芜湖", },
      { "value": "蚌埠","label": "蚌埠", },
      { "value": "淮南","label": "淮南", },
      { "value": "马鞍山","label": "马鞍山", },
      { "value": "淮北","label": "淮北", },
      { "value": "铜陵","label": "铜陵", },
      { "value": "安庆","label": "安庆", },
      { "value": "黄山","label": "黄山", },
      { "value": "滁州","label": "滁州", },
      { "value": "阜阳","label": "阜阳", },
      { "value": "宿州","label": "宿州", },
      { "value": "巢湖","label": "巢湖", },
      { "value": "六安","label": "六安", },
      { "value": "亳州","label": "亳州", },
      { "value": "池州","label": "池州", },
      { "value": "宣城","label": "宣城", },
      { "value": "其他","label": "其他", }
    ]
  },
  {
    "value": "福建","label": "福建",
    "children": [
      { "value": "福州","label": "福州", },
      { "value": "厦门","label": "厦门", },
      { "value": "莆田","label": "莆田", },
      { "value": "三明","label": "三明", },
      { "value": "泉州","label": "泉州", },
      { "value": "漳州","label": "漳州", },
      { "value": "南平","label": "南平", },
      { "value": "龙岩","label": "龙岩", },
      { "value": "宁德","label": "宁德", },
      { "value": "其他","label": "其他", }
    ]
  },
  {
    "value": "江西","label": "江西",
    "children": [
      { "value": "南昌","label": "南昌", },
      { "value": "景德镇","label": "景德镇", },
      { "value": "萍乡","label": "萍乡", },
      { "value": "九江","label": "九江", },
      { "value": "新余","label": "新余", },
      { "value": "鹰潭","label": "鹰潭", },
      { "value": "赣州","label": "赣州", },
      { "value": "吉安","label": "吉安", },
      { "value": "宜春","label": "宜春", },
      { "value": "抚州","label": "抚州", },
      { "value": "上饶","label": "上饶", },
      { "value": "其他","label": "其他", }
    ]
  },
  {
    "value": "山东","label": "山东",
    "children": [
      { "value": "济南","label": "济南", },
      { "value": "青岛","label": "青岛", },
      { "value": "淄博","label": "淄博", },
      { "value": "枣庄","label": "枣庄", },
      { "value": "东营","label": "东营", },
      { "value": "烟台","label": "烟台", },
      { "value": "潍坊","label": "潍坊", },
      { "value": "济宁","label": "济宁", },
      { "value": "泰安","label": "泰安", },
      { "value": "威海","label": "威海", },
      { "value": "日照","label": "日照", },
      { "value": "莱芜","label": "莱芜", },
      { "value": "临沂","label": "临沂", },
      { "value": "德州","label": "德州", },
      { "value": "聊城","label": "聊城", },
      { "value": "滨州","label": "滨州", },
      { "value": "菏泽","label": "菏泽", },
      { "value": "其他","label": "其他", }
    ]
  },
  {
    "value": "河南","label": "河南",
    "children": [
      { "value": "郑州","label": "郑州", },
      { "value": "开封","label": "开封", },
      { "value": "洛阳","label": "洛阳", },
      { "value": "平顶山","label": "平顶山", },
      { "value": "安阳","label": "安阳", },
      { "value": "鹤壁","label": "鹤壁", },
      { "value": "新乡","label": "新乡", },
      { "value": "焦作","label": "焦作", },
      { "value": "濮阳","label": "濮阳", },
      { "value": "许昌","label": "许昌", },
      { "value": "漯河","label": "漯河", },
      { "value": "三门峡","label": "三门峡", },
      { "value": "南阳","label": "南阳", },
      { "value": "商丘","label": "商丘", },
      { "value": "信阳","label": "信阳", },
      { "value": "周口","label": "周口", },
      { "value": "驻马店","label": "驻马店", },
      { "value": "焦作","label": "焦作", },
      { "value": "其他","label": "其他", }
    ]
  },
  {
    "value": "湖北","label": "湖北",
    "children": [
      { "value": "武汉","label": "武汉", },
      { "value": "黄石","label": "黄石", },
      { "value": "十堰","label": "十堰", },
      { "value": "荆州","label": "荆州", },
      { "value": "宜昌","label": "宜昌", },
      { "value": "襄樊","label": "襄樊", },
      { "value": "鄂州","label": "鄂州", },
      { "value": "荆门","label": "荆门", },
      { "value": "孝感","label": "孝感", },
      { "value": "黄冈","label": "黄冈", },
      { "value": "咸宁","label": "咸宁", },
      { "value": "随州","label": "随州", },
      { "value": "恩施土家族苗族自治州","label": "恩施土家族苗族自治州", },
      { "value": "仙桃","label": "仙桃", },
      { "value": "天门","label": "天门", },
      { "value": "潜江","label": "潜江", },
      { "value": "神农架林区","label": "神农架林区", },
      { "value": "其他","label": "其他", }
    ]
  },
  {
    "value": "湖南","label": "湖南",
    "children": [
      { "value": "长沙","label": "长沙", },
      { "value": "株洲","label": "株洲", },
      { "value": "湘潭","label": "湘潭", },
      { "value": "衡阳","label": "衡阳", },
      { "value": "邵阳","label": "邵阳", },
      { "value": "岳阳","label": "岳阳", },
      { "value": "常德","label": "常德", },
      { "value": "张家界","label": "张家界", },
      { "value": "益阳","label": "益阳", },
      { "value": "郴州","label": "郴州", },
      { "value": "永州","label": "永州", },
      { "value": "怀化","label": "怀化", },
      { "value": "娄底","label": "娄底", },
      { "value": "湘西土家族苗族自治州","label": "湘西土家族苗族自治州", },
      { "value": "其他","label": "其他", }
    ]
  },
  {
    "value": "广西","label": "广西",
    "children": [
      { "value": "南宁","label": "南宁", },
      { "value": "柳州","label": "柳州", },
      { "value": "桂林","label": "桂林", },
      { "value": "梧州","label": "梧州", },
      { "value": "北海","label": "北海", },
      { "value": "防城港","label": "防城港", },
      { "value": "钦州","label": "钦州", },
      { "value": "贵港","label": "贵港", },
      { "value": "玉林","label": "玉林", },
      { "value": "百色","label": "百色", },
      { "value": "贺州","label": "贺州", },
      { "value": "河池","label": "河池", },
      { "value": "来宾","label": "来宾", },
      { "value": "崇左","label": "崇左", },
      { "value": "其他","label": "其他", }
    ]
  },
  {
    "value": "海南","label": "海南",
    "children": [
      { "value": "海口","label": "海口", },
      { "value": "三亚","label": "三亚", },
      { "value": "五指山","label": "五指山", },
      { "value": "琼海","label": "琼海", },
      { "value": "儋州","label": "儋州", },
      { "value": "文昌","label": "文昌", },
      { "value": "万宁","label": "万宁", },
      { "value": "东方","label": "东方", },
      { "value": "澄迈县","label": "澄迈县", },
      { "value": "定安县","label": "定安县", },
      { "value": "屯昌县","label": "屯昌县", },
      { "value": "临高县","label": "临高县", },
      { "value": "白沙黎族自治县","label": "白沙黎族自治县", },
      { "value": "昌江黎族自治县","label": "昌江黎族自治县", },
      { "value": "乐东黎族自治县","label": "乐东黎族自治县", },
      { "value": "陵水黎族自治县","label": "陵水黎族自治县", },
      { "value": "保亭黎族苗族自治县","label": "保亭黎族苗族自治县", },
      { "value": "琼中黎族苗族自治县","label": "琼中黎族苗族自治县", },
      { "value": "其他","label": "其他", }
    ]
  },
  {
    "value": "重庆","label": "重庆",
    "children": [
      { "value": "渝中区","label": "渝中区" },
      { "value": "大渡口区","label": "大渡口区" },
      { "value": "江北区","label": "江北区" },
      { "value": "南岸区","label": "南岸区" },
      { "value": "北碚区","label": "北碚区" },
      { "value": "渝北区","label": "渝北区" },
      { "value": "巴南区","label": "巴南区" },
      { "value": "长寿区","label": "长寿区" },
      { "value": "双桥区","label": "双桥区" },
      { "value": "沙坪坝区","label": "沙坪坝区" },
      { "value": "万盛区","label": "万盛区" },
      { "value": "万州区","label": "万州区" },
      { "value": "涪陵区","label": "涪陵区" },
      { "value": "黔江区","label": "黔江区" },
      { "value": "永川区","label": "永川区" },
      { "value": "合川区","label": "合川区" },
      { "value": "江津区","label": "江津区" },
      { "value": "九龙坡区","label": "九龙坡区" },
      { "value": "南川区","label": "南川区" },
      { "value": "綦江县","label": "綦江县" },
      { "value": "潼南县","label": "潼南县" },
      { "value": "荣昌县","label": "荣昌县" },
      { "value": "璧山县","label": "璧山县" },
      { "value": "大足县","label": "大足县" },
      { "value": "铜梁县","label": "铜梁县" },
      { "value": "梁平县","label": "梁平县" },
      { "value": "开县","label": "开县" },
      { "value": "忠县","label": "忠县" },
      { "value": "城口县","label": "城口县" },
      { "value": "垫江县","label": "垫江县" },
      { "value": "武隆县","label": "武隆县" },
      { "value": "丰都县","label": "丰都县" },
      { "value": "奉节县","label": "奉节县" },
      { "value": "云阳县","label": "云阳县" },
      { "value": "巫溪县","label": "巫溪县" },
      { "value": "巫山县","label": "巫山县" },
      { "value": "石柱土家族自治县","label": "石柱土家族自治县" },
      { "value": "秀山土家族苗族自治县","label": "秀山土家族苗族自治县" },
      { "value": "酉阳土家族苗族自治县","label": "酉阳土家族苗族自治县" },
      { "value": "彭水苗族土家族自治县","label": "彭水苗族土家族自治县" },
      { "value": "其他","label": "其他" }
    ]
  },
  {
    "value": "四川","label": "四川",
    "children": [
      { "value": "成都","label": "成都", },
      { "value": "自贡","label": "自贡", },
      { "value": "攀枝花","label": "攀枝花", },
      { "value": "泸州","label": "泸州", },
      { "value": "德阳","label": "德阳", },
      { "value": "绵阳","label": "绵阳", },
      { "value": "广元","label": "广元", },
      { "value": "遂宁","label": "遂宁", },
      { "value": "内江","label": "内江", },
      { "value": "乐山","label": "乐山", },
      { "value": "南充","label": "南充", },
      { "value": "眉山","label": "眉山", },
      { "value": "宜宾","label": "宜宾", },
      { "value": "广安","label": "广安", },
      { "value": "达州","label": "达州", },
      { "value": "雅安","label": "雅安", },
      { "value": "巴中","label": "巴中", },
      { "value": "资阳","label": "资阳", },
      { "value": "阿坝藏族羌族自治州","label": "阿坝藏族羌族自治州", },
      { "value": "甘孜藏族自治州","label": "甘孜藏族自治州", },
      { "value": "凉山彝族自治州","label": "凉山彝族自治州", },
      { "value": "其他","label": "其他", }
    ]
  },
  {
    "value": "贵州","label": "贵州",
    "children": [
      { "value": "贵阳","label": "贵阳", },
      { "value": "六盘水","label": "六盘水", },
      { "value": "遵义","label": "遵义", },
      { "value": "安顺","label": "安顺", },
      { "value": "铜仁地区","label": "铜仁地区", },
      { "value": "毕节地区","label": "毕节地区", },
      { "value": "黔西南布依族苗族自治州","label": "黔西南布依族苗族自治州", },
      { "value": "黔东南苗族侗族自治州","label": "黔东南苗族侗族自治州", },
      { "value": "黔南布依族苗族自治州","label": "黔南布依族苗族自治州", },
      { "value": "其他","label": "其他", }
    ]
  },
  {
    "value": "云南","label": "云南",
    "children": [
      { "value": "昆明","label": "昆明", },
      { "value": "曲靖","label": "曲靖", },
      { "value": "玉溪","label": "玉溪", },
      { "value": "保山","label": "保山", },
      { "value": "昭通","label": "昭通", },
      { "value": "丽江","label": "丽江", },
      { "value": "普洱","label": "普洱", },
      { "value": "临沧","label": "临沧", },
      { "value": "德宏傣族景颇族自治州","label": "德宏傣族景颇族自治州", },
      { "value": "怒江傈僳族自治州","label": "怒江傈僳族自治州", },
      { "value": "迪庆藏族自治州","label": "迪庆藏族自治州", },
      { "value": "大理白族自治州","label": "大理白族自治州", },
      { "value": "楚雄彝族自治州","label": "楚雄彝族自治州", },
      { "value": "红河哈尼族彝族自治州","label": "红河哈尼族彝族自治州", },
      { "value": "文山壮族苗族自治州","label": "文山壮族苗族自治州", },
      { "value": "西双版纳傣族自治州","label": "西双版纳傣族自治州", },
      { "value": "其他","label": "其他", }
    ]
  },
  {
    "value": "西藏","label": "西藏",
    "children": [
      { "value": "拉萨","label": "拉萨", },
      { "value": "那曲地区","label": "那曲地区", },
      { "value": "昌都地区","label": "昌都地区", },
      { "value": "林芝地区","label": "林芝地区", },
      { "value": "山南地区","label": "山南地区", },
      { "value": "日喀则地区","label": "日喀则地区", },
      { "value": "阿里地区","label": "阿里地区", },
      { "value": "其他","label": "其他", }
    ]
  },
  {
    "value": "陕西","label": "陕西",
    "children": [
      { "value": "西安","label": "西安", },
      { "value": "铜川","label": "铜川", },
      { "value": "宝鸡","label": "宝鸡", },
      { "value": "咸阳","label": "咸阳", },
      { "value": "渭南","label": "渭南", },
      { "value": "延安","label": "延安", },
      { "value": "汉中","label": "汉中", },
      { "value": "榆林","label": "榆林", },
      { "value": "安康","label": "安康", },
      { "value": "商洛","label": "商洛", },
      { "value": "其他","label": "其他", }
    ]
  },
  {
    "value": "甘肃","label": "甘肃",
    "children": [
      { "value": "兰州","label": "兰州", },
      { "value": "嘉峪关","label": "嘉峪关", },
      { "value": "金昌","label": "金昌", },
      { "value": "白银","label": "白银", },
      { "value": "天水","label": "天水", },
      { "value": "武威","label": "武威", },
      { "value": "酒泉","label": "酒泉", },
      { "value": "张掖","label": "张掖", },
      { "value": "庆阳","label": "庆阳", },
      { "value": "平凉","label": "平凉", },
      { "value": "定西","label": "定西", },
      { "value": "陇南","label": "陇南", },
      { "value": "临夏回族自治州","label": "临夏回族自治州", },
      { "value": "甘南藏族自治州","label": "甘南藏族自治州", },
      { "value": "其他","label": "其他", }
    ]
  },
  {
    "value": "青海","label": "青海",
    "children": [
      { "value": "西宁","label": "西宁", },
      { "value": "海东地区","label": "海东地区", },
      { "value": "海北藏族自治州","label": "海北藏族自治州", },
      { "value": "海南藏族自治州","label": "海南藏族自治州", },
      { "value": "黄南藏族自治州","label": "黄南藏族自治州", },
      { "value": "果洛藏族自治州","label": "果洛藏族自治州", },
      { "value": "玉树藏族自治州","label": "玉树藏族自治州", },
      { "value": "海西蒙古族藏族自治州","label": "海西蒙古族藏族自治州", },
      { "value": "其他","label": "其他", }
    ]
  },
  {
    "value": "宁夏","label": "宁夏",
    "children": [
      { "value": "银川","label": "银川", },
      { "value": "石嘴山","label": "石嘴山", },
      { "value": "吴忠","label": "吴忠", },
      { "value": "固原","label": "固原", },
      { "value": "中卫","label": "中卫", },
      { "value": "其他","label": "其他", }
    ]
  },
  {
    "value": "新疆","label": "新疆",
    "children": [
      { "value": "乌鲁木齐","label": "乌鲁木齐", },
      { "value": "克拉玛依","label": "克拉玛依", },
      { "value": "吐鲁番地区","label": "吐鲁番地区", },
      { "value": "哈密地区","label": "哈密地区", },
      { "value": "和田地区","label": "和田地区", },
      { "value": "阿克苏地区","label": "阿克苏地区", },
      { "value": "喀什地区","label": "喀什地区", },
      { "value": "克孜勒苏柯尔克孜自治州","label": "克孜勒苏柯尔克孜自治州", },
      { "value": "巴音郭楞蒙古自治州","label": "巴音郭楞蒙古自治州", },
      { "value": "昌吉回族自治州","label": "昌吉回族自治州", },
      { "value": "博尔塔拉蒙古自治州","label": "博尔塔拉蒙古自治州", },
      { "value": "石河子","label": "石河子", },
      { "value": "阿拉尔","label": "阿拉尔", },
      { "value": "图木舒克","label": "图木舒克", },
      { "value": "五家渠","label": "五家渠", },
      { "value": "伊犁哈萨克自治州","label": "伊犁哈萨克自治州", },
      { "value": "其他","label": "其他", }
    ]
  },
  {
    "value": "台湾","label": "台湾",
    "children": [
      { "value": "台北市","label": "台北市" },
      { "value": "高雄市","label": "高雄市" },
      { "value": "台北县","label": "台北县" },
      { "value": "桃园县","label": "桃园县" },
      { "value": "新竹县","label": "新竹县" },
      { "value": "苗栗县","label": "苗栗县" },
      { "value": "台中县","label": "台中县" },
      { "value": "彰化县","label": "彰化县" },
      { "value": "南投县","label": "南投县" },
      { "value": "云林县","label": "云林县" },
      { "value": "嘉义县","label": "嘉义县" },
      { "value": "台南县","label": "台南县" },
      { "value": "高雄县","label": "高雄县" },
      { "value": "屏东县","label": "屏东县" },
      { "value": "宜兰县","label": "宜兰县" },
      { "value": "花莲县","label": "花莲县" },
      { "value": "台东县","label": "台东县" },
      { "value": "澎湖县","label": "澎湖县" },
      { "value": "基隆市","label": "基隆市" },
      { "value": "新竹市","label": "新竹市" },
      { "value": "台中市","label": "台中市" },
      { "value": "嘉义市","label": "嘉义市" },
      { "value": "台南市","label": "台南市" },
      { "value": "其他","label": "其他" }
    ]
  },
  {
    "value": "澳门","label": "澳门",
    "children": [
      { "value": "花地玛堂区","label": "花地玛堂区" },
      { "value": "圣安多尼堂区","label": "圣安多尼堂区" },
      { "value": "大堂区","label": "大堂区" },
      { "value": "望德堂区","label": "望德堂区" },
      { "value": "风顺堂区","label": "风顺堂区" },
      { "value": "嘉模堂区","label": "嘉模堂区" },
      { "value": "圣方济各堂区","label": "圣方济各堂区" },
      { "value": "路凼","label": "路凼" },
      { "value": "其他","label": "其他" }
    ]
  },
  {
    "value": "香港","label": "香港",
    "children": [
      { "value": "中西区","label": "中西区" },
      { "value": "湾仔区","label": "湾仔区" },
      { "value": "东区","label": "东区" },
      { "value": "南区","label": "南区" },
      { "value": "深水埗区","label": "深水埗区" },
      { "value": "油尖旺区","label": "油尖旺区" },
      { "value": "九龙城区","label": "九龙城区" },
      { "value": "黄大仙区","label": "黄大仙区" },
      { "value": "观塘区","label": "观塘区" },
      { "value": "北区","label": "北区" },
      { "value": "大埔区","label": "大埔区" },
      { "value": "沙田区","label": "沙田区" },
      { "value": "西贡区","label": "西贡区" },
      { "value": "元朗区","label": "元朗区" },
      { "value": "屯门区","label": "屯门区" },
      { "value": "荃湾区","label": "荃湾区" },
      { "value": "葵青区","label": "葵青区" },
      { "value": "离岛区","label": "离岛区" },
      { "value": "其他","label": "其他" }
    ]
  }
]