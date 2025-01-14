const convertButton = document.getElementById('convert-btn');
const outputDiv = document.getElementById('output');

function convertToRoman(number) {
  const numeralMap = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' },
  ];

  let roman = '';
  for (let i = 0; i < numeralMap.length; i += 1) {
    while (number >= numeralMap[i].value) {
      roman += numeralMap[i].numeral;
      number -= numeralMap[i].value;
    }
  }

  return roman;
}

convertButton.addEventListener('click', () => {
  const numberInput = document.getElementById('number').value;

  if (numberInput.trim().length === 0) {
    outputDiv.innerText = 'Please enter a valid number';
  } else {
    const number = parseInt(numberInput, 10);

    if (Number.isNaN(number) || number < 1) {
      outputDiv.innerText = 'Please enter a number greater than or equal to 1';
    } else if (number >= 4000) {
      outputDiv.innerText = 'Please enter a number less than or equal to 3999';
    } else {
      outputDiv.innerText = convertToRoman(number);
    }
  }
});