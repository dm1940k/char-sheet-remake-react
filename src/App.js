function App() {
  return (
    <div className="min-w-screen min-h-screen bg-slate-200">
      <div className="grid grid-cols-3 gap-1">
        <div className="basis-1/3 text-center">
          Column One
          <div className="h-80 w-3/4 bg-black">
            <div className="h-1/4 bg-slate-400 border-2 border-black">
              Section
            </div>
            <div className="h-1/4 bg-slate-400 border-2 border-black">
              Section
            </div>
            <div className="h-1/4 bg-slate-400 border-2 border-black">
              Section
            </div>
            <div className="h-1/4 bg-slate-400 border-2 border-black">
              Section
            </div>
          </div>
        </div>
        <div className="basis-1/3 text-center">
          Column Two
          <div className="h-40 w-3/4 bg-black">
            <div className="h-1/4 bg-slate-400 border-2 border-black">
              Section
            </div>
            <div className="h-1/4 bg-slate-400 border-2 border-black">
              Section
            </div>
            <div className="h-1/4 bg-slate-400 border-2 border-black">
              Section
            </div>
            <div className="h-1/4 bg-slate-400 border-2 border-black">
              Section
            </div>
          </div>
        </div>
        <div className="basis-1/3 text-center">
          Column Three
          <div className="h-20 w-3/4 bg-black">
            <div className="h-1/4 bg-slate-400 border-2 border-black">
              Section
            </div>
            <div className="h-1/4 bg-slate-400 border-2 border-black">
              Section
            </div>
            <div className="h-1/4 bg-slate-400 border-2 border-black">
              Section
            </div>
            <div className="h-1/4 bg-slate-400 border-2 border-black">
              Section
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
