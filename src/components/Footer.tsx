import Link from "next/link";
import { mainNav } from "@/content/nav";
import { schoolInfo } from "@/content/schoolInfo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "var(--c-ink)",
                  color: "var(--c-bg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: 14,
                  flexShrink: 0,
                }}
              >
                OS
              </div>
              <span style={{ fontWeight: 800, fontSize: 16 }}>{schoolInfo.name}</span>
            </div>
            <p className="body-m" style={{ maxWidth: 260 }}>
              {schoolInfo.motto}
            </p>
          </div>

          <div>
            <p className="footer-col-title">Navigation</p>
            {mainNav.map((item) => (
              <Link key={item.href} href={item.href} className="footer-link">
                {item.label}
              </Link>
            ))}
          </div>

          <div>
            <p className="footer-col-title">Kontakt</p>
            <p className="body-m" style={{ margin: "0 0 4px", fontWeight: 700, color: "var(--c-ink)" }}>
              Sekretariat
            </p>
            <p className="body-m" style={{ margin: "0 0 12px" }}>
              Tel. {schoolInfo.sekretariat.telefon}
              <br />
              {schoolInfo.sekretariat.email}
            </p>
            <p className="body-m" style={{ margin: "0 0 4px", fontWeight: 700, color: "var(--c-ink)" }}>
              OGS
            </p>
            <p className="body-m" style={{ margin: 0 }}>
              Tel. {schoolInfo.ogs.telefon}
              <br />
              {schoolInfo.ogs.email}
            </p>
          </div>

          <div>
            <p className="footer-col-title">Adresse</p>
            <p className="body-m" style={{ margin: "0 0 12px" }}>
              {schoolInfo.address.street}
              <br />
              {schoolInfo.address.zipCity}
            </p>
            <p className="footer-col-title">Schulleitung</p>
            <p className="body-m" style={{ margin: 0 }}>{schoolInfo.schulleitung}</p>
          </div>
        </div>

        <div className="footer-legal">
          <span className="body-m" style={{ color: "var(--c-ink)" }}>
            © {new Date().getFullYear()} {schoolInfo.name}
          </span>
          <div style={{ display: "flex", gap: 24 }}>
            <Link href="/impressum" className="body-m" style={{ color: "var(--c-ink)", fontWeight: 600 }}>
              Impressum
            </Link>
            <Link href="/datenschutz" className="body-m" style={{ color: "var(--c-ink)", fontWeight: 600 }}>
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
