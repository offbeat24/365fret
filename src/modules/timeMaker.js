const dayDict = {
  0: '일',
  1: '월',
  2: '화',
  3: '수',
  4: '목',
  5: '금',
  6: '토',
};
// timeMaker 에서는 date객체를 내가 원하는 표현방식으로 반환해줍니다
export const yyyymmddday = (d) => {
  const date = d.split('T')[0].split('-')
  const dateObject = new Date(d.split('T')[0])
  const day = dayDict[dateObject.getDay()]
  return date.join('.') + '(' + day + ')'
}
