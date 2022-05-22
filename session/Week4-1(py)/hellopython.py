item_list = ["지수","의제","민재","하영","민지"]

a = item_list[3]

item_list[0] = "지원"

# List 삽입 : append()
item_list.append("영권")

print(item_list)

############################################################################################

item_dic = {"key1":111, "key2":222}

item_dic["key1"] = 222
# dictionary에 새로운 데이터를 추가하려면 아래와 같이 새로운 키값에 접근하면 된다.
item_dic["key3"] = 333

# dictionary를 리스트로 반환하는 함수 : values() -> list
dic_val = item_dic.values()
print("print .values() : ", dic_val)
# dictionary의 키를 반환하는 함수 : keys() -> list
# dictionary의 아이템(Key, value)를 반환하는 함수 : items() -> list
print("print .keys() : " , item_dic.keys())
print("print .items() : " , item_dic.items())


############################################################################################

item_list = ["지수","의제","민재","하영","민지"]
new_data = []

for item in item_list:
    if item == "의제":
        new_data.append(item)

############################################################################################

num_list = [1,2,3,4,5,6,7,8,9,10]
new_data = []

for n in num_list:
    if n % 2 == 0:
        new_data.append(n)

print(new_data)

############################################################################################

str = '지수 의제 민재 하영 민지'
item_list = ["지수","의제","민재","하영","민지"]

name = "명준"

if name in str: # str -> item_list 가능
    print("명준이 있습니다.")
else:
    print("명준이 없습니다.")