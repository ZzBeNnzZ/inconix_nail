"use client";

type Status = "new" | "in_progress" | "resolved" | "spam";

const STATUS_OPTIONS: { value: Status; label: string }[] = [
  { value: "new", label: "New" },
  { value: "in_progress", label: "In Progress" },
  { value: "resolved", label: "Resolved" },
  { value: "spam", label: "Spam" },
];

const STATUS_STYLES: Record<Status, string> = {
  new: "bg-gold/20 text-gold border-gold/30",
  in_progress: "bg-blush/30 text-deep-berry border-blush",
  resolved: "bg-green-100 text-green-700 border-green-200",
  spam: "bg-muted/20 text-muted border-muted/30",
};

interface Props {
  id: string;
  currentStatus: Status;
}

export default function StatusSelect({ id, currentStatus }: Props) {
  async function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newStatus = e.target.value as Status;
    // PATCH logic will go here
    console.log("Update", id, "to", newStatus);
  }

  return (
    <select
      defaultValue={currentStatus}
      onChange={handleChange}
      className={`text-xs font-medium px-2 py-1 rounded-full border cursor-pointer focus:outline-none focus:ring-2 focus:ring-deep-berry/20 transition ${STATUS_STYLES[currentStatus]}`}
    >
      {STATUS_OPTIONS.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
