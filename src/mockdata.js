let mock = [
    {
        id: 1,
        name: "Avocado",
        price: 60.48,
        calories: 1541.7,
        image: "https://www.listchallenges.com/f/items/4a98113a-62e5-444a-82a1-627089b81bbb.jpg"
    },
    {
        id: 2,
        name: "Watercress Sandwich",
        price: 74.74,
        calories: 608.3,
        image: "https://www.listchallenges.com/f/items/583f1903-1c6a-4175-bc28-7bc3853cffac.jpg"
    },
    {
        id: 3,
        name: "Flan",
        price: 43.05,
        calories: 1573.4,
        image: "https://www.listchallenges.com/f/items/e5c177e2-b242-4d5e-9f04-daf93b399e59.jpg"
    },
    {
        id: 4,
        name: "Calamari",
        price: 72.82,
        calories: 1653.7,
        image: "https://www.listchallenges.com/f/items/0f04265a-2252-4dd1-b2af-fb59cf42b2d6.jpg"
    },
    {
        id: 5,
        name: "Raspberry Lemon Meringue Pie",
        price: 57.81,
        calories: 1701.2,
        image: "https://www.listchallenges.com/f/items/31f31f73-7ba3-4218-9653-796382fee035.jpg"
    },
    {
        id: 6,
        name: "Baked Potato Soup",
        price: 26.22,
        calories: 1631,
        image: "https://www.listchallenges.com/f/items/0d7749b2-bf71-400c-a3b1-d4d73ff3e271.jpg"
    },
    {
        id: 7,
        name: "Oysters Rockefeller",
        price: 58.44,
        calories: 1293.3,
        image: "https://www.listchallenges.com/f/items/043972a8-0ad3-4c9b-b232-0fa657484051.jpg"
    },
    {
        id: 8,
        name: "Sticky Toffee Pudding",
        price: 18.98,
        calories: 1271.3,
        image: "https://www.listchallenges.com/f/items/7047f7a4-97e7-46ef-9708-72c71a511448.jpg"
    },
    {
        id: 9,
        name: "Chicken Fried Steak",
        price: 59.91,
        calories: 1938.8,
        image: "https://www.listchallenges.com/f/items/617c13f2-d9d2-4546-8338-c7d94f2b25b7.jpg"
    },
    {
        id: 10,
        name: "Cinnamon Bread",
        price: 46.76,
        calories: 871.4,
        image: "https://www.listchallenges.com/f/items/940d0efc-7498-4baa-aa89-821cb246877a.jpg"
    },
    {
        id: 11,
        name: "Maple Bacon Doughnut",
        price: 24.59,
        calories: 1092.9,
        image: "https://www.listchallenges.com/f/items/523da656-99b2-44ea-a804-3a414f4bab54.jpg"
    },
    {
        id: 12,
        name: "Bagel and Lox",
        price: 54.67,
        calories: 611.6,
        image: "https://www.listchallenges.com/f/items/438ff5dd-2145-48d1-aa55-0d88e5e2592c.jpg"
    },
    {
        id: 13,
        name: "Udon",
        price: 51.84,
        calories: 1300,
        image: "https://www.listchallenges.com/f/items/09a17b41-f110-4c21-8659-ffc261c59dd1.jpg"
    },
    {
        id: 14,
        name: "Cactus Fries",
        price: 36.86,
        calories: 123.2,
        image: "https://www.listchallenges.com/f/items/33d4e105-1679-4198-a6bc-f4d005f00082.jpg"
    },
    {
        id: 15,
        name: "Jumbalaya",
        price: 9.22,
        calories: 1087.5,
        image: "https://www.listchallenges.com/f/items/5a8bd83d-9981-45b5-b85a-fdf6d45d4a26.jpg"
    },
    {
        id: 16,
        name: "Chicken Noodle Soup",
        price: 26.36,
        calories: 311,
        image: "https://www.listchallenges.com/f/items/0f26e49a-8900-404d-86e7-5a7f130e7d63.jpg"
    },
    {
        id: 17,
        name: "Pho",
        price: 19.82,
        calories: 1487.2,
        image: "https://www.listchallenges.com/f/items/47c9b529-5069-4aa7-8bcc-5790ea154d38.jpg"
    },
    {
        id: 18,
        name: "Black Forest Cake",
        price: 4.58,
        calories: 460.8,
        image: "https://www.listchallenges.com/f/items/fc7c59f5-126d-4ad5-94df-19b6f73b6545.jpg"
    },
    {
        id: 19,
        name: "Butter Chicken",
        price: 67.24,
        calories: 1946.1,
        image: "https://www.listchallenges.com/f/items/dd4c24aa-61d7-401e-9287-5a08e57564c0.jpg"
    },
    {
        id: 20,
        name: "Philly Cheese Steak",
        price: 9.92,
        calories: 1789.9,
        image: "https://www.listchallenges.com/f/items/18dcf2f5-5fb8-4d99-a5d6-e36d1cc3cea4.jpg"
    },
    {
        id: 21,
        name: "Fettucini Alfredo",
        price: 49.16,
        calories: 1407.7,
        image: "https://www.listchallenges.com/f/items/fd8332d3-29a7-4789-9746-7e4dd085b796.jpg"
    },
    {
        id: 22,
        name: "Spaghetti Squash",
        price: 7.08,
        calories: 1467.6,
        image: "https://www.listchallenges.com/f/items/51267fc1-9479-4c84-b2e6-36016d9e5872.jpg"
    },
    {
        id: 23,
        name: "Frittata",
        price: 33.23,
        calories: 1508.1,
        image: "https://www.listchallenges.com/f/items/9c61945d-4cc6-4ad0-9b11-62359219587c.jpg"
    },
    {
        id: 24,
        name: "Masala Dosa",
        price: 31.74,
        calories: 1265.1,
        image: "https://www.listchallenges.com/f/items/2f2b10a9-9594-486a-904b-2ffdf4c8e387.jpg"
    },
    {
        id: 25,
        name: "Profiteroles",
        price: 78.18,
        calories: 969.8,
        image: "https://www.listchallenges.com/f/items/12582210-9494-41d8-9ebc-bd29bf1dd715.jpg"
    },
    {
        id: 26,
        name: "Escargots",
        price: 64.81,
        calories: 1164,
        image: "https://www.listchallenges.com/f/items/10b1f350-f579-4574-8920-554a7307b22c.jpg"
    },
    {
        id: 27,
        name: "Cream Cheese Frosting",
        price: 2.47,
        calories: 1484.5,
        image: "https://www.listchallenges.com/f/items/d2e0b508-9ae9-440b-a4c2-b201bea8524a.jpg"
    },
    {
        id: 28,
        name: "Arugula Blackberry Salad",
        price: 60.05,
        calories: 474.8,
        image: "https://www.listchallenges.com/f/items/6e5025b3-4961-4039-a3ad-ab9415c1c26c.jpg"
    },
    {
        id: 29,
        name: "Carbonara",
        price: 44.78,
        calories: 890.5,
        image: "https://www.listchallenges.com/f/items/d4c86a47-f3ce-491f-ac98-c84e2416975a.jpg"
    },
    {
        id: 30,
        name: "Chia Pudding",
        price: 59.35,
        calories: 1359.9,
        image: "https://www.listchallenges.com/f/items/a787237d-6bdc-4ba1-8b70-6b5353b647a3.jpg"
    }
]

export default mock;
