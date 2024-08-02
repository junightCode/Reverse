## 1.https://gt4.geetest.com/

获取包含captcha_id值的js文件

https://gt4.geetest.com/ 请求首页地址，在html中获取/assets/index.62b53fe3.js文件地址



## 2.62b53fe3.js

获取captcha_id的值

在/assets/index.62b53fe3.js 文件中正则匹配出captcha_id(54088bb07d2df3c46b79f80300b0abbe)参数



## 3.https://gcaptcha4.geetest.com/load  

返回背景图片、滑块图片等其他必要信息

请求参数：

```
captcha_id: 24f56dc13c40dc4a02fd0318567caef5    // 上个js文件中获取
challenge: f8beca82-84a4-4b32-a01d-dae1697f1236 // 由js代码生成，uuid由Math随机数字生成
client_type: web                                // 固定值
risk_type: slide                                // 验证码类型
lang: zh                                        // 固定值
callback: geetest_1641878914316                 // 当前时间戳
```

返回结果

```
返回的以下参数需要在滑块验证请求参数中用到
lot_number 
payload
process_token
```

## 4.https://gcaptcha4.geetest.com/verify

滑块通过验证请求，主要逆向w参数

请求参数：

```
callback: geetest_1722421505544						时间戳
captcha_id: 54088bb07d2df3c46b79f80300b0abbe		js文件中获取
client_type: web									固定
lot_number: 4bb5f239ce384c49bb4a907838457653		load请求中返回
risk_type: slide									固定，验证码类型
payload: _b-sD20eax9oEJvmoM...						load请求中返回
process_token: 09e40b3b368cd288602563...			load请求中返回
payload_protocol: 1									固定
pt: 1												固定
w: 91eb8bdd2298828892ed070ae8f....					需要js逆向
```

## 逆向w值

gcaptcha4.js 文件，混淆内容会变，需要保存本地替换（webpack补环境就能过）

1. 搜索w的unicode值`"\u0077":`,找到w值赋值的地方
2. w值的生成代码

```
i = (0,m[$_BIBDI(95)])(f[$_BIBDI(95)][$_BIBDI(534)](e), n)
还原后
m[$_BIBDI(95)](f[$_BIBDI(95)][$_BIBDI(534)](e) ,  n)
```

分析：

```js
// m[$_BIBDI(95)] 是加密函数
function i(e, t) {
    var $_HCGJF = ejoUt.$_DG()[6][10];
    for (; $_HCGJF !== ejoUt.$_DG()[0][9]; ) {
        switch ($_HCGJF) {
        case ejoUt.$_DG()[2][10]:
            var s = t[$_DAECR(426)];
            if (!s[$_DAEDw(667)] || $_DAEDw(119) === s[$_DAECR(667)])
                return c[$_DAECR(95)][$_DAEDw(977)](e);
            var n = (0,
            d[$_DAEDw(199)])()
              , i = new d[($_DAEDw(26))]([$_DAEDw(894), $_DAECR(815)])
              , r = {
                "1": {
                    "symmetrical": h[$_DAEDw(95)],
                    "asymmetric": new l[($_DAEDw(95))]()
                },
                "2": {
                    "symmetrical": new p[($_DAECR(95))]({
                        "key": n,
                        "mode": $_DAECR(979),
                        "iv": $_DAEDw(978)
                    }),
                    "asymmetric": f[$_DAEDw(95)]
                }};
            if (i[$_DAEDw(108)](s[$_DAECR(667)])) {
                var o = $_DAECR(894) === s[$_DAEDw(667)]
                  , a = s[$_DAEDw(667)]
                  , _ = r[a][$_DAECR(999)][$_DAECR(926)](n);
                while (o && (!_ || 256 !== _[$_DAEDw(139)]))
                    n = (0,
                    d[$_DAECR(199)])(),
                    _ = new l[($_DAEDw(95))]()[$_DAECR(926)](n);
                var u = r[a][$_DAECR(961)][$_DAEDw(926)](e, n);
                return (0,
                d[$_DAEDw(176)])(u) + _;
            }
            $_HCGJF = ejoUt.$_DG()[4][9];
            break;
        }
    }
}
```

```js
// f[$_BIBDI(95)][$_BIBDI(534)](e) 把e变成字符串

{
    "setLeft": 99,                         // 滑块滑动距离
    "passtime": 146,                       // 滑块滑动过程时长
    "userresponse": 98.41476022585691,     // 通过滑块滑动距离计算得到
    "lot_number": "4b4ef3e583444e0fb...",  // load响应中的lot_number参数
    "device_id": "A59C",                   // 可为定值，可省略此参数
    "geetest": "captcha",                  // 可为定值，可省略此参数
    "lang": "zh",                          // 可为定值，可省略此参数
    "ep": "123",                           // 可为定值，可省略此参数
    "nz8c": "255401529",                   // 可为定值，可省略此参数
    "em": {"ph": 0, ...}                   // 可为定值，可省略此参数
}

// --------------------------------------------------
{
    "setLeft": 44,
    "passtime": 344,
    "userresponse": "45.73989343371419",
    "device_id": "",
    "lot_number": "d9813520d46540b3ac46b50d1146cc05",
    "pow_msg": "1|0|md5|2024-08-01T11:32:18.529222+08:00|54088bb07d2df3c46b79f80300b0abbe|d9813520d46540b3ac46b50d1146cc05||35bb0ebfe5be6c9d",
    "pow_sign": "08615d85ec8468f83c8a89d3fb157f10",
    "geetest": "captcha",
    "lang": "zh",
    "ep": "123",
    "biht": "1426265548",
    "gee_guard": {
        "roe": {
            "aup": "3",
            "sep": "3",
            "egp": "3",
            "auh": "3",
            "rew": "3",
            "snh": "3",
            "res": "3",
            "cdc": "3"
        }
    },
    "oW7k": "3D3d",
    "em": {
        "ph": 0,
        "cp": 0,
        "ek": "11",
        "wd": 1,
        "nt": 0,
        "si": 0,
        "sc": 0
    }
}
```

```
// n 是this对象
```

## 逆向加密函数参数e

```
主要解决这三个参数
"setLeft": 99,                         // 滑块滑动距离
"passtime": 146,                       // 滑块滑动过程时长
"userresponse": 98.41476022585691,     // 通过滑块滑动距离计算得到
```



