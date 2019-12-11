'use strict';

const moment = require('moment');

console.log('◆ 년도 월 일')
console.log(moment().format('YYYY YY Y')); // 연도 2019 19 2019
console.log(moment().format('Q')); // 해당 월의 분기 3
console.log(moment().format('MMMM MMM MM M')); // 월 December Dec 12 12
console.log(moment().format('DDDD DDD DD D Do')); // 일 345 345 11 11 11th

console.log('◆ 주별 주중')
console.log(moment().format('gggg gg')); // 로케일 주년 2019 19
console.log(moment().format('ww w')); // 로케일 주 50 50 
console.log(moment().format('e')); // 로케일 요일
console.log(moment().format('dddd ddd dd')); // 로케일 요일 이름 Wednesday Wed We

console.log('◆ ISO')
console.log(moment().format('GGGG GG')); //ISO 주년 2019 19
console.log(moment().format('WW W')); // ISO 주 50 50
console.log(moment().format('E')); // ISO 요일

console.log('◆ 로케일')
console.log(moment().format('L')); // (날짜 현지 형식) MM/DD/YYYY
console.log(moment().format('LL')); // (월 이름, 일, 년) MMMM DD, YYYY
console.log(moment().format('LLL')); // (월 이름, 일, 년, 시간, 포스트) MMMM DD, YYYY h:mm A
console.log(moment().format('LLLL')); // (요일, 월 이름, 일, 년, 시간, 포스트) dddd, MMMM DD, YYYY h:mm A
console.log(moment().format('LT')); // (시, 분, 포스트) h:mm A
console.log(moment().format('LTS')); // (시, 분, 초, 포스트) h:mm:ss A

console.log('◆ 시 분 초')
console.log(moment().format('HH H')); // 시간(0..23 24시간) 12 12 
console.log(moment().format('hh h')); // 시간(1..12 12시간) 12 12
console.log(moment().format('kk k')); // 시간(1..24 24시간) 12 12
console.log(moment().format('a A')); // 포스트 pm PM
console.log(moment().format('mm m')); // (0..59)분 27 27
console.log(moment().format('ss s')); // (0..59)초 46 46
console.log(moment().format('SSS SS S')); // (0..999)분수 초
console.log(moment().format('ZZ Z')); //UTC 표기법 +0900 +09:00


console.log(`◆ 포맷을 지정하여 출력`)
console.log(moment().format("YYYY년 MM월 DD일 HH시mm분ss초"));
console.log(moment().format("YYYY-MM-DD HH:mm:ss"));

console.log(`◆ Date 객체로부터 초기화 *month는 -1 값 지정`);
console.log(new Date(2019, 12, 25))
console.log(moment(new Date(2019, 12, 25)).format());
console.log(moment(20191225).format());
console.log(moment('20191225').format());

console.log(`◆ 단위 별 출력`);
console.log(`연도 => ${moment().year()}`);
console.log(`월 (※ 0〜11의 값) + 1을 해준다. => ${moment().month() + 1}`);
console.log(`일 => ${moment().date()}`);
console.log(`요일 (0: 일요일 ~ 6: 토요일)=> ${moment().day()}`);
console.log(`시 => ${moment().hours()}`);
console.log(`분 => ${moment().minutes()}`);
console.log(`초 => ${moment().seconds()}`);
console.log(`밀리 초 => ${moment().milliseconds()}\n`);

console.log(`◆ 금일 기준 n일 후의 날짜 가져오기`);
console.log(`+년도 => ${moment().add(1, "y").format("YYYY-M-D")}`);
console.log(`+분기 => ${moment().add(1, "Q").format("YYYY-M-D")}`);
console.log(`+월 => ${moment().add(1, "M").format("YYYY-M-D")}`);
console.log(`+주 => ${moment().add(1, "w").format("YYYY-M-D")}`);
console.log(`+일 => ${moment().add(1, "d").format("YYYY-M-D")}`);

console.log(`+시 => ${moment().add(1, "h").format("YYYY-M-D HH:mm:ss")}`);
console.log(`+분 => ${moment().add(1, "m").format("YYYY-M-D HH:mm:ss")}`);
console.log(`+초 => ${moment().add(1, "s").format("YYYY-M-D HH:mm:ss")}`);
console.log(`+밀리초 => ${moment().add(1, "ms").format("YYYY-M-D HH:mm:ss:ms")}`);

console.log(`◆ 특정 날짜로부터 며칠 지났는지 혹은 남았는지 확인`);
console.log(moment('20191225').diff(moment(), 'years'));
console.log(moment('20191225').diff(moment(), 'months'));
console.log(moment('20191225').diff(moment(), 'days'));
console.log(moment('20191225').diff(moment(), 'hours'));
console.log(moment('20191225').diff(moment(), 'minutes'));
console.log(moment('20191225').diff(moment(), 'seconds'));
console.log(moment('20191225').diff(moment(), 'milliseconds'));
