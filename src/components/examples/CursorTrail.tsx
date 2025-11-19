import CursorTrail from "../CursorTrail";

export default function CursorTrailExample() {
  return (
    <div className="h-screen w-full bg-background flex items-center justify-center">
      <CursorTrail />
      <p className="text-2xl text-muted-foreground">Move your cursor around to see the subtle glow effect</p>
    </div>
  );
}
