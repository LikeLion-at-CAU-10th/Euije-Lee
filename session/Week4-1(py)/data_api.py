import requests

url = 'http://openapi.seoul.go.kr:8088/4a694b535565786937324863764967/json/GetParkInfo/1/1000/'

response = requests.get(url)

response_json = response.json()

data_row = response_json["GetParkInfo"]["row"]

def get_data(gu):
    new_data = []
    for item in data_row:
        place = item["ADDR"]
        if gu in place:
            new_data.append(item)

    return new_data

print()