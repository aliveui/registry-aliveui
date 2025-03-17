export const ThemeMode = {
  SYSTEM: "system",
  LIGHT: "light",
  DARK: "dark",
} as const;

export const ThemeColor = {
  ZINC: "zinc",
  BLUE: "blue",
  GREEN: "green",
  VIOLET: "violet",
  ROSE: "rose",
  ORANGE: "orange",
  RED: "red",
  YELLOW: "yellow",
} as const;

export type ThemeColor = (typeof ThemeColor)[keyof typeof ThemeColor];
export type ThemeMode = (typeof ThemeMode)[keyof typeof ThemeMode];

export interface ThemeConfig {
  mode: ThemeMode;
  color: ThemeColor;
}

export const DEFAULT_THEME: ThemeConfig = {
  mode: ThemeMode.SYSTEM,
  color: ThemeColor.ZINC,
};

// Map theme colors to HSL values
export const themeColorValues: Record<ThemeColor, string> = {
  [ThemeColor.ZINC]: "240 5.9% 10%",
  [ThemeColor.BLUE]: "221 83% 53%",
  [ThemeColor.GREEN]: "142 71% 45%",
  [ThemeColor.VIOLET]: "262 83% 58%",
  [ThemeColor.ROSE]: "346 77% 49%",
  [ThemeColor.ORANGE]: "24 95% 53%",
  [ThemeColor.RED]: "0 84% 60%",
  [ThemeColor.YELLOW]: "48 96% 53%",
};
