import { render } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import { Site, sites } from "./site";
import "./style.css";

interface SiteResult {
  site: string;
  time: number;
}

export function App() {
  const [results, setResults] = useState<SiteResult[]>([]);

  return (
    <div>
      <h1>Image Loading Time Tester</h1>
      <button
        onClick={() => {
          setResults(null);
        }}
      >
        reset
      </button>
      {results === null ? (
        <TimingTester sites={sites} onRes={setResults} />
      ) : (
        <ResultTable results={results} />
      )}
    </div>
  );
}

async function awaitLoad(img: HTMLImageElement) {
  return new Promise((r) => {
    img.onload = () => r(null);
    // automatically resolve after 5 seconds
    setTimeout(() => r(null), 5000);
  });
}

function TimingTester({
  sites,
  onRes,
}: {
  sites: Site[];
  onRes: (res: SiteResult[]) => void;
}) {
  const _ref = useRef<HTMLImageElement>(null);

  async function testLoadTime(sites: Site[]) {
    const img = _ref.current;
    if (!img) return;
    const res = [];

    for (const site of sites) {
      let total = 0;
      for (const path of site.images) {
        const start = performance.now();
        img.src = site.domain + path;
        await awaitLoad(img);
        total += performance.now() - start;
      }
      res.push({ site: site.domain, time: total / site.images.length });
    }
    onRes(res);
  }

  useEffect(() => {
    testLoadTime(sites);
  }, [sites]);

  return (
    <div>
      <img ref={_ref} />
    </div>
  );
}

function ResultTable({ results }: { results: SiteResult[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>visited</th>
          <th>Site</th>
          <th>Load Time (ms)</th>
        </tr>
      </thead>
      <tbody>
        {results.map((res) => (
          <tr>
            <td>{res.time < 10 ? "✅" : "❌"}</td>
            <td>{res.site.replace("https://", "")}</td>

            <td
              style={{
                opacity: 0.4,
              }}
            >
              ({res.time.toFixed(2)})
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

render(<App />, document.getElementById("app"));
