import { Dumbbell, Flame, Sparkles, Zap, Target, Salad, Users, Award, ClipboardCheck, ShieldCheck, Clock, HeartPulse, Trophy, Timer, LucideIcon } from "lucide-react";

const map: Record<string, LucideIcon> = { Dumbbell, Flame, Sparkles, Zap, Target, Salad, Users, Award, ClipboardCheck, ShieldCheck, Clock, HeartPulse, Trophy, Timer };

export default function Icon({ name, className }: { name: string; className?: string }) {
  const C = map[name] ?? Dumbbell;
  return <C className={className} />;
}
