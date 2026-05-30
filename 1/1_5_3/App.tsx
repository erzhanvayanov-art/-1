// Компонент Card, который принимает children
function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="card">
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export default function Profile() {
  return (
    <div>
      <Card>
        <>
          <h1>Photo</h1>
          <img
            className="avatar"
            src="OKS67lhm.jpg"
            alt="Aklilu Lemma"
            width={70}
            height={70}
          />
        </>
      </Card>

      <Card>
        <>
          <h1>About</h1>
          <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
        </>
      </Card>
    </div>
  );
}