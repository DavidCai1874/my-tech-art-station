import { useState } from 'react';

export default function Contribute() {
  const [type, setType] = useState('suggestion');
  const [content, setContent] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert('感谢你的反馈！');
    setContent('');
    setEmail('');
  }

  return (
    <div className="w-screen min-h-[60vh] flex items-center justify-center">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Contribute 🚧(still WIP not working yet)</h1>
        <form
          className="bg-white rounded shadow p-8 flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          {/* 选项 */}
          <div className="flex gap-6 justify-center">
            <label>
              <input
                type="radio"
                name="type"
                value="suggestion"
                checked={type === 'suggestion'}
                onChange={() => setType('suggestion')}
              />
              <span className="ml-2">Suggestion</span>
            </label>
            <label>
              <input
                type="radio"
                name="type"
                value="question"
                checked={type === 'question'}
                onChange={() => setType('question')}
              />
              <span className="ml-2">Question</span>
            </label>
          </div>
          {/* 填写内容 */}
          <label className="flex flex-col">
            <span className="mb-1">Ur Sugges/ques：</span>
            <textarea
              className="border rounded px-2 py-1"
              rows={4}
              value={content}
              onChange={e => setContent(e.target.value)}
              required
            />
          </label>
          {/* 填写邮箱 */}
          <label className="flex flex-col">
            <span className="mb-1">uremail(optional)：</span>
            <input
              type="email"
              className="border rounded px-2 py-1"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
            />
          </label>
          {/* 提交按钮 */}
          <button
            type="submit"
            className="bg-blue-600 text-white rounded py-2 font-bold hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}