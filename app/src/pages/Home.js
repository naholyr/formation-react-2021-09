const HomePage = () => {
  const html = "<strong>inner html</strong>";

  return (
    <>
      <h2>Coucou</h2>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </>
  );
};

export default HomePage;
