import wipData from "./WIP.json";

export default function WorkingOn() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Currently Working On 🚧</h1>
      <ul className="mb-8 space-y-4">
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
      <hr className="my-8" />
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
  );
}