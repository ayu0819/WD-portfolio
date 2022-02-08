import React from 'react';
import {Top,OverView,Page,Pagination} from '../components/Work';
import { faLaptop,faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faReact,faCss3Alt,faJsSquare,faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';
import {ContentsItem,PageItem} from '../components/Work';
import {Main} from '../components/Common';
import top from '../assets/img/work_ec-top.jpg';
import forms from '../assets/img/work_ec-froms.jpg';
import likes from '../assets/img/work_ec-likes.jpg';
import users from '../assets/img/work_ec-userinfos.jpg';
import user from '../assets/img/work_ec-user.jpg';
import contact from '../assets/img/work_ec-contact.jpg';
import search from '../assets/img/work_ec-prodcts.jpg';
import products from '../assets/img/work_blog-products.jpg';
import notifications from '../assets/img/work_ec-notifications.jpg';
import history from '../assets/img/work_ec-history.jpg';
import confirm from '../assets/img/work_ec-productConfirm.jpg';
import card from '../assets/img/work_blog-card.jpg';

const Items = styled.div`
margin: 0.5em 0.5em 0 0.5em;
display: flex;
justify-content: center;
flex-wrap        : wrap;
align-items: center;
`;

const Contents = styled.div`
 /* padding: 3em 0; */
display: flex;
justify-content: center;
flex-wrap        : wrap;
align-items: center;
h2,h3 {
    padding: 0;
}
`;

const Content = styled.div`
`;

const Lists1 = [
    {
         icon: <FontAwesomeIcon className="icon-brand icon-brand-react" icon={faReact} />,
         link: '',
         pointer: ''
     },
     {
        icon: <FontAwesomeIcon className="icon-brand con-brand-css" icon-brand-css icon={faCss3Alt} />,
        link: '',
        pointer: ''
    },
    {
        icon: <FontAwesomeIcon className="icon-brand icon-brand-js" icon={faJsSquare} />,
        link: '',
        pointer: ''
    },
    {
        icon: <FontAwesomeIcon className="icon-brand icon-brand-pc" icon={faDatabase} />,
        link: '',
        pointer: ''
    }
]

const Lists2 = [
    {
         icon: <FontAwesomeIcon className="icon-brand icon-brand-pc" icon={faLaptop} />,
         link: 'https://ec-site-903fe.web.app',
         pointer: 'icon-pointer'
     },
     {
        icon: <FontAwesomeIcon className="icon-brand icon-brand-github" icon={faGithub} />,
        link: 'https://github.com/ayu0819/2021-ec-site.git',
        pointer: 'icon-pointer'
    }
]
const Lists3 = [
    {
         img: top,
         title: 'Top',
         text1: 'ログイン・新規会員登録・商品を確認することができるページです。',
         text2: '"FirebaseのAuth" を利用して、Topページに訪問しているユーザーが "ログインしている" かで表示を分けています。',
         text3: 'そして、データーベースから新着の商品情報を取り出して表示させています',
         direction: ''
     },
     {
        img: forms,
        title: 'Login＆SignUp＆Reset',
        text1: '"ログイン・パスワードリセット・新規会員登録" を行うことができます。',
        text2: '"ログイン・新規会員登録" では、ユーザーの入力した value を、"FirebaseのAuth" と "データーベース" に登録しています。',
        text3: '"パスワードリセット" では firebaseの "メソッド" を使用して、ユーザーの登録済のパスワードを変更する機能を実装しました。',
        direction: 'work-direction'
    },
    {
        img: likes,
        title: 'Like＆Cart',
        text1: '"ユーザー商品カート・お気に入り" では "商品をカートに入れる・お気に入りに登録する" ことができます。',
        text2: '共に、データベースから商品情報を取得し Firebase と ReduxのStore にその状態を変更し反映させています。',
        text3: '"また、商品情報がない場合は "商品がありません" らの代用テキストを設定しています。',
        direction: '',
    },
    {
        img: users,
        title: 'UserInfo＆UserEdit',
        text1: '"会員ページ" では、新規登録された "ユーザー名・メールアドレス" を表示し、希望で情報を "追加・修正" することができます。',
        text2: 'ユーザー情報は、Firebaseのデータベースから取得しており、編集・追加後はその情報が反映されます。',
        text3: '"編集画面時には、データベースから現在の情報を取得しており、登録された情報が事前に入力されています。',
        direction: 'work-direction'
    },
    {
       img: user,
       title: 'User',
       text1: '"会員ページ" "サブメニューとメッセージ" を表示させています。',
       text2: 'メッセージで出力される "ユーザー名" は会員登録 で設定情報をデーターベースから取得し、その名前が表示されます。',
       direction: ''
   },
   {
       img: contact,
       title: 'Contact',
       text1: '"コンタクトページ" では 運営にメッセージを送ることができます。',
       text2: '"selectBox と input" の value の値を取得してデーターベースにメッセージを送信します。',
       direction: 'work-direction'
   },
   {
    img: search,
    title: 'Products',
    text1: '"プロダクト一覧" では 販売している商品一覧を見ることができます。',
    text2: '商品データは、Firebaseから情報を取得しています。',
    text3: 'また、Firebaseの "index機能" を使用して "カテゴリー絞り込み" を行うことができます。',
    direction: ''
},
{
    img: history,
    title: 'Purchase history',
    text1: '"購入履歴" では、一度購入した商品を確認することができます。',
    text2: '商品情報は、Firebaseから取得し "注文ID・発送予定日・注文日時" らの情報も取得しています。',
    text3: 'また "商品詳細" から商品詳細のページに移動することもできます。',
    direction: 'work-direction'
},
{
   img: confirm,
   title: 'Product Confirm',
   text1: '"購入確認" では、購入する際の情報を確認することができます。',
   text2: '"送料・消費税" の計算を、商品ごとに行い、商品価格に応じて送料の負担料金を変更しています。',
   text3: '"注文する" のボタンを押すと "Firebase・ReduxのStore" の状態を変更・更新し、在庫量が自動的に1つ減ります。',
   direction: ''
},
{
   img: card,
   title: 'Credit Card',
   text1: '"クレジットカード登録" では、購入時に使用する クレジットカード 情報を "登録・修正" することができます。',
   text2: 'これらの処理は "StripeのSPI" を使用しています。',
   text3: '情報が既に登録されている場合は、その情報が表示されています。',
   direction: 'work-direction'
},
{
    img: notifications,
    title: 'Notifications',
    text1: '"お知らせ" では、運営からのメッセージを読むことができます。',
    text2: 'メッセージは、メッセージタイトルのタグをクリックすることにより "モーダル" で表示されます。' ,
    direction: ''
 },
 {
    img: products,
    title: 'Product Registration',
    text1: '"商品詳細" では、Firebaseに登録されている "商品データの表示" と "お気に入り登録・カートへ登録" を行うことができます。',
   text2: '"商品登録"では "複数枚の画像登録" に加えて、情報を入力・保存でき、作成後はそのデータをエディター上で編集することができます。',
   text3: 'また、Redux上で "管理者権限" を付与しているユーザーのみ "商品登録" を行うことができます。',
    direction: 'work-direction'
 }
]

const WorkEc = () => {

 return(
     <>
     <Main title={'Ec Site'} />
<div className="common__center">
    <Top image={'work-ec'} />

    <div className="back__gray">
    <div className="common__size">
  <Contents>
    {/* contents */}
    <Content>
    <h3>coding</h3>
    <Items>
{Lists1.map(list => (
                  <ContentsItem key={list.id} text={list.text} icon={list.icon}  />
                 ))}
     </Items>
     </Content>
     {/* contents */}

    {/* contents */}
    <Content>
    <h3>develop</h3>
    <Items>
{Lists2.map(list => (
                  <ContentsItem key={list.id} text={list.text} icon={list.icon} link={list.link}  />
                 ))}
     </Items>
     </Content>
  {/* contents */}
  </Contents>
  </div>
  </div>


    <OverView 
    account={'ログイン用のアカウント: (メールアドレス) demo20210412@gmail.com　(パスワード) QyYXYVF'}
    text1={'フロントエンドに "React＋Redux" と バックエンドに "Firebase＋Stripe(API)" を利用して ECサイト を作成しました。'}
    text2={'ユーザーが "購入・お気に入り・購入履歴" ら商品の状態を "ReduxのStore" と "Firebaseのデータベース" で管理させています。また "StripeのAPI" を使用してクレジットカードの登録・修正 を行えるようにしています。 '}
    text3={'また "StripeのAPI" を使用してクレジットカードの登録・修正 を行えるようにしています。 '}
    />

    <div className="back__gray">
    <div className="common__size">
    <h2>Page</h2>
    <Contents>
     {Lists3.map(list => (
        <PageItem key={list.id}  img={list.img} title={list.title} direction={list.direction} text1={list.text1} text2={list.text2} text3={list.text3} />
       ))}
</Contents>
</div>
</div>

    <Pagination linkLeft={'/works/ec'} linkRight={'/works/lp'} displayLeft={'workDisplay'} displayRight={''}  />
 </div>
</>
 )
}

export default WorkEc;