# -*- coding:utf-8 -*-
import requests
import hashlib
import time
import random
import json
import urllib.parse

def generate_data(num_points):
    data = []
    x = random.randint(3000, 7000)
    y = random.randint(1000, 6000)
    z = random.randint(0, 5000)
    timestamp = random.randint(10000, 20000)
    data.append({"x": x, "y": y, "z": z, "timestamp": timestamp, "type": 0})

    for i in range(1, num_points):
        x += random.randint(-100, 100)
        y += random.randint(-100, 100)
        z += random.randint(-100, 100)
        timestamp += random.randint(100, 1000)
        data.append({"x": x, "y": y, "z": z, "timestamp": timestamp, "type": random.choice([0, 1])})

    return data


img_list = json.dumps(generate_data(50),separators=(',', ':'),ensure_ascii=False)

# ll = [{"x":4918,"y":3391,"z":0,"timestamp":23963,"type":0},{"x":4957,"y":3436,"z":67,"timestamp":24065,"type":0},{"x":4974,"y":3449,"z":96,"timestamp":24169,"type":0},{"x":4919,"y":3393,"z":44,"timestamp":24329,"type":0},{"x":5147,"y":3616,"z":287,"timestamp":24430,"type":0},{"x":4977,"y":3447,"z":114,"timestamp":24693,"type":0},{"x":5226,"y":3702,"z":345,"timestamp":24795,"type":0},{"x":5270,"y":3765,"z":378,"timestamp":24896,"type":0},{"x":5238,"y":3753,"z":332,"timestamp":25002,"type":0},{"x":5011,"y":2777,"z":512,"timestamp":51886,"type":0},{"x":4329,"y":2367,"z":3,"timestamp":51987,"type":0},{"x":4927,"y":3105,"z":641,"timestamp":52088,"type":0},{"x":5355,"y":3549,"z":1067,"timestamp":52194,"type":0},{"x":4926,"y":3159,"z":613,"timestamp":52297,"type":0},{"x":4794,"y":3028,"z":478,"timestamp":52514,"type":0},{"x":4765,"y":3008,"z":445,"timestamp":52617,"type":0},{"x":5191,"y":3436,"z":865,"timestamp":52722,"type":0},{"x":4595,"y":2841,"z":266,"timestamp":52881,"type":0},{"x":5606,"y":3871,"z":1266,"timestamp":52981,"type":0},{"x":6301,"y":4577,"z":1951,"timestamp":53087,"type":0},{"x":6062,"y":4339,"z":1709,"timestamp":53189,"type":0},{"x":2499,"y":1115,"z":671,"timestamp":82349,"type":0},{"x":3258,"y":1883,"z":1449,"timestamp":82459,"type":0},{"x":3939,"y":2559,"z":2145,"timestamp":82563,"type":0},{"x":2701,"y":1320,"z":910,"timestamp":82743,"type":0},{"x":3624,"y":2222,"z":1850,"timestamp":82844,"type":0},{"x":2888,"y":1470,"z":1116,"timestamp":82947,"type":0},{"x":3806,"y":2389,"z":2031,"timestamp":83138,"type":0},{"x":1850,"y":432,"z":55,"timestamp":83239,"type":0},{"x":3031,"y":1609,"z":1225,"timestamp":83340,"type":0},{"x":4332,"y":2914,"z":2514,"timestamp":83446,"type":0},{"x":4840,"y":3428,"z":3004,"timestamp":83546,"type":0},{"x":4926,"y":3995,"z":980,"timestamp":89228,"type":0},{"x":7494,"y":6411,"z":3613,"timestamp":89329,"type":0},{"x":6125,"y":4890,"z":2355,"timestamp":89431,"type":0},{"x":5524,"y":4237,"z":1818,"timestamp":89532,"type":0},{"x":7650,"y":6328,"z":3980,"timestamp":89632,"type":0},{"x":7540,"y":6141,"z":3963,"timestamp":89732,"type":0},{"x":5079,"y":3570,"z":1602,"timestamp":89833,"type":0},{"x":7004,"y":5476,"z":3538,"timestamp":89935,"type":0},{"x":3680,"y":2145,"z":212,"timestamp":90065,"type":0},{"x":7583,"y":6034,"z":4111,"timestamp":90166,"type":0},{"x":7136,"y":5587,"z":3664,"timestamp":90442,"type":1},{"x":4133,"y":2577,"z":659,"timestamp":90767,"type":0},{"x":6640,"y":4935,"z":3383,"timestamp":90867,"type":0},{"x":5546,"y":3452,"z":3180,"timestamp":90968,"type":0},{"x":5138,"y":2897,"z":3190,"timestamp":91070,"type":0},{"x":5547,"y":3313,"z":3601,"timestamp":91178,"type":0},{"x":6624,"y":4440,"z":4689,"timestamp":91279,"type":0},{"x":4429,"y":2275,"z":2496,"timestamp":91380,"type":0}]
# img_list = json.dumps(ll,separators=(',', ':'),ensure_ascii=False)
img_list_ = urllib.parse.quote(img_list)
print(img_list_)
c = "ea1db124af3c7062474693fa704f4ff8"


mid = '1577804'
current_page = 1
ps = 30
# wts = int(time.time())
wts = '1701659443'
y = f'dm_cover_img_str=QU5HTEUgKEludGVsLCBJbnRlbChSKSBVSEQgR3JhcGhpY3MgKDB4MDAwMDQ2MjgpIERpcmVjdDNEMTEgdnNfNV8wIHBzXzVfMCwgRDNEMTEpR29vZ2xlIEluYy4gKEludGVsKQ&dm_img_list={img_list_}&dm_img_str=V2ViR0wgMS4wIChPcGVuR0wgRVMgMi4wIENocm9taXVtKQ&keyword=&mid={mid}&order=pubdate&order_avoided=true&platform=web&pn={current_page}&ps=50&special_type=&tid=0&web_location=1550101&wts={wts}'
# y = 'dm_cover_img_str=QU5HTEUgKEludGVsLCBJbnRlbChSKSBVSEQgR3JhcGhpY3MgKDB4MDAwMDQ2MjgpIERpcmVjdDNEMTEgdnNfNV8wIHBzXzVfMCwgRDNEMTEpR29vZ2xlIEluYy4gKEludGVsKQ&dm_img_list=%5B%5D&dm_img_str=V2ViR0wgMS4wIChPcGVuR0wgRVMgMi4wIENocm9taXVtKQ&keyword=&mid=303469491&order=pubdate&order_avoided=true&platform=web&pn=1&ps=30&special_type=&tid=0&web_location=1550101&wts=1701659443'
# wrid = hashlib.md5((y + c).encode()).hexdigest()
wrid = 'f019d19b07249919be9ecd0846a4f8db'
print(wrid)



# wrid = 'f7f954527cf77c40750c19bab6499062'
# wts = '1701659310'
#
#
url = f'https://api.bilibili.com/x/space/wbi/arc/search?mid={mid}&ps=50&tid=0&special_type=&pn={current_page}&keyword=&order=pubdate&platform=web&web_location=1550101&order_avoided=true&dm_img_list={img_list}&dm_img_str=V2ViR0wgMS4wIChPcGVuR0wgRVMgMi4wIENocm9taXVtKQ&dm_cover_img_str=QU5HTEUgKEludGVsLCBJbnRlbChSKSBVSEQgR3JhcGhpY3MgKDB4MDAwMDQ2MjgpIERpcmVjdDNEMTEgdnNfNV8wIHBzXzVfMCwgRDNEMTEpR29vZ2xlIEluYy4gKEludGVsKQ&w_rid={wrid}&wts={wts}'
#
# print(url)

headers = {
    'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/5.0.6 Safari/605.1.15'
}
response = requests.get(url,headers=headers).json()
print(response)