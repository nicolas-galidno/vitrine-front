import logo from "../../assets/logo-vitrine.webp";
import "./home.css";

function Home({ entrar, registrar, explorar, empresa, favoritos, usuario }) {
  return <main className="home-page">
    <nav className="site-navbar">
      <button className="brand-mark" onClick={explorar} aria-label="Vitrine - explorar">Vitrine<span>.</span></button>
      <div className="site-nav-links">
        <button onClick={explorar}>Explorar</button>
        <button onClick={favoritos}>Favoritos</button>
        <button onClick={usuario}>Minha conta</button>
      </div>
      <div className="site-nav-actions"><button className="text-button" onClick={entrar}>Login</button><button className="button-light small" onClick={registrar}>Registrar</button></div>
    </nav>
    <section className="home-hero">
      <div className="hero-copy"><span className="eyebrow"><span className="eyebrow-dot"/> NEGÓCIOS LOCAIS, GRANDES DESCOBERTAS</span>
        <h1>O seu próximo<br/><span>favorito está</span><br/>por aqui.</h1>
        <p>Descubra empresas, produtos e serviços da sua região. Valorize quem faz a economia local acontecer.</p>
        <div className="hero-actions"><button className="button-light" onClick={explorar}>Explorar negócios <span aria-hidden="true">↗</span></button><button className="button-outline" onClick={registrar}>Quero cadastrar meu negócio</button></div>
        <div className="hero-footnote"><span>⌖</span> Feito para conectar pessoas e pequenos negócios</div>
      </div>
      <div className="hero-visual" aria-label="Destaques da plataforma"><div className="visual-orbit orbit-one"/><div className="visual-orbit orbit-two"/><div className="visual-center"><img className="visual-logo" src={logo} alt="Vitrine" /><small>SUA REGIÃO<br/>EM DESTAQUE</small></div><div className="floating-tag tag-top"><span>✦</span> Descobertas locais</div><div className="floating-tag tag-bottom"><span>↗</span> Apoie o comércio local</div><div className="visual-index">01 / 03</div></div>
    </section>
    <section className="home-bottom"><div><span className="bottom-number">01</span><strong>Descubra</strong><p>Encontre empresas e serviços perto de você.</p></div><div><span className="bottom-number">02</span><strong>Conheça</strong><p>Veja perfis, catálogos e informações úteis.</p></div><div><span className="bottom-number">03</span><strong>Valorize</strong><p>Ajude os negócios locais a crescerem.</p></div><button className="bottom-entrepreneur" onClick={empresa}>Área do empreendedor <span>↗</span></button></section>
    <footer className="home-footer"><span>Vitrine © 2026</span><span>Simples para quem vende, inteligente para quem procura.</span></footer>
  </main>;
}
export default Home;
