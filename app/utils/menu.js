export function getMenuType(menuType) {
  if (menuType === "spirits" || menuType === "bevande") return "drinks";
  return menuType;
}
