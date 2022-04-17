import React from "react";
import Nav from "../nav";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}

// React.createElement('Layout',{children:'Layout'})

// <Layout>
//     </Layout >
