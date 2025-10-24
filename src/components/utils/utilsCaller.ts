export const getStatusColor = (status: string): string => {
  switch (status) {
    case "AVAILABLE":
      return "#00a86b";
    case "CHARGING":
    case "RESERVED":
    case "PLANNED":
      return "#e68a00";
    case "OFFLINE":
    case "FAULTED":
      return "#ef4444";
    default:
      return "#6b7280";
  }
};

export const getWeekDay = (weekday: number): string => {
  switch (weekday) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Unknown";
  }
};

export const removeUnderscores = (str: string) => {
  return str.replace(/_/g, "");
};

export const formatPower = (num: number) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + "k";
  }
  return num.toString();
};

export const handlePanelTransition = (
  isAnyPanelOpen: () => boolean,
  closeAllPanels: () => void,
  openTargetPanel: () => void,
  currentId: string | null = "0",
  targetId: string = "1",
  delay: number = 400
) => {
  if (currentId === targetId && isAnyPanelOpen()) {
    closeAllPanels();
    return;
  }

  if (isAnyPanelOpen()) {
    closeAllPanels();
    setTimeout(() => {
      openTargetPanel();
    }, delay);
  } else {
    openTargetPanel();
  }
};
