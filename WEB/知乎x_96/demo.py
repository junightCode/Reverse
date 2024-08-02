# -*- coding:utf-8 -*-
import requests
import hashlib
import execjs

ctx = execjs.compile(open('./test_v3.js', 'r', encoding='utf-8').read())


def get_encrypt_b(u):
    to_encrypt = "101_3_3.0+" + u + "+" + d_c0 + "+" + x_zst_81
    fmd5 = hashlib.new('md5', to_encrypt.encode()).hexdigest()
    return ctx.call('b', fmd5)


base = 'https://www.zhihu.com'

url = '/api/v4/topics/19550622?include=introduction%2Cquestions_count%2Cbest_answers_count%2Cfollowers_count%2Cis_following%2Cheader_card'
referer = ''

d_c0 = "ACDTE1LmJhaPTjEs_bhFzf5VF9otVAEZLYQ=|1673347636"
x_zst_81 = "3_2.0aR_sn77yn6O92wOB8hPZnQr0EMYxc4f18wNBUgpTQ6nxERFZYRY0-4Lm-h3_tufIwJS8gcxTgJS_AuPZNcXCTwxI78YxEM20s4PGDwN8gGcYAupMWufIeQuK7AFpS6O1vukyQ_R0rRnsyukMGvxBEqeCiRnxEL2ZZrxmDucmqhPXnXFMTAoTF6RhRuLPFieCvwoCPbuGACtpThoBhqtB6QL93hOOncS9yGVYQ8XOFCYBoqC91HCq09eTvXC1ihV_bUomgUc9W9H8rgxm6C2mVJO0nupMzqYqXqSMucpqb6XKwuV9l9wKoD9KbBo_9UVfPqSMHDVZawtmWBtK0cHGnUwBJ8HMZCLLtCpKJvN_VUF9CqfzWgV1eb91oqo_0ULM0UHMequKS8VmohtB6upLjrxfHgOfVCYK4Upfcv319q28wD30lqHLsvp1HDxmSg21xwFm6RNGyhp90qSGQUwY0qS_ehtxQ0LL-BgC"

headers = {
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
    "x-zse-93": "101_3_3.0",
    "cookie": f'd_c0={d_c0};',
    "x-requested-with": "fetch",
    'x-zst-81': x_zst_81,
}

headers.update({
    "referer": referer,
    "x-zse-96": "2.0_%s" % get_encrypt_b(url),
})

res = requests.get(base + url, headers=headers)
print(res.json())
