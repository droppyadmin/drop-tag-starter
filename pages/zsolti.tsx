export default function ZsoltiSupportPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-center p-4">
      <div>
        <h1 className="text-2xl font-semibold mb-3">Támogatásod Zsoltinak megy!</h1>
        <input
          className="border p-2 rounded w-full max-w-xs mb-4"
          type="number"
          placeholder="Vagy írj be egy összeget"
        />
        <button className="bg-black text-white py-2 px-4 rounded">Támogatom</button>
      </div>
    </div>
  );
}