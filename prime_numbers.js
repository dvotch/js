let endPoint = prompt("Введите последнее число в интервале");
Next: for (let i = 2; i < endPoint; i++) {
  for (let j = 2; j < i; j++) if (i % j == 0) continue Next;
  console.log(i);
}
