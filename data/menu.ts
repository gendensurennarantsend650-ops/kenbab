export interface MenuItem {
  id: number;
  cat: string;
  name: string;
  desc: string;
  price: number;
  emoji: string;
  popular?: boolean;
  isNew?: boolean;
}

export const MENU: MenuItem[] = [
  { id: 1, cat: "buuz", name: "Бууз (10ш)", desc: "Гэрийн жорын дотроос хийсэн сайхан бууз. Хонины болон үхрийн мах.", price: 9000, emoji: "🥟", popular: true },
  { id: 2, cat: "buuz", name: "Банш (20ш)", desc: "Нарийн гуриланд ороосон жижиг банш. Шөлтэй эсвэл шарсан.", price: 7500, emoji: "🥟" },
  { id: 3, cat: "buuz", name: "Цуйван бууз", desc: "Цуйван болон буузны хослол — Дүүрэний онцлог.", price: 11000, emoji: "🥟", isNew: true },
  { id: 4, cat: "buuz", name: "Уураар жигнэсэн Хуушуур (5ш)", desc: "Зузаан гуриланд хутгаж шарсан хуушуур.", price: 7000, emoji: "🥟" },
  { id: 5, cat: "tsuivan", name: "Цуйван (үхрийн)", desc: "Гар урлалын гоймон, үхрийн мах, хүрэн чихэр соус.", price: 12000, emoji: "🍜", popular: true },
  { id: 6, cat: "tsuivan", name: "Цуйван (тахианы)", desc: "Тахианы мах, хүнсний ногоо бүхий халуун цуйван.", price: 10000, emoji: "🍜" },
  { id: 7, cat: "tsuivan", name: "Шарсан гоймон", desc: "Азийн стиль шарсан гоймон, ногоотой.", price: 9000, emoji: "🍜" },
  { id: 8, cat: "tsuivan", name: "Цуйван (хонины)", desc: "Уламжлалт хонины махтай цуйван.", price: 13000, emoji: "🍜" },
  { id: 9, cat: "shul", name: "Гурилтай шөл", desc: "Аав ээжийн жорын уламжлалт гурилтай шөл.", price: 8000, emoji: "🍲", popular: true },
  { id: 10, cat: "shul", name: "Банштай шөл", desc: "Нарийн банш бүхий ариун цэвэр шөл.", price: 8500, emoji: "🍲" },
  { id: 11, cat: "shul", name: "Нудлатай шөл", desc: "Нудлан гуриланд шарсан мах бүхий шөл.", price: 9000, emoji: "🍲" },
  { id: 12, cat: "shul", name: "Хоногийн шөл", desc: "Өдөр бүр өөрчлөгдөх онцгой шөл.", price: 7500, emoji: "🍲", isNew: true },
  { id: 13, cat: "plate", name: "Будаатай хоол (үхрийн)", desc: "Ууссан будаа, шарсан мах, соус.", price: 11000, emoji: "🍛" },
  { id: 14, cat: "plate", name: "Хонины махтай хоол", desc: "Монгол хоолны уламжлалт тавагтай хоол.", price: 13000, emoji: "🍛" },
  { id: 15, cat: "plate", name: "Тахианы тавагтай хоол", desc: "Жигнэсэн тахиа, будаа, ногоо.", price: 10000, emoji: "🍗" },
  { id: 16, cat: "plate", name: "Хосолсон тавагтай хоол", desc: "Мах, ногоо, будаа бүхий иж бүрэн хоол.", price: 14000, emoji: "🍛", popular: true },
  { id: 17, cat: "drink", name: "Сүүтэй цай", desc: "Халуун, амттай монгол цай.", price: 1500, emoji: "🍵" },
  { id: 18, cat: "drink", name: "Хар цай", desc: "Жинхэнэ хар цай.", price: 1200, emoji: "🍵" },
  { id: 19, cat: "drink", name: "Компот", desc: "Жимсний натурал компот.", price: 2000, emoji: "🥤" },
  { id: 20, cat: "drink", name: "Хүйтэн ус", desc: "Цэвэр ус.", price: 800, emoji: "💧" },
];

export const CATEGORIES = [
  { id: "all", label: "🍽️ Бүгд" },
  { id: "buuz", label: "🥟 Бууз & Банш" },
  { id: "tsuivan", label: "🍜 Цуйван & Гоймон" },
  { id: "shul", label: "🍲 Шөл" },
  { id: "plate", label: "🍛 Тавагтай хоол" },
  { id: "drink", label: "🥤 Ундаа" },
];

export function cardBg(cat: string): string {
  const bgs: Record<string, string> = {
    buuz: "linear-gradient(135deg,#1a1005,#3d2010)",
    tsuivan: "linear-gradient(135deg,#0d1a0d,#1a3d1a)",
    shul: "linear-gradient(135deg,#0d0d1a,#1a1a3d)",
    plate: "linear-gradient(135deg,#1a0d0d,#3d1a0d)",
    drink: "linear-gradient(135deg,#0d1a1a,#0d2d2d)",
  };
  return bgs[cat] || "linear-gradient(135deg,#1a1410,#2a2016)";
}

export function fmt(n: number): string {
  return n.toLocaleString() + " ₮";
}
