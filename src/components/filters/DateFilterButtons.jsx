// components/filters/DateFilterButtons.jsx
export default function DateFilterButtons({ value, onChange }) {
  return (
    <div>
      <button
        style={{ fontWeight: value === "today" ? "bold" : "normal" }}
        onClick={() => onChange("today")}
      >
        今日
      </button>
      <button
        style={{ fontWeight: value === "yesterday" ? "bold" : "normal" }}
        onClick={() => onChange("yesterday")}
      >
        昨日
      </button>
      <button
        style={{ fontWeight: value === "week" ? "bold" : "normal" }}
        onClick={() => onChange("week")}
      >
        本週
      </button>
      <button
        style={{ fontWeight: value === "month" ? "bold" : "normal" }}
        onClick={() => onChange("month")}
      >
        本月
      </button>
      <button
        style={{ fontWeight: value === "year" ? "bold" : "normal" }}
        onClick={() => onChange("year")}
      >
        本年度
      </button>
    </div>
  );
}
