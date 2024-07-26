# 文件内容转码
def parse_decode(response):
    global content
    try:
        content = response.content.decode('utf-8')
        print("utf-8")
    except UnicodeDecodeError:
        try:
            content = response.content.decode('gb2312')
            print('gb2312')
        except UnicodeDecodeError:
            try:
                content = response.content.decode('gbk')
                print('gbk')
            except UnicodeDecodeError:
                try:
                    content = response.text
                except Exception as e:
                    print(e)
    finally:
        return content


# redis传输管道
def redis_pip(title, list1):
    import redis
    redi = redis.Redis(host='127.0.0.1', port=6379, decode_responses=True)
    if redi.llen(title) != 0:
        print(f'{title}已存在')
        choose = input('是否覆盖（y-删除已有/n-不覆盖继续存储/p-跳过不存储）：')
        if choose in ('y', 'Y'):
            redi.delete(title)
            print(f'已删除{title}')
        elif choose in ('p', ''):
            print('跳过存储')
            return
    # with redi.pipeline(transaction=False) as p:
    for value in list1:
        redi.rpush(title, value)
        # p.execute()
    print(f'~~~~~~ {title} End ~~~~~~')


# 遍历指定文件夹中的文件
def read_dir():
    import os
    path = "C:/Users\Admin\Documents\WeChat Files\wxid_qnykv5ky0eft22\FileStorage\File/2022-09"

    for i in os.listdir(path):
        if '.' in i:
            continue
        new_path = os.path.join(path, i)
        for c in os.listdir(new_path):
            print(c.strip('.otd'))


# 将指定文件夹生成压缩包
def create_zip():
    import zipfile, os
    from loguru import logger

    old_path = "D:\dwt\dwt_start\德温特保存"
    for i in os.listdir(old_path):
        dir_path = os.path.join(old_path, i)
        zip_file = f"D:\dwt\dwt_start\\{i}.zip"
        zip = zipfile.ZipFile(zip_file, 'w', zipfile.ZIP_DEFLATED)
        for path, dirnames, filenames in os.walk(dir_path):
            # 去掉目标跟路径，只对目标文件夹下边的文件及文件夹进行压缩
            fpath = path.replace(path, '')

            for filename in filenames:
                zip.write(os.path.join(path, filename), os.path.join(fpath, filename))
        zip.close()
        logger.info("文件夹\"{0}\"已压缩为\"{1}\".".format(dir_path, zip_file))


# 遍历大小写
def read_az():
    import string
    for a in string.ascii_lowercase:
        print(a)

    for A in string.ascii_uppercase:
        print(A)


# 字典写入数据库
def dic_sql(dic, table):
    # 字段列表
    field_list = dic.keys()
    # 字段长字符串
    fields = ",".join(field_list)
    # %s 传参字符串
    s_l = ",".join(['%s' for _ in range(len(field_list))])
    # 传入值列表
    values_ = list(dic.values())
    sql = f"insert ignore into {table} ({fields}) values ({s_l})"
    return sql, values_


# 16进制转文字、10进制转文字
def hex_ds_str(asc):
    # asc是十进制
    hex_num = '\\u{0}'.format(hex(int(asc)).replace('0x', ''))
    hz = hex_num.encode().decode('unicode_escape')
    return hz


# 读取js文件结果
def load_js(jsfile, func, para=None):
    import execjs
    de = execjs.get()
    with open(f'{jsfile}.js', 'r', encoding='utf-8') as r:
        cod = r.read()
    cods = de.compile(cod)
    return cods.call(func, para)

# 数据库连接
def connect_sql(database):
    import pymysql
    con = pymysql.connect(host='127.0.0.1', user='root', password='123456', port=3306, charset='utf8mb4',
                          database=database)
    cur = con.cursor()
    return con, cur


# 存储id索引
def save_id(database, table):
    import redis
    redi = redis.Redis(host='127.0.0.1', port=6379, decode_responses=True)
    con, cur = connect_sql(database)
    select = f"select id from {table}"
    cur.execute(select)
    datas = cur.fetchall()
    for d in datas:
        ids = d[0]
        redi.rpush(f'{table}_id', ids)
    print(f'{table} id 存储完毕！')
    return f"{table}_id"


if __name__ == '__main__':
    read_dir()