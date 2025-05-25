import updates from './_updates.js';

export default function UpdatesPage() {
  return (
    <div className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">All Updates</h1>
      <ul className="list-disc pl-6 space-y-2">
        {updates.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}