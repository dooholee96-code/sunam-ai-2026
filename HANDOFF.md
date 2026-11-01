# 수남초 AI 연수 (2026.11.4) — 인수인계 메모

## 파일
- `ai-desk-2026.html` — 원본(소스). claude.ai 아티팩트용 형식(doctype/head 없음). 여기만 수정한다.
- `build.js` — 원본에 doctype/head를 씌워 루트 `index.html` 생성 + 인라인 스크립트 문법 검사. `node build.js`
- `index.html` — GitHub Pages 배포본 (Firebase 설정값 포함, build.js가 생성)
- `firebase_rules.json` — Realtime Database 규칙 (연수 당일용 개방, 끝나면 `.write`를 false로)

## 구조 (27장, 4블록)
① 도입 13:30–13:45 (1~6): 표지·QR / 시작 설문 2 / 관심사 설문 3 / 순위 / 무료·유료 경계 / 공통 UI + 1분 체험(AI 틀리기) / 세팅 미션
② 문서 13:45–14:19 (7~14): 메타프롬프팅·ABA + 실수6 + 퀴즈① / 미션1 공문(ABA) / 미션2 표→엑셀 / 엑셀 3수준 / 미션3 hwpx / Claude Docs·Slides / NotebookLM / 도구 지도 + 용어 4개 + 퀴즈②
③ 영상 14:19–15:02 (15~21): 영상 현실·브루 / Omni 시연(유료) / 3단계 지도 / 미션5-1 대본 / 미션5-2 브루 조립(그림 포함) / 미션5-3 내보내기 + 퀴즈③ / LLM 외 AI
④ 마무리 15:02–15:30 (22~27): 바이브코딩 시연 / 행동하는 AI·MCP=USB / 커넥터 시연 + 비서 조합 6 / 그림자 / 보안 퀴즈④ + 최종 투표 + 요청문 8

## 페이지 기능
- 데스크톱: 1280×720 기준 자동 스케일, ←→ 넘김, `#sN` 해시. 폰·"전체 보기": 세로 교재 모드.
- 상단: 무료만 보기(유료 흐리게) / 전체 보기 / QR(현재 주소).
- 미션 카드: 프롬프트 복사 + 타이머. 시연 플레이어(`.demo[data-demo]`, `DEMOS` 객체)는 슬라이드 진입 시 자동 재생.
- 실시간 설문·퀴즈: `POLLS` 배열, Firebase RTDB `events/sunam-2026-11-04/{state,answers}`. 참가자 화면은 같은 주소 `?join`.
  `FB.databaseURL`이 비면 오프라인 모드(강사가 클릭 집계). claude.ai 아티팩트에서는 CSP로 Firebase가 막혀 항상 오프라인 — Pages 주소에서만 실시간.
- 아이콘: `ICONS`(Simple Icons 경로 내장) + `MONO`(머리글자 배지).

## 남은 일
1. (완료: 저장소·커밋) Settings→Pages→Deploy from a branch→main/(root) 켜기 → https://dooholee96-code.github.io/sunam-ai-2026/
2. 리허설(11/3): PC에서 설문 ▶열기 → 폰 QR → 막대 확인. 테스트 답은 Firebase 콘솔에서 삭제.
3. 바이브코딩 슬라이드(22)에 강사 제작물 캡처 2~3장 (출석부 앱, 게임 등) — 현재 텍스트 카드만.
4. 대본 문서(claude.ai Docs, "수남초 AI 연수 강의 대본")는 번호·내용이 옛 버전 — 27장 기준으로 블록별 재작성 필요.
5. 제출용 원고(교재): "한 단계 = 캡처 1장 + 지시문 한 문장" 형식, 10쪽+. 부록1 계정 가입 절차, 부록2 엑셀 매크로(VBA) 절차, 범정부 오피스 설치.
6. 전날 재확인: 브루 요금 페이지(무료 월 200크레딧·워터마크), Claude Docs/Slides 무료 여부, 클로드 hwpx 수정 시연 실제 파일로 테스트, 컴퓨터실 브루 설치 여부.
7. 연수 후: Firebase 규칙 `.write` → false.

## 사실 출처 (검증한 것)
- 와이즈앱 2026.9 순위(ZDNet 2026-10-13), GPT-6 Luna 무료 기본(FelloAI 10/24), Gemini Omni 유료(지피터스 8/28), Claude Docs·Slides·Design 무료(10/8),
  ChatGPT hwpx 지원(바이라인 4/17), 온나라 hwp 첨부 제한(헤럴드 4/23), Anthropic 10월 사고 보고, 브루 4.x 크레딧(공식 공지), Suno/Tripo 무료 조건.
- 미확인·주의: 클로드 hwpx 편집은 강사 경험 기반(사전 테스트), 그록 Imagine 무료 여부 변동(자료에서 제외).
