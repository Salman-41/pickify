/**
 * Gradient accent decorative component.
 * 
 * Adds floating gradient orbs to sections for visual interest.
 * Uses absolute positioning and is pointer-events-none to avoid
 * interfering with user interactions.
 * 
 * @component
 * @example
 * ```tsx
 * <section className="relative">
 *   <GradientAccent />
 *   {/* Your content *\/}
 * </section>
 * ```
 */
export function GradientAccent() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl"
        style={{ background: "linear-gradient(to bottom right, rgba(227, 77, 120, 0.2), rgba(255, 111, 145, 0.2))" }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl"
        style={{ background: "linear-gradient(to top right, rgba(0, 124, 131, 0.2), rgba(0, 183, 161, 0.2))" }}
      />
    </div>
  )
}
