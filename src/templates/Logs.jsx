import React from 'react';
import {Log} from '../components/UIkit';
import {Main} from '../components/Common';

const Logs = () => {
   
    const Lists = [
        {
            text: 'URLを修正しました。',
            data: '2021/05/08'
        },
        {
            text: 'Worksを追加しました。',
            data: '2021/04/13'
        },
        {
            text: 'Articleのリンクを修正しました。',
            data: '2021/04/12'
        },
        {
            text: 'サイトを更新・修正しました。',
            data: '2021/01/22'
        },
        {
            text: 'サイトをリニューアルしました。',
            data: '2020/11/23'
        },
        {
            text: 'サイトを公開しました。',
            data: '2020/08/29'
        },
        {
            text: 'ポートフォリオ作成しました。',
            data: '2020/08/23'
        }
    ]

 return(
    <>
      <Main title={'Charge Log'} />
<div className="common__center">
    <div className="common__size">
     <h2>Charge Log</h2>

     {/* <Logs> */}
     {Lists.map(list => (
                  <Log key={list.id}  text={list.text} data={list.data} />
                 ))}
     {/* </Logs> */}

 </div>
 </div>
    </>

 )
}

export default Logs;