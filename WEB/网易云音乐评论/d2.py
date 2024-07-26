import requests

url = "https://music.163.com/weapi/middle/clientcfg/config/list?csrf_token="

payload='params=ZpydLZL380CJ1uNEekZzqT1PFRM6F9zDeUTSCsVzWAUCtKnT0rWJhw%2BOQhQxd4cWLpsouXzsRt1id5XF19crDToneqOhdqhMdh8%2BsyOGaXrh2y%2F5icH%2F7VmWyYXkmt8IOyctNn9o3%2FdNpz%2B9Sy0N1wPrw%2BTyZiV%2BqxylJP7gOAJiZGjWWZ8oLN3LFGD34iFx&encSecKey=08f9e556a193b20ec3407efa5e93ef94f6bc2e3c8efc02472b18d5e6e7aae23859d22c45f467e97e09d359ff667d039a35f0d280cde1fd551f5abbd12199ae76da80707a1cd7e454c6c1b2039ebcafb4a096aefe7ccb69ae0b6e35f248276005c35b333c0ee4527f79c1cf6508c24d319ce53b172358785836e72acd121667ce'
headers = {
  'authority': 'music.163.com',
  'accept': '*/*',
  'accept-language': 'zh-CN,zh;q=0.9',
  'cache-control': 'no-cache',
  'content-type': 'application/x-www-form-urlencoded',
  'cookie': 'NMTID=00OGgq55nui8h0PhUpLvoZRcwR2RZwAAAGI0bFb-Q; _iuqxldmzr_=32; WEVNSM=1.0.0; WNMCID=tgzdsx.1687145243871.01.0; ntes_utid=tid._.BQuyE4dCFm9FFgAQFQaEhLMDyxJ8wfNz._.0; sDeviceId=YD-Nm82uPIHd2BBA1ABFRLAKGOAm%2FZy82Ry; WM_NI=v0yYv2%2FW3aUIbSUuBiath3wlvfkwdR0fqQlT2IwHbqXO%2Bu7VIMuRzaw3m2a3M7u3Riq9naPrzNOnqNJg60o1lT39FvEpiBBm105WwqLkd2vMFXAPd9sOQwCsbTILM8mXazQ%3D; WM_NIKE=9ca17ae2e6ffcda170e2e6ee9bb172fc93ac8dae748fb08aa3c55a879f8f83d43b899289d3ea52adb4f898b82af0fea7c3b92ab6f0b7baf53aed89fd82d843a28d9b96c163a3aca8d4f668b6baa598e75af4babfb2ef60f297b9a9e17b9c91e596b65e8b93bbb3f96bb5eda3d3e4398fe9bbd4d163b3e7a282d37aba92818ff4468ab9fad1ee3bb08cfddac57e87b0a7a3c167f3f0fbb8f67b90b5acd3f54786888fb1e733b1919f98c279a28c87add034af88af9bd437e2a3; WM_TID=mg3j14UwAwhEAFRBVBfE0KcWmwc8x9go; JSESSIONID-WYYY=QkJmOGBNi4UfGIu%5C8zTkPx2ie%2Fqxv%2Fq4vM6nVNEaMyro1YmuvjsIzEK6smtSQx%2Ft0S%2BhWErz0mNS0KFdxjYlfstxMbnkhdPYUuRdE%2Bw98gtSiAfhxO5YwrAVhWQcnCS2Vs2e%2BQoNTcugl%2FF7o37yCU5WY7bdlaulfO5vapIzVbr3pPzW%3A1687163203913',
  'origin': 'https://music.163.com',
  'pragma': 'no-cache',
  'referer': 'https://music.163.com/song?id=2054230018',
  'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"Windows"',
  'sec-fetch-dest': 'empty',
  'sec-fetch-mode': 'cors',
  'sec-fetch-site': 'same-origin',
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
