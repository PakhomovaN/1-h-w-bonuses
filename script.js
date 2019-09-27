const amount = 3051;
const fullThousand = 1000;
const minBonus = 100;

// cashback -> F2 (rename) пользуйтесь ей
const bonus = (amount - (amount % fullThousand)) / 10;

const resultStr = bonus + "бонусов";
console.log(bonus);