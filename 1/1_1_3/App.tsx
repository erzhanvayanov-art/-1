function Profile() {  // ← заглавная буква 'P'
  return (
    <img
      src="AlanHart.jpg"
      alt="Alan L. Hart"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />  {/* ← теперь React понимает, что это компонент */}
      <Profile />
      <Profile />
    </section>
  );
}