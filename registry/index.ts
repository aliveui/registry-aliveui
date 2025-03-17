// @aliveui/ui
// Main entry point for the @aliveui/ui component library

// Import specific components
import Button from "./atoms/button/index";

// Export Button as default
export default Button;

// Export components by atomic design level
export * from "./atoms";
export * from "./molecules";
export * from "./organisms";
export * from "./templates";
export * from "./pages";

// Also export individual atomic levels for targeted imports
export * as Atoms from "./atoms";
export * as Molecules from "./molecules";
export * as Organisms from "./organisms";
export * as Templates from "./templates";
export * as Pages from "./pages";
