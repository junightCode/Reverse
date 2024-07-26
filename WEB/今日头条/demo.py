# -*- coding:utf-8 -*-
import requests
import execjs
ctx = execjs.compile(open('./signature.js','r',encoding='utf-8').read())

headers = {
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
}

url = 'https://www.toutiao.com/api/pc/list/feed?offset=0&channel_id=94349549395&max_behot_time=0&category=pc_profile_channel&disable_raw_data=true&aid=24&app_name=toutiao_web'

signature = ctx.call('getSign',url)
# signature = '_02B4Z6wo00901ij3pAAAAIDCqPVeQ6U-1vYo06CAAO9x5JZI-HGuHG0O0g71ZnVr8TrOS3bpniDUf0HkLGs2YPhh6AXbONh2nJYusYGqXk24WgPwmKK6rVvspzfgCl4GMOA2D31B0WfPq376d3'
print(signature)
url = f'{url}&_signature={signature}'
print(url)
res = requests.get(url,headers=headers).text
print(res)