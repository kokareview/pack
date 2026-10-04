const nowTime = () => { const d = new Date(); return { hours: d.getHours(), minutes: d.getMinutes(), seconds: d.getSeconds(), day: d.getDate(), month: d.getMonth() + 1, year: d.getFullYear() }; }; const t = nowTime();
// Использование:
// t.hours — часы
// t.minutes — минута
// t.seconds — секунда
// t.day — дни
// t.month — месяц
// t.year — год
