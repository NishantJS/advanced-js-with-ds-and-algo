/**
 * *Time Conversion
 * todo: Given a time in 12 - hour AM / PM format, convert it to military(24 - hour) time
 * Note: Midnight is 12: 00: 00AM on a 12 - hour clock, and 00: 00: 00 on a 24 - hour clock.Noon is 12: 00: 00PMon a 12 - hour clock, and 12: 00: 00 on a 24 - hour clock.Input FormatA single string  containing a time in -hour clock format(i.e.: or), where  and.Output FormatConvert and print the given time in -hour format, where;
 * @param currentTime "07:05:45PM"
 * @returns "19:05:45"
 */

function convertDate(currentTime) {
  const changeTo24Hour = (hour, ampm = "am") => {
    ampm = ampm.toLowerCase();

    if (typeof hour !== "number")
      return new Error("Wrong Input for Hour Variable");

    if (ampm === "pm") {
      if (hour < 12 && hour >= 1) {
        return hour + 12;
      } else if (hour === 12) return hour;
      else return new Error("Out of Range");
    }

    if (ampm === "am" && hour <= 9) return `0${hour}`;
    if (ampm === "am" && hour === 12) return "00";
    return hour;
  };
  let date = currentTime.substring(0, currentTime.length - 2);
  let ampm = currentTime.slice(-2);
  let [hour, min, sec] = date.split(":");
  hour = Number(hour);

  return [changeTo24Hour(hour, ampm), ":", min, ":", sec].join("");
}

let currentTime = "12:45:54AM";
console.log(convertDate(currentTime));
