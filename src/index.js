module.exports = function toReadable (number) {
  if (!number || number == 0) return 'zero';

  const digits = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty'];
  const tens = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  let str = '';
  let dig = 0;

  
  if (number >= 100) {
    dig = (number / 100) | 0;
    str = `${ digits[dig] } hundred`;
    number -= dig * 100;
  }

  if (number > 19) {
    dig = (number / 10) | 0;
		number -= dig * 10;
    str = `${ str } ${ tens[dig] } ${ digits[number] }`;
  } else {
    str = `${ str } ${ digits[number] }`;
  }

  return str.trim();
}
