# AC 學期 2-3 ｜ A6:餐廳清單擴充 CRUD 功能

利用 Node.js 和 Express 打造一個家庭記帳本。

## 安裝套件

- Node.js: 10.24.1
- Express: 4.17.1
- Express-Handlebars: 5.3.2
- body-parser: 1.19.0
- mongoose: 5.12.14
- handlebars-helpers: 0.10.0
- method-override: 3.0.0

## 基本功能

(1)在首頁一次瀏覽所有支出的清單
(2)在首頁看到所有支出清單的總金額
(3)新增一筆支出
(4)編輯支出的所有屬性 (一次只能編輯一筆)
(5)刪除任何一筆支出 (一次只能刪除一筆)
(6)在首頁可以根據支出「類別」篩選支出；總金額的計算只會包括被篩選出來的支出總和。

## Getting Started
Clone respository to your local computer
```
$ git clone https://github.com/WeiHsin-Chen/expense-tracker.git
```
Install by npm
```
$ npm install
```
Execute
```
$ npm run dev
```
Terminal show the message
```
Express is running on localhost:3000
```
Now you can browse the website on
```
http://localhost:3000
```
Update the models seeder
```
$ node models/seeds/restaurantSeeder.js
```
