export function selectbackgroundColor(type) {
  switch (type) {
    case "한식":
      return "#E24E4A";
    case "일식":
      return "#FAA296";
    case "양식":
      return "#FFEAD1";
    default:
      return "#F9964D";
  }
}

export function selectTextColor(type) {
  switch (type) {
    case "양식":
      return "black";
    default:
      return "white";
  }
}
