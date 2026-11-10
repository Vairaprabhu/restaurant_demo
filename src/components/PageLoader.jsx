function PageLoader({ isLeaving }) {
  return (
    <div
      className={`page-loader${isLeaving ? " is-leaving" : ""}`}
      role="status"
      aria-label="Loading Spice Garden"
      aria-hidden={isLeaving}
    >
      <span className="loader-mark" aria-hidden="true">✳</span>
      <span className="loader-name">Spice Garden</span>
      <span className="loader-caption">A TABLE FULL OF STORIES</span>
    </div>
  );
}

export default PageLoader;
