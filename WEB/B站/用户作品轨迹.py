import random

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



def get_locus():
    click_first_x = random.randint(440,460)
    click_end_x = random.randint(370,390)
