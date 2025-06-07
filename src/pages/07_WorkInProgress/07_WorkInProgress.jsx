import wipData from "./WIP.json";

export default function WorkingOn() {
  return (
    <div className="flex justify-center items-center min-h-screen gap-x-8">
      {/* 左边：正在做的 */}
      <div
        className="p-8 w-full max-w-2xl rounded-2xl"
        style={{
          background: "#FFA725",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        }}
      >
        <h1 className="text-2xl font-bold mb-4">Currently Working On 🚧</h1>
        <ul className="mb-0 space-y-4">
          {wipData.workingOn.map((item, idx) => (
            <li key={idx}>
              <div className="text-lg font-semibold">{item.title}</div>
              {item.steps && item.steps.length > 0 && (
                <ul className="list-disc pl-6 mt-1">
                  {item.steps.map((step, sidx) => (
                    <li key={sidx} className="text-base">{step}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* 右边：等着做的 */}
      <div
        className="p-8 w-full max-w-2xl rounded-2xl"
        style={{
          background: "#6A9C89",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        }}
      >
        <h2 className="text-xl font-semibold mb-4">Upcoming Plans</h2>
        <ul className="space-y-4">
          {wipData.upcoming.map((item, idx) => (
            <li key={idx}>
              <div className="text-lg font-semibold">{item.title}</div>
              {item.steps && item.steps.length > 0 && (
                <ul className="list-disc pl-6 mt-1">
                  {item.steps.map((step, sidx) => (
                    <li key={sidx} className="text-base">{step}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}