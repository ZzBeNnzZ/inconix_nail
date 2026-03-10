interface Subscriber {
  id: string;
  created_at: string;
  email: string;
  source: string;
}

// Mock data — will be replaced with real Supabase fetch
const MOCK_SUBSCRIBERS: Subscriber[] = [
  {
    id: "1",
    created_at: "2026-03-08T09:12:00Z",
    email: "fan1@example.com",
    source: "popup",
  },
  {
    id: "2",
    created_at: "2026-03-07T18:30:00Z",
    email: "fan2@example.com",
    source: "popup",
  },
  {
    id: "3",
    created_at: "2026-03-06T13:00:00Z",
    email: "fan3@example.com",
    source: "popup",
  },
  {
    id: "4",
    created_at: "2026-03-05T10:45:00Z",
    email: "fan4@example.com",
    source: "popup",
  },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function NewsletterPage() {
  const subscribers = MOCK_SUBSCRIBERS;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Page header */}
      <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-display text-2xl text-deep-berry">
            Newsletter Subscribers
          </h1>
          <p className="text-sm text-muted mt-0.5">
            All email signups from the site popup
          </p>
        </div>

        {/* Total count badge */}
        <div className="bg-white border border-almond rounded-xl px-4 py-2.5 text-right">
          <p className="text-xs text-muted font-medium uppercase tracking-widest">
            Total Subscribers
          </p>
          <p className="font-display text-2xl text-deep-berry leading-tight">
            {subscribers.length}
          </p>
        </div>
      </div>

      {/* Table card */}
      <div className="bg-white border border-almond rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-almond bg-almond/30">
                <th className="text-left px-4 py-3 font-semibold text-charcoal">
                  Date Signed Up
                </th>
                <th className="text-left px-4 py-3 font-semibold text-charcoal">
                  Email
                </th>
                <th className="text-left px-4 py-3 font-semibold text-charcoal">
                  Source
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-almond/60">
              {subscribers.map((s) => (
                <tr key={s.id} className="hover:bg-almond/10 transition-colors">
                  <td className="px-4 py-3 text-muted whitespace-nowrap">
                    {formatDate(s.created_at)}
                  </td>
                  <td className="px-4 py-3 text-charcoal">
                    <a
                      href={`mailto:${s.email}`}
                      className="hover:text-deep-berry transition-colors"
                    >
                      {s.email}
                    </a>
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center text-xs font-medium px-2 py-1 rounded-full border bg-almond/50 text-muted border-almond capitalize">
                      {s.source}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {subscribers.length === 0 && (
          <div className="py-16 text-center text-muted">
            No subscribers yet.
          </div>
        )}
      </div>
    </div>
  );
}
