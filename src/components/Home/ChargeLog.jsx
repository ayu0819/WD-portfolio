import React from 'react';
import {Log,Button} from '../UIkit';
// import styled from 'styled-components';

// const Logs = styled.div`
// display: flex;
// justify-content: center;
// flex-wrap        : wrap;
// align-items: center;
// `;

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

const ChargeLog = (props) => {
 return(
<div className="back__white">
    <div className="common__size">
     <h3>Charge Log</h3>

     {/* <Logs> */}
     {Lists.slice(0,3).map(list => (
                  <Log key={list.id}  text={list.text} data={list.data} />
                 ))}
     {/* </Logs> */}

 <Button text={'more view'} link={'/logs'} />
 </div>
</div>
 )
}

export default ChargeLog;