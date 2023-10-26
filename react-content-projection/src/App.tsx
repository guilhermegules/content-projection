import reactLogo from "./assets/react.svg";
import { Card } from "./components/Card";
import { PortalComponent } from "./components/PortalComponent/PortalComponent";
import { usePortal } from "./hooks/usePortal";

function App() {
  const element = usePortal("main-content");

  return (
    <section
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1>React Content Projection</h1>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <Card>
        <Card.Header>
          <h2>My header</h2>
        </Card.Header>
        <p>Content</p>
        <Card.Footer>
          <p>Footer</p>
        </Card.Footer>
      </Card>

      <div id="main-content" className="main-content">
        main content
      </div>

      {element && (
        <PortalComponent
          elementOutlet={element}
          reactNode={<h3>Sub header</h3>}
        />
      )}
    </section>
  );
}

export default App;
