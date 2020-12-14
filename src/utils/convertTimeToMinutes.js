const convertTimeToMinutes = (time) => {
  const hrMin = time.slice(0, time.length - 2).split(":");
  let hr = parseInt(hrMin[0]);
  const min = parseInt(hrMin[1]);
  const ampm = time.slice(time.length - 2);
  if (ampm === "pm" && hr !== 12) {
    hr += 12;
  } else if (ampm === "am" && hr === 12) {
    hr = 0;
  }
  return hr * 60 + min;
};

export default convertTimeToMinutes;
