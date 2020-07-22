import React from "react";
import '../css/style.scss';

function Profile(){
    return (
        <div className="profile">
            <div className="profile_pic">
                <div className="profile_img"><img src="/img/profile_ex.jpg" alt="임시" /></div>
            </div>
            <div className="profile_info">
                <ul>
                    <li>2019 ~ 현재 (주)닥터허브 디자인팀 퍼블리셔</li>
                    <li>2017 ~ 2018 오프라인 프로모션 기획 / 실행</li>
                    <li>가톨릭대학교 디지털미디어학부 문화콘텐츠전공</li>
                </ul>
                <ul>
                    <li>Vanilla JavaScript : 투두리스트, </li>
                    <li>React : 영화 api 받아와서 컴포넌트 구성, 어쩌고</li>
                    <li>PHP / MySQL : </li>
                </ul>

            
            </div>
        </div>
    );
}

export default Profile;