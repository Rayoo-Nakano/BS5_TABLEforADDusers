# 注意事項

1. react-scripts@5.0.0 は実行後（npm start）エラーがポップアップ出力されるので、npm audit fix --force を実行することで@2.1.3にダウングレードする。他のscriptの関係性を注意すること。 @2.1.8が対応可能なLatest

# Table of Contents

1. [Objective](#section1)<br>
2. [Importing Packages](#section2)<br>
3. [UI Model and functionality](#section3)<br>
 - 3.1 [Card component](#section301)<br>
  - 3.2 [Table](#section302)<br>
  - 3.3 [Action buttons and methods](#section303)<br>
  - 3.4 [Switch button and create user functions](#section304)<br>
  - 3.5 [User create/edit form](#section305)<br>
  - 3.6 [validation](#section306)<br>


  ## 1. Objective <a id=section1></a>

In this react project I have used typescript to build user management application. It includes CRUD functionality.

## 2. Importing Packages  <a id=section2></a>

To build the UI of this project I have used bootstrap, rsuit react library, and react-icons/fa which is font awsome libraries.
Link1: https://react-bootstrap.netlify.app/getting-started/introduction, 
Link2: https://rsuitejs.com/
Link3: https://react-icons.github.io/react-icons

上記内容を踏まえて、以下のコマンドで必要モジュールをインストール
1. npmインストール<br>
  npm i
2. react-bootstrapとbootstrapをインストール<br>
  npm i react-bootstrap bootstrap
3. React Suiteインストール<br>
  npm i rsuite
4. React Iconsインストール<br>
  npm i react-icons

## 3. UI Model and functionality<a id=section3></a>

### 3.1 Card Component <a id=section301></a>
In the beginning, to get the background color and to display table I have used card component as a base.

### 3.2 Table <a id=section302></a>
I have used table to display all the users and action buttons (Delete, Edit) section to apply action on particular data.

### 3.3 Action buttons and methods<a id=section303></a>

On the edit function passes the particular column object and that is displayed in the form and accordingly update entry.
Similarly, on delete button click function call and get the id of that field and delete particular entry.

### 3.4 Switch button and create user functions <a id=section304></a>

I have used swtich toggle button and beside that create user button. Switch is by deafult active which means we can easily create user but if toggle is deactivate create user button will disappear and you cant create user.

### 3.5 User create/edit form <a id=section305></a>

Initially created basic form which contain inputs, selectbox, number, dropdown fields. with the help of we can create user and also sown in the table. If you click on edit button on particular field, it will pop up same modal and show the details to update. Same form hadle conditionally to create and update form also change button text conditionally like submit and update.

### 3.6 validation<a id=section306></a>

I have applied required field on the name input and same time applyed on the submit button to disable if value is null in the field.
# 4 サンプル画面
１．納品先一覧
![image](https://user-images.githubusercontent.com/84900813/156504360-14cf0a5e-b7d6-41d8-b139-094f91ca99b3.png)
２．詳細確認・更新
![image](https://user-images.githubusercontent.com/84900813/156504417-33177c5c-2e69-446e-858e-3a1eb27c4b25.png)
３．削除
![image](https://user-images.githubusercontent.com/84900813/156504461-b372006a-e9c4-4105-bd09-0e248cff1c33.png)



# Thank you.

Checkout more details about me on LinkedIn: https://www.linkedin.com/in/mangeshipper/
