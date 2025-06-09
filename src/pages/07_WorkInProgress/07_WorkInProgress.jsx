import wipData from "./WIP.json";

export default function WorkingOn() {
  //Group workingOn by title 
  const grouped = {};
  wipData.workingOn.forEach(item => {
    if (!grouped[item.title]) grouped[item.title] = [];
    if (item.steps && item.steps.length > 0) {
      grouped[item.title].push(...item.steps);
    }
  });

  // Group upcoming by title
  const upcomingGrouped = {};
  wipData.upcoming.forEach(item => {
    if (!upcomingGrouped[item.title]) upcomingGrouped[item.title] = [];
    if (item.steps && item.steps.length > 0) {
      upcomingGrouped[item.title].push(...item.steps);
    }
  });

  return (
    <div className="flex flex-col items-center gap-y-10 py-14">
      <h1 className=" font-bold mb-2">Currently Working On</h1>
      {/* workingOn */}
      <div className="w-full max-w-3xl flex flex-col gap-6 mb-8">
        {Object.keys(grouped).map(title => (
          <div
            key={title}
            className="p-8 rounded-2xl"
            style={{
              background: "rgb(255, 189, 23)",
              boxShadow: "0 4px 20px rgba(254, 185, 23, 0.55)",
            }}
          >
            <div className="text-xl font-semibold mb-2" style={{ color: "rgb(34, 0, 0)" }}>{title}</div>
            <ul className="list-disc pl-6 space-y-1"> 
              {grouped[title].map((step, idx) => (
                <li key={idx} className="text-base"  style={{ color: " rgb(46, 7, 7)" }}>{step}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* Upcoming Plans 标题 */}
      <h2 className="font-bold mb-2">Upcoming Plans</h2>
      {/* upcoming 每个分组一个小色块 */}
      <div className="w-full max-w-2xl flex flex-col gap-6">
        {Object.keys(upcomingGrouped).map(title => (
          <div
            key={title}
            className="p-5 rounded-2xl"
            style={{
              background: " #6A9C89",
              boxShadow: "0 2px 12px rgba(106, 156, 137, 0.41)",
            }}
          >
            <div className="text-xl font-semibold mb-2" style={{ color: "rgb(1, 12, 17)" }}>{title}</div>
            <ul className="list-disc pl-6 space-y-1">
              {upcomingGrouped[title].map((step, idx) => (
                <li key={idx} className="text-base">{step}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}