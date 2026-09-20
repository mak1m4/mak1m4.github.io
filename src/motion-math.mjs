export const clamp = (n, min = 0, max = 1) => Math.min(max, Math.max(min, n));
export const fieldDefaults = Object.freeze({initialMode:1, rotationMs:7000});
export function chapterState(top, height, viewport, dock = 140) {
  return { reveal: clamp((viewport - top) / Math.max(1, viewport - dock)), progress: clamp((dock - top) / Math.max(1, height - viewport + dock)) };
}
// Three related, closed line families share the same parameterization for continuous morphing.
export function fieldPoint(mode, angle, ring, time) {
  const radius = .09 + ring * .014;
  const envelope = Math.sin(angle * 3 + time * .18) * .12 + Math.cos(angle * 5 - time * .12) * .06;
  // Label order stays Gesture, Sound, Uncertainty; only the first two visual families are exchanged.
  if (mode === 0) return [Math.cos(angle) * radius, Math.sin(angle) * radius * (.32 + .26 * Math.sin(angle * 6 + ring * .16 + time * .3) ** 2)];
  if (mode === 1) return [Math.cos(angle) * radius * (1 + envelope), Math.sin(angle) * radius * .59 * (1 + envelope)];
  return [Math.cos(angle) * radius * (1 + .24 * Math.cos(angle * 3 + time * .15)), Math.sin(angle) * radius * (.54 + .18 * Math.sin(angle * 3 + ring * .035))];
}
