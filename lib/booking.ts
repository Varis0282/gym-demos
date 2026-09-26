import { gym } from "./config";

export const SLOTS = {
  morning: ["05:30 AM", "06:30 AM", "07:30 AM", "08:30 AM", "09:30 AM", "10:30 AM"],
  evening: ["04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM"],
};

const DAY_NAMES = { en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], hi: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"] };
const MONTH_NAMES = { en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], hi: ["जन", "फर", "मार्च", "अप्रै", "मई", "जून", "जुला", "अग", "सितं", "अक्टू", "नवं", "दिसं"] };

export type BookableDay = { iso: string; day: string; dayHi: string; date: number; month: string; monthHi: string; isSunday: boolean };

/** Next 7 bookable days starting today */
export function getNextDays(count = 7): BookableDay[] {
  const days: BookableDay[] = [];
  const now = new Date();
  for (let i = 0; i < count; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    days.push({
      iso: d.toISOString().slice(0, 10),
      day: DAY_NAMES.en[d.getDay()],
      dayHi: DAY_NAMES.hi[d.getDay()],
      date: d.getDate(),
      month: MONTH_NAMES.en[d.getMonth()],
      monthHi: MONTH_NAMES.hi[d.getMonth()],
      isSunday: d.getDay() === 0,
    });
  }
  return days;
}

export type BookingDetails = { name: string; phone: string; goal: string; day?: BookableDay; slot: string; note: string };

/** Build a wa.me deep link with a pre-filled free-trial request.
 *  Keep emoji to single code points — complex ZWJ emoji corrupted via heredoc in the clinic build. */
export function whatsAppLink(b: BookingDetails): string {
  const FLEX = "💪";
  const lines = [
    `${FLEX} *Free Trial Workout Request — ${gym.name}*`,
    ``,
    `*Name:* ${b.name}`,
    `*Phone:* ${b.phone}`,
    `*Goal:* ${b.goal}`,
    b.day ? `*Date:* ${b.day.day}, ${b.day.date} ${b.day.month}` : "",
    b.slot ? `*Time:* ${b.slot}` : "",
    b.note ? `*Note:* ${b.note}` : "",
    ``,
    `Please confirm my free trial slot. Thank you!`,
  ].filter((l, i) => l !== "" || i === 1 || i === 8);
  return `https://wa.me/${gym.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}

/** Quick chat link (floating WhatsApp button) */
export function whatsAppChatLink(): string {
  return `https://wa.me/${gym.whatsapp}?text=${encodeURIComponent(`Hello ${gym.name}, I want to book a free trial workout.`)}`;
}
