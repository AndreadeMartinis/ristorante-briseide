export function scrollToMenuSection(name, offset = 115) {
  const section = document.getElementById(`menu-section-${name}`);
  if (section) {
    const top = section.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top });
  }
}
