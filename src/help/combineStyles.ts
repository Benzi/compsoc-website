const combineStyles = (...styles: any[]): string =>
  styles.filter(style => !!style).join(" ")

export { combineStyles }
