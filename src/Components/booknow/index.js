import React from "react";
import { Link } from "react-router-dom";
import SButton from "../Button/SButton";
export default function Booknow() {
  return (
    <aside class="row-sm-4 col-md-4 col-lg-4 col-xl-4">
      <div
        class="items-body container"
        style={{ padding: "8%", height: "100%" }}
      >
        <div class="promo-box">
          <span>
            <p class="text-style-6">
              We at ParkEasy strive to solve the trivial problem of finding or
              booking available parking slots in vicinity which is faced by
              millions of people on a daily basis. we vie for solutions which
              brings technology and life closer and accessible.
            </p>
          </span>
          <br />
        </div>

        <br />
        <div>
          <Link to="/SpotIn">
            <SButton />
          </Link>
        </div>
      </div>
    </aside>
  );
}

// col-sm-8 col-md-8 col-lg-8 col-xl-8
