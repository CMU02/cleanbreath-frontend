import CLOSE_ICON from "../../public/close.svg";

interface statuteProps {
    statute: string | null;
    setStatute: (statute: string | null) => void;
}

export default function statute({statute, setStatute}: statuteProps) {
    const government = () => {
        <div>
        <h3>정부, 지방청사</h3>
        <p>금연구역지정 대상시설 (동해시설물 전체):</p>
        <ul>
            <li>제1호 국회의 청사</li>
            <li>제2호 정부 및 지방자치단체의 청사</li>
            <li>제3호 법조단체의 법원에 따른 법원사무소와 그 밖의 법조단체의 청사</li>
            <li>제4호 중앙행정기관의 운영에 관한 법률에 따른 공공기관 청사</li>
            <li>제5호 지방공기업법에 따른 지방공기업의 청사</li>
            <li>정부업무평가위원회</li>
            <li>제2조(정의) 이 외에 '청사'로 국가가 중앙 행정기관 및 그 소속기관과 지방자치단체 및 공공기관에서 사용하기로 결정한 건물, 부대시설 및 대지를 말한다.</li>
        </ul>
        <p>지정기준:</p>
        <ul>
            <li>정부청사관리규정에 따라 대통령 포함한 전체를 금연구역으로 지정하고, 개별법령 및 법률 규정이 있는 경우 그에 따름</li>
            <li>정부청사관리규정이 없는 청사의 경우 별도 사단의 표지판 설치와 옥상, 옥외 별도의 흡연실 설치 가능</li>
            <li>지방청사의 경우 흡연실은 지방청이 설치할 수 있으며, 경기도 정책방향에 따름</li>
        </ul>
    </div>;
    };
    const school = () => {
        <div>
            <h3>학교, 유치원</h3>
            <p>금연구역지정 대상시설 (동해시설물 전체):</p>
            <ul>
                <li>제7호 고등교육법에 따른 대학교의 교사</li>
                <li>제6호 유아교육법, 초중등교육법에 의한 유치원 및 초등학교, 중학교, 고등학교</li>
            </ul>
            <p>지정기준:</p>
            <ul>
                <li>해당 건물 전면 금연구역 일치 다만, 흡연실 설치 가능</li>
                <li>해당 장소 전면 금연구역 일치 다만, 건물 내부에 별도 흡연실 설치 금지, 옥외 별도 흡연실 설치 가능</li>
            </ul>
        </div>
    }; 
    const medical = () => {
        <div>
            <h3>의료기관</h3>
            <p>금연구역지정 대상시설 (동해시설물 전체):</p>
            <ul>
                <li>제8호 의료법에 따른 의료기관의 전체 병원 청사</li>
                <li>지역보건법에 따른 보건소, 보건지소, 보건의료원</li>
            </ul>
            <p>지정기준:</p>
            <ul>
                <li>해당 시설 전면 금연과 외부 실내 흡연실 설치 불가</li>
                <li>옥외 흡연시설 설치 운영 가능, 건물 외벽 또는 외부에 비상구와 같은 공간에서 10미터 이내에서는 흡연 불가</li>
            </ul>
        </div>
    };
    const etc = () => {
        <div>
            <div>
                <h3>청소년시설</h3>
                <p>금연구역지정 대상시설 (동해시설물 전체):</p>
                <ul>
                    <li>제10호 청소년활동 진흥법에 따른 청소년수련관</li>
                    <li>청소년복지지원법에 따른 청소년복지시설</li>
                </ul>
                <p>지정기준:</p>
                <ul>
                    <li>해당 장소 전면 금연구역 일치, 다만 별도 사단의 표지판 설치 가능</li>
                    <li>흡연시설은 건물 내 별도로 설치 불가</li>
                </ul>
            </div>

            <div>
                <h3>노인시설</h3>
                <p>금연구역지정 대상시설 (동해시설물 전체):</p>
                <ul>
                    <li>제9호 노인복지법에 따른 노인복지시설</li>
                </ul>
                <p>지정기준:</p>
                <ul>
                    <li>해당 장소 전면 금연구역 일치, 다만 별도 사단의 표지판 설치 가능</li>
                </ul>
            </div>

            <div>
                <h3>도서관</h3>
                <p>금연구역지정 대상시설 (동해시설물 전체):</p>
                <ul>
                    <li>제11호 도서관법에 따른 도서관</li>
                </ul>
                <p>지정기준:</p>
                <ul>
                    <li>해당 장소 전면 금연구역 일치</li>
                </ul>
            </div>

            <div>
                <h3>어린이 시설</h3>
                <p>금연구역지정 대상시설 (동해시설물 전체):</p>
                <ul>
                    <li>제12호 어린이놀이시설 안전관리법에 따른 어린이놀이시설</li>
                </ul>
                <p>지정기준:</p>
                <ul>
                    <li>해당 장소 전면 금연구역 일치</li>
                </ul>
            </div>

            <div>
                <h3>학원</h3>
                <p>금연구역지정 대상시설 (동해시설물 전체):</p>
                <ul>
                    <li>제13호 학원의 설립, 운영 및 과외교습에 관한 법률에 따른 학원 중 1천제곱미터 이상의 학원 및 학교교과 교습학원</li>
                </ul>
                <p>지정기준:</p>
                <ul>
                    <li>해당 학원 건물, 대합실, 승강장, 지하와 같은 공공장소에서 금연 다만, 별도 흡연실 설치 가능</li>
                </ul>
            </div>

            <div>
                <h3>교통관련 시설</h3>
                <p>금연구역지정 대상시설 (동해시설물 전체):</p>
                <ul>
                    <li>제14호 공항·여객부·철도역·여객자동차터미널 등 교통관련 시설의 대합실·승강장·지하 보도 및 16호 이상의 교통수단으로서 여객 또는 화물을 운송하는 것</li>
                </ul>
                <p>지정기준:</p>
                <ul>
                    <li>16호 이상의 교통수단으로서 여객 또는 화물을 운송하는 교통 관련 시설</li>
                </ul>
            </div>

            <div>
                <h3>대형건물</h3>
                <p>금연구역지정 대상시설 (동해시설물 전체):</p>
                <ul>
                    <li>제15호 자동차관리법에 따른 어린이운송용 승합자동차</li>
                    <li>연면적 1천제곱미터 이상의 공장</li>
                </ul>
                <p>지정기준:</p>
                <ul>
                    <li>해당 차량 금연구역</li>
                </ul>
            </div>

            <div>
                <h3>공장</h3>
                <p>금연구역지정 대상시설 (동해시설물 전체):</p>
                <ul>
                    <li>연면적 1천제곱미터 이상의 공장</li>
                </ul>
                <p>지정기준:</p>
                <ul>
                    <li>해당 공장 전면 금연구역 일치, 다만 건물 내 별도 사단의 표지판 설치 가능</li>
                    <li>옥외 흡연시설 설치 운영 가능, 건물 외벽 또는 외부에 비상구와 같은 공간에서 10미터 이내에서는 흡연 불가</li>
                </ul>
            </div>

            <div>
                <h3>대규모 점포</h3>
                <p>금연구역지정 대상시설 (동해시설물 전체):</p>
                <ul>
                    <li>제7호 건축법, 연면적 300제곱미터 이상의 공장</li>
                </ul>
                <p>지정기준:</p>
                <ul>
                    <li>해당 장소 전면 금연구역 일치 다만 건물 내 별도 사단의 표지판 설치 가능</li>
                    <li>흡연실은 건물 내 별도로 설치 불가</li>
                </ul>
            </div>

            <div>
                <h3>관광숙박업소</h3>
                <p>금연구역지정 대상시설 (동해시설물 전체):</p>
                <ul>
                    <li>제19호 관광진흥법에 따른 관광숙박업소</li>
                </ul>
                <p>지정기준:</p>
                <ul>
                    <li>별도의 트윈룸이나 공용이용하는 객실, 로비, 복도, 회장 등 공통이용 구역에서 금연</li>
                    <li>개인의 나이가 주요 판단근거로 이용되는 객실의 경우 전면 금연구역으로 지정하지 않음, 침실 등 부대시설은 영업장 내 경우 법령이 적용됨</li>
                </ul>
            </div>

            <div>
                <h3>체육시설</h3>
                <p>금연구역지정 대상시설 (동해시설물 전체):</p>
                <ul>
                    <li>제20호 체육시설의 설치이용에 관한 법률에 따른 1천평 이상일 때를 수용할 수 있는 체육시설</li>
                </ul>
                <p>지정기준:</p>
                <ul>
                    <li>해당 시설 전면 금연구역 일치 다만, 시설 내 별도 사단의 표지판 설치 가능</li>
                </ul>
            </div>

            <div>
                <h3>사회복지 시설</h3>
                <p>금연구역지정 대상시설 (동해시설물 전체):</p>
                <ul>
                    <li>제12호 사회복지사업법에 따른 사회복지시설</li>
                </ul>
                <p>지정기준:</p>
                <ul>
                    <li>해당 시설 전면 금연구역 일치 다만, 별도 사단의 표지판 설치 가능</li>
                </ul>
            </div>

            <div>
                <h3>목욕장</h3>
                <p>금연구역지정 대상시설 (동해시설물 전체):</p>
                <ul>
                    <li>제22호 공중위생법에 따른 목욕장</li>
                </ul>
                <p>지정기준:</p>
                <ul>
                    <li>해당 시설 전면 금연구역 일치 다만, 별도 사단의 표지판 설치 가능</li>
                </ul>
            </div>

            <div>
                <h3>게임 PC방</h3>
                <p>금연구역지정 대상시설 (동해시설물 전체):</p>
                <ul>
                    <li>제23호 게임산업진흥법에 따른 청소년 게임 제공장, 일반 게임제공장, 인터넷컴퓨터 게임제공시설</li>
                </ul>
                <p>지정기준:</p>
                <ul>
                    <li>해당 장소 전면 금연구역 일치 다만, 별도 사단의 표지판 설치 가능</li>
                    <li>법령에 따라 게임관련 모든 공간 금연구역으로 지정 가능</li>
                </ul>
            </div>

            <div>
                <h3>음식점</h3>
                <p>금연구역지정 대상시설 (동해시설물 전체):</p>
                <ul>
                    <li>제24호 식품위생법에 따른 식품제조업 중 휴게음식점, 일반음식점 및 제과영업소와 같은 법에 따른 식품소매업, 먹는물관리법에 따른 먹는물 취급 판매업체의 영업소</li>
                </ul>
                <p>지정기준:</p>
                <ul>
                    <li>해당 영업소 전면 금연구역 일치, 다만 영업소 외부에 별도 사단의 표지판 설치 가능</li>
                </ul>
            </div>

            <div>
                <h3>만화방</h3>
                <p>금연구역지정 대상시설 (동해시설물 전체):</p>
                <ul>
                    <li>제25호 청소년보호법에 따른 만화대여업소</li>
                </ul>
                <p>지정기준:</p>
                <ul>
                    <li>해당 영업소 전면 금연구역 일치 다만, 영업소 내 별도 사단의 표지판 설치 가능</li>
                </ul>
            </div>
        </div>
    };

    return(
        <>
            <div className="close" onClick={() => {setStatute(null)}}>
                <CLOSE_ICON />
            </div>
            {statute === "정부" || "지방청사" && government()}
            {statute === "학교" && school()}
            {statute === "의료기관" && medical()}
            {statute === "기타" && etc()}
        </>
    );
}