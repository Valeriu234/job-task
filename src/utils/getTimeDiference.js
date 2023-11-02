export const getTimeDifference = (timestamp) => {
  const now = new Date();
  const targetDate = new Date(timestamp * 1000);
  const timeDifference = now - targetDate;

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);

  const nowYear = now.getFullYear();
  const targetYear = targetDate.getFullYear();
  const years = nowYear - targetYear;

  const nowMonth = now.getMonth();
  const targetMonth = targetDate.getMonth();
  const months = (nowYear - targetYear) * 12 + (nowMonth - targetMonth);

  let timeString = '';

  switch (true) {
    case years > 0:
      timeString = `${years} ${years === 1 ? 'год' : 'года'} назад`;
      break;
    case months > 0:
      timeString = `${months} ${months === 1 ? 'месяц' : 'месяца'} назад`;
      break;
    case weeks > 0:
      timeString = `${weeks} ${weeks === 1 ? 'неделю' : 'недели'} назад`;
      break;
    case days > 0:
      timeString = `${days} ${days === 1 ? 'день' : 'дня'} назад`;
      break;
    case hours > 0:
      timeString = `${hours} ${hours === 1 ? 'час' : 'часа'} назад`;
      break;
    case minutes > 0:
      timeString = `${minutes} ${minutes === 1 ? 'мину' : 'минуты'} назад`;
      break;
    default:
      timeString = `${seconds} ${seconds === 1 ? 'секунду' : 'секунды'} назад`;
  }

  return timeString;
};
