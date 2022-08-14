import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="nav">
      <span>Страница:</span>
      <span>
        <Link className="link" to="/">
          1
        </Link>
        <Link className="link" to="/2">
          2
        </Link>
        <Link className="link" to="/3">
          3
        </Link>
        <Link className="link" to="/4">
          4
        </Link>
        <Link className="link" to="/5">
          5
        </Link>
        <Link className="link" to="/6">
          6
        </Link>
        <Link className="link" to="/7">
          7
        </Link>
        <Link className="link" to="/8">
          8
        </Link>
        <Link className="link" to="/9">
          9
        </Link>
        <Link className="link" to="/10">
          10
        </Link>
      </span>
    </nav>
  );
}
