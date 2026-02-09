import { formatSessionDate } from "../lib/typing";

function ResultsHistory({ sessions, onClear }) {
  if (!sessions.length) {
    return (
      <section className="history">
        <div className="history-head">
          <h2>Gecmis Sonuclar</h2>
        </div>
        <p className="empty-text">Henuz test sonucu yok.</p>
      </section>
    );
  }

  return (
    <section className="history">
      <div className="history-head">
        <h2>Gecmis Sonuclar</h2>
        <button type="button" className="ghost-btn" onClick={onClear}>
          Gecmisi Temizle
        </button>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Tarih</th>
              <th>Tur</th>
              <th>Zorluk</th>
              <th>Sure</th>
              <th>WPM</th>
              <th>Dogruluk</th>
              <th>Weighted</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((row) => (
              <tr key={row.id}>
                <td>{formatSessionDate(row.createdAt)}</td>
                <td>{row.testTypeLabel}</td>
                <td>{row.difficultyLabel}</td>
                <td>{row.durationSec} sn</td>
                <td>{row.wpm}</td>
                <td>%{row.accuracy}</td>
                <td>{row.weightedWpm}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ResultsHistory;
