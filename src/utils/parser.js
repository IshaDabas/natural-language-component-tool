import { componentUI } from "../objects";

export function getMatchedComponents(input) {
  const lower = input.toLowerCase();
  return componentUI.filter((component) =>
    (component.keywords || []).some((keyword) =>
      keyword.toLowerCase().includes(lower)
    )
  );
}
