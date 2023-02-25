const getSeconds = (second) => second * 1000;

const timeToMilliseconds = (time) => {
  const [hours, minutes, seconds] = time.split(":").map(Number);
  return ((hours * 60 + minutes) * 60 + seconds) * 1000;
};

const getPercentage = (currentHour, targetHour = "23:59:59") => {
  const hourInMilliseconds = timeToMilliseconds(currentHour);
  const targetHourInMilliseconds = timeToMilliseconds(targetHour);
  const percentage = Math.round(
    (hourInMilliseconds * 100) / targetHourInMilliseconds
  );
  console.log(
    `Hora atual ${currentHour} - Hora destino ${targetHour} - Porcentagem de alcance ${percentage}%`
  );

  return `${percentage}%`;
};

export { getPercentage, getSeconds };
