# AC 學期 3 ｜ A1:完成餐廳清單

利用 Node.js 和 Express 打造一個家庭記帳本。

## 安裝套件

- node.js: 10.24.1
- express: 4.17.1
- express-session: 1.17.2
- express-Handlebars: 5.3.2
- handlebars-helpers: 0.10.0
- body-parser: 1.19.0
- mongoose: 5.12.12
- passport: 0.4.1
- passport-facebook: 3.0.0
- passport-local: 1.0.0
- bcryptjs: 2.4.3
- connect-flash: 0.1.1
- dotenv: 10.0.0
- method-override: 3.0.0

## 基本功能

(1)在首頁一次瀏覽所有支出的清單

(2)在首頁看到所有支出清單的總金額

(3)新增一筆支出

(4)編輯支出的所有屬性 (一次只能編輯一筆)

(5)刪除任何一筆支出 (一次只能刪除一筆)

(6)在首頁可以根據支出「類別」篩選支出；總金額的計算只會包括被篩選出來的支出總和。

(7)使用者可以註冊帳號，註冊的資料包括：名字、email、密碼、確認密碼。其中 email 與密碼是必填欄位，但名字不是

(8)如果使用者已經註冊過、沒填寫必填欄位、或是密碼輸入錯誤，就註冊失敗，並回應給使用者錯誤訊息

(9)使用者也可以透過 Facebook Login 直接登入

(10)Facebook Login Callback URL 需為 “http://localhost:3000/auth/facebook/callback”

(11)使用者的密碼要使用 bcrypt 來處理

(12)使用者必須登入才能使用餐廳清單，如果沒登入，會被導向登入頁面

(13)登入後，使用者可以建立並管理專屬他的一個餐廳清單

(14)使用者登出、註冊失敗、或登入失敗時，使用者都會在畫面上看到正確而清楚的系統訊息


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
$ npm run seed
```
